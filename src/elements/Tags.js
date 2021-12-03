import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Tags = (props) => {
  const {
    margin,
    text,
    children,
    large,
    medium,
    medium_t,
    small,
    rec_green,
    rec_blue,
    rec_black,
    _onClick,
    value,
    rec_red,
    active
  } = props;

  const styles = {
    margin,
  };

  if (large) {
    return (
      <React.Fragment>
        <LargeButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButton>
      </React.Fragment>
    );
  }
  if (medium) {
    return (
      <React.Fragment>
        <MediumButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButton>
      </React.Fragment>
    );
  }
  if (medium_t) {
    return (
      <React.Fragment>
        {props.active == value ? 
        <MediumButtona {...styles} onClick={_onClick} >
          {text ? text : children}
        </MediumButtona>
        : <MediumButtont {...styles} onClick={_onClick} >
          {text ? text : children}
        </MediumButtont>}
      </React.Fragment>
    );
  }
  if (small) {
    return (
      <React.Fragment>
        <SmallButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButton>
      </React.Fragment>
    );
  }
  if (rec_green) {
    return (
      <React.Fragment>
        <RecButtonGreen {...styles} onClick={_onClick}>
          {text ? text : children}
        </RecButtonGreen>
      </React.Fragment>
    );
  }
  if (rec_blue) {
    return (
      <React.Fragment>
        <RecButtonBlue {...styles} onClick={_onClick}>
          {text ? text : children}
        </RecButtonBlue>
      </React.Fragment>
    );
  }
  if (rec_black) {
    return (
      <React.Fragment>
        <RecButtonBlack {...styles} onClick={_onClick}>
          {text ? text : children}
        </RecButtonBlack>
      </React.Fragment>
    );
  }
  if (rec_red) {
    return (
      <React.Fragment>
        <RecButtonRed {...styles} onClick={_onClick}>
          {text ? text : children}
        </RecButtonRed>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <SmallButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </SmallButton>
    </React.Fragment>
  );
};

Tags.defaultProps = {
  margin: '',
  text: '',
  children: null,
  _onClick: () => {},
  large: '',
  medium: '',
  medium_t: '',
  small: '',
  rec_green: '',
  rec_blue: '',
  rec_black: '',
  value: '',
  rec_red: ''
};

const LargeButton = styled(Button)({
  color: '#333333',
  height: '46px',
  width: 'auto',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '10px 24px',
  border: '3px solid',
  borderRadius: '30px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#d8d8d8',
  boxSizing: 'border-box',
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
    color: '#23C8AF',
    backgroundColor: '#fff',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const MediumButton = styled(Button)({
  color: '#333333',
  height: '32px',
  width: 'auto',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 700,
  padding: '10px 15px',
  border: '3px solid',
  borderRadius: '30px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#d8d8d8',
  boxSizing: 'border-box',
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
    color: '#23C8AF',
    backgroundColor: '#fff',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:focus': {
    color: '#fff',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
});

const SmallButton = styled(Button)({
  color: '#333333',
  height: '22px',
  width: 'auto',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 10,
  fontWeight: 500,
  padding: '10px 10px',
  border: '1px solid',
  borderRadius: '30px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#23C8AF',
  boxSizing: 'border-box',
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
  ]
});

const RecButtonGreen = styled(Button)({
  color: '#fff',
  height: '24px',
  width: 'auto',
  boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.3)',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 700,
  padding: '4px 9.5px 3px 8.5px',
  border: '1px solid',
  borderRadius: '5px',
  lineHeight: 1.5,
  backgroundColor: '#23C8AF',
  borderColor: '#23C8AF',
  boxSizing: 'border-box',
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
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
});

const RecButtonBlue = styled(Button)({
  color: '#fff',
  height: '24px',
  width: 'auto',
  boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.3)',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 700,
  padding: '4px 9.5px 3px 8.5px',
  border: '1px solid',
  borderRadius: '5px',
  lineHeight: 1.5,
  backgroundColor: '#6984e4',
  borderColor: '#6984e4',
  boxSizing: 'border-box',
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
    backgroundColor: '#6984e4',
    borderColor: '#6984e4',
    boxShadow: 'none',
  },
});

const RecButtonBlack = styled(Button)({
  color: '#fff',
  height: '24px',
  width: 'auto',
  boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.3)',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 700,
  padding: '4px 9.5px 3px 8.5px',
  border: '1px solid',
  borderRadius: '5px',
  lineHeight: 1.5,
  backgroundColor: '#333333',
  borderColor: '#333333',
  boxSizing: 'border-box',
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
});

const MediumButtont = styled(Button)({
  color: '#333333',
  height: '32px',
  width: 'auto',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 13,
  fontWeight: 700,
  padding: '10px 15px',
  border: '2px solid',
  borderRadius: '30px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#acacac',
  boxSizing: 'border-box',
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
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
});

const MediumButtona = styled(Button)({
  color: '#fff',
  backgroundColor: '#23C8AF',
  borderColor: '#23C8AF',
  height: '32px',
  width: 'auto',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 13,
  fontWeight: 700,
  padding: '10px 15px',
  border: '2px solid',
  borderRadius: '30px',
  lineHeight: 1.5,
  boxSizing: 'border-box',
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
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
});

const RecButtonRed = styled(Button)({
  color: '#fff',
  height: '24px',
  width: 'auto',
  boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.3)',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 700,
  padding: '4px 9.5px 3px 8.5px',
  border: '1px solid',
  borderRadius: '5px',
  lineHeight: 1.5,
  backgroundColor: '#fe542e',
  borderColor: '#fe542e',
  boxSizing: 'border-box',
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
    backgroundColor: '#fe542e',
    borderColor: '#fe542e',
    boxShadow: 'none',
  },
});

export default Tags;
