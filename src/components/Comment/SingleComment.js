import React from 'react';
import { actionsCreators as commentActions } from '../../redux/modules/comment';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';

import { Grid, Text, Image, Tags, Buttons, Inputs } from '../../elements/index';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';

import { getsCookie } from '../../shared/Cookie';

export const SingleComment = (props) => {
  const dispatch = useDispatch();

  const is_login = getsCookie('token');
  const [OpenReply, setOpenReply] = React.useState(false);
  const [CommentValue, setCommentValue] = React.useState('');
  const thisCommentId = props?.comment?.commentId;
  const thisPostId = props?.postId;
  const userId = props.comment.userId;

  const comment = {
    postId: props?.postId,
    content: CommentValue,
    replyTo: props?.comment?.commentId,
  };

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
  };

  const onhandleComment = (e) => {
    setCommentValue(e.target.value);
  };

  const uploadReply = () => {
    dispatch(commentActions.addCommentDB(comment));
    setOpenReply(false);
    props.refreshComment(comment);
  };

  const deleteReply = () => {
    dispatch(commentActions.deleteCommentDB(thisCommentId));
    window.location.replace(`/post/${thisPostId}`);
  };

  const modifiedTime = props?.comment?.modifiedAt;

  const timeCal = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60,
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  const profileImg = props?.loginInfo?.userImg;
  const username = props?.loginInfo?.nickname;

  const inputTheme = createTheme({
    palette: {
      primary: { main: '#23C8AF' },
    },
  });

  return (
    <React.Fragment>
      <Grid isFlex>
        <Grid flexLeft alignItems="flex-start">
          <Image
            shape="circle"
            src={
              props?.comment?.userImg
                ? `${props?.comment?.userImg}`
                : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
            }
            //   src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
            size="54"
            margin="19px 10px 0px 0px"
          />
          <Grid>
            <Grid>
              <Grid isFlex margin="0px 0px 0px 0px">
                <Grid flexLeft margin="0px 0px 0px 10px">
                  <Text
                    bold
                    color="#333333"
                    size="16px"
                    margin="0px 0px 0px 0px"
                    _onClick={() => {
                      window.location.replace(`/users/info/${userId}`);
                    }}
                    cursor="pointer"
                  >
                    {props?.comment?.nickname ? props?.comment?.nickname : ''}
                  </Text>
                  <Text color="#acacac" size="14px" margin="0px 0px 0px 5px">
                    {/* {props?.comment?.modifiedAt ? props?.comment?.modifiedAt : ''} */}
                    {timeCal(modifiedTime)}
                  </Text>
                </Grid>
                {props?.comment?.nickname == username ? (
                  <Grid flexLeft margin="0px 0px 0px 0px">
                    {/* <Text
                      color="#acacac"
                      size="14px"
                      padding="15px"
                      cursor="pointer"
                      // _onClick={onClickReplyOpen}
                    >
                      수정
                    </Text> */}
                    {/* <Text color="#acacac" size="14px">
                      |
                    </Text> */}
                    <Text
                      color="#acacac"
                      size="14px"
                      padding="15px"
                      cursor="pointer"
                      _onClick={() => {
                        Swal.fire({
                          title: '삭제',
                          html: '댓글을 삭제하시겠습니까?',

                          width: '360px',
                          height: '112px',
                          confirmButtonColor: '#23C8AF',

                          // showDenyButton: true,
                          showCancelButton: true,
                          confirmButtonColor: '#23c8af',
                          cancelButtonColor: '#d33',
                          confirmButtonText: '삭제',
                          cancelButtonText: '취소',
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire('삭제완료!');
                            deleteReply();
                          }
                        });
                      }}
                    >
                      삭제
                    </Text>
                  </Grid>
                ) : (
                  <Grid flexLeft margin="0px 0px 0px 0px">
                    <Text color="transparent" size="14px" padding="15px">
                      수정
                    </Text>
                    <Text color="transparent" size="14px">
                      |
                    </Text>
                    <Text color="transparent" size="14px" padding="15px">
                      삭제
                    </Text>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid>
              <Grid
                width="600px"
                height="auto"
                margin="0px 0px 0px 10px"
                maxWidth="600px"
                isPosition="static"
                alignItems="flex-start"
              >
                <Text color="#666666" size="16px">
                  {props?.comment?.content ? props?.comment?.content : ''}
                </Text>
              </Grid>
              {props?.comment?.replyTo == null && (
                <Grid margin="0px 0px 0px 50px">
                  <Text
                    bold
                    color="#acacac"
                    size="14px"
                    padding="15px"
                    cursor="pointer"
                    _onClick={onClickReplyOpen}
                  >
                    답글 달기
                  </Text>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Grid>
      {OpenReply && (
        <Grid flexLeft margin="30px 0px 20px 0px" alignItems="flex-start">
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
                  value={CommentValue}
                  onChange={onhandleComment}
                  variant="standard"
                />
              </Box>
            </ThemeProvider>
            <Grid margin="10px 0px 0px 490px">
              <Buttons
                small_w
                _onClick={() => {
                  if (is_login) {
                    uploadReply();
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
      )}
    </React.Fragment>
  );
};

export default SingleComment;
