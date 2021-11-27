import React from 'react';
import {
  Grid,
  Container,
  Text,
  Image,
  Buttons,
  Button,
  Tags,
  Icon,
} from '../elements';
import { Header } from '../components';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

// 신발끈 묶깅, 한 걸음 더
import Profile_Lv1 from '../assets/Badge/Profile_Lv1.svg';
import Profile_Lv2 from '../assets/Badge/Profile_Lv2.svg';
// 줍린이, 줍킹
import Review_Lv1 from '../assets/Badge/Review_Lv1.svg';
import Review_Lv2 from '../assets/Badge/Review_Lv2.svg';
// 둘러보깅, 아이줍깅
import Bookmark_Lv1 from '../assets/Badge/Bookmark_Lv1.svg';
import Bookmark_Lv2 from '../assets/Badge/Bookmark_Lv2.svg';
// 줍깅의 시작, 프로줍깅러
import Join_Lv1 from '../assets/Badge/Join_Lv1.svg';
import Join_Lv2 from '../assets/Badge/Join_Lv2.svg';
// 지각생
import Miss from '../assets/Badge/Miss.svg';
// 반장, 회장
import Master_Lv1 from '../assets/Badge/Master_Lv1.svg';
import Master_Lv2 from '../assets/Badge/Master_Lv2.svg';

