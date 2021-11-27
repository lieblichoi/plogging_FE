import React from 'react';
import styled from 'styled-components';

import {
  Container,
  Grid,
  Button,
  Buttons,
  Image,
  Text,
} from '../../../elements/index';
import { history } from '../../../redux/configureStore';
import MainBannerPostingImg from '../../../assets/MainBanner/MainBannerPosting.jpg';

import { getsCookie } from '../../../shared/Cookie';
import Swal from 'sweetalert2';

const MainBannerPosting = (props) => {
  const post_list = props.post_list?.userInfo;
  const is_login = getsCookie('token');
  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid centerFlex isPosition="relative">
          <Image
            shape="rec"
            height="600px"
            width="1440px"
            src={MainBannerPostingImg}
            // cursor="pointer"
            // _onClick={() => {
            //   history.push('/campaign/1');
            // }}
          />
        </Grid>
        <Grid maxWidth="100%" minWidth="1440px">
          <Grid top="100px" isPosition="absolute">
            <Grid zIndex="-1" margin="75px 140px">
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
                  지금 바로 함께 모임을 만들어 주세요!
                </Text>
              </Grid>

              <Grid margin="41px 0px">
                {is_login ? (
                  <>
                    <Buttons
                      medium_b
                      // margin="41px 0px"
                      _onClick={() => {
                        history.push('/posting');
                      }}
                    >
                      모임 만들러 가기
                    </Buttons>
                  </>
                ) : (
                  <>
                    <Buttons
                      medium_b
                      // margin="41px 0px"
                      _onClick={() => {
                        Swal.fire({
                          text: '로그인해주세요.',
                          width: '360px',
                          confirmButtonColor: '#23c8af',
                        });
                        history.push('/login');
                      }}
                    >
                      모임 만들러 가기
                    </Buttons>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const SlideImage = styled.img`
  width: 100%;
  height: 600px;
  overflow: hidden;
  object-fit: cover;
  display: block;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-image: url({MainBannerPosting});
`;

export default MainBannerPosting;
