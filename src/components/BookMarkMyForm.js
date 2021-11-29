import React from 'react';

import { Container, Grid, Image, Text, Buttons, Tags } from '../elements';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { userCreators } from '../redux/modules/user';
import MyBookMarkCard from './MypageTab/MyBookMarkCard';
import UnBookMarkCard from './MypageTab/UnBookMarkCard';

const BookMarkMyForm = () => {
  const dispatch = useDispatch();
  const bookMarkList = useSelector((state) => state.user?.myBookmark);
  const bookMark_list = bookMarkList?.slice(0)?.reverse();
  const users = useSelector((state) => state.user.userData?.data[0]);

  const mypageNum = useSelector((state) => state.user.mypageNum?.data);

  React.useEffect(() => {
    dispatch(userCreators.getUserDB());
    dispatch(userCreators.getMyBadgeDB());
    dispatch(userCreators.getMyPageNumDB());
    dispatch(userCreators.getBookMarkDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width="1440px" margin="0 auto">
        <Container>
          <Grid center width="330px" margin="auto">
            <Grid mainFlex justifyContent="center" padding="0 0 10px 0">
              <Grid>
                {users?.userImg === null ? (
                  <Image
                    shape="circle"
                    size="150"
                    src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                  />
                ) : (
                  <Image shape="circle" size="150" src={users?.userImg} />
                )}
              </Grid>
            </Grid>
            <Text size="24px" padding="10px 0 10px 0" bold>
              {users.nickname}
            </Text>
            <Grid margin="10px auto 40px auto">
              <Tags large>{users.email}</Tags>
            </Grid>
            <Grid center padding="0 0 120px 0">
              <Buttons
                small
                size="18px"
                width="130px"
                height="50px"
                color="#fff"
                bgColor="#333333"
                borderRadius="10px"
                _onClick={() => {
                  dispatch(userCreators.logOutMiddleware());
                }}
              >
                로그아웃
              </Buttons>
            </Grid>
          </Grid>
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
              <Grid
                alignEnd
                cursor="pointer"
                _onClick={() => history.push(`/crews/my`)}
              >
                <Text size="27px" align="center" color="#23c8af" bold>
                  {mypageNum?.myCrews}
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
              <Grid
                alignEnd
                cursor="pointer"
                _onClick={() => history.push(`/bookMark/my`)}
              >
                <Text size="27px" align="center" color="#23c8af" bold>
                  {mypageNum?.myBookmarks}
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
              <Grid
                alignEnd
                cursor="pointer"
                _onClick={() => history.push(`/reviews/my`)}
              >
                <Text size="27px" align="center" color="#23c8af" bold>
                  {mypageNum?.myReivews}
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
              <Grid
                alignEnd
                cursor="pointer"
                _onClick={() => history.push(`/my`)}
              >
                <Text size="27px" align="center" color="#23c8af" bold>
                  {mypageNum?.myBadges}
                </Text>
                <Text align="center" color="#23c8af">
                  개
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid isFlex width="969px" height="44px" margin="0 auto 100px auto">
            <Text
              align="center"
              width="242px"
              height="44px"
              color="#DBDCDB"
              borderBottom="2px solid #DBDCDB"
              cursor="pointer"
              _onClick={() => {
                history.push('/my');
              }}
            >
              내 프로필
            </Text>
            <Text
              align="center"
              width="242px"
              height="44px"
              color="#DBDCDB"
              borderBottom="2px solid #DBDCDB"
              cursor="pointer"
              _onClick={() => {
                history.push('/crews/my');
              }}
            >
              신청 내역
            </Text>
            <Text
              align="center"
              width="242px"
              height="44px"
              borderBottom="2px solid #212121"
              cursor="pointer"
              _onClick={() => {
                history.push('/bookmark/my');
              }}
            >
              북마크
            </Text>
            <Text
              align="center"
              width="242px"
              height="44px"
              color="#DBDCDB"
              borderBottom="2px solid #DBDCDB"
              cursor="pointer"
              _onClick={() => {
                history.push('/reviews/my');
              }}
            >
              후기 내역
            </Text>
            <Text
              align="center"
              width="242px"
              height="44px"
              color="#DBDCDB"
              borderBottom="2px solid #DBDCDB"
              cursor="pointer"
              _onClick={() => {
                history.push('/meeting/my');
              }}
            >
              모임 관리
            </Text>
          </Grid>

          <Grid>
            {/* <Text align="center" color="#666666" margin="0px 0px 5px 0px">
              모임 날짜 및 모집 기간, 모임 인원은 수정할 수 없습니다.
            </Text>
            <Text align="center" color="#666666">
              모임 날짜, 모집 기간, 모임 인원을 수정하고 싶으시다면 모임을
              삭제한 후 새로 모임을 만들어주세요.
            </Text> */}
            {bookMark_list?.length === 0 ? (
              <>
                <UnBookMarkCard />
              </>
            ) : (
              <>
                <Grid>
                  {bookMark_list?.map((p, idx) => {
                    return <MyBookMarkCard {...p} key={idx} />;
                  })}
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default BookMarkMyForm;
