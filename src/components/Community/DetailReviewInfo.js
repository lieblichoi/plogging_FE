import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import Location from '../../assets/Icon/Location.svg';
import Rating from '@mui/material/Rating';

const DetailPostInfo = (props) => {
  const detail = props.detail;

  const userImg = props.userImg;
  const reviewNickName = detail?.nickname;
  const star = Number(detail?.star);
  const level = Number(detail?.levelRate);
  const sati = Number(detail?.satiRate);
  const trash = Number(detail?.trashRate);

  return (
    <React.Fragment>
      <Grid flexLeft padding="30px 0px 0px 0px">
        {userImg ? (
          <Image size="50" shape="circle" src={userImg} />
        ) : (
          <Image
            size="50"
            shape="circle"
            src={
              'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
            }
          />
        )}

        <Text size="14px" margin="0px 0px 0px 10px ">
          {' '}
          {reviewNickName} 님
        </Text>
      </Grid>
      <StarSize>
        <Grid flexLeft>
          <Text align="center" color="#333" margin="0px 30px 0px 0px ">
            {' '}
            총평{' '}
          </Text>
          <Rating name="read-only" size="large" value={star} readOnly />
        </Grid>
      </StarSize>

      <Grid width="280px" margin="20px 0px">
        <section>
          <Grid isFlex>
            <Text color="#333" size="15px" margin="15px 0px 15px 0px">
              코스 난이도{' '}
            </Text>
            <Rating name="read-only" size="large" value={level} readOnly />
          </Grid>
        </section>
        <section>
          <Grid isFlex>
            <Text color="#333" size="15px" margin="15px 0px 15px 0px">
              쓰레기 양{' '}
            </Text>
            <Rating name="read-only" size="large" value={trash} readOnly />
          </Grid>
        </section>
        <section>
          <Grid isFlex>
            <Text color="#333" size="15px" margin="15px 0px 15px 0px">
              만족도
            </Text>
            <Rating name="read-only" size="large" value={sati} readOnly />
          </Grid>
        </section>
      </Grid>
    </React.Fragment>
  );
};
const StarSize = styled.span`
  .MuiRating-root.MuiRating-sizeLarge.MuiRating-readyOnly.css-1x1lh1c-MuiRating-root {
    font-size: 50px;
  }
`;
export default DetailPostInfo;
