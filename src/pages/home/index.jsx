import React from "react";
import Layout from "../../layout";
import Gallery from "../../components/gallery";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

function Home() {
  return (
    <Layout>
      <section className="overflow-hidden">
        <div className="px-[20px] md:px-[80px] py-[80px] bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div>
                <h1 className="font-bold text-[32px] sm:text-[50px] text-white">
                  Inspirasi Islami untuk Gaya Sehari-hari Anda!
                </h1>
                <p className="w-9/12 text-gray-500 py-6">
                  from rich and bold to smooth and mild, we have a wide
                  selection of premium coffee beans to suit every palate
                </p>
                <div className="mt-5 flex gap-5">
                  <button className="bg-gray-400 text-white px-5 py-2 rounded-full active:scale-95 duration-200">
                    Start Order
                  </button>
                  <button className="px-5 py-2 border border-white text-white rounded-full active:scale-95 duration-200">
                    Catalog
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5 md:justify-end md:mt-0">
              <div>
                <div className="md:h-[350px] md:w-[280px] rounded-tl-[100px] overflow-hidden">
                  <img
                    src="/assets/image/image3.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border bg-white p-3 flex items-center justify-around rounded-br-full mt-5">
                  <div className=" h-[10px] w-[10px] bg-black rounded-full"></div>
                  <h1 className="">GAMIS COLLECTION</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px] md:px-[80px] py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <h1 className="font-semibold text-[32px] md:text-[35px] ">
              Pilihan Kain Katun Premium yang Menakjubkan
            </h1>
            <p className="md:p-5 text-gray-500">
              Find your perfect brew from our collection of single origin,
              blend, and flavored coffee
            </p>
          </div>

          <div className="flex justify-center py-5 lg:hidden">
            <div
              className="  h-[300px] w-[300px] flex justify-center"
              data-aos="fade-right"
            >
              <img src="/assets/image/image1.png" alt="" className="h-full " />
            </div>
          </div>

          <div className="w-full mt-10 flex flex-col gap-10 relative">
            <div
              className="hidden lg:block absolute h-[300px] w-[300px] overflow-hidden top-16 -left-20"
              data-aos="fade-right"
            >
              <img src="/assets/image/image1.png" alt="" className="h-full " />
            </div>
            <div className="flex justify-between border-dotted border-b-2 border-gray-500 py-2">
              <h1 className="font-semibold text-[22px]" data-aos="fade-up">
                soft material
              </h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between border-dotted border-b-2 border-gray-500 py-2 lg:pl-[150px]">
              <h1 className="font-semibold text-[22px]" data-aos="fade-up">
                cold when used
              </h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between border-dotted border-b-2 border-gray-500 py-2 lg:pl-[170px]">
              <h1 className="font-semibold text-[22px]" data-aos="fade-up">
                absorb sweat
              </h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between border-dotted border-b-2 border-gray-500 py-2 lg:pl-[150px]">
              <h1 className="font-semibold text-[22px]" data-aos="fade-up">
                Merchandise
              </h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between border-dotted border-b-2 border-gray-500 py-2">
              <h1 className="font-semibold text-[22px]" data-aos="fade-up">
                Merchandise
              </h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="px-[20px] md:px-[80px] py-[80px] bg-black" id="galery">
          <div>
            <h1 className="font-bold text-[32px] text-white">
              Love From Gallery
            </h1>
          </div>
          <div className="mt-5">
            <Gallery />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 py-5">
            <div>
              <p className="text-gray-500">
                Hadapi Tantangan Hidup dengan Gaya Islami yang Inspiratif dan
                Berkah! Dengan Koleksi Baju Islami Kami, Anda Bukan Hanya
                Memperlihatkan Gaya, Tetapi Juga Menginspirasi dan Menyebarkan
                Kebaikan ke Seluruh Dunia.
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 lg:mt-0">
              <button className="flex gap-2 items-center border border-white rounded-full px-5 py-2 text-white font-semibold hover:text-white hover:bg-gray-400  transition-all duration-300">
                Discover Morep{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-[20px] md:px-[80px] py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-[36px]">
                join us to become a partner at alkaf.store
              </h1>
              <p className="text-gray-400">
                Get a Enjoyable Shopping Experience with Our Best Collection of
                Islamic Clothes! Find the Most Complete Choice of Modern to
                Traditional Shar'i Clothing, Bringing Pleasure and Comfort in
                Living Your Islamic Lifestyle.
              </p>
            </div>
            <div>
              <p className="py-2 px-4 bg-gray-400 rounded-md text-black font-medium w-fit">
                Save up to 20% versus buying the packets individually
              </p>
              <div className="flex flex-col gap-5 mt-5">
                <p className="flex items-center gap-5 font-semibold text-[22px]">
                  <div className="h-2 w-2 rounded-full bg-black"></div> Selected
                  materials
                </p>
                <p className="flex items-center gap-5 font-semibold text-[22px]">
                  <div className="h-2 w-2 rounded-full bg-black"></div> Set your
                  Schedule
                </p>
                <p className="flex items-center gap-5 font-semibold text-[22px]">
                  <div className="h-2 w-2 rounded-full bg-black"></div> Change
                  Anytime
                </p>
              </div>
              <div className="mt-5">
                <button className="px-10 py-2 bg-black text-white rounded-full">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-[80px] ">
          <div className="w-full lg:h-[550px]">
            <img
              src="/assets/image/image4.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
