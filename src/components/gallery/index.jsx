import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./gallery.css"


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Gallery() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image3.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image5.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image6.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image7.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image8.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image9.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image10.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-[300px] overflow-hidden'>
                        <img src="/assets/image/image3.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>

    )
}

export default Gallery