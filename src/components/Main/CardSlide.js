import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PostCardUn from './PostCardUn';
import PostCard from './PostCard';
import SlideLeftBtn from '../../assets/Icon/SlideLeftBtn.svg';
import SlideRightBtn from '../../assets/Icon/SlideRightBtn.svg';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '1',
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
        zIndex: '1',
        margin: '0px 15px 0px 0px',

        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="42px" height="42px" src={SlideRightBtn} />
    </div>
  );
}

const CardSlide = (props) => {
  const post_list = props.post_list;

  // console.log(props);

  const styles = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    //반응형 Breakepoint = width
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      // {
      //   breakpoint: 1078,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 790,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <SlidSection>
      {post_list?.length === 0 ? (
        <>
          <PostCardUn />
        </>
      ) : (
        <>
          <Slider {...styles}>
            {post_list?.map((p, idx) => {
              return <PostCard {...p} />;
            })}
          </Slider>
        </>
      )}
    </SlidSection>
  );
};

const SlidSection = styled.section`
  margin: 0px 0px 0px 0px;

  /* padding: 50px; */
  .slick-list {
    height: 400px;
    &::before {
      font-size: 0px;
      /* width: 2900px; */
    }
  }

  .slick-slide {
    max-width: 300px;
    /* min-width: 290px; */

    margin: 0px 0px 0px 0px;
  }
  .slick-track {
    height: 400px;
  }
  .sc-dkPtRN.ejiJul {
    margin: 0px 0px 0px 30px;
  }

  .slick-arrow.slick-prev {
    &::before {
      font-size: 0px;
    }
    font-size: 0px;
    height: 0px;
  }
  .slick-arrow.slick-next {
    &::before {
      font-size: 0px;
    }
    font-size: 0px;
    height: 0px;
    position: absolute;
    margin: 0px 0px 0px 0px;
  }

  .sc-bqiRlB.gDNBiK {
    /* height: 100%; */
  }
`;

export default CardSlide;
