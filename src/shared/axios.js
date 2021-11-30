import axios from 'axios';
import { history } from '../redux/configureStore';
import Swal from 'sweetalert2';
import { getsCookie } from './Cookie';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'https://www.jupgging.click',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    // const cookie = document.cookie;
    // if (cookie === '') {
    //   return config;
    // }
    // const cookieSplit = cookie.split('=')[1];
    // // console.log(cookieSplit);
    const accessToken = getsCookie('token');
    config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
    return config;
  },
  (err) => {
    console.log(err);
  },
);

const instances = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'https://www.joopgging.click/',
  // baseURL: 'https://www.jupgging.click',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

instances.interceptors.request.use(
  (config) => {
    const accessTokens = getsCookie('token');
    config.headers.common['X-AUTH-TOKEN'] = `${accessTokens}`;
    return config;
  },
  (err) => {
    console.log(err);
  },
);

export const apis = {
  // baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
  // http://localhost:4000/ + 내가 작성한 url 즉 예시로
  // getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
  // get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

  // 회원가입, 로그인
  login: (email, password) =>
    instance.post('/users/login', { email: email, password: password }),
  signup: (email, password, nickname, location, distance, type, number) =>
    instance.post('/users', {
      email: email,
      password: password,
      nickname: nickname,
      location: location,
      distance: distance,
      type: type,
      number: number,
    }),
  // 중복 확인
  emailCheck: (email) => instance.get(`/checkEmail?email=${email}`, email),
  nicknameCheck: (nickname) =>
    instance.get(`/checkName?nickname=${nickname}`, nickname),
  // 휴대폰 인증
  numberCheckAX: (number) =>
    instances.post(`/check/number`, { phoneNumber: number }),
  getNumberCheckAX: (numberCheck) => instance.get(`/check/number`, numberCheck),
  // 회원정보 불러오기
  getUserAX: () => instance.get(`/users`),
  // 마이페이지 개수 불러오기
  getMyPageNumAX: () => instance.get(`/users/mypage`),

  // 회원정보 수정
  profileEdit: (editProfile) => instance.put('/users', editProfile),
  // 수정한 회원정보 불러오기
  // getProfileAX: () => instance.get('/users'),

  // 게시물 불러오기
  getPost: () => instance.get('/main'),

  getAll: () => instance.get('/searches/post'),
  // 게시물 작성하기
  addPost: (contents) => instance.post(`/posts`, contents),
  getPostDetail: (postId) => instance.get(`/posts/${postId}`),

  // 게시물 수정하기
  editPost: (postId, contents) => instance.put(`/posts/${postId}`, contents),
  // 게시물 삭제하기
  delPost: (postId) => instance.delete(`/posts/${postId}`),
  // 필터 검색하기
  searchPost: (queryId) => instance.get(`/searches/${queryId}`),

  addComment: (comment) => instance.post(`/comments`, comment),
  delComment: (thisCommentId) => instance.delete(`/comments/${thisCommentId}`),
  getComment: (post_index) => instance.get(`/posts/${post_index}/comments`),

  //북마크
  setBookMarkAX: (postId) => instance.post(`/posts/${postId}/bookmark`),
  //내 북마크
  getBookMarkAX: () => instance.get(`/bookmark/my`),
  // 모임 참여 신청
  setJoinCheckAX: (postId) => instance.post(`/posts/${postId}/crews`),
  // 모임 참여 취소
  deleteJoinCheckAX: (postId) => instance.delete(`/posts/${postId}/crews`),

  addReviewAX: (content) => instance.post('/reviews', content),

  getReviewAX: () => instance.get(`/reviews`),

  detailReviewAX: (id) => instance.get(`/reviews/${id}`),

  deleteReviewAx: (id) => instance.delete(`/reviews/${id}`),

  putReviewAx: (reviewId, content) =>
    instance.put(`/reviews/${reviewId}`, content),

  getCrewAx: () => instance.get(`/posts/my`),

  getCrewCheckAx: (postId) => instance.get(`/posts/${postId}/my`),

  putCrewCheckAx: (postId, checkedItems) =>
    instance.put(`/crews`, { postId: postId, userId: checkedItems }),

  getMyApplyAX: () => instance.get(`/crews/my`),

  getMyReviewAX: () => instance.get(`/reviews/my`),

  getMyBadgeAX: () => instance.get(`/badges`),
};
