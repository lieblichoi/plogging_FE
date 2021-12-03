import React from 'react';
import { Grid, Image, Text } from '../elements';
import Swal from 'sweetalert2';
import logo_footer from '../assets/logo_footer.svg';

export const Footer = () => {
  return (
    <React.Fragment>
      <Grid margin="100px 0 0 0">
        <Grid margin="auto" width="100%" height="310px" bg="#f8f8f8">
          <Grid flexLeft margin="auto" width="1290px" height="100%">
            <Grid margin="0px 120px 0px 0px">
              <Image
                shape="rec"
                width="185px"
                height="63px"
                src={logo_footer}
              />
              <Grid flexLeft>
                <Text
                  margin="20px 0px"
                  size="14px"
                  cursor="pointer"
                  _onClick={() => {
                    Swal.fire({
                      text: '서비스 준비중 입니다.',
                      width: '360px',
                      confirmButtonColor: '#23c8af',
                    });
                  }}
                >
                  줍깅 운영정책
                </Text>
                <Text size="14px" margin="0px 5px">
                  |
                </Text>
                <Text
                  margin="20px 0px"
                  size="14px"
                  cursor="pointer"
                  _onClick={() => {
                    Swal.fire({
                      text: '서비스 준비중 입니다.',
                      width: '360px',
                      confirmButtonColor: '#23c8af',
                    });
                  }}
                >
                  개인정보처리방침
                </Text>
                <Text size="14px" margin="0px 5px">
                  |
                </Text>
                <Text
                  margin="20px 0px"
                  size="14px"
                  cursor="pointer"
                  _onClick={() => {
                    Swal.fire({
                      text: '서비스 준비중 입니다.',
                      width: '360px',
                      confirmButtonColor: '#23c8af',
                    });
                  }}
                >
                  이용약관
                </Text>
              </Grid>
            </Grid>
            <Grid margin="0px 120px 0px 0px">
              <Text bold>Service</Text>
              <Text
                margin="20px 0px 10px 0px"
                size="14px"
                cursor="pointer"
                _onClick={() => {
                  Swal.fire({
                    text: '서비스 준비중 입니다.',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                }}
              >
                서비스 소개
              </Text>
              <Text
                margin="0px 0px 20px 0px"
                size="14px"
                cursor="pointer"
                _onClick={() => {
                  Swal.fire({
                    text: '서비스 준비중 입니다.',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                }}
              >
                서비스 이용 방법
              </Text>
            </Grid>
            <Grid margin="0px 120px 0px 0px">
              <Text bold>Support</Text>
              <Text
                margin="20px 0px 10px 0px"
                size="14px"
                cursor="pointer"
                _onClick={() => {
                  Swal.fire({
                    text: '서비스 준비중 입니다.',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                }}
              >
                공지사항
              </Text>
              <Text
                margin="0px 0px 20px 0px"
                size="14px"
                cursor="pointer"
                _onClick={() => {
                  Swal.fire({
                    text: '서비스 준비중 입니다.',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                }}
              >
                문의하기
              </Text>
            </Grid>
            <Grid>
              <Text bold>FAQ</Text>
              <Text
                margin="20px 0px 50px 0px"
                size="14px"
                cursor="pointer"
                _onClick={() => {
                  Swal.fire({
                    text: '서비스 준비중 입니다.',
                    width: '360px',
                    confirmButtonColor: '#23c8af',
                  });
                }}
              >
                자주 묻는 질문
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
