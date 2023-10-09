import React, { useState } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Info from "./components/Info";
import Cart from "./components/Cart";
import Slider from "./components/Slider";
import LightBox from "./components/LightBox";
import img1 from "../images/image-product-1-thumbnail.jpg";
import img2 from "../images/image-product-2-thumbnail.jpg";
import img3 from "../images/image-product-3-thumbnail.jpg";
import img4 from "../images/image-product-4-thumbnail.jpg";
import deskImg1 from "../images/image-product-1.jpg";
import deskImg2 from "../images/image-product-2.jpg";
import deskImg3 from "../images/image-product-3.jpg";
import deskImg4 from "../images/image-product-4.jpg";
function App() {
  const [hidden, setHidden] = useState(true);
  const [number, setNumber] = useState(0);
  const [hiddenCart, setHiddenCart] = useState();
  const [total, setTotal] = useState();
  const [lightBoxHidden, setLightBoxHidden] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const Wrapper = LightBox(Slider);

  const images = [deskImg1, deskImg2, deskImg3, deskImg4];

  const nextSlide = () => {
    setActiveImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const thumbnails = [img1, img2, img3, img4];

  const showImage = (index) => {
    setActiveImage(index);
  };
  return (
    <div className="relative flex flex-col justify-center">
      <Header
        hidden={hidden}
        setHidden={setHidden}
        hiddenCart={hiddenCart}
        setHiddenCart={setHiddenCart}
        total={total}
        number={number}
      />
      <MenuBar hidden={hidden} setHidden={setHidden} />
      <div className="flex flex-col items-center desktop:flex-row desktop:justify-center desktop:translate-x-[-50px] mb-[70px]">
        <Slider
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          thumbnails={thumbnails}
          images={images}
          showImage={showImage}
          setLightBoxHidden={setLightBoxHidden}
        />

        <Info
          number={number}
          setNumber={setNumber}
          total={total}
          setTotal={setTotal}
        />
      </div>
      {lightBoxHidden ? (
        hidden
      ) : (
        <Wrapper
          setLightBoxHidden={setLightBoxHidden}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          thumbnails={thumbnails}
          images={images}
          showImage={showImage}
        />
      )}
      <Cart
        number={number}
        setNumber={setNumber}
        hiddenCart={hiddenCart}
        setHiddenCart={setHiddenCart}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
