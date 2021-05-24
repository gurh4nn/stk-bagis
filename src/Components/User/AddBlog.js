import React, { useEffect, useState } from "react";
import axios from "axios";

function AddBlog() {
  const [blogUpdate, setBlogUpdate] = useState({
    img: "",
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    if (
      blogUpdate.img !== "" &&
      blogUpdate.title !== "" &&
      blogUpdate.content !== ""
    ) {
      axios
        .post("https://6086462fd14a870017578fbc.mockapi.io/blog", blogUpdate)
        .then((response) => {
          console.log(response);
        });
    } else {
      alert("Lütfen gerekli alanları doldurunuz.");
    }
  };

  const handleChange = (e) => {
    setBlogUpdate({ ...blogUpdate, [e.target.name]: e.target.value });
  };

  const [blogList, setBlogList] = useState([]);
//   const [deleteBlog, setDeleteBlog] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get("https://6086462fd14a870017578fbc.mockapi.io/blog"),
        // axios.delete(
        //   `https://6086462fd14a870017578fbc.mockapi.io/blog/${deleteBlog}`
        // ),
      ])
      .then((responses) => {
        setBlogList(responses[0].data);
        // setUpdateBlogList(responses[1].data);
      });
  }, []);

  const handleClick = (id) => {
    if (id) {
      axios
          .delete(
            `https://6086462fd14a870017578fbc.mockapi.io/blog/${id}`
          )
        .then((response) => {
          setBlogList(response.data);
        });
    }
  };

  return (
    <div className="add-donate add-blog">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(blogUpdate);
        }}
      >
        <input
          type="text"
          name="img"
          id="img"
          placeholder="Görsel adresi giriniz"
          value={blogUpdate.img}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Blog başlığı giriniz"
          value={blogUpdate.title}
          onChange={handleChange}
        />
        <textarea
          style={{ height: "50px" }}
          type="text"
          name="content"
          id="content"
          placeholder="Blog içeriği giriniz"
          value={blogUpdate.content}
          onChange={handleChange}
        />
        <button type="submit">Gönder</button>
      </form>
      <div className="blog-list">
        <table>
          <tr>
            <th>ID</th>
            <th>Yazı Başlığı</th>
            <th>Sil</th>
          </tr>
          {blogList.map((list, value) => (
            <tr key={value}>
              <td>{list.id}</td>
              <td>{list.title}</td>
              <td>
                <button onClick={(e) => handleClick(list.id, e)}>Sil</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AddBlog;
