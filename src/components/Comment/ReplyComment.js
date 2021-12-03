import React, { useEffect } from 'react';

import SingleComment from './SingleComment';

import { Grid, Text } from '../../elements/index';

export const ReplyComment = (props) => {
  const [OpenReplyComments, setOpenReplyComments] = React.useState(false);
  const [ChildCommentNumber, setChildCommentNumber] = React.useState();
  const [ClickHandler, setClickHandler] = React.useState(false);

  useEffect(() => {
    let commentNumber = 0;

    props?.CommentLists?.map((comment) => {
      if (comment?.replyTo === props?.parentCommentId) {
        commentNumber++;
      }
    });

    setChildCommentNumber(commentNumber);
  }, [props?.CommentLists]);

  const renderReplyComment = (parentCommentId) =>
    props?.CommentLists?.map((comment, index) => (
      <React.Fragment>
        {comment?.replyTo === parentCommentId && (
          <>
            <Grid margin="0px 0px 0px 40px">
              <Grid flexLeft>
                <Grid margin="0px 0px 10px 0px">
                  <SingleComment
                    refreshComment={props?.refreshComment}
                    comment={comment}
                    postId={props?.postId}
                    userInfo={props?.loginIfo}
                  />
                </Grid>
              </Grid>
              <Grid margin="0px 0px 10px 0px">
              <ReplyComment
                refreshComment={props?.refreshComment}
                CommentLists={props?.CommentLists}
                postId={props?.postId}
                parentCommentId={comment?.commentId}
                userInfo={props?.loginIfo}
              />
              </Grid>
            </Grid>
          </>
        )}
      </React.Fragment>
    ));

  const onClickReplyCommentsOpen = () => {
    setOpenReplyComments(!OpenReplyComments);
  };

  const ClickHandlerChange = () => {
    setClickHandler(!ClickHandler);
  }

  const showmore = ClickHandler == false ? '더보기' : '가리기'

  return (
    <>
    {OpenReplyComments && renderReplyComment(props?.parentCommentId)}
    
      {ChildCommentNumber > 0 && (
        <Grid>
          <Text
            color="#acacac"
            size="14px"
            _onClick={()=>{
              onClickReplyCommentsOpen();
              ClickHandlerChange();
            }}
            margin="0px 0px 7px 129px"
            cursor="pointer"
          >
            {ChildCommentNumber}개의 답글 {showmore}
          </Text>
        </Grid>
      )}

      
    </>
  );
};

export default ReplyComment;
