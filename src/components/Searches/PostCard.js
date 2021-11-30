import React from 'react';
import { Container, Grid, Image, Text, Tags } from '../../elements/index';
import emptyPinIcon from '../../assets/Icon/emptyPinIcon.svg';
import BookMark from '../../assets/Icon/BookMark.svg';
import BookMarkOn from '../../assets/Icon/bookmarkOn.svg';

import { history } from '../../redux/configureStore';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/modules/post';
import Swal from 'sweetalert2';

import { getsCookie } from '../../shared/Cookie';

const PostCard = (props) => {
  const dispatch = useDispatch();
  const is_login = getsCookie('token');
  const postId = props.postId;
  const img = props.postImg;
  const bookMarkInfo = props.bookMarkInfo;
  const deadLine = props.limitPeople - props.nowPeople;
  const dDay = props.dday;

  const [ChangeButton, setChangeButton] = React.useState(false);
  const onClickChangeButton = () => {
    setChangeButton(!ChangeButton);
  };

  const CardClick = () => {
    history.push(`/post/${postId}`);
  };

  return (
    <React.Fragment>
      <Container>
        <Grid
          width="370px"
          height="405px"
          border="1px solid #d8d8d8"
          borderRadius="10px"
          overFlow
          hovers
        >
          <Grid width="100%" isPosition="relative">
            <Image
              height="220px"
              shape="rec"
              src={
                img
                  ? img
                  : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/defaultCardImg.jpg'
              }
              _onClick={CardClick}
              cursor="pointer"
            />
            <Grid>
              {dDay < 0 ? (
                deadLine == 0 ? (
                  <Grid isPosition="absolute" top="4%" margin="0px 10px">
                    <Tags rec_black>모집마감</Tags>
                  </Grid>
                ) : (
                  <Grid isPosition="absolute" top="4%" margin="0px 10px">
                    <Tags rec_black>모집마감</Tags>
                  </Grid>
                )
              ) : deadLine == 0 ? (
                <Grid isPosition="absolute" top="4%" margin="0px 10px">
                  <Tags rec_blue>정원마감</Tags>
                </Grid>
              ) : dDay == 0 ? (
                <Grid isPosition="absolute" top="4%" margin="0px 10px">
                  <Tags rec_red>마감임박</Tags>
                </Grid>
              ) : (
                <Grid isPosition="absolute" top="4%" margin="0px 10px">
                  <Tags rec_green>D-{dDay}</Tags>
                </Grid>
              )}
              {deadLine == 1 ? (
                <Grid isPosition="absolute" top="4%" margin="0px 0px 0px 90px">
                  <Tags rec_blue>정원임박</Tags>
                </Grid>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
          <Grid padding="5px 20px">
            <Grid isFlex>
              <Grid flexLeft margin="0px 0px 0px -1px">
                <Image
                  shape="rec"
                  width="20px"
                  height="25px"
                  src={emptyPinIcon}
                  margin="0px 5px 0px 0px"
                />
                <Text color="#acacac" size="14px">
                  서울시 {props.location}
                </Text>
              </Grid>
              {/* 북마크 정보 받아와지면 주석 해제 */}
              {bookMarkInfo ? (
                <Grid
                  margin="0px -5px 0px 0px"
                  _onClick={() => {
                    if (is_login) {
                      dispatch(postActions.setBookMarkDB(postId));
                      onClickChangeButton();
                    } else {
                      Swal.fire({
                        text: '로그인해주세요.',
                        width: '360px',
                        confirmButtonColor: '#23c8af',
                      });
                      history.push('/login');
                    }
                  }}
                  cursor="pointer"
                >
                  {ChangeButton ? (
                    <Image
                      shape="rec"
                      width="30px"
                      height="35px"
                      src={BookMark}
                      cursor="pointer"
                    />
                  ) : (
                    <Image
                      shape="rec"
                      width="30px"
                      height="35px"
                      src={BookMarkOn}
                      cursor="pointer"
                    />
                  )}
                </Grid>
              ) : (
                <Grid
                  margin="0px -5px 0px 0px"
                  _onClick={() => {
                    if (is_login) {
                      dispatch(postActions.setBookMarkDB(postId));
                      onClickChangeButton();
                    } else {
                      Swal.fire({
                        text: '로그인해주세요.',
                        width: '360px',
                        confirmButtonColor: '#23c8af',
                      });
                      history.push('/login');
                    }
                  }}
                  cursor="pointer"
                >
                  {!ChangeButton ? (
                    <Image
                      shape="rec"
                      width="30px"
                      height="35px"
                      src={BookMark}
                      cursor="pointer"
                    />
                  ) : (
                    <Image
                      shape="rec"
                      width="30px"
                      height="35px"
                      src={BookMarkOn}
                      cursor="pointer"
                    />
                  )}
                </Grid>
              )}
            </Grid>
            <Grid flexLeft>
              <Text
                size="20px"
                color="#333333"
                bold
                _onClick={CardClick}
                cursor="pointer"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overFlow="hidden"
                display="block"
              >
                {props.title}
              </Text>
            </Grid>

            <Grid flexLeft margin="10px 0px 5px 0px">
              <Text size="14px" color="#333333" bold margin="0px 5px 0px 0px">
                일시
              </Text>
              <Text size="14px" color="#666666">
                {props.runningDate}
              </Text>
            </Grid>
            <Grid flexLeft margin="0px 0px 10px 0px">
              <Text size="14px" color="#333333" bold margin="0px 5px 0px 0px">
                정원
              </Text>
              <Text size="14px" color="#666666">
                {props.nowPeople}명/{props.limitPeople}명
              </Text>
            </Grid>
            <Grid isFlex margin="-5px 0px 0px 0px">
              <Grid flexLeft>
                <Image
                  shape="circle"
                  size="28"
                  src={
                    props.userImg
                      ? props.userImg
                      : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                  }
                />
                <Text size="14px" color="#333333" bold margin="0px 0px 0px 5px">
                  {props.nickname ? props.nickname : '예비줍깅러'}
                </Text>
                <Text size="14px" color="#666666">
                  님의 모임
                </Text>
              </Grid>
              <Grid flexLeft margin="10px 0px 10px 0px">
                <Grid margin="0px 5px 0px 0px">
                  <Tags>{props.type}</Tags>
                </Grid>
                <Grid>
                  <Tags>{props.distance}</Tags>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostCard;
