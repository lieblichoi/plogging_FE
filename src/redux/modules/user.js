import { createAction, handleActions } from 'redux-actions';
import { Cookies } from 'react-cookie';
import { produce } from 'immer';
import { apis } from '../../shared/axios';
import { deleteCookie, setCookie } from '../../shared/Cookie';

// Actions
const SET_USER = 'SET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  email: '',
  nickname: '',
  password: '',
  location: '',
  type: '',
  distance: '',
  is_login: false,
};

// Action Creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logIn = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));

// thunk function
const loginMiddleware = (email, password) => {
  return (dispatch, getState, { history }) => {
    const user = {
      email: email,
      password: password,
    };
    apis
      .login(user)
      .then((res) => {
        if (res.data.result === 'success') {
          setCookie('token', res.data.data);
          setCookie('is_login', true);
          localStorage.setItem('role', res.data.role);

          // dispatch(logIn(user));
          history.replace('/');
        } else if (res.data.result === 'failed') {
          alert(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const signupMiddleware = (email, nickname, password) => {
  return (dispatch, getState, { history }) => {
    const user = {
      email: email,
      nickname: nickname,
      password: password,
    };
    apis
      .signup(user)
      .then((res) => {
        history.replace('/login');
        window.alert('회원가입이 완료되었습니다!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const emailCheckMiddleware = (email) => {
  return () => {
    apis
      .emailCheck(email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const nicknameCheckMiddleware = (nickname) => {
  return () => {
    apis
      .nicknameCheck(nickname)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logOutMiddleware = () => {
  return (dispatch, getState, { history }) => {
    deleteCookie('token');
    localStorage.removeItem('role');
    dispatch(logOut());
    history.push('/login');
  };
};

const loginCheckMiddleware = () => {
  return (dispatch, getState, { history }) => {
    const email = localStorage.getItem('role');
    const tokenCheck = document.Cookie;
    if (tokenCheck) {
      dispatch(logIn({ email: email }));
    } else {
      dispatch(logOutMiddleware());
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
        console.log(state);
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState,
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  setUser,
  emailCheckMiddleware,
  nicknameCheckMiddleware,
  loginCheckMiddleware,
  logOutMiddleware,
};

export { userCreators };