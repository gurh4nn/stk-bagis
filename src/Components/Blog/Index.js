import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function BlogCard() {
  // const blogItem = [
  //   {
  //     img: "https://picsum.photos/300",
  //     date: "22/07/17",
  //     link: "/",
  //     title: "Test Title 1",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
  //   },
  //   {
  //     img: "https://picsum.photos/303",
  //     date: "22/07/17",
  //     link: "/",
  //     title: "Test Title 1",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
  //   },

  //   {
  //     img: "https://picsum.photos/302",
  //     date: "22/07/17",
  //     link: "/",
  //     title: "Test Title 2",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
  //   },
  //   {
  //     img: "https://picsum.photos/301",
  //     date: "22/07/17",
  //     link: "/",
  //     title: "Test Title 3",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
  //   },
  //   {
  //     img: "https://picsum.photos/301",
  //     date: "22/07/17",
  //     link: "/",
  //     title: "Test Title 3",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
  //   },
  // ];

  const [blogItem, setBlogItem] = useState([]);
  useEffect(() => {
    axios
      .get("https://6086462fd14a870017578fbc.mockapi.io/blog")
      .then((response) => setBlogItem(response.data));
  }, []);

  console.log(blogItem)
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <>
      <div className="blog-card">
        {/* <div className="card">
          {blogItem.map((blog, index) => (
            <div className="card-item" key={index}>
              <div className="card-img">
                <img src={blog.img} alt={blog.title} />
              </div>
              <div className="card-content">
                <div className="content">
                  <div className="content-img">
                  <Link to={blog.link}><img src="/img/card-array.svg" alt=""/></Link>
                 <Link to={blog.link}> <h3>{blog.title}</h3></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <Slider {...settings}>
          {blogItem.map((blog, index) => (
            <div className="slider-item card" key={index}>
              <div className="card-item">
                <div className="card-img">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="card-content">
                  <div className="content">
                    <div className="content-img">
                      <Link to={`/blog/${blog.id}`}>
                        <img src="/img/card-array.svg" alt="" />
                      </Link>
                      <Link to={`/blog/${blog.id}`}>
                        {" "}
                        <h3>{blog.title}</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default BlogCard;
