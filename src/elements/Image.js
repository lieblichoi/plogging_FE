import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const {
    shape,
    src,
    size,
    _onClick,
    cursor,
    width,
    height,
    borderRadius,
    margin,
    padding,
    title,
  } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
    _onClick,
    borderRadius: borderRadius,
    margin: margin,
    cursor,
    padding: padding,
    title,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === 'circleHover') {
    return <ImageHoverCircle {...styles}></ImageHoverCircle>;
  }
  if (shape === 'circleMedia') {
    return <ImageCircleMedia {...styles}></ImageCircleMedia>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  if (shape === 'rec') {
    return (
      <AspectOutters onClick={_onClick}>
        <AspectInners {...styles} onClick={_onClick}></AspectInners>
      </AspectOutters>
    );
  }
  if (shape === 'MainBanner') {
    return <MainBanner {...styles}> </MainBanner>;
  }

  return (
    <React.Fragment>
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: null,
  src: '',
  size: 36,
  width: '',
  height: '',
  margin: '',
  borderRadius: '',
  cursor: '',
  _onClick: () => {},
  padding: '',
  title: '',
};

const MainBanner = styled.div`
  width: 100%;
  display: inline-block;
`;

const AspectOutter = styled.div`
  width: 100%;
  /* min-width: 250px; */
`;

const AspectInner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => props.cursor};
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center center;
`;

const AspectOutters = styled.div`
  /* min-width: 250px; */
`;

const AspectInners = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  cursor: ${(props) => props.cursor};
  border-radius: ${(props) => props.borderRadius};
  position: relative;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center center;
`;

const ImageHoverCircle = styled.div`
  position: relative;
  display: inline-block;
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  &:hover {
    transition: all 0.5s;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.22);
    /* background-color: #23c8af; */
    color: white;
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;

const ImageCircleMedia = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};

  ${({ theme }) => theme.device.desktop} {
    width: var(--size);
    height: var(--size);
  }
  ${({ theme }) => theme.device.tablet} {
    width: 40px;
    height: 40px;
  }
  ${({ theme }) => theme.device.mobile} {
    width: 38px;
    height: 38px;
  }
`;

export default Image;
