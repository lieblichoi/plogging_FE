// ApplicationTab
import React from 'react';
import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
import { history } from '../../redux/configureStore';
import Location from '../../assets/Icon/Location.svg';
import Swal from 'sweetalert2';

const ApplicationTab = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Container>
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
            <Grid width='370px' isPosition='relative'>
              <Grid>
                <Image src={props.postImg} />
              </Grid>
              <Grid
                width='50px'
                height='24px'
                isPosition='absolute'
                top='16%'
                borderRadius='5px'
                bg='#23c8af'
                margin='8px 0px 0px 10px'
              >
                {props.dday > 0 ? (
                  <Text
                    align='center'
                    bold
                    color='white'
                    size='14px'
                    margin='2px 6px'
                  >
                    D-{props.dday}
                  </Text>
                ) : (
                  <Text
                    align='center'
                    bold
                    color='white'
                    size='14px'
                    margin='2px 6px'
                  >
                    마감
                  </Text>
                )}
              </Grid>
            </Grid>
            <Grid width='451px' margin='5px 18px 8px 18px'>
              <Grid flexLeft padding='0 0 10px 0'>
                <Icon width='30px' src={Location} />
                <Text size='14px' color='#acacac'>
                  서울시 {props.location}
                </Text>
              </Grid>
              <Grid height='168px'>
                <Text
                  width='421px'
                  margin='0 0 20px 0'
                  bold
                  size='24px'
                  textOverflow='ellipsis'
                  whiteSpace='nowrap'
                  overFlow='hidden'
                  display='block'
                >
                  {props.title}
                </Text>
                <Grid flexLeft>
                  <Grid
                    width='80px'
                    height='28px'
                    border='1px solid #23C8AF'
                    bg='#23C8AF'
                    padding='2px '
                    borderRadius='15px'
                    margin='0px 6px 0px 0px'
                  >
                    <Text align='center' color='#eeeeee' size='14px'>
                      {props.type}
                    </Text>
                  </Grid>
                  <Grid
                    width='80px'
                    height='28px'
                    border='1px solid #23C8AF'
                    bg='#23C8AF'
                    padding='2px '
                    borderRadius='15px'
                    margin='0px 6px 0px 0px'
                  >
                    <Text align='center' color='#eeeeee' size='14px'>
                      {props.location}
                    </Text>
                  </Grid>
                  <Grid
                    width='80px'
                    height='28px'
                    border='1px solid #23C8AF'
                    bg='#23C8AF'
                    padding='2px '
                    borderRadius='15px'
                    margin='0px 6px 0px 0px'
                  >
                    <Text align='center' color='#eeeeee' size='14px'>
                      {props.distance}
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
              <Grid flexLeft padding='0'>
                {props.userImg === null ? (
                  <Image
                    shape='circle'
                    src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                  />
                ) : (
                  <Image shape='circle' src={props.userImg} />
                )}
                <Text size='18px' color='#ACACAC' margin='0 0 0 5px'>
                  {props.writerName} 의 모임
                </Text>
              </Grid>
            </Grid>
            <Grid height='257px' margin='0 10px 0 0'>
              <Grid width='278px' height='87px' margin='60px 0 30px 0'>
                <Grid flexLeft padding='0 0 5px 0'>
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
                    {props.nowPeople}명 / {props.limitPeople}명
                  </Text>
                </Grid>
                <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모집기간
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.startDate}~{props.endDate}
                  </Text>
                </Grid>
              </Grid>
              <Grid center margin='35px 0 10px 0'>
                {(() => {
                  if (
                    props.attendation === false &&
                    props.reviewInfo === false
                  ) {
                    return (
                      <Buttons
                        width='270px'
                        medium_b
                        _onClick={() => history.push(`/post/${props.postId}`)}
                      >
                        모임 상세보기
                      </Buttons>
                    );
                  }
                  if (props.reviewInfo === true) {
                    return (
                      <Buttons
                        width='270px'
                        dis_medium
                        _onClick={() => {
                          Swal.fire({
                            text: '이미 후기작성을 하신 것 같아요!',
                            width: '360px',
                            confirmButtonColor: '#23c8af',
                          });
                        }}
                      >
                        후기 작성완료
                      </Buttons>
                    );
                  }
                  if (props.attendation === true) {
                    return (
                      <Buttons
                        width='270px'
                        medium_b
                        _onClick={() =>
                          history.push(`/reviewwrite/${props.postId}`)
                        }
                      >
                        후기 작성하기
                      </Buttons>
                    );
                  }
                })()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ApplicationTab;
