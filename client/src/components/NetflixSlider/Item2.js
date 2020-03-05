import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import Modal from "./../modal/modal";
import "./Item.scss";

const Item2 = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.imdbID;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive
          })}
        >
          <button>
          <img src={movie.Poster} alt="" />
          <Modal/>
          </button>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item2;
