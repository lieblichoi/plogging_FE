import React from 'react';

import { Container, Grid, Image, Text, Buttons } from '../../elements/index';
import { getsCookie } from '../../shared/Cookie';
// import { history } from '../../redux/configureStore';
import MainNull from '../../assets/Icon/MainNull.svg';
import lostJoopgging from '../../assets/Icon/lostJoopgging.svg';

const UnBookMarkCard = (props) => {
  //   const isLogin = getsCookie('token');

  return (
    <React.Fragment>
      <Container>
        <Grid width="1170px" height="400px" margin="0px auto">
          <Grid centerColumnFlex width="100%" isPosition="relative">
            <Image
              shape="rec"
              // width="120px"
              // height="105px"
              width="280px"
              height="210px"
              margin="0px 0px 30px 0px"
              // src={MainNull}
              src={lostJoopgging}
            />
          </Grid>
          <Text align="center" bold color="#666666" margin="5px 0px">
            북마크한 모임이 아직 없습니다.
          </Text>
          <Text align="center" bold color="#666666" margin="5px 0px">
            북마크를 하고 줍깅 모임을 참여해보세요!
          </Text>
          <Grid center margin="25px 0px">
            <Buttons
              nullLink
              _onClick={() => {
                window.location.replace(`/searches`);
              }}
            >
              북마크 하러가기
            </Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UnBookMarkCard;
