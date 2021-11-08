import React from 'react';

import { Text, Container, Grid, Button, Image } from '../elements/index';
import Slider from '../components/Main/Slider';
import CardSlide from '../components/Main/CardSlide';
import ReviewSlide from '../components/Main/ReviewSlide';

import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list.data);
  // const bookMark_list = useSelector((state) => )
  const is_login = document.cookie;
  const [hot, setHot] = React.useState(true);
  const [recent, setRecent] = React.useState(false);
  const [distance, setDistance] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [close, setClose] = React.useState(false);
  const [location, setLocation] = React.useState(false);

  console.log(post_list);

  const changeHot = () => {
    setHot(true);
    setRecent(false);
    setDistance(false);
    setType(false);
    setClose(false);
    setLocation(false);
  };
  const changeClose = () => {
    setClose(true);
    setHot(false);
    setRecent(false);
    setDistance(false);
    setType(false);
    setLocation(false);
  };

  const changeType = () => {
    setType(true);
    setRecent(false);
    setHot(false);
    setDistance(false);
    setClose(false);
    setLocation(false);
  };
  const changeDistance = () => {
    setDistance(true);
    setRecent(false);
    setType(false);
    setHot(false);
    setClose(false);
    setLocation(false);
  };
  const changeRecent = () => {
    setRecent(true);
    setType(false);
    setHot(false);
    setDistance(false);
    setClose(false);
    setLocation(false);
  };
  const changeLocation = () => {
    setLocation(true);
    setRecent(false);
    setType(false);
    setHot(false);
    setDistance(false);
    setClose(false);
  };

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="100%">
        <Slider post_list={post_list} />

        <Grid margin="60px 135px">
          <Text bold size="30px">
            지금! 뜨고 있는 플로깅 장소
          </Text>
          <Grid flexLeft width="100%" margin="40px 0px 20px 0px">
            <Button
              margin="0px 10px 0px 0px "
              width="160px"
              height="46px"
              border={hot ? '3px solid #23c8af' : '2px solid #d8d8d8'}
              borderRadius="50px"
              bgColor="white"
              color={hot ? '#23c8af' : 'black'}
              value="hot"
              size="16px"
              bold
              _onClick={changeHot}
            >
              #핫플레이스 &#128293;
            </Button>
            <Button
              margin="0px 10px 0px 0px "
              width="160px"
              height="46px"
              border={close ? '3px solid #23c8af' : '2px solid #d8d8d8'}
              borderRadius="50px"
              bgColor="white"
              color={close ? '#23c8af' : 'black'}
              value="hot"
              size="16px"
              bold
              _onClick={changeClose}
            >
              #마감임박 &#9200;
            </Button>

            {is_login ? (
              <>
                <Button
                  margin="0px 10px 0px 0px "
                  width="160px"
                  height="46px"
                  border={type ? '3px solid #23c8af' : '2px solid #d8d8d8'}
                  borderRadius="50px"
                  bgColor="white"
                  color={type ? '#23c8af' : 'black'}
                  size="16px"
                  bold
                  _onClick={changeType}
                >
                  #서울{post_list?.userInfo.type}
                </Button>
                <Button
                  margin="0px 10px 0px 0px "
                  width="160px"
                  height="46px"
                  border={distance ? '3px solid #23c8af' : '2px solid #d8d8d8'}
                  borderRadius="50px"
                  bgColor="white"
                  color={distance ? '#23c8af' : 'black'}
                  size="16px"
                  bold
                  _onClick={changeDistance}
                >
                  #{post_list?.userInfo.distance}
                </Button>
                <Button
                  margin="0px 10px 0px 0px "
                  width="160px"
                  height="46px"
                  border={location ? '3px solid #23c8af' : '2px solid #d8d8d8'}
                  borderRadius="50px"
                  bgColor="white"
                  color={location ? '#23c8af' : 'black'}
                  size="16px"
                  bold
                  _onClick={changeLocation}
                >
                  #{post_list?.userInfo.location}
                </Button>
              </>
            ) : (
              <Button
                margin="0px 10px 0px 0px "
                width="160px"
                height="46px"
                border={recent ? '3px solid #23c8af' : '2px solid #d8d8d8'}
                borderRadius="50px"
                bgColor="white"
                color={recent ? '#23c8af' : 'black'}
                size="16px"
                bold
                _onClick={changeRecent}
              >
                최신줍깅모임 &#127939;
              </Button>
            )}
          </Grid>
          {hot && !recent && !type && !distance && !close && !location ? (
            <CardSlide post_list={post_list?.hot} />
          ) : (
            ''
          )}
          {!hot && recent && !type && !distance && !close && !location ? (
            <CardSlide post_list={post_list?.recent} />
          ) : (
            ''
          )}
          {!hot && !recent && type && !distance && !close && !location ? (
            <CardSlide post_list={post_list?.type} />
          ) : (
            ''
          )}
          {!hot && !recent && !type && distance && !close && !location ? (
            <CardSlide post_list={post_list?.distance} />
          ) : (
            ''
          )}
          {!hot && !recent && !type && !distance && close && !location ? (
            <CardSlide post_list={post_list?.close} />
          ) : (
            ''
          )}
          {!hot && !recent && !type && !distance && !close && location ? (
            <CardSlide post_list={post_list?.location} />
          ) : (
            ''
          )}

          <Grid margin="100px 0px 0px 0px">
            <Text size="28px" bold margin="0px 0px 40px 0px">
              플로거들 커뮤니티
            </Text>
            <ReviewSlide post_list={post_list?.reviews} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Main;
