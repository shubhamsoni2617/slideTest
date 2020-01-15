import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import Slider from 'react-slick';

const BannerSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [bannerData, setBannerData] = useState(
    new Array(14).fill({
      full_image: '',
      navigation_link: '',
      title: ''
    })
  );
  // const [bannerData, setBannerData] = useState('');
  let slider1 = useRef();
  let slider2 = useRef();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);
  const settings = {
    arrows: true,
    draggable: false,
    centerMode: true,
    centerPadding: '250px',
    infinite: true,
    focusOnSelect: true
  };
  const settingsSlider = {
    autoplay: true,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 14,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 11
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };
  console.log('nav1', nav1);
  return (
    <div className={`banner`}>
      <div className='banner-carousel'>
        <Slider
          {...settings}
          // asNavFor={nav2}
          ref={slider => (slider1 = slider)}
          beforeChange={(current, next) => slider2.slickGoTo(next)}
        >
          {bannerData &&
            bannerData.map((banner, key) => {
              return (
                <div key={banner.title + key}>
                  <img
                    src={banner.full_image}
                    alt={`img${key}`}
                    className='img1 img-responsive'
                    // onLoad={this.onLoad}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className='banner-thumbnail'>
        <Slider
          {...settingsSlider}
          // asNavFor={nav1}
          ref={slider => {
            console.log(slider);
            slider2 = slider;
          }}
          beforeChange={(current, next) => slider1.slickGoTo(next)}
        >
          {bannerData &&
            bannerData.map((banner, key) => {
              return (
                <div
                  key={banner.title + key}
                  onClick={() => {
                    // slider1.slickGoTo(key);
                  }}
                >
                  <img
                    src={banner.full_image}
                    alt={`img${key}`}
                    className='img img-responsive'
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};
export default BannerSlider;
