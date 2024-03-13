import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { Carousel } from "@material-tailwind/react";
import { dataProduct } from "../../data/datas";

function Catalog() {
  const [isActiveTab, setIsActiveTab] = useState("semua");


  const Products = dataProduct;
  const filteredProducts = Products.filter((product) => {
    return isActiveTab === "semua" || product.kategori === isActiveTab;
  });

  return (
    <Layout>
      <section>
        <div className="">
          <Carousel
            className="lg:h-[500px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="assets/image/banner1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="assets/image/banner2.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
           
          </Carousel>
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
            <div className="flex flex-wrap items-center gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-12 md:px-0  lg:px-5">
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
      <div className="h-[320px] w-[256px] lg:w-[231px] rounded-md overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <h1 className="text-[14px] font-medium">{name}</h1>
      <p className="text-gray-400 text-[10px]">XS S M L XL XXL</p>
    </div>
  );
};

export default Catalog;
