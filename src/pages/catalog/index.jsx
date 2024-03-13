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
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mt-14"
          >
            <SwiperSlide>
              <div
                className="px-[20px] md:px-[80px] py-[80px] w-full h-[500px] relative flex items-center "
                style={{
                  backgroundImage: "url(/assets/image/banner1.jpg)",
                  backgroundSize: "cover",
                }}
              >
               
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className=" w-full h-[500px]">
                <img src="/assets/image/banner2.jpg" alt=""  className="object-cover h-full w-full" />
                
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>

        <section className="py-20 p-5">
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
                  isActiveTab === "semua" ?"bg-black text-white border border-black" : "border border-black text-black"
                }`}
              >
                semua
              </button>
              <button
                onClick={() => setIsActiveTab("celana")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "celana" ? "bg-black text-white border border-black" : "border border-black text-black"
                }`}
              >
                celana
              </button>
              <button
                onClick={() => setIsActiveTab("kaos")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "kaos" ? "bg-black text-white border border-black" : "border border-black text-black"
                }`}
              >
                kaos
              </button>
              <button
                onClick={() => setIsActiveTab("gamis")}
                className={`px-4 py-1 transition-all duration-200 ${
                  isActiveTab === "gamis" ? "bg-black text-white border border-black" : "border border-black text-black"
                }`}
              >
                koko / gamis
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 px-14 lg:px-5">
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
