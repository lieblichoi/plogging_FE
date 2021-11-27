import React from 'react';
import { actionsCreators as commentActions } from '../../redux/modules/comment';
import { useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Text, Image, Buttons } from '../../elements/index';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';

import { getsCookie } from '../../shared/Cookie';

export const Comment = (props) => {
  const dispatch = useDispatch();

  const is_login = getsCookie('token');

  const comment_list = props?.CommentLists?.slice(0).reverse();

  let loginUserInfo = props.loginUserInfo;

  let postId = props.post_id;
  const [commentValue, setCommentValue] = React.useState('');

  const comment = {
    postId: postId,
    content: commentValue,
    replyTo: '',
  };

  const handleComment = (e) => {
    setCommentValue(e.target.value);
  };

  const uploadComment = () => {
    dispatch(commentActions.addCommentDB(comment));
    props.refreshComment(comment);
    setCommentValue('');
  };

  const inputTheme = createTheme({
    palette: {
      primary: { main: '#23C8AF' },
    },
  });

  const profileImg = loginUserInfo?.userImg;

  return (
    <React.Fragment>
      <Grid flexLeft margin="50px 0px 20px 0px" alignItems="flex-start">
        <Image
          shape="circle"
          src={
            is_login
              ? profileImg !== 'null'
                ? `${profileImg}`
                : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
              : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
          }
          size="54"
          margin="-10px 10px 0px 0px"
        />
        <Grid margin="0px 0px 0px 10px" alignItems="flex-start">
          <ThemeProvider theme={inputTheme}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { width: '600px' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-multiline-flexible"
                multiline
                maxRows={4}
                value={commentValue}
                onChange={handleComment}
                variant="standard"
              />
            </Box>
          </ThemeProvider>
          <Grid margin="10px 0px 0px 490px">
            <Buttons
              small_w
              _onClick={() => {
                if (is_login) {
                  uploadComment();
                } else {
                  Swal.fire({
                    text: '로그인해주세요.',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                  history.push('/login');
                }
              }}
            >
              등록하기
            </Buttons>
          </Grid>
        </Grid>
      </Grid>
      <Text bold color="#666666" margin="0px 0px 20px 0px">
        댓글 {comment_list.length}개
      </Text>
      {comment_list &&
        comment_list?.map(
          (comment, index) =>
            !comment?.replyTo && (
              <React.Fragment>
                <SingleComment
                  refreshComment={props?.refreshComment}
                  comment={comment}
                  postId={postId}
                  loginInfo={loginUserInfo}
                />
                <ReplyComment
                  refreshComment={props?.refreshComment}
                  parentCommentId={comment?.commentId}
                  CommentLists={props?.CommentLists}
                  postId={postId}
                  loginInfo={loginUserInfo}
                />
              </React.Fragment>
            ),
        )}
    </React.Fragment>
  );
};
