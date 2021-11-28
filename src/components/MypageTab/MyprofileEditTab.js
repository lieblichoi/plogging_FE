// 회원정보 수정 탭
import React, { useState } from 'react';
import AWS from 'aws-sdk';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { userCreators } from '../../redux/modules/user';
import { imageCreators } from '../../redux/modules/image';
import { history } from '../../redux/configureStore';

// styled
import styled from 'styled-components';
import { Container, Grid, Image, Text, Buttons, Tags } from '../../elements';
import Swal from 'sweetalert2';

// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const MyprofileEditTab = () => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);

  const users = useSelector((state) => state.user.userData?.data[0]);

  const mypageNum = useSelector((state) => state.user.mypageNum?.data);

  React.useEffect(() => {
    dispatch(userCreators.getUserDB());
    dispatch(userCreators.getMyPageNumDB());
  }, []);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [intro, setIntro] = useState('');

  const [location, setLocation] = useState(types[0]);
  const [type, setType] = useState(types[0]);
  const [distance, setDistance] = useState(types[0]);

  const [active, setActive] = useState('');
  const [active1, setActive1] = useState('');
  const [active2, setActive2] = useState('');

  const profileInfo = {
    password: password,
    location: location,
    type: type,
    distance: distance,
    intro: intro,
  };

  const RegExNickname = /^[가-힣]{2,6}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const editProfile = () => {
    const date = new Date();

    const file = fileInput.current.files[0];

    // S3 버킷 이름
    const S3_BUCKET = 'jupgging-image';

    if (!file) {
      return Swal.fire({
        text: '프로필 사진을 업로드 해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (password === '' || passwordCheck === '') {
      return Swal.fire({
        text: '회원정보를 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (password !== passwordCheck) {
      return Swal.fire({
        text: '비밀번호를 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExPassword.test(password) === false) {
      return Swal.fire({
        text: '잘못된 비밀번호 양식입니다. 영문, 숫자 8~16자로 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (!file) {
    }

    // S3 SDK에 내장된 업로드 함수
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: S3_BUCKET, // 업로드할 대상 버킷명
        Key: file.name + date.getTime() + '.jpg', // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
        Body: file, // 업로드할 파일 객체
      },
    });
    console.log(upload);
    const promise = upload.promise();
    console.log(promise);
    promise.then(
      function (data) {
        dispatch(imageCreators.imageUpload(data.Location));
        console.log(data.Location);
        const editProfile = {
          ...profileInfo,
          userImg: data.Location,
        };
        dispatch(
          userCreators.profileEditMiddleware(
            editProfile,
          ),
        );
      },
      function (err) {
        return alert('오류가 발생했습니다: ', err.msg);
      },
    );
    history.replace('/my');
  };

  const inp = document?.getElementById('inputbutton');

  const fileInputClick = () => {
    inp?.current?.dispatchEvent(new Event('click'));
  };

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa',
    }),
  });

  const fileInput = React.useRef();

  // 사진 미리보기
  const filePreview = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    //비동기적으로 바꿔주는
    reader.readAsDataURL(file);
    //로딩이 끝났을때
    reader.onloadend = () => {
      dispatch(imageCreators.setPreview(reader.result));
    };
  };

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
    palette: {
      primary: {
        main: '#23c8af',
      },
    },
  });

  return (
    <React.Fragment>
      <Container width='1440px'>
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
            <Grid alignEnd>
              <Text size='27px' align='center' color='#23c8af' bold>
                {mypageNum?.myCrews}
              </Text>
              <Text align='center' color='#23c8af'>
                개
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
            <Grid alignEnd>
              <Text size='27px' align='center' color='#23c8af' bold>
                {mypageNum?.myBookmarks}
              </Text>
              <Text align='center' color='#23c8af'>
                개
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
            <Grid alignEnd>
              <Text size='27px' align='center' color='#23c8af' bold>
                {mypageNum?.myReivews}
              </Text>
              <Text align='center' color='#23c8af'>
                개
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
            <Grid alignEnd>
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
        <Grid width='750px' margin='0 auto 50px auto'>
          <Grid isFlex height='252px'>
            <Grid item xs={12} sm={2}>
              <Text isFlex padding='0 76px 0 0'>
                이미지
              </Text>
            </Grid>
            <Grid isFlex width='600px' height='252px' margin='0 0 7px 0'>
              <Grid width='225px' height='225px' item xs={12} sm={4}>
                <Image
                  margin='0 0 0 13px'
                  shape='circle'
                  size='225'
                  src={
                    preview
                      ? preview
                      : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/postingdefaultimage.jpg'
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} margin='auto'>
                <Image
                  width='200px'
                  height='193px'
                  padding='10px 10px'
                  borderRadius='12px'
                  shape='rec'
                  src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/camera_input.png'
                  _onClick={fileInputClick}
                />
                <Grid
                >
                  <input
                    accept='image/*'
                    id='inputbutton'
                    type='file'
                    ref={fileInput}
                    onChange={filePreview}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid isFlex width='750px' margin='0 auto 50px auto'>
            <Text isFlex padding='0 76px 0 0'>
              비밀번호
            </Text>
            <Grid width='586px' height='54px'>
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        margin: '0 0 0 0',
                      },
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <div>
                      <TextField
                        required
                        id='outlined-textarea'
                        multiline
                        rows={1}
                        placeholder='비밀번호를 입력해주세요'
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid isFlex width='750px' margin='0 auto 50px auto'>
            <Text isFlex padding='0 35px 0 0'>
              비밀번호 확인
            </Text>
            <Grid width='586px' height='54px'>
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        margin: '0 0 0 0',
                      },
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <div>
                      <TextField
                        required
                        id='outlined-textarea'
                        multiline
                        rows={1}
                        placeholder='비밀번호를 다시 입력해주세요'
                        value={passwordCheck}
                        onChange={(e) => {
                          setPasswordCheck(e.target.value);
                        }}
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid isFlex width='750px' margin='0 auto 130px auto'>
            <Text isFlex padding='0 76px 0 0'>
              자기소개
            </Text>
            <Grid width='586px' height='54px'>
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        margin: '0 0 0 0',
                      },
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <div>
                      <TextField
                        required
                        id='outlined-textarea'
                        multiline
                        rows={4}
                        placeholder='자기소개를 입력해주세요'
                        value={intro}
                        onChange={(e) => {
                          setIntro(e.target.value);
                        }}
                        error={
                          (intro.length > 60 || intro.length < 10) &&
                          intro.length > 0
                        }
                        helperText={
                          (intro.length > 60 || intro.length < 10) &&
                          intro.length > 0
                            ? '최소 10자이상 60자미만 작성해주세요'
                            : ''
                        }
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid isFlex width='750px' margin='0 auto 50px auto'>
            <Text isFlex padding='0 76px 0 0'>
              관심사 설정
            </Text>
          </Grid>
          <Grid columnFlex>
            <Grid width='576px' padding='30px 0'>
              <Text size='18px' bold padding='0 0 14px 0'>
                플로깅하고 싶은 장소를 골라주세요!
              </Text>
              <Grid mainFlex>
                <ButtonGroup>
                  {types2.map((type2) => (
                    <ButtonToggle
                      value={type}
                      key={type2}
                      active={active2 === type2}
                      onClick={() => {
                        setType(type2);
                        setActive2(type2);
                      }}
                    >
                      {type2}
                    </ButtonToggle>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid width='576px' padding='30px 0'>
              <Text size='18px' bold padding='0 0 14px 0'>
                플로깅할 수 있는 거리를 골라주세요!
              </Text>
              <Grid mainFlex>
                <ButtonGroup>
                  {types1.map((type1) => (
                    <ButtonToggle
                      value={distance}
                      key={type1}
                      active={active1 === type1}
                      onClick={() => {
                        setDistance(type1);
                        setActive1(type1);
                      }}
                    >
                      {type1}
                    </ButtonToggle>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid width='576px' padding='30px 0'>
              <Text size='18px' bold padding='0 0 4px 0'>
                플로깅할 수 있는 지역을 골라주세요!
              </Text>
              <Text size='14px' color='#666666' padding='0 0 14px 0'>
                줍깅 서비스는 현재 서울 지역만 서비스가 지원됩니다. 다른 지역은
                조금 기다려주세요!
              </Text>
              <Grid mainFlex>
                <ButtonGroup>
                  {types.map((type) => (
                    <ButtonToggle
                      value={location}
                      key={type}
                      active={active === type}
                      onClick={() => {
                        setLocation(type);
                        setActive(type);
                      }}
                    >
                      {type}
                    </ButtonToggle>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid mainFlex justifyContent='center' padding='0 0 85px 0'>
          <Buttons
            large_b
            _onClick={() => {
              editProfile();
            }}
          >
            회원정보 수정 완료
          </Buttons>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const types = [
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '마포구',
  '도봉구',
  '동대문구',
  '동작구',
  '서대문구',
  '서초구',
  '상동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];

const types1 = [
  '1km 이내',
  '1km~3km',
  '3km~5km',
  '5km 이상',
  '거리는 상관없어요',
];

const types2 = ['도심(시내)에서', '공원에서', '한강에서', '산 또는 숲에서'];

const Btn = styled.button``;

const ButtonToggle = styled(Btn)`
  opacity: 1;
  width: 132px;
  height: 44px;
  margin: 6px;
  border: 0px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
  ${({ active1 }) =>
    active1 &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
  ${({ active2 }) =>
    active2 &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
  &:hover {
    transition: all 0.5s;
    background-color: #23c8af;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export default MyprofileEditTab;
