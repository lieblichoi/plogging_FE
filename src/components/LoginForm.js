import React, { useState } from 'react';
import { Container, Grid, Text, Buttons } from '../elements';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Swal from 'sweetalert2';

import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const RegExEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const login = () => {
    if (email === '' || password === '') {
      return Swal.fire({
        text: '이메일 혹은 비밀번호가 공란입니다! 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (
      RegExEmail.test(email) === false ||
      RegExPassword.test(password) === false
    ) {
      return Swal.fire({
        text: '아이디 혹은 비밀번호가 양식에 맞지 않습니다!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }
    dispatch(userCreators.loginMiddleware(email, password));
  };

  // onKeyPress
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
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
      <Grid width='1440px' margin='0 auto'>
        <Container>
          <Grid center width='570px' margin='auto'>
            <Grid margin='60px 0px'>
              <Text size='28px' align='center' bold>
                간편하게 로그인하고
              </Text>
              <Text size='28px' align='center' bold>
                다양한 줍깅 크루를 만나보세요!
              </Text>
            </Grid>
            <Grid wrap>
              <Grid padding='0 0 16px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10}>
                    <Box
                      component='form'
                      sx={{
                        '& .MuiTextField-root': {
                          width: '100%',
                          margin: '0 0 16px 0',
                        },
                      }}
                      noValidate
                      autoComplete='off'
                    >
                      <div>
                        <TextField
                          required
                          id='outlined-textarea'
                          rows={1}
                          placeholder='이메일을 입력해주세요'
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          onKeyPress={handleKeyPress}
                          error={
                            RegExEmail.test(email) === false && email.length > 0
                          }
                          helperText={
                            RegExEmail.test(email) === false && email.length > 0
                              ? '이메일 형식에 맞춰 작성해주세요'
                              : ''
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10}>
                    <Box
                      component='form'
                      sx={{
                        '& .MuiInputBase-root': { width: '100%' },
                      }}
                      noValidate
                      autoComplete='off'
                    >
                      <div>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          type={values.showPassword ? 'text' : 'password'}
                          value={password}
                          placeholder='비밀번호를 입력해주세요'
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyPress={handleKeyPress}
                          error={password.length < 8 && password.length > 1}
                          helperText={
                            password.length < 8 && password.length > 1
                              ? '영문, 숫자포함 8~16자 이내'
                              : ''
                          }
                          endAdornment={
                            <InputAdornment position='end'>
                              <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge='end'
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
              </Grid>
            </Grid>

            <Grid isFlex padding='5px 0 36px 0'>
              <Text size='13px'>이메일찾기 / 비밀번호찾기</Text>
            </Grid>
            <Buttons
              user
              text='로그인하기'
              width='570px'
              height='54px'
              size='20px'
              color='#fff'
              bgColor='#23c8af'
              borderRadius='10px'
              _onClick={() => {
                login();
              }}
            >
              로그인 하기
            </Buttons>
            <Grid flexEnd padding='10px 0px'>
              <Text size='13px' padding='0 5px 0 0'>
                아직 회원이 아니시라면?
              </Text>
              <Text
                size='13px'
                color='blue'
                cursor='pointer'
                _onClick={() => history.push('/signup')}
              >
                줍깅 가입하기
              </Text>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default LoginForm;
