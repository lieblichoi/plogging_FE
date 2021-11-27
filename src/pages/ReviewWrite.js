import React from 'react';
import styled from 'styled-components';
import AWS from 'aws-sdk';

import { Container, Grid, Text, Image, Buttons } from '../elements/index';
import PostReviewCard from '../components/Reviews/PostReviewCard';
import { imageCreators } from '../redux/modules/image';
import { actionCreator as reviewActions } from '../redux/modules/review';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

// import ReviewPhoto from './ReviewPhoto';
import jupgging from '../assets/jupgging.png';

import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';

import { history } from '../redux/configureStore';

const ReviewWrite = (props) => {
  const dispatch = useDispatch();
  const review_list = useSelector((state) => state.post.detail.data);

  const postId = parseInt(props.match.params.postId);

  React.useEffect(() => {
    dispatch(postActions.getPostDetailDB(postId));
  }, []);

  const preview = useSelector((state) => state.image.preview);
  const [reviewTitle, setReviewTitle] = React.useState('');
  const [reviews, setReviews] = React.useState('');
  const [star, setStar] = React.useState('');
  const [satiRate, setSatiRate] = React.useState('');
  const [levelRate, setLevelRate] = React.useState('');
  const [trashRate, setTrashRate] = React.useState('');

  console.log();
  const contents = {
    postId: postId,
    title: reviewTitle,
    content: reviews,
    star: star,
    satiRate: satiRate,
    levelRate: levelRate,
    trashRate: trashRate,
  };
  const changeScore = (e) => {
    setStar(e.target.value);
  };

  const changeSatisfied = (e) => {
    setSatiRate(e.target.value);
  };
  const changeLevel = (e) => {
    setLevelRate(e.target.value);
  };
  const changeAmount = (e) => {
    setTrashRate(e.target.value);
  };

  const reviewTitleChange = (e) => {
    setReviewTitle(e.target.value);
  };
  const reviewChange = (e) => {
    setReviews(e.target.value);
  };

  AWS.config.update({
    region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa', // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
    }),
  });

  const fileInput = React.useRef(null);

  //사진 미리보기

  const imagePreview = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    //비동기적으로 바꿔주는
    reader.readAsDataURL(file);
    //로딩이 끝났을때
    reader.onloadend = () => {
      dispatch(imageCreators.setPreview(reader.result));
    };
  };
  //  Cognito 연동으로 S3 접근 권한을 얻는 부분

  const uploadFile = () => {
    const date = new Date();
    // input 태그를 통해 선택한 파일 객체
    const file = fileInput.current.files[0];

    // S3 버킷 이름
    const S3_BUCKET = 'jupgging-image';

    if (!file) {
      Swal.fire({
        text: '이미지 업로드해주세요.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });

      return;
    }
    if (contents.reviewTitle === '') {
      Swal.fire({
        text: '제목을 입력해주세요.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      return;
    }

    if (contents.reviews === '') {
      Swal.fire({
        text: '내용을 입력해주세요.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      return;
    }
    if (contents.star === '') {
      Swal.fire({
        text: '총점을 입력해주세요',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });

      return;
    }
    if (contents.satiRate === '') {
      Swal.fire({
        text: '만족도를 입력해주세요',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });

      return;
    }
    if (contents.levelRate === '') {
      Swal.fire({
        text: '난이도를 입력해주세요',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });

      return;
    }
    if (contents.trashRate === '') {
      Swal.fire({
        text: '쓰레기양을 입력해주세요',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });

      return;
    }

    // S3 SKD에 포함된 함수로 파일 업로드 부분
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
        // console.log(data.Location);
        const content = {
          ...contents,
          reviewImg: data.Location,
        };
        dispatch(reviewActions.addReviewDB(content));
      },
      function (err) {
        return alert('오류가 발생했습니다.', err.message);
      },
    );
  };

  const iconTheme = createTheme({
    palette: {
      primary: { main: '#23C8AF' },
    },
  });
  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
    palette: {
      primary: {
        main: '#23C8AF',
      },
    },
  });
  return (
    <React.Fragment>
      <Grid>
        <Container width="1440px">
          <Grid width="100%" centerFlex>
            <PostReviewCard review_list={review_list} />
          </Grid>
          <Grid center>
            <Grid width="100%" margin="20px 0px 50px  0px">
              <Text bold size="20px">
                이번 플로깅은 어땠나요? 별점을 남겨주세요!
              </Text>
            </Grid>
            {/* <Grid flexLeft width="1440px"> */}
            <section>
              <Grid centerFlex>
                <Section>
                  <Grid margin="0px 30px 0px 0px ">
                    <ReviewStarSize>
                      <Grid isFlex margin="40px 0px 0px 0px ">
                        <Text
                          size="17px"
                          color="#333"
                          margin="0px 20px 0px 0px "
                        >
                          코스 난이도{' '}
                        </Text>
                        <Rating
                          name="simple-controlled"
                          size="large"
                          onChange={changeLevel}
                        />
                      </Grid>
                      <Grid isFlex margin="40px 0px 40px 0px ">
                        <Text size="17px" color="#333">
                          쓰레기 양{' '}
                        </Text>{' '}
                        <Rating
                          name="simple-controlled"
                          size="large"
                          onChange={changeAmount}
                        />
                      </Grid>
                      <Grid isFlex>
                        <Text size="17px" color="#333">
                          만족도
                        </Text>
                        <Rating
                          name="simple-controlled"
                          size="large"
                          onChange={changeSatisfied}
                        />
                      </Grid>
                    </ReviewStarSize>
                  </Grid>
                </Section>
                <Section>
                  <Grid center flexLeft margin="10px 25px">
                    <JupImage src={jupgging} />
                    <Text bold size="20px" color="#23C8AF">
                      이의 별점 가이드
                    </Text>
                  </Grid>
                  <Grid
                    width="350px"
                    border="1px solid "
                    borderRadius="10px"
                    bg="#E5E5E5"
                    padding="15px"
                  >
                    <Grid>
                      <Text
                        textLeft="left"
                        size="15px"
                        margin="0px 0px 10px 0px"
                      >
                        코스가 길거나 가팔라서 힘드었어요 - 5점
                      </Text>
                      <Text
                        textLeft="left"
                        size="15px"
                        margin="0px 0px 30px 0px"
                      >
                        코스가 짧고 평탄해서 쉬웠어요 - 1점
                      </Text>
                      <Text
                        textLeft="left"
                        size="15px"
                        margin="0px 0px 10px 0px"
                      >
                        쓰레기가 매우 많았어요. - 5점
                      </Text>
                      <Text
                        textLeft="left"
                        size="15px"
                        margin="0px 0px 30px 0px"
                      >
                        쓰레기가 별로 없었어요 - 1점
                      </Text>
                      <Text
                        textLeft="left"
                        size="15px"
                        margin="0px 0px 10px 0px"
                      >
                        장소와 시간대, 모임 인원 등이 적절했어요 - 5점
                      </Text>
                      <Text
                        textLeft="left"
                        size="15px"
                        margin="0px 0px 10px 0px"
                      >
                        적절하지 못했어요- 1점
                      </Text>
                    </Grid>
                  </Grid>
                </Section>
              </Grid>
            </section>
          </Grid>
          <Grid centerFlex margin="80px 0px">
            <StarSize>
              <Grid flexLeft>
                <Text bold color="#333" size="18px" margin="0px 30px">
                  총평
                </Text>
                <Rating
                  name="simple-controlled"
                  size="large"
                  onChange={changeScore}
                />
              </Grid>
            </StarSize>
          </Grid>

          <Grid>
            <Text bold textLeft="center" size="25px" margin="0px 0px 40px 0px ">
              당신의 플로깅 이야기를 들려주세요
            </Text>

            <Grid center>
              <Grid centerFlex margin="30px 0px">
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10}>
                    <Box
                      sx={{
                        '& .MuiTextField-root': {
                          width: '1100px',
                          margin: '0 0 0 0',
                        },
                      }}
                    >
                      <TextField
                        required
                        fullWidth
                        id="outlined-textarea"
                        rows={1}
                        placeholder="제목을 입력해주세요(14자이내)"
                        value={reviewTitle}
                        onChange={reviewTitleChange}
                        error={
                          reviewTitle.length > 14 && reviewTitle.length > 1
                        }
                        helperText={
                          reviewTitle.length > 14 && reviewTitle.length > 1
                            ? '14자 이내로 입력해주세요'
                            : ''
                        }
                      />
                    </Box>
                  </Grid>
                  {/* </InputBox> */}
                </ThemeProvider>
              </Grid>
              {/* <MultiLineInput> */}
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '1100px',
                        margin: '0 0 0 0',
                      },
                    }}
                  >
                    <TextField
                      required
                      fullWidth
                      id="outlined-textarea"
                      multiline
                      rows={20}
                      placeholder="어떤 일이 있었나요? 혹은 어떤 점이 좋았나요?"
                      value={reviews}
                      onChange={reviewChange}
                    />
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>

            <Grid center margin="140px 0px">
              <Text bold size="30px" margin="50px 0px">
                사진을 등록해주세요
              </Text>
              <Grid centerFlex>
                <Grid width="300px">
                  <Image
                    margin="0px 20px"
                    width="300px"
                    shape="rectangle"
                    src={
                      preview
                        ? preview
                        : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/postingdefaultimage.jpg'
                    }
                  />
                </Grid>
                <Grid margin="0px 20px">
                  <ThemeProvider theme={iconTheme}>
                    <input
                      accept="image/*"
                      // id="icon-button-file"
                      type="file"
                      ref={fileInput}
                      onChange={imagePreview}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    ></IconButton>
                  </ThemeProvider>
                </Grid>
              </Grid>
              <Grid margin="100px 0px">
                <Buttons user _onClick={uploadFile}>
                  후기올리기
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};
const StarSize = styled.span`
  .css-jue3ft-MuiRating-root {
    font-size: 60px;
  }
`;
const ReviewStarSize = styled.span`
  .css-dqr9h-MuiRating-label {
    font-size: 40px;
  }
`;
const JupImage = styled.img`
  width: 80px;
  height: 30px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Section = styled.section``;

const InputBox = styled.section`
  .css-1gzwwms-MuiInputBase-root-MuiOutlinedInput-root {
    width: 1160px;
  }
`;

const MultiLineInput = styled.section`
  .css-wb57ya-MuiFormControl-root-MuiTextField-root {
    width: 1160px;
  }
`;

export default ReviewWrite;
