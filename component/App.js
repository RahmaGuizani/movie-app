import React, { Component } from "react";
import Headder from "./Header";
import NewsList from "./NewsList";
import RatingFilter from "./RatingFilter";
import ReactDOM from "react-dom";
import "/src/styles.css";

let newstab = [
  {
    id: 1,
    title: "Delibal",
    rating: 5,
    movie:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3bGX8MKe8hlPwHu4OoQJwnGVH5s8XY4H2vAONM_g17g_MD8W",
    year: "2005"
  },
  {
    id: 2,
    title: " Benzar",
    rating: 4,
    movie:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgFcgKPdisjkoRG01EgYUiep7XdjEPRnpygx7uCGK2C-GKag",
    year: "2010"
  },
  {
    id: 3,
    title: "Su Attas",
    rating: 5,
    movie: "http://1plus1tv.ru/uploads/posts/2014-01/1390561650_111.jpg",
    year: "2005"
  },
  {
    id: 4,
    title: "Seni Sivouyrm ",
    rating: 3,
    movie: "https://i.ytimg.com/vi/Ysk5hQOxm9U/maxresdefault.jpg",
    year: "1994"
  },
  {
    id: 5,
    title: "Kardeshim",
    rating: 2,
    movie:
      "http://ruralwastegh.com/gallery/5f58da492b5bda253613fe04922f9001.jpg",
    year: "2000"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: newstab,
      minRatingFilter: 0
    };
  }
  addNewMovie(newMovie) {
    this.setState({
      news: this.state.news.concat(newMovie)
    });
  }
  filtredMovie(keyword) {
    let filtred = this.state.news.filter((elm, i) => {
      return (
        (elm.title.toUpperCase().indexOf(keyword.toUpperCase()) > -1 ||
          elm.year.indexOf(keyword) > -1) &&
        elm.rating >= this.state.minRatingFilter
      );
    });
    this.setState({ news: filtred });
  }

  //function handelchange bech ne5eth information mel child lel parents
  HandleChange = n => {
    this.setState({
      minRatingFilter: n
    });
  };
  render() {
    return (
      <div className="app_container">
        <Headder seachMovie={keyword => this.filtredMovie(keyword)} />

        <NewsList
          news={this.state.news}
          onAddMovie={newMovie => this.addNewMovie(newMovie)}
        />
        <RatingFilter
          count={this.state.minRatingFilter}
          onChange={newRating => {
            this.HandleChange(newRating);
            //handelchage 3meltha function bech sufgardit fiha el valeur ta3 el newRating eli chaque fois ytbedel wa9t eni neclick
          }}
        />
      </div>
    );
  }
}

export default App;
