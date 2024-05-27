import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import './slider.css';

export const SlickSlider = ({ title, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div>
      <h3>Gallery</h3>
      <Slider {...settings}>
        {items.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              width={320}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
