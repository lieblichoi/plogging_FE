import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';
import Swal from 'sweetalert2';

//action
const ADD_REVIEW = 'ADD_REVIEW';
const GET_REVIEW = 'GET_REVIEW';
const DEATAIL_REVIEW = 'DEATAIL_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';
const PUT_REVIEW = 'PUT_REVIEW';

//actionCreator
const addReview = createAction(ADD_REVIEW, (reviews) => ({ reviews }));
const getReview = createAction(GET_REVIEW, (review_list) => ({ review_list }));
const detailReview = createAction(DEATAIL_REVIEW, (reviewDetail) => ({
  reviewDetail,
}));
const deleteReview = createAction(DELETE_REVIEW, (reviewId) => ({ reviewId }));
const putReview = createAction(PUT_REVIEW, (reviews) => ({ reviews }));

const initialState = {
  list: [],
};

//Thunk functions
export const addReviewDB = (content) => {
  return function (dispatch, getState, { history }) {
    apis
      .addReviewAX(content)
      .then(() => {
        dispatch(addReview(content));
        history.push('/');
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        window.alert('리뷰다시');
      });
  };
};

export const getReviewDB = (reviewId) => {
  console.log(reviewId);
  return function (dispatch, getState, { history }) {
    apis
      .getReviewAX()
      .then((res) => {
        const review_list = res.data.data;
        dispatch(getReview(review_list));
      })
      .catch((err) => {
        window.alert('리뷰불러오기 실패!');
      });
  };
};

export const detailReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    apis
      .detailReviewAX(reviewId)
      .then((res) => {
        const reviewDetail = res.data.data;
        dispatch(detailReview(reviewDetail));
      })
      .catch((err) => {
        window.alert('디테일 불러오기 실패');
      });
  };
};

export const deleteReviewDB = (reviewId) => {
  return function (dispatch, { history }) {
    apis
      .deleteReviewAx(reviewId)
      .then((res) => {
        console.log(res);
        dispatch(deleteReview(reviewId));
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const editReviewDB = (reviewId, content) => {
  return function (dispatch, { history }) {
    apis
      .putReviewAx(reviewId, content)
      .then((res) => {
        console.log(res);
        dispatch(putReview(reviewId, content));
        history.push('/review');
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.reviews);
      }),

    [GET_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.review_list;
      }),
    [DEATAIL_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.detail = action.payload.reviewDetail;
      }),
    [DELETE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.reviews;
      }),

    [PUT_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        let reviewIdx = draft.list.findIndex(
          (review) => review.reivewId === action.payload.reviews,
        );
        console.log(draft.list);
        console.log(action.payload.reviews);
        console.log(reviewIdx);
        // draft.list.push(action.payload.reviews);
        draft.list[reviewIdx] = {
          ...draft.list[reviewIdx],
          ...action.payload.list,
        };
      }),
  },
  initialState,
);

const actionCreator = {
  addReviewDB,
  getReviewDB,
  detailReviewDB,
  deleteReviewDB,
  editReviewDB,
  getReview,
};
export { actionCreator };
