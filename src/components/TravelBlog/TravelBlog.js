import React from "react";
import "./TravelBlog.css";

function TravelBlog(data) {
  return (
    <section className="place">
      <div className="bg">
        <img src={data.img1} />
      </div>
      <div className="on-top">
        <h3>{data.heading}</h3>

        <div className="photo-row">
          <img src={data.img1} alt={"photo of " + data.heading} />
          <img src={data.img2} alt={"photo of " + data.heading} />
          <img src={data.img3} alt={"photo of " + data.heading} />
        </div>
        <p>{data.description}</p>
      </div>
    </section>
  );
}

export default TravelBlog;
