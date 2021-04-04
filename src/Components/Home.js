import React from "react";
import HomeSlider from "./Home/HomeSlider";
import BlogCard from "./Blog/Index";
import TotalDonate from "./Donate/TotalDonate"

function Home() {
  return (
    <div className="home-content">
      <HomeSlider />
      <BlogCard />
      <TotalDonate />
    </div>
  );
}

export default Home;
