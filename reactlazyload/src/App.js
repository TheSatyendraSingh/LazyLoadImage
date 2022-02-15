import React from "react";
import Data from "./data.json";
// const img = "./images/image2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  return (
    <>
      <div>App</div>
      {Data.map((data) => {
        return (
          <>
            <LazyLoadImage
              effect="blur"
              src={data.img}
              alt={data.name}
              key={data.id}
              height="500px"
              width="400px"
            />
          </>
        );
      })}
    </>
  );
};

export default App;
