import React from "react";
import "./home.css";

export default class Home extends React.Component {
  state = {
    categories: ["Music", "Meme", "Movies", "Shows", "Photos"],
  };
  render() {
    return (
      <div className="home-container">
        <Heading />
        <div className="button-set">
          {this.state.categories.map((cat) => (
            <CategoryButton data={{ name: cat }} />
          ))}
        </div>
      </div>
    );
  }
}

class Heading extends React.Component {
  render() {
    return <div className="heading-container">Mastani Gand</div>;
  }
}

class CategoryButton extends React.Component {
  render() {
    return <button className="category-button">{this.props.data.name}</button>;
  }
}
