import React, { useState, useEffect } from "react";
import axios from "axios";
function Content(props) {
  const [corporation, setCorporation] = useState([]);
  useEffect(() => {
    axios
      .get("https://6086462fd14a870017578fbc.mockapi.io/corporation")
      .then((response) => setCorporation(response.data));
  }, []);
  const dataContent = props.path;
  return (
    <div className="corporation-content">
      {corporation.map((corporate, value) => (
        <div className="content" key={value}>
          <div className="content-title">{props.title}</div>
          <div className="content-img">
            <img
              src={
                dataContent === "hakkimizda"
                  ? corporate.hakkimizda_img
                  : dataContent === "tarihce"
                  ? corporate.tarihce_img
                  : corporate.vergi_img
              }
              alt=""
            />
          </div>
          <div className="content-text">
            <p>
              {dataContent === "hakkimizda"
                ? corporate.hakkimizda_content
                : dataContent === "tarihce"
                ? corporate.tarihce_content
                : corporate.vergi_content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
