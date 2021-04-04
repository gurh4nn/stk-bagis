import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  const blogItem = [
    {
      img: "https://picsum.photos/300",
      date: "22/07/17",
      link: "/",
      title: "Test Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
    },
    {
      img: "https://picsum.photos/303",
      date: "22/07/17",
      link: "/",
      title: "Test Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
    },
    
    {
      img: "https://picsum.photos/302",
      date: "22/07/17",
      link: "/",
      title: "Test Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
    },
    {
      img: "https://picsum.photos/301",
      date: "22/07/17",
      link: "/",
      title: "Test Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
    },
  ];
  return (
    <div>
      <div className="blog-card">
        <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
