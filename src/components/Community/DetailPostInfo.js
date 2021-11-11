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
          <Grid width="370px" height="120px">
            <Grid isFlex>
              <Grid flexLeft>
                <Image shape="circle" src={postUserImg} />
                <Text size="14px"> {postNickName}님의 모임</Text>
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
            <Grid>
              <Text bold size="20px">
                {postTitle}
              </Text>

              <Grid flexLeft>
                <Icon width="25px" src={Location} />
                <Text size="14px" color="#acacac">
                  서울시 {location}
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid width="370px" height="120px" bg="#23C8AF">
            <Text color="#eee" size="16px">
              모임날짜 {runningDate}
            </Text>
            <Text color="#eee" size="16px">
              모임인원 {limitPeople}명
            </Text>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default DetailPostInfo;