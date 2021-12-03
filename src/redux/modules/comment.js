import { apis } from '../../shared/axios';
import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import Swal from 'sweetalert2';

const ADD_COMMENT = 'comment/ADD_COMMENT';
const ADD_REPLY = 'comment/ADD_REPLY';
const GET_COMMENT = 'comment/GET_COMMENT';

const _addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const _addReply = createAction(ADD_REPLY, (reply) => ({ reply }));
const _getComment = createAction(GET_COMMENT, (comments) => ({ comments }));

const initialState = {
  list: [],
  comment_list: [],
};

export const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(comment)
      .then((res) => {
        dispatch(_addComment(comment));
      })
      .catch((err) => console.log(err));
  };
};

export const addReplyDB = (comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(comment)
      .then((res) => {
        dispatch(_addReply(comment));
      })
      .catch((err) => console.log(err));
  };
};

export const getCommentDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getComment(postId)
      .then((res) => {
        const comments = res.data;
        dispatch(_getComment(comments));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCommentDB = (thisCommentId) => {
  return function ({ history }) {
    apis
      .delComment(thisCommentId)
      .then((res) => {
        Swal.fire({
          text: '댓글 삭제가 완료되었습니다!',
          width: '360px',
          confirmButtonColor: '#FF0000',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comment);
      }),
    [ADD_REPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.reply);
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list = action.payload.comments;
      }),
  },
  initialState,
);

const actionsCreators = {
  _addComment,
  addCommentDB,
  _addReply,
  addReplyDB,
  _getComment,
  getCommentDB,
  deleteCommentDB,
};

export { actionsCreators };
