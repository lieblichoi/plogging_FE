import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import { history } from '../../redux/configureStore';
import Rating from '@mui/material/Rating';

const CommunityReviewCard = (props) => {
  // console.log(props);
  const writeDate = props.writeDate;

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
  // console.log(time);

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid
          hovers
          width="100%"
          border="1px solid #DCDCDC"
          borderRadius="10px"
          overFlow
          _onClick={() => {
            history.push(`/review/${props.reviewId}`);
          }}
        >
          <Grid width="360px">
            <Grid width="100%">
              <Image src={props.reviewImg}></Image>
            </Grid>
            {/* <Image src={props.reviewImg}></Image> */}
          </Grid>
          <Grid width="360px">
            <Grid margin="5px 10px 0px 10px ">
              <Grid isFlex padding="0px 0px 5px 0px">
                <Grid flexLeft>
                  {props.userImg ? (
                    <>
                      <Image shape="circle" src={props.userImg} />
                    </>
                  ) : (
                    <>
                      <Image
                        shape="circle"
                        src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                      />
                    </>
                  )}
                  <Text size="14px" margin="0px 0px 0px 5px">
                    {props.nickname}의 모임
                  </Text>
                </Grid>
                <Grid>
                  <Text
                    align="right"
                    size="10px"
                    color="#666666"
                    margin="0px 5px"
                  >
                    {/* {Math.abs(props.writeDateBefore)}일전 */}
                    {timeCal(writeDate)}
                  </Text>
                  <Rating
                    name="read-only"
                    size="midieum"
                    value={props.star}
                    readOnly
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityReviewCard;
