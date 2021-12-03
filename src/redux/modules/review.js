import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';

//action
const ADD_REVIEW = 'ADD_REVIEW';
const GET_REVIEW = 'GET_REVIEW';
const DEATAIL_REVIEW = 'DEATAIL_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';
const PUT_REVIEW = 'PUT_REVIEW';

const addReview = createAction(ADD_REVIEW, (reviews) => ({ reviews }));
const getReview = createAction(GET_REVIEW, (review_list) => ({ review_list }));
const detailReview = createAction(DEATAIL_REVIEW, (reviewDetail) => ({
  reviewDetail,
}));
const deleteReview = createAction(DELETE_REVIEW, (reviewId) => ({ reviewId }));
const putReview = createAction(PUT_REVIEW, (reviewId, content) => ({
  reviewId,
  content,
}));

const initialState = {
  list: [],
};

export const addReviewDB = (content) => {
  return function (dispatch, { history }) {
    apis
      .addReviewAX(content)
      .then(() => {
        dispatch(addReview(content));
        window.location.replace('/');
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        window.alert('리뷰다시');
      });
  };
};

export const getReviewDB = () => {
  return function (dispatch) {
    apis
      .getReviewAX()
      .then((res) => {
        const review_list = res.data.data;
        dispatch(getReview(review_list));
      })
      .catch((err) => {
        console.log('리뷰불러오기 실패!');
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
        window.alert(err);
      });
  };
};

export const deleteReviewDB = (reviewId) => {
  return function (dispatch, { history }) {
    apis
      .deleteReviewAx(reviewId)
      .then((res) => {
        dispatch(deleteReview(reviewId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editReviewDB = (reviewId, content) => {
  return function (dispatch, { history }) {
    apis
      .putReviewAx(reviewId, content)
      .then(() => {
        dispatch(putReview(reviewId, content));
        dispatch(imageCreators.setPreview(null));
        // history.replace(`/review/${reviewId}`);
        window.location.replace(`/review/${reviewId}`);
      })
      .catch((err) => {
        console.log(err);
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
        // let idx = draft.list.filter(
        //   (r) => r.reviewId === action.payload.reviewId,
        // );
        // console.log(draft.list);
        // let idx = draft.list.findIndex(
        //   (r) => r.reviewId == action.payload.reviewId,
        // );
        // console.log(action.payload);
        // console.log(draft.list.findIndex((r) => r.reviewId));
        // console.log(idx);
        // draft.list[idx] = {
        //   ...draft.list[idx],
        //   ...action.payload.reviews,
        // };
        draft.list.push(action.payload.reviews);
        // draft.list = action.payload.reviews;
        // console.log(action.payload.reviews);

        // console.log(draft.list);
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
