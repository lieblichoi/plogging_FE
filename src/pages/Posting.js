import React from 'react';
import AWS from 'aws-sdk';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../redux/modules/image';
import { postActions } from '../redux/modules/post';

// m-ui...
import { Text, Image, Container, Buttons } from '../elements/index';
import { Grid, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import styled from 'styled-components';

// calendar...
import 'react-datepicker/dist/react-datepicker.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Editor from '../components/Posting/Editor';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

const Posting = () => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [rundate, setRundate] = React.useState(new Date());
  const newsDate = new Date(
    rundate.getTime() - rundate.getTimezoneOffset() * 160000,
  );
  const [startdate, setStartdate] = React.useState(new Date(newsDate));
  const [enddate, setEnddate] = React.useState(new Date(newsDate));
  const [srundate, setSRundate] = React.useState(new Date());
  const [sstartdate, setSStartdate] = React.useState(new Date());
  const [senddate, setSEnddate] = React.useState(new Date());
  const [lrundate, setLRundate] = React.useState(new Date());
  const [location, setLocation] = React.useState('');
  const [type, setType] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [limit, setLimit] = React.useState('');
  const [intro, setIntro] = React.useState('');

  const contents = {
    title: title,
    content: content,
    runningDate: rundate,
    startDate: startdate,
    endDate: enddate,
    location: location,
    type: type,
    distance: distance,
    limitPeople: limit,
    crewHeadIntro: intro,
  };

  const handleRunDate = (date) => {
    const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    setRundate(newDate);
  };

  const handleStartDate = (date) => {
    const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    setStartdate(newDate);
  };

  const handleEndDate = (date) => {
    const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    setEnddate(newDate);
  };

  const handleSRunDate = (date) => {
    setSRundate(date);
  };

  const handleLRunDate = (date) => {
    const newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 160000,
    );
    setLRundate(newDate);
  };

  const ldate = new Date();
  const limDate = new Date(
    ldate.getTime() - ldate.getTimezoneOffset() * 160000,
  ); 

  const handleSStartDate = (date) => {
    setSStartdate(date);
  };

  const handleSEndDate = (date) => {
    setSEnddate(date);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleDistance = (e) => {
    setDistance(e.target.value);
  };

  const getEditorContent = (content) => {
    setContent(content);
  };

  const inp = document?.getElementById('inputbutton');

  const fileInputClick = () => {
    inp?.current?.dispatchEvent(new Event('click'));
  };

  AWS.config.update({
    region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa', // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
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

  const uploadFile = () => {
    // 이미지 파일 이름 중복 방지 - 파일이름 + 업로드 시간
    const date = new Date();
    // input 태그를 통해 선택한 파일 객체
    const file = fileInput.current.files[0];

    // S3 버킷 이름
    const S3_BUCKET = 'jupgging-image';

    if (!file) {
      window.alert('이미지를 업로드 해주세요!');
      return;
    }
    if (
      contents.title === '' ||
      contents.content === '' ||
      contents.runningDate === '' ||
      contents.startDate === '' ||
      contents.endDate === '' ||
      contents.location === '' ||
      contents.type === '' ||
      contents.distance === '' ||
      contents.limitPeople === '' ||
      contents.crewHeadIntro === ''
    ) {
      window.alert('내용을 모두 작성해주세요!');
      return;
    }
    if (
      contents.title.length > 14 
    ) {
      window.alert('모임 제목이 너무 깁니다!');
      return;
    }

    // S3 SDK에 내장된 업로드 함수
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: S3_BUCKET, // 업로드할 대상 버킷명
        Key: file.name + date.getTime() + '.jpg', // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
        Body: file, // 업로드할 파일 객체
      },
    });
    const promise = upload.promise();
    promise.then(
      function (data) {
        dispatch(imageCreators.imageUpload(data.Location));
        const content = {
          ...contents,
          postImg: data.Location,
        };
        dispatch(postActions.addPostDB(content));
      },
      function (err) {
        return alert('오류가 발생했습니다: ', err.msg);
      },
    );
  };

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
    palette: {
      primary: { main: '#23C8AF' },
    },
  });

  return (
    <React.Fragment>
      <Container width="700px">
        <Grid width="700px" margin="auto" padding="10px">
          <Text align="center" size="32px">
            <h4>모임 만들기</h4>
          </Text>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                모임이름
              </Text>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              item
              xs={12}
              sm={10}
            >
              <ThemeProvider theme={inputTheme}>
                <TextField
                  required
                  id="outlined-required"
                  label="줍깅 같이 할 사람 모여라!"
                  fullWidth
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  error={title.length < 5 && title.length >= 1 || title.length > 16 }
                  helperText={
                    title.length < 5 && title.length >= 1 || title.length > 16 
                      ? '모임 제목은 최소 5글자 이상, 최대 14자 이하까지 가능합니다.'
                      : ''
                  }
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                모임날짜
              </Text>
            </Grid>
            <Grid item xs={12} sm={10}>
              <RunDatePicker
                portalId="root-portal"
                selected={srundate <= ldate ? limDate : srundate}
                onChange={(date) => {
                  handleRunDate(date);
                  handleSRunDate(date);
                  handleLRunDate(date);
                }}
                showMonthDropdown
                locale={ko}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormatCalendar="yyyy년 MMMM"
                timeCaption="시간"
                dateFormat="yyyy년 MM월 d일 aa h:mm"
                minDate={limDate}
                popperModifiers={{
                  preventOverflow: { enable: true },
                }}
                fixedHeight
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                모집기간
              </Text>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StartDatePicker
                portalId="root-portal"
                locale={ko}
                selected={sstartdate}
                onChange={(date) => {
                  handleStartDate(date);
                  handleSStartDate(date);
                }}
                dateFormatCalendar="yyyy년 MMMM"
                selectsStart
                dateFormat="yyyy년 MM월 dd일"
                startDate={sstartdate}
                minDate={new Date()}
                maxDate={lrundate}
                endDate={enddate}
                fixedHeight
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <Text
                size="18px"
                padding="17px 0px 0px 0px"
                margin="0px -55px 0px 0px"
                align="center"
              >
                ~
              </Text>
            </Grid>
            <Grid item xs={12} sm={5}>
              <EndDatePicker
                portalId="root-portal"
                locale={ko}
                selected={senddate}
                onChange={(date) => {
                  handleEndDate(date);
                  handleSEndDate(date);
                }}
                fixedHeight
                dateFormatCalendar="yyyy년 MMMM"
                selectsEnd
                dateFormat="yyyy년 MM월 dd일"
                startDate={sstartdate}
                endDate={enddate}
                minDate={sstartdate}
                maxDate={lrundate}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                모임장소
              </Text>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ThemeProvider theme={inputTheme}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { width: '220px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-read-only-input"
                    defaultValue="서울시"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ThemeProvider theme={inputTheme}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiInputBase-root': { width: '220px', left: '107px' },
                    '& .MuiInputLabel-root': { left: '107px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      구 선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={location}
                      label="모임 장소"
                      onChange={handleLocation}
                      required
                    >
                      <MenuItem value={'강남구'}>강남구</MenuItem>
                      <MenuItem value={'강동구'}>강동구</MenuItem>
                      <MenuItem value={'강북구'}>강북구</MenuItem>
                      <MenuItem value={'강서구'}>강서구</MenuItem>
                      <MenuItem value={'관악구'}>관악구</MenuItem>
                      <MenuItem value={'광진구'}>광진구</MenuItem>
                      <MenuItem value={'구로구'}>구로구</MenuItem>
                      <MenuItem value={'금천구'}>금천구</MenuItem>
                      <MenuItem value={'노원구'}>노원구</MenuItem>
                      <MenuItem value={'마포구'}>마포구</MenuItem>
                      <MenuItem value={'도봉구'}>도봉구</MenuItem>
                      <MenuItem value={'동대문구'}>동대문구</MenuItem>
                      <MenuItem value={'동작구'}>동작구</MenuItem>
                      <MenuItem value={'서대문구'}>서대문구</MenuItem>
                      <MenuItem value={'서초구'}>서초구</MenuItem>
                      <MenuItem value={'성동구'}>성동구</MenuItem>
                      <MenuItem value={'성북구'}>성북구</MenuItem>
                      <MenuItem value={'송파구'}>송파구</MenuItem>
                      <MenuItem value={'양천구'}>양천구</MenuItem>
                      <MenuItem value={'영등포구'}>영등포구</MenuItem>
                      <MenuItem value={'용산구'}>용산구</MenuItem>
                      <MenuItem value={'은평구'}>은평구</MenuItem>
                      <MenuItem value={'종로구'}>종로구</MenuItem>
                      <MenuItem value={'중구'}>중구</MenuItem>
                      <MenuItem value={'중랑구'}>중랑구</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                장소유형
              </Text>
            </Grid>
            <Grid item xs={12} sm={10}>
              <ThemeProvider theme={inputTheme}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiSelect-root': { width: '220px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      유형 선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={type}
                      label="장소 유형"
                      onChange={handleType}
                      required
                    >
                      <MenuItem value={'도심(시내)'}>도심(시내)</MenuItem>
                      <MenuItem value={'공원'}>공원</MenuItem>
                      <MenuItem value={'한강'}>한강</MenuItem>
                      <MenuItem value={'산 또는 숲'}>산 또는 숲</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                진행거리
              </Text>
            </Grid>
            <Grid item xs={12} sm={10}>
              <ThemeProvider theme={inputTheme}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiSelect-root': { width: '220px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      거리 선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={distance}
                      label="진행 거리"
                      onChange={handleDistance}
                      required
                    >
                      <MenuItem value={'1km 이내'}>1km 이내</MenuItem>
                      <MenuItem value={'1km~3km'}>1km~3km</MenuItem>
                      <MenuItem value={'3km~5km'}>3km~5km</MenuItem>
                      <MenuItem value={'5km 이상'}>5km 이상</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                모집인원
              </Text>
            </Grid>
            <Grid item xs={12} sm={10}>
              <ThemeProvider theme={inputTheme}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiSelect-root': { width: '220px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      최소 3명
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={limit}
                      label="모임 장소"
                      onChange={handleLimit}
                      required
                    >
                      <MenuItem value={3}>3명</MenuItem>
                      <MenuItem value={4}>4명</MenuItem>
                      <MenuItem value={5}>5명</MenuItem>
                      <MenuItem value={6}>6명</MenuItem>
                      <MenuItem value={7}>7명</MenuItem>
                      <MenuItem value={8}>8명</MenuItem>
                      <MenuItem value={9}>9명</MenuItem>
                      <MenuItem value={10}>10명</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                팀장소개
              </Text>
            </Grid>
            <ThemeProvider theme={inputTheme}>
              <Grid item xs={12} sm={10}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-textarea"
                      multiline
                      rows={6}
                      label="모임장 자신의 소개글을 작성해주세요. 자세하게 적어주시면 좋아요! (200자 이내)"
                      value={intro}
                      onChange={(e) => {
                        setIntro(e.target.value);
                      }}
                    />
                  </div>
                </Box>
              </Grid>
            </ThemeProvider>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                모임소개
              </Text>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Editor getEditorContent={getEditorContent} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Text size="18px" padding="17px 0px 0px 0px" bold>
                이미지
              </Text>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image
                shape="rectangle"
                src={
                  preview
                    ? preview
                    : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/postingdefaultimage.jpg'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} margin="auto">
              <Image
                width="200px"
                height="193px"
                padding="10px 10px"
                borderRadius="12px"
                shape="rec"
                src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/camera_input.png"
                _onClick={fileInputClick}
              />
              <Grid
              // display='none' 
              >
                <input
                  accept="image/*"
                  id="inputbutton"
                  type="file"
                  ref={fileInput}
                  onChange={filePreview}
                />
              </Grid>
            </Grid>
          </Grid>
            <Text align="center" size="14px" color="#999999" margin="30px 0px -20px 0px">
            모임장에게는 모임 당일 시작 시간에 맞춰 문자릍 통해 출석 체크 링크가 발송됩니다.
            </Text>
            <Text align="center" size="14px" color="#999999" margin="30px 0px -20px 0px">
            문자를 받은 모임장만 출석 체크가 가능하며, 모임장은 현장에서 인원 파악 후 직접 출석 체크를 진행합니다.
            </Text>
          <Grid container padding="50px">
            <ThemeProvider theme={inputTheme}>
              <Buttons large _onClick={uploadFile}>
                모임 만들기
              </Buttons>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const RunDatePicker = styled(DatePicker)`
  width: 105%;
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #acacac;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
`;

const StartDatePicker = styled(DatePicker)`
  width: 105%;
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #acacac;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
`;

const EndDatePicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #acacac;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  margin: 0px -41px 0px 49px;
`;

export default Posting;
