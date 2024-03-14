import React from "react";
import { Link } from "react-router-dom";

function StikyShop() {
  return (
    <div className="fixed bottom-10 right-10 group z-[99]">
      <button className="bg-black p-4 rounded-full group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
      </button>
      <div className="absolute -top-24 bg-black text-white right-5 w-40 p-4 hidden group-hover:block transition-all duration-300 rounded-md">
        <div className="flex flex-col">
        <Link to={"https://shopee.co.id/alkaf.store"} className="p-2 hover:bg-gray-100 hover:text-black rounded-md flex items-center gap-2 "><img src="assets/logo/shopee.png" alt="" className="h-5 w-5" />Shopee</Link>
        <Link to={"https://www.tokopedia.com/alkafstore?source=universe&st=product"} className="p-2 hover:bg-gray-100 hover:text-black rounded-md flex items-center gap-2"><img src="assets/logo/tokopedia.png" alt="" className="h-5 w-5" />tokoPedia</Link>
        </div>
      </div>
    </div>
  );
}

export default StikyShop;
