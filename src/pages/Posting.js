import React from 'react';
import AWS from 'aws-sdk';


// redux
import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../redux/modules/image';
import { postActions } from '../redux/modules/post';

// m-ui...
import { Text, Image } from '../elements/index';
import { Grid, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

// calendar...
import 'react-datepicker/dist/react-datepicker.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DatePicker from '@mui/lab/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Editor from '../components/Editor';
import { koKR } from '@mui/material/locale';
// import DatePicker from "react-datepicker";
// import { ko } from 'date-fns/esm/locale'

const Posting = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [rundate, setRundate] = React.useState(new Date());
  const [startdate, setStartdate] = React.useState(new Date());
  const [enddate, setEnddate] = React.useState(new Date());
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

  const handleLocation = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };

  const handleLimit = (e) => {
    setLimit(e.target.value);
    console.log(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const handleDistance = (e) => {
    setDistance(e.target.value);
    console.log(e.target.value);
  };

  const getEditorContent = (content) => {
    setContent(content);
    console.log(content);
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
    console.log(file);
    console.log(file.name);
    console.log(fileInput);

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
        dispatch(imageCreators.reviewImageUp(data.Location));
        console.log(data.Location);
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

  const DateTheme = createTheme({
    palette: {
      primary: { main: '#23C8AF' },
    },
    shape: {
      borderRadius: 10,
    },
    koKR,
  });

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
    palette: {
      primary: { main: '#23C8AF' },
    },
  });

  const SubmitButton = styled(Button)({
    color: '#aaaaaa',
    height: '64px',
    width: '81%',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 700,
    padding: '6px 12px',
    border: '2px solid',
    borderRadius: '10px',
    lineHeight: 1.5,
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxSizing: 'border-box',
    margin: 'auto',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#fff',
      backgroundColor: '#333333',
      borderColor: '#333333',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#333333',
      borderColor: '#333333',
      color: '#fff',
    },
    '&:focus': {
      boxShadow: 'none',
      backgroundColor: '#23C8AF',
      borderColor: '#23C8AF',
      color: '#fff',
    },
  });

  const date = new Date();
  // const limitStartDate = date.setMinutes(date.getMinutes() + 1440);

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <React.Fragment>
      <Grid maxWidth='700px' margin='auto' padding='10px'>
        <Text align='center' size='32px'>
          <h4>모임 만들기</h4>
        </Text>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              모임이름
            </Text>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
            item
            xs={12}
            sm={10}
          >
            <ThemeProvider theme={inputTheme}>
              <TextField
                required
                id='outlined-required'
                label='줍깅 같이 할 사람 모여라!'
                fullWidth
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                error={title.length < 5 && title.length > 1}
                helperText={
                  title.length < 5 && title.length > 1
                    ? '최소 5글자 이상으로 채워주세요!'
                    : ''
                }
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              모임날짜
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            {/* <DatePicker
              selected={rundate}
              onChange={(date) => {
                setRundate(date)
                console.log(date)
              }}
              locale={ko}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="yyyy년 MM월 dd일 h:mm aa"
            /> */}
            <ThemeProvider theme={DateTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiInputBase-root': { width: '220px' },
                }}
                noValidate
                autoComplete='off'
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    mask='__/__/____'
                    disablePast
                    renderInput={(props) => <TextField {...props} />}
                    value={rundate}
                    onChange={(date) => {
                      setRundate(date);
                    }}
                    inputFormat={'yyyy-MM-dd HH:mm'}
                    error={false}
                  />
                </LocalizationProvider>
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              모집기간
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <DatePicker
          locale={ko}
        selected={startdate}
        onChange={(date) => setStartdate(date)}
        selectsStart
        startDate={startdate}
        endDate={enddate}
      /> */}
            <ThemeProvider theme={DateTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiInputBase-root': { width: '220px' },
                }}
                noValidate
                autoComplete='off'
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    mask='__/__/____'
                    disablePast
                    renderInput={(props) => <TextField {...props} />}
                    value={startdate}
                    onChange={(date) => {
                      setStartdate(date);
                    }}
                    inputFormat={'yyyy-MM-dd'}
                    maxDate={rundate}
                  />
                </LocalizationProvider>
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size='18px' padding='17px 0px 0px 0px' align='center'>
              ~
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <DatePicker
          locale={ko}
        selected={enddate}
        onChange={(date) => setEnddate(date)}
        selectsEnd
        startDate={startdate}
        endDate={enddate}
        minDate={startdate}
      /> */}
            <ThemeProvider theme={DateTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiInputBase-root': { width: '220px', right: '10px' },
                }}
                noValidate
                autoComplete='off'
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    mask='__/__/____'
                    disablePast
                    renderInput={(props) => <TextField {...props} />}
                    value={enddate}
                    onChange={(date) => {
                      setEnddate(date);
                    }}
                    inputFormat={'yyyy-MM-dd'}
                    maxDate={rundate}
                  />
                </LocalizationProvider>
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              모임장소
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiTextField-root': { width: '220px' },
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-read-only-input'
                  defaultValue='서울시'
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
                component='form'
                sx={{
                  '& .MuiInputBase-root': { width: '220px', left: '107px' },
                  '& .MuiInputLabel-root': { left: '107px' },
                }}
                noValidate
                autoComplete='off'
              >
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id='demo-simple-select-helper-label'>
                    구 선택
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={location}
                    label='모임 장소'
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
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              장소유형
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiSelect-root': { width: '220px' },
                }}
                noValidate
                autoComplete='off'
              >
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id='demo-simple-select-helper-label'>
                    유형 선택
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={type}
                    label='장소 유형'
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
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              진행거리
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiSelect-root': { width: '220px' },
                }}
                noValidate
                autoComplete='off'
              >
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id='demo-simple-select-helper-label'>
                    거리 선택
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={distance}
                    label='장소 유형'
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
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              모집인원
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component='form'
                sx={{
                  '& .MuiSelect-root': { width: '220px' },
                }}
                noValidate
                autoComplete='off'
              >
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel id='demo-simple-select-helper-label'>
                    최소 2명
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={limit}
                    label='모임 장소'
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
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              팀장소개
            </Text>
          </Grid>
          <ThemeProvider theme={inputTheme}>
            <Grid item xs={12} sm={10}>
              <Box
                component='form'
                sx={{
                  '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete='off'
              >
                <div>
                  <TextField
                    required
                    id='outlined-textarea'
                    multiline
                    rows={6}
                    label='모임장 자신의 소개글을 작성해주세요. 자세하게 적어주시면 좋아요! (200자 이내)'
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
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              모임소개
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Editor getEditorContent={getEditorContent} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size='18px' padding='17px 0px 0px 0px' bold>
              이미지
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image
              shape='rectangle'
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
            // display='none'
            >
              <input
                accept='image/*'
                id='inputbutton'
                type='file'
                ref={fileInput}
                onChange={filePreview}
              />
            </Grid>
            {/* <ThemeProvider theme={iconTheme}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </ThemeProvider> */}
          </Grid>
        </Grid>
        <Grid container padding='20px'>
          <ThemeProvider theme={inputTheme}>
            <SubmitButton onClick={uploadFile}>모임 만들기</SubmitButton>
          </ThemeProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Posting;
