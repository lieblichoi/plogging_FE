import React from 'react';
import { Grid, Container, Text, Image, Buttons, Tags } from '../elements';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import AnotherProfileBadge from './MypageTab/AnotherProfileBadge';

const AnotherMypageForm = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.userData?.data[0]);
  const userId = Number(props.match.params.userId);
  const userInfo = useSelector((state) => state.user.userInfo);

  React.useEffect(() => {
    dispatch(userCreators.postUserInfoDB(userId));
    // dispatch(userCreators.getUserDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width="1440px" margin="0 auto">
        <Container>
          <Grid center width="330px" margin="auto">
            <Grid
              mainFlex
              justifyContent="center"
              maring="40px 0px"
              padding="0 0 10px 0"
            >
              <Grid>
                {userInfo?.userImg === null ? (
                  <Image
                    shape="circle"
                    size="150"
                    src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                  />
                ) : (
                  <Image shape="circle" size="150" src={userInfo?.userImg} />
                )}
              </Grid>
            </Grid>
            <Grid alignEnd margin="15px 0 0 0">
              <Text size="24px" bold>
                {userInfo?.nickname}
              </Text>
              <Text padding="0 0 0 5px">의 마이페이지</Text>
            </Grid>
            {/* <Grid margin="10px auto 40px auto">
              <Tags large>
                {userInfo?.email}
                {userInfo?.nickname}
              </Tags>
            </Grid> */}
          </Grid>
          <Grid width="1440px" margin="0 auto">
            <Grid
              centerFlex
              width="700px"
              height="120px"
              margin="25px auto 25px auto"
            >
              <Text isFlex size="19px" width="510px">
                {userInfo?.intro}
              </Text>
            </Grid>
            <Grid
              centerFlex
              width="px"
              height="120px"
              margin="25px auto 45px 0"
            >
              <Grid centerFlex width="1440px">
                <Grid margin="0 6px 0 0">
                  <Tags large>{userInfo?.distance}</Tags>
                </Grid>
                <Grid margin="0 6px 0 0">
                  <Tags large>{userInfo?.location}</Tags>
                </Grid>
                <Grid margin="0 6px 0 0">
                  <Tags large>{userInfo?.type}</Tags>
                </Grid>
              </Grid>
            </Grid>
            <Grid width="1440px">
              <Grid
                isFlex
                width="968px"
                height="202px"
                border="1px solid #F8F8F8"
                borderRadius="10px"
                bg="#F8F8F8"
                margin="0 auto 80px auto"
              >
                <Grid
                  columnFlex
                  width="242px"
                  height="150px"
                  borderRight="1px solid #D3D3D3"
                >
                  <Text padding="0 0 15px 0">내 참여내역</Text>
                  <Grid alignEnd>
                    <Text size="27px" align="center" color="#23c8af" bold>
                      {userInfo?.crewCount}
                    </Text>
                    <Text align="center" color="#23c8af">
                      건
                    </Text>
                  </Grid>
                </Grid>
                <Grid
                  columnFlex
                  width="242px"
                  height="150px"
                  borderRight="1px solid #D3D3D3"
                >
                  <Text padding="0 0 15px 0">내 북마크</Text>
                  <Grid alignEnd>
                    <Text size="27px" align="center" color="#23c8af" bold>
                      {userInfo?.bookmarkCount}
                    </Text>
                    <Text align="center" color="#23c8af">
                      건
                    </Text>
                  </Grid>
                </Grid>
                <Grid
                  columnFlex
                  width="242px"
                  height="150px"
                  borderRight="1px solid #D3D3D3"
                >
                  <Text padding="0 0 15px 0">내 후기</Text>
                  <Grid alignEnd>
                    <Text size="27px" align="center" color="#23c8af" bold>
                      {userInfo?.reviewCount}
                    </Text>
                    <Text align="center" color="#23c8af">
                      건
                    </Text>
                  </Grid>
                </Grid>
                <Grid
                  columnFlex
                  width="242px"
                  height="150px"
                  borderRight="1px solid #F8F8F8"
                >
                  <Text padding="0 0 15px 0">획득 배지</Text>
                  <Grid alignEnd>
                    <Text size="27px" align="center" color="#23c8af" bold>
                      {userInfo?.badgeCount}
                    </Text>
                    <Text align="center" color="#23c8af">
                      개
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              centerFlex
              width="700px"
              height="100%"
              margin="25px auto 25px auto"
            >
              <Grid topStartFlex wrap width="510px">
                <AnotherProfileBadge />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default AnotherMypageForm;