const MypageForm = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.userData?.data[0]);
  console.log(users);

  const badge = useSelector((state) => state.user.myBadge?.data[0]);
  console.log(badge);

  const badge1 = useSelector((state) => state.user.myBadge?.data[1]);
  console.log(badge1);

  const badge2 = useSelector((state) => state.user.myBadge?.data[2]);
  console.log(badge2);

  const badge3 = useSelector((state) => state.user.myBadge?.data[3]);
  console.log(badge3);

  const badge4 = useSelector((state) => state.user.myBadge?.data[4]);
  console.log(badge4);

  const badge5 = useSelector((state) => state.user.myBadge?.data[5]);
  console.log(badge5);

  const mypageNum = useSelector((state) => state.user.mypageNum?.data);
  console.log(mypageNum);

  console.log(badge?.badgeLevel);

  React.useEffect(() => {
    dispatch(userCreators.getUserDB());
    dispatch(userCreators.getMyBadgeDB());
    dispatch(userCreators.getMyPageNumDB());
    console.log();
  }, []);

  const badgeCheck = () => {
    if (badge.badgeLevel === 1) {
      <Image shape="circle" size="100" src={Bookmark_Lv1} />;
    } else if (badge.badgeLevel === 11) {
      <Image shape="circle" size="100" src={Bookmark_Lv2} />;
    } else {
      return;
    }
  };

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
              {users?.nickname}
            </Text>
            <Grid margin="10px auto 40px auto">
              <Tags large>{users?.email}</Tags>
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
              borderBottom="2px solid #212121"
              cursor="pointer"
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
              color="#DBDCDB"
              borderBottom="2px solid #DBDCDB"
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
          <Grid width="700px" margin="0 auto">
            <Grid isFlex width="340px" height="100px" margin="25px auto 25px 0">
              <Grid width="150px">
                <Text size="24px">프로필</Text>
              </Grid>
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

            <Grid isFlex width="500px" height="120px" margin="25px auto 25px 0">
              <Grid width="150px">
                <Text size="24px">닉네임</Text>
              </Grid>
              <Grid width="310px">
                <Text size="24px">{users?.nickname}님</Text>
              </Grid>
            </Grid>
            <Grid
              isFlex
              width="700px"
              height="120px"
              margin="25px auto 25px auto"
            >
              <Grid width="150px">
                <Text size="24px">자기소개</Text>
              </Grid>
              <Grid>
                <Text size="24px" width="510px">
                  {users?.intro}
                </Text>
              </Grid>
            </Grid>
            <Grid isFlex width="700px" height="120px" margin="25px auto 25px 0">
              <Grid width="150px">
                <Text size="24px">관심사 설정</Text>
              </Grid>
              <Grid display="flex" width="510px">
                {/* <Grid
                  width='142px'
                  height='34px'
                  border='2px solid #23C8AF'
                  bg='white'
                  borderRadius='25px'
                  margin='0 6px 0 0'
                >
                  <Text align='center' color='#23C8AF' size='20px'>
                    {window.localStorage.getItem('distance')}
                  </Text>
                </Grid> */}
                <Grid margin="0 6px 0 0">
                  <Tags large>{users?.distance}</Tags>
                </Grid>
                <Grid margin="0 6px 0 0">
                  <Tags large>{users?.location}</Tags>
                </Grid>
                <Grid margin="0 6px 0 0">
                  <Tags large>{users?.type}</Tags>
                </Grid>
              </Grid>
            </Grid>
            <Grid isFlex width="700px" height="260px" margin="25px auto 25px 0">
              <Grid width="150px">
                <Text size="24px">보유 뱃지</Text>
              </Grid>
              <Grid flexLeft wrap width="510px">
                {/* <Image shape="circle" size="120" src={Profile_Lv1} /> */}
                {/* {badge?.badgeLevel === 1 ? (
                  <Image shape='circle' size='100' src={Bookmark_Lv1} />
                ) : (
                  <Image shape='circle' size='100' src={Bookmark_Lv2} />
                )} */}
                {/* badge */}
                {(() => {
                  console.log(badge?.badgeLevel);
                  if (badge?.badgeLevel === 1)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv1} />
                    );
                  else if (badge?.badgeLevel === 11)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv2} />
                    );
                  else if (badge?.badgeLevel === 2)
                    return <Image shape="circle" size="120" src={Review_Lv1} />;
                  else if (badge?.badgeLevel === 22)
                    return <Image shape="circle" size="120" src={Review_Lv2} />;
                  else if (badge?.badgeLevel === 3)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv1} />
                    );
                  else if (badge?.badgeLevel === 33)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv2} />
                    );
                  else if (badge?.badgeLevel === 4)
                    return <Image shape="circle" size="120" src={Join_Lv1} />;
                  else if (badge?.badgeLevel === 44)
                    return <Image shape="circle" size="120" src={Join_Lv2} />;
                  else if (badge?.badgeLevel === 5)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge?.badgeLevel === 55)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge?.badgeLevel === 6)
                    return <Image shape="circle" size="120" src={Master_Lv1} />;
                  else if (badge?.badgeLevel === 66)
                    return <Image shape="circle" size="120" src={Master_Lv2} />;
                })()}
                {(() => {
                  console.log(badge1?.badgeLevel);
                  if (badge1?.badgeLevel === 1)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv1} />
                    );
                  else if (badge1?.badgeLevel === 11)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv2} />
                    );
                  else if (badge1?.badgeLevel === 2)
                    return <Image shape="circle" size="120" src={Review_Lv1} />;
                  else if (badge1?.badgeLevel === 22)
                    return <Image shape="circle" size="120" src={Review_Lv2} />;
                  else if (badge1?.badgeLevel === 3)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv1} />
                    );
                  else if (badge?.badgeLevel === 33)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv2} />
                    );
                  else if (badge1?.badgeLevel === 4)
                    return <Image shape="circle" size="120" src={Join_Lv1} />;
                  else if (badge1?.badgeLevel === 44)
                    return <Image shape="circle" size="120" src={Join_Lv2} />;
                  else if (badge1?.badgeLevel === 5)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge1?.badgeLevel === 55)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge1?.badgeLevel === 6)
                    return <Image shape="circle" size="120" src={Master_Lv1} />;
                  else if (badge1?.badgeLevel === 66)
                    return <Image shape="circle" size="120" src={Master_Lv2} />;
                })()}
                {(() => {
                  console.log(badge2?.badgeLevel);
                  if (badge2?.badgeLevel === 1)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv1} />
                    );
                  else if (badge2?.badgeLevel === 11)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv2} />
                    );
                  else if (badge2?.badgeLevel === 2)
                    return <Image shape="circle" size="120" src={Review_Lv1} />;
                  else if (badge2?.badgeLevel === 22)
                    return <Image shape="circle" size="120" src={Review_Lv2} />;
                  else if (badge2?.badgeLevel === 3)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv1} />
                    );
                  else if (badge?.badgeLevel === 33)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv2} />
                    );
                  else if (badge2?.badgeLevel === 4)
                    return <Image shape="circle" size="120" src={Join_Lv1} />;
                  else if (badge2?.badgeLevel === 44)
                    return <Image shape="circle" size="120" src={Join_Lv2} />;
                  else if (badge2?.badgeLevel === 5)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge2?.badgeLevel === 55)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge2?.badgeLevel === 6)
                    return <Image shape="circle" size="120" src={Master_Lv1} />;
                  else if (badge2?.badgeLevel === 66)
                    return <Image shape="circle" size="120" src={Master_Lv2} />;
                })()}
                {(() => {
                  console.log(badge3?.badgeLevel);
                  if (badge3?.badgeLevel === 1)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv1} />
                    );
                  else if (badge3?.badgeLevel === 11)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv2} />
                    );
                  else if (badge3?.badgeLevel === 2)
                    return <Image shape="circle" size="120" src={Review_Lv1} />;
                  else if (badge3?.badgeLevel === 22)
                    return <Image shape="circle" size="120" src={Review_Lv2} />;
                  else if (badge3?.badgeLevel === 3)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv1} />
                    );
                  else if (badge?.badgeLevel === 33)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv2} />
                    );
                  else if (badge3?.badgeLevel === 4)
                    return <Image shape="circle" size="120" src={Join_Lv1} />;
                  else if (badge3?.badgeLevel === 44)
                    return <Image shape="circle" size="120" src={Join_Lv2} />;
                  else if (badge3?.badgeLevel === 5)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge3?.badgeLevel === 55)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge3?.badgeLevel === 6)
                    return <Image shape="circle" size="120" src={Master_Lv1} />;
                  else if (badge3?.badgeLevel === 66)
                    return <Image shape="circle" size="120" src={Master_Lv2} />;
                })()}
                {(() => {
                  console.log(badge4?.badgeLevel);
                  if (badge4?.badgeLevel === 1)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv1} />
                    );
                  else if (badge4?.badgeLevel === 11)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv2} />
                    );
                  else if (badge4?.badgeLevel === 2)
                    return <Image shape="circle" size="120" src={Review_Lv1} />;
                  else if (badge4?.badgeLevel === 22)
                    return <Image shape="circle" size="120" src={Review_Lv2} />;
                  else if (badge4?.badgeLevel === 3)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv1} />
                    );
                  else if (badge?.badgeLevel === 33)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv2} />
                    );
                  else if (badge4?.badgeLevel === 4)
                    return <Image shape="circle" size="120" src={Join_Lv1} />;
                  else if (badge4?.badgeLevel === 44)
                    return <Image shape="circle" size="120" src={Join_Lv2} />;
                  else if (badge4?.badgeLevel === 5)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge4?.badgeLevel === 55)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge4?.badgeLevel === 6)
                    return <Image shape="circle" size="120" src={Master_Lv1} />;
                  else if (badge4?.badgeLevel === 66)
                    return <Image shape="circle" size="120" src={Master_Lv2} />;
                })()}
                {(() => {
                  console.log(badge5?.badgeLevel);
                  if (badge5?.badgeLevel === 1)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv1} />
                    );
                  else if (badge5?.badgeLevel === 11)
                    return (
                      <Image shape="circle" size="120" src={Profile_Lv2} />
                    );
                  else if (badge5?.badgeLevel === 2)
                    return <Image shape="circle" size="120" src={Review_Lv1} />;
                  else if (badge5?.badgeLevel === 22)
                    return <Image shape="circle" size="120" src={Review_Lv2} />;
                  else if (badge5?.badgeLevel === 3)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv1} />
                    );
                  else if (badge?.badgeLevel === 33)
                    return (
                      <Image shape="circle" size="120" src={Bookmark_Lv2} />
                    );
                  else if (badge5?.badgeLevel === 4)
                    return <Image shape="circle" size="120" src={Join_Lv1} />;
                  else if (badge5?.badgeLevel === 44)
                    return <Image shape="circle" size="120" src={Join_Lv2} />;
                  else if (badge5?.badgeLevel === 5)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge5?.badgeLevel === 55)
                    return <Image shape="circle" size="120" src={Miss} />;
                  else if (badge5?.badgeLevel === 6)
                    return <Image shape="circle" size="120" src={Master_Lv1} />;
                  else if (badge5?.badgeLevel === 66)
                    return <Image shape="circle" size="120" src={Master_Lv2} />;
                })()}
              </Grid>
            </Grid>
            <Grid mainFlex justifyContent="center" padding="0 0 65px 0">
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
