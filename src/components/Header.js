import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Image, Text, Buttons, Icon } from '../elements';
import { history } from '../redux/configureStore';
import { userCreators } from '../redux/modules/user';
import Swal from 'sweetalert2';
import { getsCookie } from '../shared/Cookie';
import BookMark from '../assets/Icon/BookMark.svg';
import logo_header from '../assets/logo_header.svg';

import { useSelector } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = getsCookie('token');

  const users = useSelector((state) => state.user.userData?.data[0]);

  React.useEffect(() => {
    dispatch(userCreators.getUserDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width="1440px" margin="auto">
        <Container width="1440px">
          <Grid isFlex>
            <Grid
              flexLeft
              width="100%"
              height="100px"
              padding="0 0px 0 72px"
            >
              <Image
                shape="rec"
                width="127px"
                height="41px"
                cursor="pointer"
                src={logo_header}
                _onClick={() => {
                  history.push('/');
                }}
              />

              <Grid flexLeft margin="0px 25px">
                <Buttons
                  header
                  color="#333333"
                  bgColor="#fff"
                  _onClick={() => history.push('/searches')}
                >
                  참여하기
                </Buttons>
                <Buttons
                  header
                  color="#333333"
                  bgColor="#fff"
                  _onClick={() => history.push('/review')}
                >
                  커뮤니티
                </Buttons>
                <Buttons
                  header
                  color="#333333"
                  bgColor="#fff"
                  _onClick={() => {
                    history.push('/campaign');
                  }}
                >
                  캠페인
                </Buttons>
              </Grid>
            </Grid>

            <Grid padding="0 75px 0 0px">
              {is_login ? (
                <Grid flexRight width="430px" height="60px" padding="0">
                  <Grid flexLeft>
                    <Text
                      size="18px"
                      color="#333333"
                      bold
                      cursor
                      _onClick={() => history.push('/posting')}
                    >
                      모임만들기
                    </Text>
                    <Grid
                      isFlex
                      margin="0 0 0 55px"
                      cursor="pointer"
                      _onClick={() => {
                        history.push('/bookmark/my');
                      }}
                    >
                      <Text
                        align="center"
                        // width='130px'
                        padding="0 30px 0 auto"
                        borderRadius="10px"
                        cursor="pointer"
                        bold
                        size="18px"
                        color="#333333"
                      >
                        북마크
                      </Text>
                      <Icon
                        width="35px"
                        bottom="-1px"
                        cursor="pointer"
                        src={BookMark}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    isFlex
                    cursor="pointer"
                    _onClick={() => history.push('/my')}
                  >
                    <Text size="18px" margin="0 0 0 40px" color="#333333" bold>
                      {users?.nickname}
                    </Text>
                    <Image
                      shape="circle"
                      margin="0 0 0 15px"
                      size="38"
                      src={
                        users?.userImg
                          ? `${users?.userImg}`
                          : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                      }
                    />
                  </Grid>
                </Grid>
              ) : (
                <Grid isFlex width="400px" height="60px" padding="0">
                  <Text
                    bold
                    cursor
                    _onClick={() => {
                      Swal.fire({
                        text: '로그인해주세요.',
                        width: '360px',
                        confirmButtonColor: '#23c8af',
                      });
                      history.push('/login');
                    }}
                    size="18px"
                    color="#333333"
                  >
                    모임만들기
                  </Text>
                  <Text
                    size="18px"
                    cursor
                    _onClick={() => history.push('/login')}
                  >
                    로그인
                  </Text>
                  <Buttons
                    small_b
                    width="130px"
                    height="50px"
                    color="#fff"
                    bgColor="#333333"
                    borderRadius="10px"
                    _onClick={() => history.push('/signup')}
                  >
                    회원가입
                  </Buttons>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
