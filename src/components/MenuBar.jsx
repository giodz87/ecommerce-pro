import close from "../../images/icon-close.svg";
import { useState } from "react";
export default function MenuBar({ setHidden, hidden }) {
  const oupenMenu = () => {
    setHidden(!hidden);
  };

  return (
    <>
      {hidden ? (
        ""
      ) : (
        <div className=" w-[375px] h-full flex flex-row">
          <section className="flex flex-col items-start  w-[255px] h-full p-[25px] gap-[54px] absolute top-0 left-0  bg-white z-10 ">
            <div onClick={oupenMenu}>
              <img src={close} alt="" className=" cursor-pointer" />
            </div>
            <div className=" flex flex-col justify-center gap-[20px] items-[#1D2026] font-kumbh-sans text-[18px]">
              <strong>Collections</strong>
              <strong>Men</strong>
              <strong>Women</strong>
              <strong>About</strong>
              <strong>Contact</strong>
            </div>
          </section>
          <div className=" w-[120px] h-full opacity-[0.75] bg-black absolute top-0  right-0 z-10">
            {" "}
            dododo{" "}
          </div>
        </div>
      )}
    </>
  );
}
