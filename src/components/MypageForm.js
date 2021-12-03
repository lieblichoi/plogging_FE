import React from 'react';
import { Grid, Container, Text, Image, Buttons, Tags } from '../elements';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import MyProfileBadge from './MypageTab/MyProfileBadge';

const MypageForm = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.userData?.data[0]);
  const mypageNum = useSelector((state) => state.user.mypageNum?.data);

  React.useEffect(() => {
    dispatch(userCreators.getUserDB());
    dispatch(userCreators.getMyBadgeDB());
    dispatch(userCreators.getMyPageNumDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width='1440px' margin='0 auto'>
        <Container>
          <Grid center width='330px' margin='auto'>
            <Grid mainFlex justifyContent='center' padding='0 0 10px 0'>
              <Grid>
                {users?.userImg === null ? (
                  <Image
                    shape='circle'
                    size='150'
                    src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                  />
                ) : (
                  <Image shape='circle' size='150' src={users?.userImg} />
                )}
              </Grid>
            </Grid>
            <Text size='24px' padding='10px 0 10px 0' bold>
              {users?.nickname}
            </Text>
            <Grid margin='10px auto 40px auto'>
              <Tags large>{users?.email}</Tags>
            </Grid>
            <Grid center padding='0 0 120px 0'>
              <Buttons
                small
                size='18px'
                width='130px'
                height='50px'
                color='#fff'
                bgColor='#333333'
                borderRadius='10px'
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
            width='968px'
            height='202px'
            border='1px solid #F8F8F8'
            borderRadius='10px'
            bg='#F8F8F8'
            margin='0 auto 80px auto'
          >
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>내 참여내역</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/crews/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myCrews}
                </Text>
                <Text align='center' color='#23c8af'>
                  건
                </Text>
              </Grid>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>내 북마크</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/bookMark/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myBookmarks}
                </Text>
                <Text align='center' color='#23c8af'>
                  건
                </Text>
              </Grid>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>내 후기</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/reviews/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myReivews}
                </Text>
                <Text align='center' color='#23c8af'>
                  건
                </Text>
              </Grid>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #F8F8F8'
            >
              <Text padding='0 0 15px 0'>획득 배지</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myBadges}
                </Text>
                <Text align='center' color='#23c8af'>
                  개
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid isFlex width='969px' height='44px' margin='0 auto 100px auto'>
            <Text
              align='center'
              width='242px'
              height='44px'
              borderBottom='2px solid #212121'
              cursor='pointer'
            >
              내 프로필
            </Text>
            <Text
              align='center'
              width='242px'
              height='44px'
              color='#DBDCDB'
              borderBottom='2px solid #DBDCDB'
              cursor='pointer'
              _onClick={() => {
                history.push('/crews/my');
              }}
            >
              신청 내역
            </Text>
            <Text
              align='center'
              width='242px'
              height='44px'
              color='#DBDCDB'
              borderBottom='2px solid #DBDCDB'
              cursor='pointer'
              _onClick={() => {
                history.push('/bookmark/my');
              }}
            >
              북마크
            </Text>
            <Text
              align='center'
              width='242px'
              height='44px'
              color='#DBDCDB'
              borderBottom='2px solid #DBDCDB'
              cursor='pointer'
              _onClick={() => {
                history.push('/reviews/my');
              }}
            >
              후기 내역
            </Text>
            <Text
              align='center'
              width='242px'
              height='44px'
              color='#DBDCDB'
              borderBottom='2px solid #DBDCDB'
              cursor='pointer'
              _onClick={() => {
                history.push('/meeting/my');
              }}
            >
              모임 관리
            </Text>
          </Grid>
          <Grid width='700px' margin='0 auto'>
            <Grid
              topStartFlex
              width='600px'
              height='180px'
              margin='25px auto 25px 0'
            >
              <Grid width='150px'>
                <Text size='20px' bold color='#333333'>
                  프로필
                </Text>
              </Grid>
              <Grid margin='0 0 0 37px'>
                {users?.userImg === null ? (
                  <Image
                    shape='circle'
                    size='200'
                    src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                  />
                ) : (
                  <Image shape='circle' size='200' src={users?.userImg} />
                )}
              </Grid>
            </Grid>

            <Grid isFlex width='500px' height='120px' margin='80px auto 25px 0'>
              <Grid width='150px'>
                <Text size='20px' bold color='#333333'>
                  닉네임
                </Text>
              </Grid>
              <Grid width='310px'>
                <Text size='20px' color='#333333'>
                  {users?.nickname}
                </Text>
              </Grid>
            </Grid>
            <Grid
              topStartFlex
              width='900px'
              height='120px'
              margin='25px auto 25px auto'
            >
              <Grid width='190px'>
                <Text size='20px' bold color='#333333'>
                  자기소개
                </Text>
              </Grid>
              <Grid>
                <Text size='19px' width='510px'>
                  {users?.intro}
                </Text>
              </Grid>
            </Grid>
            <Grid isFlex width='700px' height='120px' margin='0px auto 25px 0'>
              <Grid width='150px'>
                <Text size='20px' bold color='#333333'>
                  관심사 설정
                </Text>
              </Grid>
              <Grid display='flex' width='510px'>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{users?.distance}</Tags>
                </Grid>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{users?.location}</Tags>
                </Grid>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{users?.type}</Tags>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              topStartFlex
              width='700px'
              height='100%'
              margin='25px auto 25px 0'
            >
              <Grid width='170px'>
                <Text size='20px' bold color='#333333'>
                  보유 뱃지
                </Text>
              </Grid>
              <Grid>
                {/* <Grid width="100%" margin="7px 0 20px 25px">
                  <Text size="14px" color="#666666">
                    뱃지는 활동한 다음 날 주어져요. 그러니 뱃지가 안 보인다고
                    너무 조급해하지는 마세요!
                  </Text>
                </Grid> */}
                <Grid flexLeft wrap width='510px'>
                  <MyProfileBadge />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              flexEnd
              width='720px'
              margin='0 auto'
              padding='100px 0 85px 0'
            >
              <Buttons large_b _onClick={() => history.push('/my/edit')}>
                회원정보 수정
              </Buttons>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default MypageForm;
