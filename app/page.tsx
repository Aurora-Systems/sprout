import "swiper/css/pagination";
import BgImg from "./components/bg_img";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="">
      <div className="header d-flex align-items-center justify-content-center" style={{...BgImg("https://ngratesc.sirv.com/sprout/header.png")}}>
        <div className="text-center">
          <div>
          <Image src={"https://ngratesc.sirv.com/sprout/logo.png"}  className="img-fluid mb-5" width={200} height={0} alt="Sprout & Co"/>
          </div>
          <div>
          <button className="btn rounded-pill btn-outline-success">Shop Now</button>
          </div>
        </div>
      </div>

    </div>
  );
}
