import React, { useState } from "react";
import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
import close from "../../images/icon-close.svg";

export default function LightBox(Component) {
  return (props) => {
    const {
      setLightBoxHidden,
      activeImage,
      setActiveImage,
      nextSlide,
      prevSlide,
      thumbnails,
      images,
      showImage,
    } = props;

    return (
      <>
        <div className="hidden desktop:flex desktop:absolute desktop:bg-black desktop:bg-opacity-75 desktop:w-full desktop:h-full flex-col items-center justify-center">
          <div className="flex flex-col items-end">
            <img
              src={close}
              className="w-[24px] h-[24px] right cursor-pointer "
              alt=""
              onClick={() => {
                setLightBoxHidden(true);
              }}
            />
            <div className=" relative">
              <Component
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                thumbnails={thumbnails}
                images={images}
                showImage={showImage}
              />

              <button
                onClick={prevSlide}
                className="  absolute flex justify-center items-center prev-button left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full ms-[16px] cursor-pointer"
              >
                <img src={previous} alt="" />
              </button>

              <button
                onClick={prevSlide}
                className=" absolute   flex justify-center items-center next-button right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full me-[16px] cursor-pointer"
              >
                <img src={next} alt="" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
}
