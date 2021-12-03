import React from 'react';

import { Container, Grid, Image, Text, Buttons } from '../elements/index';
import DetailPostInfo from '../components/Community/DetailPostInfo';
import DetailReviewInfo from '../components/Community/DetailReviewInfo';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';

import Swal from 'sweetalert2';

import { getsCookie } from '../shared/Cookie';

const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.review.detail?.review);
  const post = useSelector((state) => state.review.detail?.post);
  const users = useSelector((state) => state.user.userData?.data[0]);
  const reviewId = Number(props.match.params.reviewId);
  const is_login = getsCookie('token');
  const userName = users?.nickname;
  const postId = post?.postId;

  // const reviewEdits = [];
  const reviewEdit = () => {
    if (!is_login) {
      Swal.fire({
        text: '로그인해주세요.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      history.push('/login');
      return;
    }
    if (detail.nickname !== userName) {
      Swal.fire({
        text: '수정 권한이 아닙니다.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      return;
    }
    if (
      Swal.fire({
        title: '수정',
        html: '수정하시겠습니까 ?',
        // text: '새롭게 작성해주셔야 합니다.\n수정하시겠습니까?',
        width: '360px',
        showCancelButton: true,
        confirmButtonColor: '#23c8af',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 수정하겠습니다',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire('Deleted!');
          history.push(`/review/${postId}/${reviewId}/edit`);

          // dispatch(reviewAction.deleteReviewDB(reviewId));
          // history.push('/review');
        }
      })
    ) {
    }
  };
  const reviewDelete = () => {
    if (!is_login) {
      Swal.fire({
        text: '로그인해주세요.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      window.location.replace('/login');

      return;
    }
    if (detail.nickname !== userName) {
      Swal.fire({
        text: '삭제 권한이 아닙니다.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      return;
    }
    if (
      Swal.fire({
        title: '정말 삭제하시겠습니까?',
        width: '360px',
        showCancelButton: true,
        confirmButtonColor: '#23c8af',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 삭제하겠습니다',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('삭제!');
          dispatch(reviewAction.deleteReviewDB(reviewId));
          window.location.replace('/review');
        }
      })
    ) {
    }
  };

  React.useEffect(() => {
    dispatch(reviewAction.detailReviewDB(reviewId));
  }, []);

  const reviewImg = detail?.reviewImg;
  const contents = detail?.content;
  const reviewTitle = detail?.title;

  return (
    <React.Fragment>
      <Grid width="1440px" margin="0px auto">
        <Container width="1440px">
          <Grid padding="0px 72px">
            <Grid width="1180px" flexRight margin="130px auto 10px auto">
              {detail?.nickname !== userName ? (
                ''
              ) : (
                <>
                  <Grid _onClick={reviewEdit}>
                    <Text size="14px" color="#acacac" cursor="pointer">
                      수정
                    </Text>{' '}
                  </Grid>
                  <Text margin="0px 10px" size="14px" color="#acacac">
                    ㅣ
                  </Text>
                  <Grid _onClick={reviewDelete}>
                    <Text size="14px" color="#acacac" cursor="pointer">
                      삭제
                    </Text>{' '}
                  </Grid>
                </>
              )}
            </Grid>
            <Grid topStartFlex width="1440px" margin="0px auto 10px auto">
              <Grid
                flexLeft
                minWidth="770px"
                border="1px solid #DCDCDC"
                borderRadius="25px"
                overFlow
                margin="0px 100px 0px 0px"
              >
                <Image src={reviewImg}></Image>
              </Grid>

              <Grid>
                <Grid borderRadius="10px">
                  {/* <Grid isPosition="absolute" margin="-30px 0px 0px 220px ">
                  <Buttons smallbottom _onClick={reviewEdit}>
                    수정
                  </Buttons>
                  <Buttons smallbottom _onClick={reviewDelete}>
                    삭제
                  </Buttons> */}
                  <Grid></Grid>
                  <DetailPostInfo post={post} />
                </Grid>
                <Grid>
                  <DetailReviewInfo detail={detail} />
                </Grid>
              </Grid>
            </Grid>

            <Grid width="1440px" margin="20px auto">
              <Text bold size="40px">
                {reviewTitle}
              </Text>
              <Text width="1250px" margin="30px 0px 0px 0px">
                {contents}
              </Text>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default ReviewDetail;
