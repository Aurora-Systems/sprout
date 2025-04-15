"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Featured=()=>{
    return(
       <Swiper modules={[Pagination]} pagination={true} className="mySwiper">
            <SwiperSlide>
                </SwiperSlide>

       </Swiper>
    )
}

export default Featured;