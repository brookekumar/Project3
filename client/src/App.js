import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import HeaderMain from "./components/HeaderMain";
import Slider from "./components/NetflixSlider";
import PCAPITEST from "./components/PCAPITEST";
import "../src/components/main.css"
import OMDBTEST from "./components/OMDB/OMDBTEST";
// import PodcastContainer.js from "./components/PodcastContainer";

const movies = [
  {
    id: 1,
    image: "./images/slide1.jpg",
    imageBg: "./images/slide1b.webp",
    title: "1983"
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll"
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain"
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education"
  },
  {
    id: 5,
    image: "/images/slide5.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite"
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

  }
  state = {
    // podcast: "",
    // movie: "",
    selectedOne: "",
    searchTearm: ""
  }

  onPodcastChange = (event) => {
    this.setState({
      selectedOne: event.target.value
    })
    console.log(this.state.selectedOne)
  }

  handleInputChange = (event) => {
    this.setState({
      searchTearm: event.target.value
    })
    console.log("search tearm:" + this.state.searchTearm)
  }

  helloClick = () => {
    console.log(this.child.current)
    alert("hello click");
    if (this.child.current) {
      this.child.current.searchQuery()
    }

  }

  render() {

    return (
      <div>
        <div>
          <input type="text" name="inputValue" value={this.state.searchTearm} onChange={this.handleInputChange} />
          <input type="radio" name="movieorpodcast" value="podcast" onChange={this.onPodcastChange} checked={true} />Podcast
          <input type="radio" name="movieorpodcast" value="movie" onChange={this.onPodcastChange} />Movie
          <button onClick={this.helloClick}>Hello!</button>
        </div>
        <PCAPITEST ref={this.child} selectedOne={this.state.selectedOne} searchTearm={this.state.searchTearm} />
        <OMDBTEST selectedOne={this.state.selectedOne} searchTearm={this.state.searchTearm} />

      </div>
    );
  }
}
export default App;
