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
  render() {
    return (
      <div>
        {/* <HeaderMain />
        <PCAPITEST></PCAPITEST>
        <div style={{ display: "flex" }}>
          <Slider>
            {movies.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <div style={{ display: "flex" }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}

        <PCAPITEST />
        <OMDBTEST/>
        
      </div>
    );
  }
}
export default App;
