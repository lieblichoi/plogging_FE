import React from 'react'
import { actionsCreators as commentActions } from '../../redux/modules/comment';
import { useDispatch, useSelector } from "react-redux"
import { apis } from '../../shared/axios';

import { Grid, Text, Image, Tags, Buttons, Inputs } from '../../elements/index';

export const SingleComment = (props) => {
    const dispatch = useDispatch();
    console.log(props);

    const [OpenReply, setOpenReply] = React.useState(false);
    const [CommentValue, setCommentValue] = React.useState("");

    console.log(CommentValue);

    console.log(props?.comment?.commentId);

    const thisCommentId = props?.comment?.commentId 
    const thisPostId = props?.postId 

    const comment = {
        postId: props?.postId,
        content: CommentValue,
        replyTo: props?.comment?.commentId,
      };

      console.log(comment);

    const onClickReplyOpen = () => {
        setOpenReply(!OpenReply)
    }

    const onhandleComment = (e) => {
        setCommentValue(e.target.value);
        console.log(e.target.value);
    }

    const uploadReply = () => {
        dispatch(commentActions.addCommentDB(comment));
        setOpenReply(false);
        props.refreshComment(comment);
    }

    const deleteReply = () => {
      dispatch(commentActions.deleteCommentDB(thisCommentId));
      window.location.replace(`/post/${thisPostId}`)
  }

    return (
      <React.Fragment>
        <Grid
          isFlex
          borderBottom="2px solid #eeeeee"
          height="100px"
          margin="15px 0px"
        >
          <Grid flexLeft margin="-38px 0px 0px 0px">
            <Image
              shape="circle"
              src={
                props?.comment?.userImg
                  ? `${props?.comment?.userImg}`
                  : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
              }
              //   src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
              size="28"
              margin="-10px 10px 0px 0px"
            />
            <Grid>
              <Text bold color="#333333" size="14px">
                {props?.comment?.nickname ? props?.comment?.nickname : ''}
              </Text>
              <Text color="#acacac" size="14px" margin="0px 0px 15px 0px">
                {props?.comment?.modifiedAt ? props?.comment?.modifiedAt : ''}
              </Text>
            </Grid>
          </Grid>
          <Grid>
            <Grid width="450px" height="48px">
              <Text color="#666666" size="14px" margin="0px 0px 0px 0px">
                {props?.comment?.content ? props?.comment?.content : ''}
              </Text>
            </Grid>
            <Grid isFlex>
            <Text
              color="#acacac"
              size="14px"
              padding="15px"
              cursor="pointer"
              _onClick={onClickReplyOpen}
            >
              답글 달기
            </Text>
            <Grid flexLeft>
            <Text
              color="#acacac"
              size="14px"
              padding="15px"
              cursor="pointer"
              // _onClick={onClickReplyOpen}
            >
              수정
            </Text>
            <Text
              color="#acacac"
              size="14px"
            >
              |
            </Text>
            <Text
              color="#acacac"
              size="14px"
              padding="15px"
              cursor="pointer"
              _onClick={()=>{
                deleteReply()
              }}
            >
              삭제
            </Text>
            </Grid>
            </Grid>
            
          </Grid>
        </Grid>
        {OpenReply && (
          <Grid flexLeft>
            <Grid margin="0px 0px 15px 0px">
              <Inputs
                large
                placeholder="댓글을 입력해주세요!"
                value={CommentValue}
                _onChange={onhandleComment}
                // error={content.length < 5 && content.length > 1}
                // helperText={
                //   content.length < 5 && content.length > 1
                //     ? '최소 5글자 이상으로 채워주세요!'
                //     : ''
                // }
              />
            </Grid>
            <Grid margin="">
              <Buttons reply _onClick={uploadReply}>
                등록하기
              </Buttons>
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
}

export default SingleComment
