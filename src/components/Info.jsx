import React from "react";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/Shape.svg";
import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
export default function Info({ number, setNumber, setTotal }) {
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const minusNumber = () => {
    if (number > 0) setNumber(number - 1);
  };
  const totalBuying = () => {
    setTotal(number);
  };

  return (
    <div className="flex flex-col justify-center items-start w-[327px] desktop:flex-row  desktop:justify-between desktop:items-center desktop:mt-[60px] desktop:ml-[80px] ">
      <div className="flex flex-col justify-center items-start pr-[24px] desktop:pl-[24px] gap-[19px] desktop:w-[445px] desktop:gap-[32px]">
        <p className="font-kumbh-sans text-xs text-[#FF7E1B]  desktop:text-[13px]">
          Sneaker Company
        </p>
        <strong className="text-[#1D2026] text-[28px] font-kumbh-sans  desktop:text-[44px] ">
          Fall Limited Edition Sneakers
        </strong>

        <p className="font-kumbh-sans text-[#69707D] text-[15px] leading-[25px] desktop:w-[445px] desktop:text-[16px] desktop:leading-[26px] ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div>
          <div className="flex flex-row items-center justify-between pt-[6px] w-[327px] desktop:flex-col desktop:items-start">
            <div className="flex flex-row items-center gap-[16px]">
              <strong className="desktop:text-[28px] font-kumbh-sans">
                $125.00
              </strong>
              <div className="flex items-center justify-center rounded-md w-[51px] h-[27px] bg-[#FFEEE2]">
                <strong className="text-[15px] font-kumbh-sans text-[#FF7E1B]">
                  50%
                </strong>
              </div>
            </div>
            <strong className="text-[#B6BCC8] font-kumbh-sans text-[16px] ">
              $250.00
            </strong>
          </div>

          <div className="flex flex-col justify-between items-center gap-[16px] desktop:flex-row desktop:items-end">
            <div className="flex flex-row justify-between items-center w-[327px] h-[56px] bg-[#F6F8FD] p-[24px] mt-[27px] rounded-md  desktop:w-[137px]">
              <button onClick={minusNumber}>
                {" "}
                <img
                  src={minus}
                  alt=""
                  className="cursor-pointer  hover:text-[#FFAB6A]"
                />
              </button>
              <strong className="font-kumbh-sans">{number}</strong>
              <button onClick={changeNumber}>
                {" "}
                <img
                  src={plus}
                  alt=""
                  className="cursor-pointer  hover:text-[#FFAB6A]"
                />
              </button>
            </div>
            <button
              onClick={totalBuying}
              className="w-[327px] h-[56px] font-kumbh-sans bg-[#FF7E1B] rounded-md flex items-center justify-center cursor-pointer desktop:w-[272px] hover:bg-[#FFAB6A]"
            >
              <div className="rounded-md flex items-center justify-center flex-row gap-[15px]">
                <img src={cart} alt="" className="w-[17px] h-[16px] " />
                <strong className="text-[#fff] text-[16px]">Add to cart</strong>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
