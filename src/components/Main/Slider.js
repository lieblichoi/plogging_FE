import React from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftButton from '../../assets/Icon/LeftButton.svg';
import RightButton from '../../assets/Icon/RightButton.svg';
import MainBannerAttend from './MainBanner/MainBannerAttend';
import MainBannerCampaign from './MainBanner/MainBannerCampaign';
import MainBannerPosting from './MainBanner/MainBannerPosting';
import MainBannerReview from './MainBanner/MainBannerReview';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 0px 0px 26px',
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

const Slider = (props) => {
  const post_list = props.post_list;

  const styles = {
    dots: true, //캐러셀 이미지가 몇번째 인지 알려주는 점 표시
    infinite: 500, // loop를 만들지
    slidesToShow: 1, // 한번에 몇개의 사진을 보여줄지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘기는지
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true, // 오른쪽으로 간후 끝지점 부터 왼쪽으로 차례대로 내려온다
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <React.Fragment>
      <SlickSection>
        <Slick {...styles}>
          <MainBannerReview post_list={post_list} />
          <MainBannerAttend post_list={post_list} />
          <MainBannerCampaign post_list={post_list} />
          <MainBannerPosting post_list={post_list} />
        </Slick>
      </SlickSection>
    </React.Fragment>
  );
};
const SlickSection = styled.section`
  display: inline-block;
  width: 100%;
  height: 670px;
  overflow: hidden;

  .slick-arrow {
    &::before {
      content: '';
    }
    .slick-list {
      border-radius: 15px;
    }
  }
`;

export default Slider;
