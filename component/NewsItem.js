import React from "react";
import Rating from "././Rating";
import "/src/styles.css";
const NewsItem = ({ item }) => {
  return (
    <div key={item.id} className="newsitem-container">
      <img className="image-video" src={item.movie} />
      <h1 className="title-video">
        {item.title}-{item.year}
      </h1>
      <span className="star-video">
        <Rating count={item.rating} />
      </span>
    </div>
  );
};

export default NewsItem;
