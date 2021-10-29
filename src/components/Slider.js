import React from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftButton from '../assets/Icon/LeftButton.svg';
import RightButton from '../assets/Icon/RightButton.svg';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 0px 0px 10px',
        backgroundSize: '30px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="65px" height="65px" src={LeftButton} />
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 70px 0px 0px',
        backgroundSize: '30px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="65px" height="65px" src={RightButton} />
    </div>
  );
}

const Slider = () => {
  const styles = {
    dots: true, //캐러셀 이미지가 몇번째 인지 알려주는 점 표시
    infinite: 500, // loop를 만들지
    slidesToShow: 1, // 한번에 몇개의 사진을 보여줄지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘기는지
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true, // 오른쪽으로 간후 끝지점 부터 왼쪽으로 차례대로 내려온다
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <React.Fragment>
      <SlickSection>
        <Slick {...styles}>
          <SlideImage
            src={
              'https://cdn.mustit.co.kr/lib/upload/product/erosjo/2018/05/1526909200-92.jpg'
            }
          />
          <SlideImage
            src={
              'https://cdn.mustit.co.kr/lib/upload/product/erosjo/2018/05/1526909200-92.jpg'
            }
          />
          <SlideImage
            src={
              'https://cdn.mustit.co.kr/lib/upload/product/erosjo/2018/05/1526909200-92.jpg'
            }
          />
          <SlideImage
            src={
              'https://cdn.mustit.co.kr/lib/upload/product/erosjo/2018/05/1526909200-92.jpg'
            }
          />
          <SlideImage
            src={
              'https://cdn.mustit.co.kr/lib/upload/product/erosjo/2018/05/1526909200-92.jpg'
            }
          />
        </Slick>
      </SlickSection>
    </React.Fragment>
  );
};

const SlideImage = styled.img`
  width: 100%;
  background-size: cover;
`;

const ButtonImg = styled.img`
  all: unset;
  width: 40px;
  /* padding: 0.5em 2em; */
  /* color: coral; */
  /* border-radius: 10px; */
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SlickSection = styled.section`
  .slick-arrow {
    &::before {
      content: '';
    }
  }
`;
export default Slider;
