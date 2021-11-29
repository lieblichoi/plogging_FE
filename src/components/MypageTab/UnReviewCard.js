import React from 'react';
import { history } from '../../redux/configureStore';
import { Container, Grid, Image, Text, Buttons } from '../../elements/index';
// 이미지
import lostJoopgging from '../../assets/Icon/lostJoopgging.svg';

const UnReviewCard = (props) => {
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
            작성한 후기가 없어요!
          </Text>
          <Text align='center' bold color='#666666' margin='5px 0px'>
            참여했던 줍깅에 대한 첫 후기를 남겨주세요!
          </Text>
          <Grid center margin='25px 0px'>
            <Buttons
              nullLink
              _onClick={() => {
                history.push(`/crews/my`);
              }}
            >
              첫 후기 작성하러 가기
            </Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UnReviewCard;
