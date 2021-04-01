import React from "react";

function BlogCard() {
  const blogItem = [
    {
      img: "http://via.placeholder.com/300",
      date: "22/07/17",
      title: "Test Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
    },
    {
      img: "http://via.placeholder.com/300",
      date: "22/07/17",
      title: "Test Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio quam fugit corrupti temporibus ratione labore aperiam aut et magni. Enim, sit ab molestiae tenetur reprehenderit voluptatem molestias! Impedit, fuga?",
    },
    {
      img: "http://via.placeholder.com/300",
      date: "22/07/17",
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
                  <p>{blog.content}</p>
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
