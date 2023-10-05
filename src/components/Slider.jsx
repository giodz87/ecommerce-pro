import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";

export default function Slider({
  activeImage,
  showImage,
  nextSlide,
  prevSlide,
  thumbnails,
  images,
  setLightBoxHidden,
}) {
  const ShowLightBox = () => {
    setLightBoxHidden(false);
  };
  return (
    <div className=" desktop:block desktop:pt-[68px]  ">
      <div className="container desktop:flex desktop:items-center desktop:justify-center  ">
        <div className=" relative flex justify-center items-center">
          <div className="carousel  ">
            <div className="carousel-main mb-[40px]">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={ShowLightBox}
                  alt={`Image ${index + 1}`}
                  className={`w-[375px] h-[300px]  desktop:w-[445px] desktop:h-[445px] rounded-lg carousel-image ${
                    activeImage === index ? "block" : "hidden"
                  }`}
                />
              ))}
            </div>
            <div className="hidden desktop:flex desktop:gap-[32px] desktop:carousel-thumbnails desktop:justify-center">
              {thumbnails.map((thumbnail, index) => (
                <div
                  key={index}
                  className={`thumbnail cursor-pointer relative ${
                    activeImage === index
                      ? "border-2 border-solid border-orange-500 rounded-lg"
                      : ""
                  } w-[88px] h-[88px]`}
                  onClick={() => showImage(index)}
                >
                  <div
                    className={`w-full h-full absolute top-0 left-0 ${
                      activeImage === index
                        ? "bg-opacity-75 bg-white"
                        : "hidden"
                    }`}
                  />
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="cursor-pointer w-[88px] h-[88px] rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <>
            <button
              onClick={prevSlide}
              className=" desktop:hidden flex justify-center items-center prev-button absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full ms-[16px] cursor-pointer"
            >
              <img src={previous} alt="" />
            </button>

            <button
              onClick={nextSlide}
              className=" desktop:hidden  flex justify-center items-center next-button absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full me-[16px] cursor-pointer"
            >
              <img src={next} alt="" />
            </button>
          </>
        </div>
      </div>
    </div>
  );
}
