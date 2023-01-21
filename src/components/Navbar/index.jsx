import React from "react";

const DropdownMenu = (props) => {
  return (
    <div className="headerDropdownContainer">
      {props.menu}
      <div className="dropdown">
        <div className="upArrow"></div>
        {props.firstMenu}
        <ul className="headerDropdownMenu">
          {props.menus &&
            props.menus.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const serchIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17 18"
      className=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#2874F1" fillRule="evenodd">
        <path
          className="_34RNph"
          d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
        ></path>
        <path
          className="_34RNph"
          d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
        ></path>
      </g>
    </svg>
  );
  const cartIcon = (
    <svg
      className="V3C5bO"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="_1bS9ic"
        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
        fill="#fff"
      ></path>
    </svg>
  );

  return (
    <div className="font-link font-semibold shadow-md">
      <div className="h-14 bg-[#2874f0] flex items-center justify-center">
        <ul className="flex justify-center  items-center m-0 text-white max-w-[890px] w-full mx-auto">
          <li className=" cursor-pointer">
            <img src={"/assets/flipkart.png"} alt="flipkart" width={75} />
            <h1 className="hover:underline flex text-[11px]">
              explore <span className="text-yellow-400">plush</span>
              <span className="ml-1">
                <img
                  src={"/assets/flipkart-plus.png"}
                  alt="plus"
                  width={10}
                  height={10}
                />
              </span>
            </h1>
          </li>
          <li className="flex-1 ml-3 ">
            <div className="flex  px-5 py-2 bg-white items-center justify-between  full">
              <input
                placeholder="Search for product,brand and more"
                className="outline-none font-normal border-none text-[14px] text-black w-[300px] rounded-md"
              />
              <div className="px-3">{serchIcon}</div>
            </div>
          </li>
          <li className="flex-1 justify-center flex">
            {/* <button className="border-none outline-none px-10 py-1 text-[#2874f0] bg-white">
              Login
            </button> */}
            <DropdownMenu
              menu={<a className="loginButton">Login</a>}
              menus={[
                { label: "My Profile", href: "", icon: null },
                { label: "Flipkart Plus Zone", href: "", icon: null },
                { label: "Orders", href: "", icon: null },
                { label: "Wishlist", href: "", icon: null },
                { label: "Rewards", href: "", icon: null },
                { label: "Gift Cards", href: "", icon: null },
              ]}
              firstMenu={
                <div className="firstmenu">
                  <span style={{ color: "#2874f0" }}>New Customer?</span>
                  <a style={{ color: "#2874f0" }}>Sign Up</a>
                </div>
              }
            />
          </li>
          <li className="flex-1 justify-center flex">
            <h1>Become a Seller</h1>
          </li>
          <li className="flex-1 justify-center flex">
            <h1>More ^</h1>
          </li>
          <li className="">
            <div className="flex items-center gap-x-1">
              {cartIcon} <span>Cart</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
