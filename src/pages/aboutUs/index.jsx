import React from "react";
import Layout from "../../layout";
import { dataNews } from "../../data/datas";

function AboutUS() {
  const CardData = dataNews;

  return (
    <>
      <Layout>
        <div className="px-[20px] md:px-[80px] py-[40px] mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="">
              <div className="lg:h-[500px] lg:w-[500px] overflow-hidden">
                <img
                  src="/assets/image/image1.png"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="py-[50px] flex flex-col gap-4">
                <div className="flex items-center gap-3 px-[20px]">
                  <div className="h-[2px] w-[18px] bg-black"></div>
                  <h3>About Us</h3>
                </div>

                <h1 className="font-bold text-[46px]">Our Story</h1>
                <p className="text-[32px]">
                  Kenali kami, toko, lingkungan, dan orang-orang di baliknya!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px] md:px-[80px] py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-4 lg:px-20">
              <div className="flex items-center gap-3 px-[20px]">
                <div className="h-[2px] w-[18px] bg-black"></div>
                <h3>Our Story</h3>
              </div>
              <h1 className="font-bold text-[50px] text-[#662549]">
                Alkaf Store
              </h1>
              <p className="mb-5 font-medium text-gray-500 text-lg">
                Koleksi Baju Islami yang Membuat Anda Berbeda dari yang Lain!
              </p>
            </div>
            <div>
              <div className="lg:px-20 flex flex-col gap-4">
                <p className="text-justify">
                  Toko Baju Muslim Alkaf adalah destinasi terpercaya untuk para
                  pecinta fashion Islam yang mencari kesempurnaan dalam
                  berpakaian. Dengan komitmen pada kualitas dan desain yang
                  elegan, kami menghadirkan koleksi yang memadukan keanggunan
                  dan kesederhanaan, memungkinkan Anda mengekspresikan identitas
                  Islam Anda dengan percaya diri.
                </p>
                <p className="text-justify">
                  {" "}
                  Temukan keindahan dalam setiap jahitan dan bahan berkualitas
                  tinggi yang kami tawarkan, serta nikmati pengalaman berbelanja
                  yang menyenangkan dan memuaskan di toko kami. Sambut hari-hari
                  Anda dengan gaya yang terinspirasi oleh nilai-nilai agama,
                  hanya di Toko Baju Muslim Alkaf.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px] md:px-[80px] py-[80px]">
          <div className="relative flex flex-col lg:flex-row lg:justify-between md:items-center">
            <h2 className="font-bold text-[46px] absolute left-1 md:left-64 lg:left-1  -top-5 text-gray-500 opacity-20">
              Alkaf News
            </h2>
            <h2 className="font-bold text-[32px] relative ">Alkaf News</h2>
            <p className="">Gaya Islami yang Menginspirasi, Kualitas Terbaik yang Mengagumkan</p>
          </div>
          <div className="py-10">
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
              {CardData.map((item) => (
                <Card img={item.img} label={item.label} text={item.text} />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-400 hover:text-black transition-all duration-200">
              Read More
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

const Card = ({ img, label, text }) => {
  return (
    <div className="flex flex-col gap-2 items-center overflow-hidden shadow-md rounded-md border hover:shadow-xl hover:scale-105 transition-all duration-200">
      <div className="h-[200px] w-full overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="px-4 flex flex-col gap-2 py-2">
        <h2 className="font-medium">{label}</h2>
        <p className="text-[14px] text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default AboutUS;
