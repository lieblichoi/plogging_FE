import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { Container, Grid, Image, Text, Buttons } from '../../elements/index';
import { getsCookie } from '../../shared/Cookie';
import { history } from '../../redux/configureStore';
import MainNull from '../../assets/Icon/MainNull.svg';

const ReviewCardUn = (props) => {
  const is_login = getsCookie('token');

  return (
    <React.Fragment>
      <Container>
        <Grid width="1170px" height="400px">
          <Grid centerColumnFlex width="100%" isPosition="relative">
            <Image
              shape="rec"
              width="120px"
              height="105px"
              margin="80px 0px 30px 0px"
              src={MainNull}
            />
          </Grid>
          <Text align="center" bold color="#666666" margin="5px 0px">
            줍깅 후기가 아직 없습니다.
          </Text>
          <Text align="center" bold color="#666666" margin="5px 0px">
            줍깅 모임을 참여하고 멋진 후기를 남겨주세요!
          </Text>
          <Grid center margin="25px 0px">
            <Buttons
              nullLink
              _onClick={() => {
                window.location.replace(`/searches`);
              }}
            >
              함께 줍깅하러 가기
            </Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ReviewCardUn;
