import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
function HomeSlider() {
  const slides = [
    {
      title: "First item",
      description: "Lorem ipsum",
      image: "https://picsum.photos/1500/500",
      link: "/",
    },
    {
      title: "Second item",
      description: "Lorem ipsum for secont item",
      image: "https://picsum.photos/1500/501",
      link: "/",
    },
    {
      title: "Third item",
      description: "Lorem ipsum for third item. Third slider long text.",
      image: "https://picsum.photos/1500/502",
      link: "/",
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
          <div className="slider-item-content">
          <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to="/"><button>İncele</button></Link>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
