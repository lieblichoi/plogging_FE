import React from 'react';
import { Container, Grid, Image, Text, Buttons } from '../../elements/index';
// 이미지
import lostJoopgging from '../../assets/Icon/lostJoopgging.svg';

const UnApplicationCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid width='1170px' height='400px' margin='0 auto'>
          <Grid centerColumnFlex width='100%' isPosition='relative'>
            <Image
              shape='rec'
              width='280px'
              height='210px'
              margin='0px 0px 30px 0px'
              src={lostJoopgging}
            />
          </Grid>
          <Text align='center' bold color='#666666' margin='5px 0px'>
            신청한 줍깅 모임이 없어요!
          </Text>
          <Text align='center' bold color='#666666' margin='5px 0px'>
            자신에게 맞는 줍깅 모임을 찾아보는건 어떨까요?
          </Text>
          <Grid center margin='25px 0px'>
            <Buttons
              nullLink
              _onClick={() => {
                window.location.replace(`/searches`);
              }}
            >
              줍깅 모임 찾으러가기
            </Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UnApplicationCard;
