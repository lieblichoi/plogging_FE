// MyprofileTab
import React, { Component } from 'react';
import { Container, Grid, Image, Text, Buttons, Tags } from '../../elements';

class MyprofileTab extends Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render(props) {
    return (
      <React.Fragment>
        <Container>
          <Grid mainFlex justifyContent='center'>
            <Text size='24px'>프로필</Text>
            <Image
              src='https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266'
              shape='circle'
            />
          </Grid>
          <Grid mainFlex justifyContent='center'>
            <Text size='24px'>닉네임</Text>
            <Text size='24px'>닉네임</Text>
          </Grid>
          <Grid mainFlex justifyContent='center'>
            <Text size='24px'>자기소개</Text>
            <Text size='24px'>자기소개</Text>
          </Grid>
          <Grid mainFlex justifyContent='center'>
            <Text size='24px'>관심사 설정</Text>
          </Grid>
          <Grid mainFlex justifyContent='center'>
            <Buttons large_b>회원정보 수정</Buttons>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default MyprofileTab;
