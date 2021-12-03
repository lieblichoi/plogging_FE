// ApplicationTab
import React from 'react';
import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
import { history } from '../../redux/configureStore';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../redux/modules/post';

import Location from '../../assets/Icon/Location.svg';
import BookMark from '../../assets/Icon/BookMark.svg';
import BookMarkOn from '../../assets/Icon/bookmarkOn.svg';

const MeetingManagement = (props) => {
  const dispatch = useDispatch();
  const postId = props.postId;
  const bookmarkInfo = props.bookmarkInfo;
  const bookMark = useSelector((state) => state.post.bookMark);
  const deadLine = props.limitPeople - props.nowPeople;

  const [ChangeButton, setChangeButton] = React.useState(false);
  const onClickChangeButton = () => {
    setChangeButton(!ChangeButton);
    // window.location.replace('/bookmark/my');
  };

  return (
    <React.Fragment>
      <Container>
        <Grid
          isFlex
          overFlow
          maxWidth="1160px"
          minWidth="1160px"
          height="257px"
          border="1px solid #ACACAC"
          borderRadius="10px"
          margin="20px auto"
        >
          <Grid width="370px" isPosition="relative">
            <Image src={props.postImg}></Image>

            {props.dday < 0 ? (
              <Grid
                width="68px"
                height="24px"
                isPosition="absolute"
                top="16%"
                borderRadius="5px"
                bg="#333333"
                margin="8px 0px 0px 8px"
              >
                <Text
                  align="center"
                  bold
                  color="white"
                  size="14px"
                  margin="2px 6px"
                >
                  모집마감
                </Text>
              </Grid>
            ) : props.dday === 0 ? (
              <Grid
                width="68px"
                height="24px"
                isPosition="absolute"
                top="16%"
                borderRadius="5px"
                bg="#FE642E"
                margin="8px 0px 0px 8px"
              >
                <Text
                  align="center"
                  bold
                  color="white"
                  size="14px"
                  margin="2px 6px"
                >
                  마감임박
                </Text>
              </Grid>
            ) : (
              <>
                <Grid
                  width="68px"
                  height="24px"
                  isPosition="absolute"
                  top="16%"
                  borderRadius="5px"
                  bg="#23c8af"
                  margin="8px 0px 0px 8px"
                >
                  <Text
                    align="center"
                    bold
                    color="white"
                    size="14px"
                    margin="2px 6px"
                  >
                    D-{props.dday}
                  </Text>
                </Grid>
              </>
            )}
            {deadLine <= 1 ? (
              <Grid
                minwidth="68px"
                height="24px"
                isPosition="absolute"
                top="16%"
                left="70px"
                borderRadius="5px"
                bg="#6984e4"
                margin="8px 0px 0px 12px"
              >
                <Text
                  align="center"
                  bold
                  color="white"
                  size="14px"
                  margin="2px"
                  padding="0px 4px"
                >
                  정원임박
                </Text>
              </Grid>
            ) : deadLine === 0 ? (
              <Grid
                minwidth="68px"
                height="24px"
                isPosition="absolute"
                top="16%"
                left="70px"
                borderRadius="5px"
                bg="#6984e4"
                margin="8px 0px 0px 12px"
              >
                <Text
                  align="center"
                  bold
                  color="white"
                  size="14px"
                  margin="2px"
                  padding="0px 4px"
                >
                  정원마감
                </Text>
              </Grid>
            ) : (
              ''
            )}
          </Grid>

          <Grid padding="10px" height="257px">
            <Grid width="450px" flexLeft margin="20px 0px">
              <Icon width="30px" src={Location} />
              <Text size="15px" color="#acacac">
                서울시 {props.location}
              </Text>
            </Grid>
            <Grid margin="20px 10px">
              <Text bold size="25px">
                {' '}
                {props.title}
              </Text>
            </Grid>
            <Grid margin="30px 10px">
              <section>
                <Grid flexLeft>
                  <Grid
                    width="80px"
                    height="28px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="15px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text align="center" color="#fff" size="14px">
                      {props.type}
                    </Text>
                  </Grid>
                  <Grid
                    width="80px"
                    height="28px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="15px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text align="center" color="#fff" size="14px">
                      {props.distance}
                    </Text>
                  </Grid>
                  <Grid
                    width="80px"
                    height="28px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="15px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text align="center" color="#fff" size="14px">
                      {props.location}
                    </Text>
                  </Grid>
                </Grid>
                <Grid flexLeft margin="35px 0px 0px 0px">
                  {props.userImg ? (
                    <>
                      <Image shape="circle" src={props.userImg} />
                    </>
                  ) : (
                    <>
                      <Image
                        shape="circle"
                        src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                      />
                    </>
                  )}
                  <Text margin="0px 10px" size="14px" color="#333333">
                    {props.writerName}의 모임
                  </Text>
                </Grid>
              </section>
            </Grid>
          </Grid>

          <Grid maxWidth="350px" height="257px" centerFlex margin="0px 20px">
            <Grid>
              <Grid
                flexRight
                _onClick={() => {
                  onClickChangeButton();
                }}
              >
                {bookmarkInfo ? (
                  <Grid
                    _onClick={() => {
                      dispatch(postActions.setBookMarkDB(postId));
                      onClickChangeButton();
                    }}
                  >
                    {!ChangeButton ? (
                      <Image
                        shape="rec"
                        width="30px"
                        height="35px"
                        src={BookMarkOn}
                        cursor="pointer"
                      />
                    ) : (
                      <Image
                        shape="rec"
                        width="30px"
                        height="35px"
                        src={BookMark}
                        cursor="pointer"
                      />
                    )}
                  </Grid>
                ) : (
                  <Grid
                    _onClick={() => {
                      dispatch(postActions.setBookMarkDB(postId));
                      onClickChangeButton();
                    }}
                  >
                    {ChangeButton ? (
                      <Image
                        shape="rec"
                        width="30px"
                        height="35px"
                        src={BookMarkOn}
                        cursor="pointer"
                      />
                    ) : (
                      <Image
                        shape="rec"
                        width="30px"
                        height="35px"
                        src={BookMark}
                        cursor="pointer"
                      />
                    )}
                  </Grid>
                )}
              </Grid>
              <Grid flexLeft margin="20px 0px 10px 0px">
                <Text size="14px" bold margin="0px 20px 0px 0px">
                  모임날짜
                </Text>
                <Text size="14px" color="#666666">
                  {props.runningDate}
                </Text>
              </Grid>
              <Grid flexLeft margin="0px 0px 10px 0px">
                <Text size="14px" bold margin="0px 20px 0px 0px">
                  모임인원
                </Text>
                <Text size="14px" color="#666666">
                  {' '}
                  {props.nowPeople}명 / {props.limitPeople}명{' '}
                </Text>
              </Grid>
              <Grid flexLeft margin="0px 0px 10px 0px">
                <Text size="14px" bold margin="0px 20px 0px 0px">
                  모집기간
                </Text>
                <Text size="14px" color="#666666">
                  {props.startDate} ~ {props.endDate}
                </Text>
              </Grid>
              <Grid margin="30px 0px 0px 0px">
                <Buttons
                  enter
                  _onClick={() => {
                    history.push(`/post/${props.postId}`);
                  }}
                >
                  {' '}
                  모임 상세보기
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MeetingManagement;
