import React from 'react';
import { Container, Grid, Text, Button, Buttons } from '../elements/index';

import ReviewCardUn from '../components/Reviews/ReviewCardUn';

import CommunityReviewCard from '../components/Community/CommunityReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';

const Reviews = (props) => {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.review.list);
  const [recentSort, setRecentSort] = React.useState(true);
  const [starSort, setStarSort] = React.useState(false);

  const clickRecentSort = () => {
    setRecentSort(true);
    setStarSort(false);
  };

  const clickStarSort = () => {
    setStarSort(true);
    setRecentSort(false);
  };

  const review_list = reviewList?.slice(0).reverse();
  const star_list = reviewList
    .filter((x) => {
      return x.star >= 1;
    })
    .sort(function (a, b) {
      return b.star - a.star;
    });

  React.useEffect(() => {
    dispatch(reviewAction.getReviewDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width="1440px" margin="auto">
        <Container width="1440px">
          <Grid margin="25px 0px">
            <Grid center>
            <Text size="28px" bold margin="15px 0px" color="#333333">
                커뮤니티
              </Text>
              <Text size="18px" color="#666666" margin="10px 0px">
                줍깅 서비스를 이용해본 분들이 남긴 후기를 볼 수 있어요.
              </Text>
              <Text size="18px" color="#666666">
                줍깅러들의 생생한 이야기를 지금 만나보세요!
              </Text>
            </Grid>

            <Grid isFlex padding="30px 155px">
              <Grid>
              <Text margin="0px 0px 0px 10px" color="#333333" size="18px" bold>총 {review_list?.length}건</Text>
              </Grid>
              <Grid centerFlex>
                <Buttons search _onClick={clickRecentSort}>
                  최근날짜순
                </Buttons>
                <Text
                  color="#acacac"
                  margin="-3px 0px 0px 0px"
                  size="13px"
                  bold
                >
                  |
                </Text>
                <Buttons search _onClick={clickStarSort}>
                  별점순
                </Buttons>
              </Grid>
            </Grid>
            {reviewList?.length === 0 ? (
              <Grid centerFlex>
                <ReviewCardUn />
              </Grid>
            ) : (
              <>
                <Grid grid>
                  {recentSort && !starSort ? (
                    <>
                      {' '}
                      {review_list?.map((r, idx) => {
                        return <CommunityReviewCard {...r} key={idx} />;
                      })}
                    </>
                  ) : (
                    ''
                  )}
                  {!recentSort && starSort ? (
                    <>
                      {' '}
                      {star_list?.map((r, idx) => {
                        return <CommunityReviewCard {...r} key={idx} />;
                      })}
                    </>
                  ) : (
                    ''
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Reviews;
