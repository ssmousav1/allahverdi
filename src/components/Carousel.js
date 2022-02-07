import React, { useEffect, useState } from "react";
import "./carousel.css";

export const Carousel = (props) => {
  const [app, updateApp] = useState({
    currentIndex: 0,
    lastIndex: -1,
    direction: 0,
  });
  console.log(props);

  const showNext = (index) => {
    let lastIndex =
      index < 0
        ? 0
        : index === props.shapes.length
        ? props.shapes.length - 1
        : index;
    let currentIndex = index + 1 === props.shapes.length ? 0 : index + 1;
    updateApp({ currentIndex, lastIndex, direction: 1 });
  };

  const showPrevious = (index) => {
    let lastIndex = index < 0 ? 0 : index;
    let currentIndex = index - 1 < 0 ? props.shapes.length - 1 : index - 1;
    updateApp({ currentIndex, lastIndex, direction: -1 });
  };

  useEffect(() => {
    // setInterval(() => {
    //   console.log('ddd');
    //   showNext(app.currentIndex);
    // }, 5000);
  }, []);

  const Slide = (item) => {
    return <img className="slide-image" src={item.item.src} />;
  };

  return (
    <div>
      <div className="arrow-container-left">
        <div
          onClick={() => showPrevious(app.currentIndex)}
          id="arrow-left"
          className="arrow arrow-prev"
        ></div>
      </div>

      <Slide item={props.shapes[app.currentIndex]} />
      <div className="arrow-container-right">
        <div
          onClick={() => showNext(app.currentIndex)}
          id="arrow-right"
          className="arrow arrow-next"
        ></div>{" "}
      </div>
    </div>
  );
};
