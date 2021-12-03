import React from 'react';
import Swal from 'sweetalert2';

import { Container, Grid, Image, Text, Buttons } from '../../elements/index';
import { getsCookie } from '../../shared/Cookie';
import lostJoopgging from '../../assets/Icon/lostJoopgging.svg';

const PostCardUn = (props) => {
  const is_login = getsCookie('token');

  return (
    <React.Fragment>
      <Container>
        <Grid width="1170px" height="400px">
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
            조건에 맞는 모임이 아직 없습니다.
          </Text>
          <Text align="center" bold color="#666666" margin="5px 0px">
            나만의 줍깅 모임을 직접 만들어 보세요!
          </Text>
          <Grid center margin="25px 0px">
            <Buttons
              nullLink
              _onClick={() => {
                if (is_login) {
                  window.location.replace(`/posting`);
                } else {
                  Swal.fire({
                    text: '모임 만들기는 로그인이 필요합니다!',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                  window.location.replace(`/login`);
                }
              }}
            >
              나만의 줍깅 모임 만들러 가기
            </Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostCardUn;
