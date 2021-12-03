import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';
import Swal from 'sweetalert2';
import { createDispatchHook } from 'react-redux';

// actions
// 모임 만들기
const ADD_POST = 'post/ADD_POST';
// 모임 상세보기
const GET_POST_DETAIL = 'post/LOAD';
// 모임 수정하기
const EDIT_POST = 'post/EDIT_POST';
// 메인 모임 리스트
const GET_POST = 'post/GET_POST';
// 북마크
const SET_BOOKMARK = 'SET_BOOKMARK';
// 마이페이지 신청내역
const GET_MYAPPLY = 'GET_MYAPPLY';
// 마이페이지 후기내역
const GET_MYREVIEW = 'GET_MYREVIEW';
// 모든 모임 불러오기 - 참여하기
const GET_ALL = 'all/GET_ALL';

const GET_FILTERED = 'filtered/GET_FILTERED';

// action creators
// 모임 만들기
const addPost = createAction(ADD_POST, (posts) => ({ posts }));
// 모임 상세 보기
const _getPostDetail = createAction(GET_POST_DETAIL, (post) => ({ post }));
// 모임 수정하기
const _editPost = createAction(EDIT_POST, (posts) => ({ posts }));
// 메인 모임 리스트
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));

const setBookMark = createAction(SET_BOOKMARK, (bookmark) => ({
  bookmark,
}));
// 신청 내역 불러오기
const getMyApply = createAction(GET_MYAPPLY, (apply_list) => ({ apply_list }));
// 후기 내역 불러오기
const getMyReview = createAction(GET_MYREVIEW, (review_list) => ({
  review_list,
}));

const getAll = createAction(GET_ALL, (all_list) => ({ all_list }));

const getFiltered = createAction(GET_FILTERED, (filtered_list) => ({
  filtered_list,
}));

// initialState
const initialState = {
  list: [],
  detail: [],
  post: null,
  posts: [],
  all: [],
};

// Thunk functions
export const addPostDB = (contents) => {
  return function (dispatch, getState, { history }) {
    apis
      .addPost(contents)
      .then(() => {
        dispatch(addPost(contents));
        window.location.replace('/');
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPostDetailDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getPostDetail(postId)
      .then((res) => {
        dispatch(_getPostDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editPostDB = (postId, contents) => {
  return function (dispatch, getState, { history }) {
    apis
      .editPost(postId, contents)
      .then(() => {
        dispatch(_editPost(postId, contents));
        history.push(`/post/${postId}`);
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPostDB = () => {
  return function (dispatch) {
    apis
      .getPost()
      .then((res) => {
        const post_list = res.data;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getAll()
      .then((res) => {
        const all_list = res.data;
        console.log(all_list);
        dispatch(getAll(all_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getFilteredDB = (queryId) => {
  return function (dispatch, getState, { history }) {
    apis
      .searchPost(queryId)
      .then((res) => {
        const filtered_list = res.data;
        console.log(filtered_list);
        dispatch(getFiltered(filtered_list));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '세 가지 필터를 모두 적용해주세요!',
          width: '360px',
          confirmButtonColor: '#fe542e',
        });
      });
  };
};

export const setBookMarkDB = (postId) => {
  return function (dispatch) {
    apis
      .setBookMarkAX(postId)
      .then((res) => {
        const bookmark = res.data.data;

        dispatch(setBookMark(bookmark));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMyApplyDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getMyApplyAX(postId)
      .then((res) => {
        const my_apply = res.data;
        console.log(my_apply);
        dispatch(getMyApply(my_apply));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMyReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getMyReviewAX(reviewId)
      .then((res) => {
        const my_review = res.data;
        console.log(my_review);
        dispatch(getMyReview(my_review));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setJoinCheckDB = (postId) => {
  return function ({ history }) {
    apis
      .setJoinCheckAX(postId)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '모임 참여 신청이 완료되었습니다!',
          width: '360px',
          confirmButtonColor: '#23C8AF',
        });
        window.location.replace(`/post/${postId}`);
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const deleteJoinCheckDB = (postId) => {
  return function ({ history }) {
    apis
      .deleteJoinCheckAX(postId)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '모임 참여 취소가 완료되었습니다!',
          width: '360px',
          confirmButtonColor: '#FF0000',
        });
        window.location.replace(`/post/${postId}`);
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const deletePostDB = (postId) => {
  return function ({ history }) {
    apis
      .delPost(postId)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '모임 삭제가 완료되었습니다!',
          width: '360px',
          confirmButtonColor: '#FF0000',
        });
        // window.location.push(`/`);
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.push(action.payload.posts);
      }),

    [GET_POST_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.detail = action.payload.post;
      }),

    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.push(action.payload.posts);
      }),

    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [GET_ALL]: (state, action) =>
      produce(state, (draft) => {
        draft.all = action.payload.all_list;
        console.log(action.payload);
      }),

    [GET_FILTERED]: (state, action) =>
      produce(state, (draft) => {
        draft.all = action.payload.filtered_list;
        console.log(action.payload);
      }),

    [SET_BOOKMARK]: (state, action) =>
      produce(state, (draft) => {
        draft.bookMark = action.payload.bookmark;
      }),

    [GET_MYAPPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload.apply_list;
      }),

    [GET_MYREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.reviews = action.payload.review_list;
      }),
  },
  initialState,
);

const postActions = {
  addPostDB,
  getPostDB,
  getPostDetailDB,
  editPostDB,
  setBookMarkDB,
  getMyApplyDB,
  setJoinCheckDB,
  deleteJoinCheckDB,
  getMyReviewDB,
  deletePostDB,
  getAllDB,
  getFilteredDB,
};

export { postActions };
