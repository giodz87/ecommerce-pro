import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import menu from "../../images/icon-menu.svg";
import { useState } from "react";
export default function Header({
  setHidden,
  hidden,
  hiddenCart,
  setHiddenCart,
  total,
  number,
}) {
  const oupenMenu = () => {
    setHidden(!hidden);
  };

  const oupenCart = () => {
    setHiddenCart(!hiddenCart);
  };
  return (
    <header className=" flex flex-row justify-between items-center w-[375px] p-[24px] relative desktop:w-[1200px] desktop:p-[41px] ">
      <div className=" flex flex-row items-center gap-[16px]">
        <div onClick={oupenMenu}>
          <img src={menu} alt="" className="cursor-pointer desktop:hidden" />
        </div>

        <img src={logo} alt="logo" className=" w-[138px] h-[20px] " />
        <div
          className={
            " hidden desktop:flex flex-row  justify-between w-[397px] text-[15px] text-[#69707D] ml-[30px] font-kumbh-sans "
          }
        >
          <p className="cursor-pointer ">Collections</p>
          <p className="cursor-pointer">Men</p>
          <p className="cursor-pointer">Women</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      </div>
      <div className="hidden desktop:block desktop:w-[1100px] desktop:h-[1px] desktop:bg-[#E4E9F2] absolute desktop:top-[120px] desktop:ml-[17px]"></div>
      <div className=" flex flex-row justify-between items-center gap-[22px]  desktop:gap-[44px]">
        <div onClick={oupenCart}>
          {number && total > 0 ? (
            <p className=" flex items-center justify-center absolute top-[20px] right-[65px] bg-[#FF7E1B] w-[19px] h-[13px] text-[10px] text-[#fff] rounded-[6.5px] desktop:right-[125px] desktop:top-[50px]">
              {total}
            </p>
          ) : null}

          <img
            src={cart}
            alt="cart"
            className=" w-[21px] h-[20px] cursor-pointer "
          />
        </div>
        <img
          src={avatar}
          alt="avatar"
          className=" w-[24px] h-[24px] cursor-pointer desktop:w-[50px] desktop:h-[50px] rounded-full border-solid border-ff7e1b  transition-all duration-300 hover:border-[#FF7E1B]"
        />
      </div>
    </header>
  );
}
