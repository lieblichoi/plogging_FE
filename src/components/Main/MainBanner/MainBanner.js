import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Buttons, Text } from '../../../elements/index';
import { history } from '../../../redux/configureStore';
import mainBaner from '../../../assets/Icon/mainBanner.png';
import { getsCookie } from '../../../shared/Cookie';

const MainBanner = (props) => {
  const post_list = props.post_list?.userInfo;
  const is_login = getsCookie('token');
  return (
    <React.Fragment>
      <Container width="100%">
        <SlideImage src={mainBaner} />

        <Grid top="100px" isPosition="absolute">
          <Grid zIndex="-1" margin="-30px 135px">
            <Grid>
              {is_login ? (
                <Text color="#333333" bold size="28px">
                  {post_list?.nickname}님,
                </Text>
              ) : (
                <Text color="#333333" bold size="28px">
                  예비줍깅러님,
                </Text>
              )}

              <Text color="#333333" bold size="40px">
                Would You Like 줍깅?
              </Text>
            </Grid>
            <Grid marigin="14px 0px">
              <Text margin="3px 0px" color="#333333" size="14px">
                조깅 또는 러닝을 하면서 길가의 쓰레기를 수거하는 착한달리기,
                줍깅!
              </Text>
              <Text margin="3px 0px" color="#333333" size="14px">
                지구를 구하는 한걸음, 줍깅이 궁금하다면?
              </Text>
              <Text margin="3px 0px" color="#333333" size="14px">
                지금 바로 함께 참여해주세요!
              </Text>
            </Grid>

            {/* <Button
              margin="41px 0px"
              bgColor="transparent"
              color="#d8d8d8"
              bold
              size="18px"
              width="278px"
              height="54px"
              border="2px solid #d8d8d8"
              borderRadius="10px"
              _onClick={() => {
                history.push('/posting');
              }}
            >
              같이 줍깅하러 가기
            </Button> */}
            <Grid margin="41px 0px">
              {is_login ? (
                <Buttons
                  medium_b
                  // margin="41px 0px"
                  _onClick={() => {
                    history.push('/posting');
                  }}
                >
                  같이 줍깅하러 가기
                </Buttons>
              ) : (
                <Buttons
                  medium_b
                  // margin="41px 0px"
                  _onClick={() => {
                    history.push('/login');
                  }}
                >
                  같이 줍깅하러 가기
                </Buttons>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const SlideImage = styled.img`
  width: 100%;
  height: 392px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export default MainBanner;
