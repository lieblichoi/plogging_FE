import React from 'react';
import styled from 'styled-components';
import { Container, Text, Grid, Image, Buttons } from '../../elements/index';
import { check_icon } from '../../assets/Icon/check_icon.png';
const CheckSave = (props) => {
  return (
    <React.Fragment>
      <Container width="1440px">
        <MobileHeader>
          <Grid flexLeft height="56px" margin="0px 20px">
            <Image
              shape="circle"
              size="40"
              src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/mobheaderlogo.jpg"
            />
            <Text bold color="white" margin="0px 8px">
              줍깅 출석 관리
            </Text>
          </Grid>
        </MobileHeader>
        <Grid width="360px" height="600px" centerColumnFlex margin="auto">
          <Image
            shape="rec"
            width="152px"
            height="152px"
            src={
              'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/check_icon.png'
            }
          ></Image>
          <Text margin="10px 0px" color="#666666">
            출석이 저장되었습니다.
          </Text>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const MobileHeader = styled.div`
  width: 100%;
  height: 56px;
  background-color: #23c8af;
`;
export default CheckSave;
