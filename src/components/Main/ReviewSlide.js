import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainReviewCard from './MainReviewCard';
import SlideLeftBtn from '../../assets/Icon/SlideLeftBtn.svg';
import SlideRightBtn from '../../assets/Icon/SlideRightBtn.svg';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 0px 0px -18px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="42px" height="42px" src={SlideLeftBtn} />
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
        margin: '0px 10px 0px 0px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="42px" height="42px" src={SlideRightBtn} />
    </div>
  );
}

const ReviewSlide = (props) => {
  const post_list = props.post_list;

  const styles = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    //반응형 Breakepoint = width
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <SlidSection>
      <Slider {...styles}>
        {post_list?.map((p, idx) => {
          return <MainReviewCard {...p} key={idx} />;
        })}
      </Slider>
    </SlidSection>
  );
};

const SlidSection = styled.section`
  margin: 0px 0px 0px 0px;
  /* padding: 50px; */
  .slick-slide {
    max-width: 400px;
    /* min-width: 380px; */
  }
  .slick-track {
    height: 290px;
  }
  .sc-bdvvtL.gdQLLS {
    margin: 0px 0px 0px 30px;
  }

  .slick-slide.slick-active {
    margin: 0px 0px 0px 0px;
  }
  .sc-dkPtRN.ejiJul {
    /* margin: 0px 0px 0px 50px; */
  }
  .slick-arrow {
    &::before {
      /* content: ''; */
    }
  }
  .slick-arrow.slick-prev {
  }
`;

export default ReviewSlide;
