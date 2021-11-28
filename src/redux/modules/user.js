import { createAction, handleActions } from 'redux-actions';
// import { Cookies } from 'react-cookie';
import { produce } from 'immer';
import { imageCreators } from './image';
import { apis } from '../../shared/axios';
import { deleteCookie, setCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';

// Actions
const GET_USER = 'GET_USER';
// 로그인, 로그아웃
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// 이메일, 닉네임 중복확인
const NICKNAME_CHECK = 'NICKNAME_CHECK';
const EMAIL_CHECK = 'EMAIL_CHECK';
// 회원정보 수정, 불러오기
const PROFILE_EDIT = 'PROFILE_EDIT';
const GET_PROFILE = 'GET_PROFILE';
// 휴대폰 인증
const NUMBER_CHECK = 'NUMBER_CHECK';
const GETNUMBER_CHECK = 'GETNUMBER_CHECK';

//마이페이지 내 북마크
const GET_MYBOOKMARK = `GET_MYBOOKMARK`;
// 마이페이지 뱃지
const GET_MYBADGE = `GET_MYBADGE`;
// 마이페이지 개수 불러오기
const GET_MYPAGENUM = 'GET_MYPAGENUM';

const initialState = {
  user: [],
  is_login: false,
  phoneNumber: [],
  list: [],
};

// Action Creators
const getUser = createAction(GET_USER, (userData) => ({ userData }));
const logIn = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));
const nicknameCheck = createAction(NICKNAME_CHECK, (user) => ({ user }));
const emailCheck = createAction(EMAIL_CHECK, (user) => ({ user }));
const profileEdit = createAction(PROFILE_EDIT, (user) => ({ user }));
const getProfile = createAction(GET_PROFILE, (user) => ({ user }));
const numberCheck = createAction(NUMBER_CHECK, (number) => ({
  number,
}));
const getNumberCheck = createAction(GETNUMBER_CHECK, (numberCheck) => ({
  numberCheck,
}));

const getMybookMark = createAction(GET_MYBOOKMARK, (bookMark) => ({
  bookMark,
}));
const getMyBadge = createAction(GET_MYBADGE, (badge) => ({ badge }));
const getMyPageNum = createAction(GET_MYPAGENUM, (mypageNum) => ({
  mypageNum,
}));

