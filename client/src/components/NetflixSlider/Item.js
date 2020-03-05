import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import Modal from "./../modal/modal";
import "./Item.scss";

const Item = ({ podcast }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === podcast.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive
          })}
        >
          <button>
          <img src={podcast.thumbnail} alt="" />
          <Modal/>
          </button>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
