import React from 'react';
import styled from 'styled-components';

const Icon = (props) => {
  const { shape, src, size, _onClick, cursor, width, bottom, left } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    _onClick: _onClick,
    cursor: cursor,
    bottom,
    left
  };

  return (
    <React.Fragment>
      <ImageOutter>
        <ImageInner {...styles} onClick={_onClick} />
      </ImageOutter>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: null,
  src: '',
  size: 36,
  width: '',
  _onClick: () => {},
  bottom: '',
  left: ''
};

const ImageOutter = styled.div`
  /* width: 100%; */
  /* min-width: 250px; */
`;
const ImageInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => (props.cursor ? `cursor: pointer;` : '')};
  width: ${(props) => props.width};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;

export default Icon;