// thunk function
const loginMiddleware = (email, password) => {
  return (dispatch, getState, { history }) => {
    apis
      .login(email, password)
      .then((res) => {
        setCookie('token', res.data.data.jwtToken);
        localStorage.setItem('role', res.data.data.user.role);
        localStorage.setItem('id', res.data.data.user.id);
        localStorage.setItem('email', res.data.data.user.email);
        localStorage.setItem('nickname', res.data.data.user.nickname);
        localStorage.setItem('intro', res.data.data.user.intro);
        localStorage.setItem('location', res.data.data.user.location);
        localStorage.setItem('type', res.data.data.user.type);
        localStorage.setItem('distance', res.data.data.user.distance);
        localStorage.setItem('userImg', res.data.data.user.userImg);
        dispatch(
          logIn({
            role: res.data.data.user.role,
            email: res.data.data.user.email,
            nickname: res.data.data.user.nickname,
            intro: res.data.data.user.intro,
            location: res.data.data.user.location,
            type: res.data.data.user.type,
            distance: res.data.data.user.distance,
            userImg: res.data.data.user.userImg,
          }),
        );
        window.location.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          text: '로그인에 실패하였습니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      });
  };
};

const signupMiddleware = (
  email,
  password,
  nickname,
  location,
  distance,
  type,
  number,
) => {
  return (dispatch, getState, { history }) => {
    apis
      .signup(email, password, nickname, location, distance, type, number)
      .then((res) => {
        Swal.fire({
          text: '회원가입이 완료되었습니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
        history.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const emailCheckMiddleware = (email) => {
  return (dispatch) => {
    apis
      .emailCheck(email)
      .then((res) => {
        dispatch(emailCheck(email));
        Swal.fire({
          text: '사용가능한 이메일입니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '중복된 이메일입니다.',
          width: '360px',
          confirmButtonColor: '#E3344E',
        });
      });
  };
};

const nicknameCheckMiddleware = (nickname) => {
  return (dispatch) => {
    apis
      .nicknameCheck(nickname)
      .then((res) => {
        dispatch(nicknameCheck(nickname));
        Swal.fire({
          text: '사용가능한 닉네임입니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '중복된 닉네임입니다.',
          width: '360px',
          confirmButtonColor: '#E3344E',
        });
      });
  };
};

const numberCheckMiddleware = (number) => {
  return (dispatch) => {
    apis
      .numberCheckAX(number)
      .then((res) => {
        dispatch(numberCheck(res));
        Swal.fire({
          text: '인증번호를 입력해주세요.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const getNumberCheckMiddleware = (numberCheck) => {
  return (dispatch, getState, { history }) => {
    apis
      .getNumberCheckAX(numberCheck)
      .then((res) => {
        const get_number = res.data;
        dispatch(getNumberCheck(get_number));
        Swal.fire({
          text: '인증번호를 입력해주세요.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const logOutMiddleware = () => {
  return (dispatch, getState, { history }) => {
    deleteCookie('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('location');
    localStorage.removeItem('type');
    localStorage.removeItem('distance');
    localStorage.removeItem('userImg');
    localStorage.removeItem('nickname');
    localStorage.removeItem('intro');
    dispatch(logOut());
    window.location.replace('/');
  };
};

const loginCheckMiddleware = () => {
  return (dispatch, getState, { history }) => {
    const role = localStorage.getItem('role');
    const tokenCheck = document.Cookie;
    if (tokenCheck) {
      dispatch(logIn({ role: role }));
    } else {
      dispatch(logOutMiddleware());
    }
  };
};

const profileEditMiddleware = (editProfile) => {
  return (dispatch, getState, { history }) => {
    apis
      .profileEdit(editProfile)
      .then((res) => {
        dispatch(imageCreators.setPreview(null));
        dispatch(profileEdit(editProfile));
        Swal.fire({
          text: '회원정보 수정이 완료되었습니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
        history.replace('/my');
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '다시 입력해주세요.',
          width: '360px',
          confirmButtonColor: '#E3344E',
        });
      });
  };
};

const getProfileMiddleware = (user) => {
  return (dispatch, getState, { history }) => {
    apis
      .getProfileAX(user)
      .then((res) => {
        const my_profile = res.data;
        dispatch(getProfile(my_profile));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getUserDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getUserAX()
      .then((res) => {
        const get_user = res.data;
        dispatch(getUser(get_user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getBookMarkDB = () => {
  return (dispatch, { history }) => {
    apis
      .getBookMarkAX()
      .then((res) => {
        const bookMark = res.data.data;
        dispatch(getMybookMark(bookMark));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMyPageNumDB = () => {
  return (dispatch, { history }) => {
    apis
      .getMyPageNumAX()
      .then((res) => {
        const mypageNum = res.data;
        dispatch(getMyPageNum(mypageNum));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMyBadgeDB = () => {
  return (dispatch, { history }) => {
    apis
      .getMyBadgeAX()
      .then((res) => {
        const badge = res.data;
        dispatch(getMyBadge(badge));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userData = action.payload.userData;
      }),
    [NICKNAME_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [EMAIL_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [GET_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [NUMBER_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.number);
      }),
    [GETNUMBER_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.numberCheck = action.payload.numberCheck;
      }),
    [GET_MYBOOKMARK]: (state, action) =>
      produce(state, (draft) => {
        draft.myBookmark = action.payload.bookMark;
      }),
    [GET_MYBADGE]: (state, action) =>
      produce(state, (draft) => {
        draft.myBadge = action.payload.badge;
      }),
    [GET_MYPAGENUM]: (state, action) =>
      produce(state, (draft) => {
        draft.mypageNum = action.payload.mypageNum;
      }),
  },
  initialState,
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  emailCheckMiddleware,
  nicknameCheckMiddleware,
  loginCheckMiddleware,
  logOutMiddleware,
  logIn,
  getUser,
  profileEditMiddleware,
  profileEdit,
  getProfileMiddleware,
  getProfile,
  numberCheckMiddleware,
  numberCheck,
  getNumberCheckMiddleware,
  getNumberCheck,
  getBookMarkDB,
  getUserDB,
  getMyBadgeDB,
  getMyBadge,
  getMyPageNumDB,
  getMyPageNum,
};

export { userCreators };
