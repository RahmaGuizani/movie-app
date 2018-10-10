import React from "react";
import NewsItem from "./NewsItem";
import "/src/styles.css";
const NewList = ({ news = [], onAddMovie = () => {} }) => {
  return (
    <div className="container">
      {news.map((elem, i) => <NewsItem key={i} item={elem} />)}
      <button
        className="bouttom-add"
        onClick={() => {
          onAddMovie({
            id: Math.random(),
            title: prompt("movie title: "),
            rating: Number(prompt("movie rating: ")),
            year: Number(prompt("movie year: ")),
            movie: Number(prompt("movie: "))
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default NewList;
