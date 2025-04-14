"use client" 
import  {Swiper, SwiperSlide} from "swiper/react" 
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import BgImg from "./components/bg_img";
export default function Shop() {
  return (
    <div className="container">
      <div className="rounded" style={{height:"30vh"}}>

      <Swiper modules={[Pagination]} pagination={true} className="mySwiper">
        <SwiperSlide>
          <div style={{...BgImg("https://ngratesc.sirv.com/sprout/swiper.png")}}>

          </div>

        </SwiperSlide>
      </Swiper>
      </div>

    </div>
  );
}
