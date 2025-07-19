import "swiper/css/pagination";
import BgImg from "./components/bg_img";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Shop() {
  return (
    <div className="">
      <div className="header d-flex align-items-center justify-content-center" style={{...BgImg("https://ngratesc.sirv.com/sprout/header.png")}}>
        <div className="text-center mb-5">
          <Fade cascade={true} delay={300}>
            
          <div>
          <Image src={"https://sproutandco.sirv.com/primary_logo.png"}  className="img-fluid " width={300} height={0} alt="Sprout & Co"/>
          </div>
          <div className=" text-center mb-5">
            <h3 className="fw-bold text-success">Fresh Farm Produce</h3>
            <button className="btn rounded-pill btn-outline-success">Shop Now</button>

          </div>
         
          </Fade>

        </div>
      </div>
      <div className="container">
        <div className="row mb-5 d-flex min-vh-100 flex-row justify-content-center align-items-center mb-5">
          <div className="col-sm">
            <Fade direction="left" delay={300}>

              <Image src={"https://sproutandco.sirv.com/IMG-20250701-WA0053.jpg"} className="img-fluid rounded"  width={500} height={0} alt="..."/>
              </Fade>

          </div>
          <div className="col-sm">
            <Fade direction="right" delay={300}>
            <h1 className="display-1 fw-bold text-success">Fruit Hampers</h1>
            <p>Looking to satisfy your sweet tooth in the healthiest way possible? Our fruit hampers offer a vibrant selection of handpicked seasonal fruits. Whether you&apos;re gifting a loved one or treating yourself, our fruit hampers are a delicious and nutritious choice. Each hamper is designed to offer a perfect balance of flavor and variety.</p>
            <button className="btn btn-outline-success rounded-pill">Buy Fruits</button>
            </Fade>
          </div>
        </div>
        <div className="row mb-5 d-flex min-vh-100 flex-row justify-content-center align-items-center mb-5">
          <div className="col-sm order-md-2">
            <Fade direction="left" delay={300}>

              <Image src={"https://sproutandco.sirv.com/IMG-20250701-WA0045.jpg"} className="img-fluid rounded"  width={500} height={0} alt="..."/>
              </Fade>

          </div>
          <div className="col-sm">
            <Fade direction="right" delay={300}>
            <h1 className="display-1 fw-bold text-success">Vegetable Hampers</h1>
            <p>Fresh, crunchy, and nutrient-packed vegetables are just a click away. Our vegetable hampers come with a variety of seasonal produce that’s perfect for every meal. From leafy greens to root vegetables, we have all your dietary needs covered with the freshest offerings straight from the farm.</p>
            <button className="btn btn-outline-success rounded-pill">Buy Vegetables</button>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container">

      <div>
        <h1 className="text-success display-1 fw-bold">Frequently Asked Questions</h1>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How do i know my hamper will be fresh?
            </button>
          </h2>
          <div  className="accordion-collapse collapse show" id="collapseOne">

            <div className="accordion-body">
              <strong>We work closely with local farmers to ensure our produce is harvested at its peak. Your hamper is packed and delivered with freshness in mind.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Do you offer subscription services?

            </button>
          </h2>
          <div  className="accordion-collapse collapse show" id="collapseOne">

            <div className="accordion-body">
              <strong>Yes! We offer subscription options for weekly or monthly deliveries, so you can always have fresh produce at home without needing to place a new order.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Can I customize my hamper?
            </button>
          </h2>
          <div  className="accordion-collapse collapse show" id="collapseOne">

            <div className="accordion-body">
              <strong>Yes! We offer customization options for hampers based on your preferences. Reach out to our customer service team for assistance.</strong>
            </div>
          </div>
        </div>
      </div>
      </div>


    </div>
  );
}
