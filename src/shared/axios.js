import axios from 'axios';
import { history } from '../redux/configureStore';
import Swal from 'sweetalert2';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://13.124.249.40',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const cookie = document.cookie;
    if (cookie === '') {
      return config;
    }
    const cookieSplit = cookie.split('=')[1];
    // console.log(cookieSplit);

    config.headers.common['X-AUTH-TOKEN'] = `${cookieSplit}`;
    return config;
  },
  (err) => {
    console.log(err);
  },
);

// instance.interceptors.response.use(
//   (success) => {
//     console.log(success);
//     if (success.status === 200 && success.data.msg === '로그인성공') {
//       let date = new Date();
//       date.setTime(date.getTime() + 3 * 60 * 60 * 1000);
instance.interceptors.response.use(
  (success) => {
    console.log(success);
    if (success.status === 200 && success.data.msg === '로그인성공') {
      let date = new Date();
      date.setTime(date.getTime() + 3 * 60 * 60 * 1000);

      document.cookie = `user=${
        success.data.token
      };expires=${date.toUTCString()};path=/`;
      history.push('/');
    }
    if (success.status === 200 && success.data.msg === '아이디중복체크완료') {
      Swal.fire({
        text: '아이디 중복체크 완료',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }
    if (success.status === 200 && success.data.msg === '닉네임중복체크완료') {
      Swal.fire({
        text: '닉네임 중복체크 완료',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }
    return success;
  },
  (error) => {
    console.log(error.response);

    if (error.response.status === 401) {
      history.push('/');
    }

    if (
      error.response.status === 400 &&
      error.response.data.msg === '아이디 또는 비밀번호가 정확하지 않습니다'
    ) {
      Swal.fire({
        text: '아이디 또는 비밀번호가 정확하지 않습니다',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }

    if (
      error.response.status === 400 &&
      error.response.data.errorMessage === '중복닉네임입니다.'
    ) {
      Swal.fire({
        text: '중복 닉네임입니다.',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
      window.location.href = '/signup';
    }

    if (
      error.response.status === 400 &&
      error.response.data.errorMessage === '중복아이디입니다.'
    ) {
      Swal.fire({
        text: '중복 아이디입니다.',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
      window.location.href = '/signup';
    }
    return error;
  },
);

export const apis = {
  // baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
  // http://localhost:4000/ + 내가 작성한 url 즉 예시로
  // getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
  // get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

  // 회원가입, 로그인 관련 api
  login: (email, password) =>
    instance.post('/users/login', { email: email, password: password }),
  signup: (signupInfo) => instance.post('/users', signupInfo),
  emailCheck: (email) => instance.post('/users', email),
  nicknameCheck: (nickname) => instance.post('/users', nickname),

  // 게시물 불러오기
  getPost: () => instance.get('/main'),
  // 게시물 작성하기
  addPost: (contents) => instance.post(`/posts`, contents),
  getPostDetail: (postId) => instance.get(`/posts/${postId}`),

  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/posts/${id}`, content),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`/posts/${id}`),

  addComment: (postId, content) =>
    instance.post(`/posts/${postId}/comments`, { content: content }),
  delComment: (postId, commentId) =>
    instance.delete(`/posts/${postId}/comments/${commentId}`),
  loadComment: (postId, commentList) => instance.get(`/`),

  // getMainPost: () => instance.get('/main'),

  addReviewAX: (contents) => instance.post('/reviews', contents),

  getReviewAX: () => instance.get(`/reviews`),

  detailReviewAX: (id) => instance.get(`/reviews/${id}`),
  //북마크
  setBookMarkAX: (id) => instance.post(`/posts/${id}/bookmark`),

  // offBookMarkAX: (id, bookMarkInfo) =>
  //   instance.post(`/posts/${id}/bookmark`, bookMarkInfo),
};
