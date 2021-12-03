import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { fontSize } from '@mui/system';

const Buttons = (props) => {
  const {
    margin,
    text,
    children,
    large,
    medium,
    small,
    large_b,
    medium_b,
    small_b,
    large_w,
    medium_w,
    small_w,
    dis_large,
    dis_medium,
    dis_small,
    enter,
    more,
    user,
    bottom,
    smallbottom,
    _onClick,
    key,
    value,
    active,
    signup,
    header,
    comment,
    reply,
    bookmark,
    enter_dis,
    mob_enter,
    mob_cancle,
    search,
    dis_enter,
    nullLink,
    mainBannerBtn,
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
  if (small) {
    return (
      <React.Fragment>
        <SmallButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButton>
      </React.Fragment>
    );
  }
  if (large_b) {
    return (
      <React.Fragment>
        <LargeButtonBlack {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButtonBlack>
      </React.Fragment>
    );
  }
  if (medium_b) {
    return (
      <React.Fragment>
        <MediumButtonBlack {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonBlack>
      </React.Fragment>
    );
  }
  if (small_b) {
    return (
      <React.Fragment>
        <SmallButtonBlack {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButtonBlack>
      </React.Fragment>
    );
  }
  if (large_w) {
    return (
      <React.Fragment>
        <LargeButtonWhite {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButtonWhite>
      </React.Fragment>
    );
  }
  if (medium_w) {
    return (
      <React.Fragment>
        <MediumButtonWhite {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonWhite>
      </React.Fragment>
    );
  }
  if (small_w) {
    return (
      <React.Fragment>
        <SmallButtonWhite {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButtonWhite>
      </React.Fragment>
    );
  }
  if (dis_large) {
    return (
      <React.Fragment>
        <LargeButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButtonDisable>
      </React.Fragment>
    );
  }
  if (dis_medium) {
    return (
      <React.Fragment>
        <MediumButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonDisable>
      </React.Fragment>
    );
  }
  if (dis_small) {
    return (
      <React.Fragment>
        <SmallButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButtonDisable>
      </React.Fragment>
    );
  }
  if (enter) {
    return (
      <React.Fragment>
        <EnterButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </EnterButton>
      </React.Fragment>
    );
  }
  if (more) {
    return (
      <React.Fragment>
        <MoreButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MoreButton>
      </React.Fragment>
    );
  }
  if (user) {
    return (
      <React.Fragment>
        <UserButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </UserButton>
      </React.Fragment>
    );
  }
  if (bottom) {
    return (
      <React.Fragment>
        <BottomButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </BottomButton>
      </React.Fragment>
    );
  }
  if (smallbottom) {
    return (
      <React.Fragment>
        <BottomButtons {...styles} onClick={_onClick}>
          {text ? text : children}
        </BottomButtons>
      </React.Fragment>
    );
  }
  if (signup) {
    return (
      <React.Fragment>
        <SignUpButtons
          {...styles}
          onClick={_onClick}
          key={key}
          value={value}
          active={active}
        >
          {text ? text : children}
        </SignUpButtons>
      </React.Fragment>
    );
  }
  if (header) {
    return (
      <React.Fragment>
        <HeaderButtons
          {...styles}
          onClick={_onClick}
          key={key}
          value={value}
          active={active}
        >
          {text ? text : children}
        </HeaderButtons>
      </React.Fragment>
    );
  }
  if (comment) {
    return (
      <React.Fragment>
        <CommentButton
          {...styles}
          onClick={_onClick}
          key={key}
          value={value}
          active={active}
        >
          {text ? text : children}
        </CommentButton>
      </React.Fragment>
    );
  }
  if (reply) {
    return (
      <React.Fragment>
        <ReplyButton
          {...styles}
          onClick={_onClick}
          key={key}
          value={value}
          active={active}
        >
          {text ? text : children}
        </ReplyButton>
      </React.Fragment>
    );
  }
  if (bookmark) {
    return (
      <React.Fragment>
        <BookmarkButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </BookmarkButton>
      </React.Fragment>
    );
  }
  if (enter_dis) {
    return (
      <React.Fragment>
        <EnterDisButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </EnterDisButton>
      </React.Fragment>
    );
  }
  if (mob_enter) {
    return (
      <React.Fragment>
        <MobileEnterButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MobileEnterButton>
      </React.Fragment>
    );
  }
  if (mob_cancle) {
    return (
      <React.Fragment>
        <MobileCancleButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MobileCancleButton>
      </React.Fragment>
    );
  }

  if (search) {
    return (
      <React.Fragment>
        <SearchFilter {...styles} onClick={_onClick}>
          {text ? text : children}
        </SearchFilter>
      </React.Fragment>
    );
  }

  if (dis_enter) {
    return (
      <React.Fragment>
        <EnterButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </EnterButtonDisable>
      </React.Fragment>
    );
  }

  if (nullLink) {
    return (
      <React.Fragment>
        <MediumButtonLink {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonLink>
      </React.Fragment>
    );
  }
  if (mainBannerBtn) {
    return (
      <React.Fragment>
        <MainBannerButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MainBannerButton>
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

Buttons.defaultProps = {
  margin: '',
  text: '',
  children: null,
  _onClick: () => {},
  large: '',
  medium: '',
  small: '',
  large_b: '',
  medium_b: '',
  small_b: '',
  large_w: '',
  medium_w: '',
  small_w: '',
  dis_large: '',
  dis_medium: '',
  dis_small: '',
  enter: '',
  more: '',
  user: '',
  bottom: '',
  smallbottom: '',
  key: '',
  value: '',
  active: '',
  signup: '',
  comment: '',
  reply: '',
  bookmark: '',
  search: '',
  mob_enter: '',
  mob_cancle: '',
  dis_enter: '',
  nullLink: '',
};

const LargeButton = styled(Button)({
  color: '#333333',
  height: '64px',
  width: '570px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
});

const MediumButton = styled(Button)({
  color: '#333333',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
});

const SmallButton = styled(Button)({
  color: '#333333',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
});

const LargeButtonBlack = styled(Button)({
  color: '#fff',
  height: '64px',
  width: '570px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
    backgroundColor: '#23C8AF',
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

const MediumButtonBlack = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
    backgroundColor: '#23C8AF',
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

const SmallButtonBlack = styled(Button)({
  color: '#fff',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
    backgroundColor: '#23C8AF',
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

const LargeButtonWhite = styled(Button)({
  // margin: '41px 0px',
  color: '#fff',
  height: '64px',
  width: '570px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#fff',
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
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const MediumButtonWhite = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#fff',
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
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const SmallButtonWhite = styled(Button)({
  color: '#777777',
  height: '40px',
  width: '110px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#fff',
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
    color: '#777777',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const LargeButtonDisable = styled(Button)({
  color: '#aaaaaa',
  height: '64px',
  maxWidth: '570px',
  minWidth: '300px',
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
    color: '#aaaaaa',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    color: '#aaaaaa',
  },
});

const MediumButtonDisable = styled(Button)({
  color: '#aaaaaa',
  height: '54px',
  maxWidth: '278px',
  minWidth: '250px',
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
    color: '#aaaaaa',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    color: '#aaaaaa',
  },
});

const SmallButtonDisable = styled(Button)({
  position: 'relative',
  zIndex: '2',
  right: '150px',
  color: '#aaaaaa',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  margin: '15px 0px 0px 0px',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#eeeeee',
  borderColor: '#eeeeee',
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
    color: '#aaaaaa',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    color: '#aaaaaa',
  },
});

const EnterButton = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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

const MoreButton = styled(Button)({
  color: '#23C8AF',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#EDFBF9',
  borderColor: '#EDFBF9',
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

const UserButton = styled(Button)({
  color: '#fff',
  height: '64px',
  width: '570px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
    boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.3)',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const BottomButton = styled(Button)({
  color: '#acacac',
  height: '44px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  fontWeight: 700,
  padding: '6px 12px',
  borderBottom: '4px solid',
  borderRadius: '0',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
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
    color: '#666666',
    backgroundColor: '#eeeeee',
    borderColor: '#666666',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#333333',
    color: '#333333',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#333333',
    color: '#333333',
  },
});

const BottomButtons = styled(Button)({
  color: '#acacac',
  height: '26px',
  width: '50px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  fontWeight: 700,
  padding: '6px 12px',
  // borderBottom: '4px solid',
  borderRadius: '0',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#acacac',
  boxSizing: 'border-box',
  minWidth: '86px',
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
    color: '#666666',
    backgroundColor: '#eeeeee',
    borderColor: '#666666',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#333333',
    color: '#333333',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#333333',
    color: '#333333',
  },
});

const SignUpButtons = styled(Button)({
  color: '#333333',
  margin: '0px 3px',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
    backgroundColor: '#333333',
    borderColor: '#333333',
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

const HeaderButtons = styled(Button)({
  color: '#acacac',
  margin: '0px 10px',
  height: '44px',
  width: '100px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  borderRadius: '0px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
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
    color: '#333333',
    backgroundColor: '#fff',
    borderBottom: '3px solid',
    borderColor: '#333333',
    boxShadow: 'none',
  },
  '&:active': {
    color: '#23C8AF',
    backgroundColor: '#fff',
    borderBottom: '3px solid',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  // '@media (max-width:1035px)': {
  //   width: '100px',
  //   fontSize: '18px',
  // },
  // '@media (max-width:756px)': {
  //   width: '50px',
  //   fontSize: '13px',
  // },
  // '@media (max-width:500px)': {
  //   width: '30px',
  //   fontSize: '5px',
  // },
});
const ReplyButton = styled(Button)({
  position: 'relative',
  zIndex: '2',
  right: '150px',
  color: '#aaaaaa',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  margin: '0px 0px 15px 0px',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#eeeeee',
  borderColor: '#eeeeee',
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
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});
const CommentButton = styled(Button)({
  position: 'relative',
  zIndex: '2',
  right: '150px',
  color: '#aaaaaa',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  margin: '15px 0px 0px 0px',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#eeeeee',
  borderColor: '#eeeeee',
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
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});
const BookmarkButton = styled(Button)({
  color: '#333333',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 2px 6px 22px',
  border: '3px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#999999',
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
    backgroundColor: 'transparent',
    borderColor: '#333333',
    border: '3px solid',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderColor: '#23C8AF',
    border: '2px solid',
    color: '#fff',
  },
});
const SearchFilter = styled(Button)({
  color: '#acacac',
  height: '26px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  // borderBottom: '4px solid',
  borderRadius: '20px',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
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
    color: '#666666',
    backgroundColor: '#eeeeee',
    borderColor: '#666666',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#333333',
    color: '#333333',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: '#333333',
    color: '#333333',
  },
});

const EnterDisButton = styled(Button)({
  color: '#AAAAAA',
  height: '54px',
  width: '278px',
  // minWidth: '250px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#EEEEEE',
  borderColor: '#EEEEEE',
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
    color: '#AAAAAA',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    color: '#AAAAAA',
  },
});
const MobileEnterButton = styled(Button)({
  color: '#fff',
  height: '40px',
  width: '152px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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
const MobileCancleButton = styled(Button)({
  color: '#333333',
  height: '40px',
  width: '152px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#ACACAC',
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
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#333333',
    borderColor: '#333333',
    color: '#fff',
  },
});

const EnterButtonDisable = styled(Button)({
  color: '#aaaaaa',
  height: '100px',
  width: '310px',
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
    color: '#eeeeee',
    backgroundColor: '#aaaaaa',
    borderColor: '#aaaaaa',
    boxShadow: 'none',
  },
});

const MediumButtonLink = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '3px solid',
  borderRadius: '30px',
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
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const MainBannerButton = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
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

export default Buttons;
