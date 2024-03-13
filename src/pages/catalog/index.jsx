import React, { useEffect, useState } from "react";
import Layout from "../../layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./catalog.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Catalog() {
  const [isActiveTab, setIsActiveTab] = useState("semua");
  const dataProduct = [
    {
      name: "kaos kurta",
      kategori: "kaos",
      img: "/assets/image/image8.jpg",
    },
    {
      name: "kaos kurta",
      kategori: "kaos",
      img: "/assets/image/image8.jpg",
    },
    {
      name: "celana panjang",
      kategori: "celana",
      img: "/assets/image/image9.jpg",
    },
    {
      name: "celana panjang",
      kategori: "celana",
      img: "/assets/image/image9.jpg",
    },
    {
      name: "gamis kurta",
      kategori: "gamis",
      img: "/assets/image/image6.jpg",
    },
    {
      name: "gamis kurta",
      kategori: "gamis",
      img: "/assets/image/image6.jpg",
    },
  ];
  const filteredProducts = dataProduct.filter((product) => {
    return isActiveTab === "semua" || product.kategori === isActiveTab;
  });

  return (
    <Layout>
      <section>
        <div className="">
          <div
            id="controls-carousel"
            className="relative w-full"
            data-carousel="static"
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
              {/* <!-- Item 1 --> */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/assets/image/banner1.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/assets/image/banner2.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>

        <section className="py-10 p-5">
          <div>
            <h1>PRODUCTS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              rem!
            </p>
          </div>
          <div className="py-5">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsActiveTab("semua")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "semua"
                    ? "bg-black text-white border border-black"
                    : "border border-black text-black"
                }`}
              >
                semua
              </button>
              <button
                onClick={() => setIsActiveTab("celana")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "celana"
                    ? "bg-black text-white border border-black"
                    : "border border-black text-black"
                }`}
              >
                celana
              </button>
              <button
                onClick={() => setIsActiveTab("kaos")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "kaos"
                    ? "bg-black text-white border border-black"
                    : "border border-black text-black"
                }`}
              >
                kaos
              </button>
              <button
                onClick={() => setIsActiveTab("gamis")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "gamis"
                    ? "bg-black text-white border border-black"
                    : "border border-black text-black"
                }`}
              >
                koko / gamis
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-14 lg:px-5">
            {filteredProducts &&
              filteredProducts.map((e) => (
                <CardProduct name={e.name} img={e.img} />
              ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}

const CardProduct = ({ name, img }) => {
  return (
    <div className="">
      <div className="h-[320px] w-[231px] rounded-md overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <h1 className="text-[14px] font-medium">{name}</h1>
      <p className="text-gray-400 text-[10px]">XS S M L XL XXL</p>
    </div>
  );
};

export default Catalog;
