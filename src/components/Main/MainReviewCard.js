import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Image, Text } from '../../elements/index';

import { history } from '../../redux/configureStore';
import BookMark from '../../assets/Icon/BookMark.svg';
import Rating from '@mui/material/Rating';

const MainReviewCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          hovers
          overFlow
          maxWidth="380px"
          height="280px"
          border="1px solid #DCDCDC"
          borderRadius="10px"
          bg="#f8f8f8"
          _onClick={() => {
            history.push(`/review/${props.reviewId}`);
          }}
        >
          <Grid>
            <Grid flexLeft>
              <Grid width="190px" isPosition="relative">
                <Image shape="rec" height="280px" src={props.reviewImg} />
                {/* <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F05jk8%2FbtqFNhPwZ8D%2FKSyAaHOZKrXHsq56K731e1%2Fimg.png" /> */}
              </Grid>
              <Grid
                columFlex
                padding="20px"
                margin="0px 0px"
                width="190px"
                height="280px"
              >
                <Rating
                  name="read-only"
                  size="mideum"
                  value={props.star}
                  readOnly
                />
                <Text
                  width="145px"
                  height="60px"
                  size="20px"
                  bold
                  margin="12px 0px"
                  textOverflow="ellipsis"
                  overFlow="hidden"
                  display="block"
                  webkitLine="3"
                  webkitBox="vertical"
                >
                  {/* <TextAbb> */}
                  {props.title}
                  {/* </TextAbb> */}
                </Text>

                <Text
                  width="145px"
                  height="80px"
                  size="14px"
                  textOverflow="ellipsis"
                  overFlow="hidden"
                  display="-webkit-box"
                  webkitLine="4"
                  webkitBox="vertical"
                >
                  {props.content}
                </Text>
                <Grid width="100%" flexLeft margin="15px 0px 0px 0px">
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
                  <Text bold size="16px" margin="0px 8px">
                    {props.nickname}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid height="115px" padding="5px 20px 0px 20px ">
            <Grid></Grid>
          </Grid> */}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainReviewCard;
