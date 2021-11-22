// ReviewTab card
import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
import { history } from '../../redux/configureStore';
import Location from '../../assets/Icon/Location.svg';
import Rating from '@mui/material/Rating';

const ReviewTab = (props) => {
  return (
    <React.Fragment>
      <Container cursor='pointer'>
        <Grid>
          <Grid
            maxWidth='1161px'
            height='257px'
            border='1px solid #DCDCDC'
            borderRadius='7px'
            margin='40px auto'
            overFlow
            isFlex
          >
            <Grid width='370px'>
              <Image width='370px' src={props.reviewImg} />
              {/* <Grid
                width='50px'
                height='24px'
                isPosition='absolute'
                top='2%'
                borderRadius='5px'
                bg='#23c8af'
                margin='8px 0px 0px 8px'
              >
                <Text
                  align='center'
                  bold
                  color='white'
                  size='14px'
                  margin='2px 6px'
                >
                  D-{props.dday}
                </Text>
              </Grid> */}
            </Grid>
            <Grid width='451px' margin='5px 18px 8px 18px'>
              <Grid flexLeft padding='0 0 10px 0'>
                <Icon width='30px' src={Location} />
                <Text size='14px'>서울시 {props.location}</Text>
              </Grid>
              <Grid height='168px'>
                <Text
                  width='421px'
                  margin='0 0 5px 0'
                  bold
                  size='24px'
                  textOverflow='ellipsis'
                  whiteSpace='nowrap'
                  overFlow='hidden'
                  display='block'
                >
                  {props.title}
                </Text>

                <Grid flexLeft padding='0 0 5px 0'>
                  <Text
                    height='78px'
                    size='18px'
                    textOverflow='ellipsis'
                    overFlow='hidden'
                    display='-webkit-box'
                    webkitLine='3'
                    webkitBox='vertical'
                  >
                    {props.content}
                  </Text>
                </Grid>
                <Grid flexLeft padding='0'>
                  <StarSize>
                    <Grid flexLeft>
                      <Text
                        align='center'
                        size='18px'
                        color='#333'
                        margin='0px 5px 0px 0px '
                        bold
                      >
                        {' '}
                        평점{' '}
                      </Text>
                      <Rating
                        name='read-only'
                        size='mideum'
                        value={props.star}
                        readOnly
                      />
                    </Grid>
                  </StarSize>
                </Grid>
              </Grid>
              <Grid flexLeft padding='0'>
                <>
                  <Image
                    shape='circle'
                    src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                  />
                </>
                <Text size='18px' color='#ACACAC' margin='0 0 0 5px'>
                  {props.nickname} 의 모임
                </Text>
              </Grid>
            </Grid>
            <Grid height='257px' margin='0 10px 0 0'>
              <Grid width='278px' height='87px' margin='60px 0 30px 0'>
                {/* <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모임날짜
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.runningDate}
                  </Text>
                </Grid>
                <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모집인원
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.limitPeople}명
                  </Text>
                </Grid>
                <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모집기간
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.startDate}~{props.endDate}
                  </Text>
                </Grid> */}
              </Grid>
              <Grid margin='35px 0 10px 0'>
                <Buttons
                  width='270px'
                  medium_b
                  _onClick={() => history.push(`/review/${props.reviewId}`)}
                >
                  후기 상세보기
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const StarSize = styled.span`
  .MuiRating-root.MuiRating-sizeLarge.MuiRating-readyOnly.css-1x1lh1c-MuiRating-root {
    font-size: 50px;
  }
`;

export default ReviewTab;
