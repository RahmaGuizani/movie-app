import React, { Component } from "react";
import Rating from "./Rating";
import RatingFilter from "./Rating";
import "/src/styles.css";
let count;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  handleChange = event => {
    this.setState({ keyword: event.target.value });
    this.props.seachMovie(this.state.keyword);
  };

  render() {
    return (
      <div className="header-container">
        <input
          className="header-input"
          type="text"
          placeholder="Search your movie"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Header;
