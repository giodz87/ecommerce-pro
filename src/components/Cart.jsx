import trash from "../../images/icon-delete.svg";
import product from "../../images/image-product-1-thumbnail.jpg";
import { useEffect, useState } from "react";
export default function Cart({
  number,
  setNumber,
  hiddenCart,
  total,
  setTotal,
}) {
  const [num, setNum] = useState(125);

  const trashDel = () => {
    setTotal(0);
  };

  return (
    <>
      {hiddenCart ? (
        <div className="  flex flex-col items-start justify-between w-[360px] h-[256px] absolute top-[80px] right-[7px] bg-[#fff] pt-[24px] pl-[24px] pr-[24px]  pb-[32px] rounded-lg shadow-lg p-4 desktop:top-[100px] desktop:right[40px]">
          <strong className="font-kumbh-sans">Cart</strong>
          <div className="w-[360px] h-[1px] bg-[#E4E9F2] absolute top-[67px] left-0"></div>

          {total && number > 0 ? (
            <div className="flex gap-[24px] flex-col">
              <div className="flex flex-row items-center justify-between gap-[16px]  ">
                <img src={product} alt="" className="w-[50px] h-[50px] " />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <div className=" flex flex-row items-center gap-[5px] ">
                    <p className="font-kumbh-sans text-[#69707D]">${num}</p>
                    <p className="font-kumbh-sans text-[#69707D]">x</p>
                    <p className="font-kumbh-sans text-[#69707D]">{total}</p>
                    <strong>${num * total}</strong>
                  </div>
                </div>
                <img
                  src={trash}
                  alt=""
                  onClick={trashDel}
                  className=" cursor-pointer"
                />
              </div>
              <button className="w-[312px] h-[56px] font-kumbh-sans bg-[#FF7E1B] rounded-[10px] cursor-pointer text-[#fff] text-[16px]  hover:bg-[#FFAB6A]">
                Checkout
              </button>
            </div>
          ) : (
            <div>
              <p className="text-[#69707D] text-[16px] pl-[100px]   pb-[60px] font-kumbh-sans">
                Your cart is empty.
              </p>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
