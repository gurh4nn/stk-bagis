import React from "react";
import Slider from "react-slick";
function HomeSlider() {
  const slides = [
    {
      title: "First item",
      description: "Lorem ipsum",
      image: "http://via.placeholder.com/1500x500",
    },
    {
      title: "Second item",
      description: "Lorem ipsum",
      image: "http://via.placeholder.com/1500x500",
    },
  ];
  var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  };
  return (
    <div className="home-slider">
      <Slider {...settings}>
        {slides.map((item, index) => (
          // <div
          //   // key={index}
          //   // style={{
          //   //   background: `url('${item.image}') no-repeat center center`,
          //   // }}
          // >
          <div className="slider-item" key={index}>
            <img style={{width:"100%"}} src={item.image} alt=""/>
          {/* <div className="slider-item-content">
          <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>İncele</button>
          </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
