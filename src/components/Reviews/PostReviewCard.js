import React from 'react';
import {
  Container,
  Grid,
  Image,
  Text,
  Icon,
  Buttons,
} from '../../elements/index';

import { history } from '../../redux/configureStore';
import Location from '../../assets/Icon/Location.svg';

const PostReviewCard = (props) => {
  const review_list = props.review_list;
  // console.log(review_list);
  const postId = review_list?.postId;
  const postImg = review_list?.postImg;
  const location = review_list?.location;
  const title = review_list?.title;
  const content = review_list?.content;
  const type = review_list?.type;
  const distance = review_list?.distance;
  const userImg = review_list?.userImg;
  const writerName = review_list?.writerName;

  const runningDate = review_list?.runningDate;
  const limitPeople = review_list?.limitPeople;
  const startDate = review_list?.startDate;
  const endDate = review_list?.endDate;

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
          margin="120px 0px"
        >
          <Grid width="370px">
            <Image src={postImg}></Image>
          </Grid>

          <Grid padding="10px" height="257px">
            <Grid width="450px" flexLeft margin="20px 0px">
              <Icon width="30px" src={Location} />
              <Text size="15px" color="#acacac">
                서울시 {location}
              </Text>
            </Grid>
            <Grid margin="20px 10px">
              <Text bold size="25px">
                {' '}
                {title}
              </Text>
              {/* <Text
                width="300px"
                height=""
                size="10px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overFlow="hidden"
                display="block"
              > */}{' '}
              {/* dangerouslySetInnerHTML={{ __html: content }} */}
              {/* {} */}
              {/* </Text> */}
            </Grid>
            <Grid margin="40px 10px">
              <section>
                <Grid flexLeft>
                  <Grid
                    width="50px"
                    height="20px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="9px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text align="center" color="#fff" size="9px">
                      {type}
                    </Text>
                  </Grid>
                  <Grid
                    width="50px"
                    height="20px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="9px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text align="center" color="#fff" size="9px">
                      {distance}
                    </Text>
                  </Grid>
                  <Grid
                    width="50px"
                    height="20px"
                    border="1px solid #23C8AF"
                    bg="#23C8AF"
                    padding="2px "
                    borderRadius="9px"
                    margin="0px 6px 0px 0px"
                  >
                    <Text align="center" color="#fff" size="9px">
                      {location}
                    </Text>
                  </Grid>
                </Grid>
                <Grid flexLeft margin="35px 0px 0px 0px">
                  {props.userImg ? (
                    <>
                      <Image shape="circle" src={userImg} />
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
                    {writerName}의 모임
                  </Text>
                </Grid>
              </section>
            </Grid>
          </Grid>

          <Grid maxWidth="350px" height="257px" centerFlex margin="0px 20px">
            <Grid>
              <Grid flexLeft margin="40px 0px 10px 0px">
                <Text size="14px" bold margin="0px 20px 0px 0px">
                  모임날짜
                </Text>
                <Text size="14px" color="#666666">
                  {runningDate}
                </Text>
              </Grid>
              <Grid flexLeft margin="0px 0px 10px 0px">
                <Text size="14px" bold margin="0px 20px 0px 0px">
                  모임인원
                </Text>
                <Text size="14px" color="#666666">
                  {' '}
                  {limitPeople}명{' '}
                </Text>
              </Grid>
              <Grid flexLeft margin="0px 0px 10px 0px">
                <Text size="14px" bold margin="0px 20px 0px 0px">
                  모집기간
                </Text>
                <Text size="14px" color="#666666">
                  {startDate} ~ {endDate}
                </Text>
              </Grid>
              <Grid margin="30px 0px 0px 0px">
                <Buttons
                  enter
                  _onClick={() => {
                    history.push(`/post/${postId}`);
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

export default PostReviewCard;
