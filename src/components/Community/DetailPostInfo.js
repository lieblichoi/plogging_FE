import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import Location from '../../assets/Icon/Location.svg';

const DetailPostInfo = (props) => {
  const post = props.post;

  const postTitle = post?.title;
  const postUserImg = post?.userImg;
  const postNickName = post?.nickname;
  const runningDate = post?.runningDate;
  const limitPeople = post?.limitPeople;
  const type = post?.type;
  const location = post?.location;
  const distance = post?.distance;
  return (
    <React.Fragment>
      <Container>
        <Grid
          width="370px"
          height="240px"
          border="1px solid #DCDCDC"
          borderRadius="10px"
          overFlow
        >
          <Grid width="370px" height="120px" padding="15px">
            <Grid isFlex>
              <Grid flexLeft>
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
                <Text size="14px" margin="0px 5px">
                  {' '}
                  {postNickName}님의 모임
                </Text>
              </Grid>
              <section>
                <Grid flexRight>
                  <Grid
                    width="66px"
                    height="22px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="9px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text
                      align="center"
                      color="#eeeeee"
                      size="9px"
                      // margin="2px 6px"
                    >
                      {type}
                    </Text>
                  </Grid>
                  <Grid
                    width="66px"
                    height="22px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="9px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text
                      align="center"
                      color="#eeeeee"
                      size="9px"
                      // margin="2px 6px"
                    >
                      {distance}
                    </Text>
                  </Grid>
                </Grid>
              </section>
            </Grid>
            <Grid margin="0px 0px 5px 0px">
              <Text bold size="20px">
                {postTitle}
              </Text>

              <Grid flexLeft>
                <Icon width="26px" src={Location} />
                <Text size="16px" color="#acacac">
                  서울시 {location}
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid width="370px" height="120px" bg="#23C8AF" padding="30px 18px">
            <Grid flexLeft>
              <Text bold color="#eee" size="16px" margin="0px 20px 0px 0px">
                모임날짜
              </Text>
              <Text color="#eee" size="16px">
                {runningDate}
              </Text>
            </Grid>
            <Grid flexLeft margin="10px 0px">
              <Text bold color="#eee" size="16px" margin="0px 20px 0px 0px">
                모임인원
              </Text>
              <Text color="#eee" size="16px">
                {limitPeople}명
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default DetailPostInfo;
