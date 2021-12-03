import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const PREVIEW = 'image/PREVIEW';
const UPLOAD = 'image/UPLOAD';
const REVIEW_UP = 'image/REVIEW_UP';
const PROFILEIMAGE = 'image/PROFILEIMAGE';

const setPreview = createAction(PREVIEW, (preview) => ({ preview }));
const imageUpload = createAction(UPLOAD, (postImg) => ({ postImg }));
const reviewImageUp = createAction(REVIEW_UP, (reviewImg) => ({ reviewImg }));
const profileImage = createAction(PROFILEIMAGE, (profileImg) => ({
  profileImage,
}));

const initialState = {
  postImg: null,
  preview: null,
};

export default handleActions(
  {
    [UPLOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.postImg = action.payload.postImg;
      }),
    [PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [REVIEW_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.reviewImg = action.payload.reviewImg;
      }),
    [PROFILEIMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.profileImage = action.payload.profileImage;
      }),
  },
  initialState,
);

const imageCreators = {
  setPreview,
  imageUpload,
  reviewImageUp,
  profileImage,
};

export { imageCreators };
