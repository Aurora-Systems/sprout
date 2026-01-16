"use client";

import "swiper/css/pagination";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Shop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && headerRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5; // Parallax speed (adjust for more/less effect)
        videoRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        ref={headerRef}
        className="header d-flex align-items-center justify-content-center position-relative overflow-hidden"
        style={{ minHeight: "100vh", position: "relative" }}
      >
        {/* Video Background with Parallax */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 left-0 w-100 h-100"
          style={{
            objectFit: "cover",
            zIndex: 0,
            minWidth: "100%",
            minHeight: "100%",
            width: "100%",
            height: "100%",
          }}
        >
          <source src="https://cdn.clipond.com/Travel%20Den/151714-804514460_medium.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div
          className="position-absolute top-0 left-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="text-center mb-5 position-relative" style={{ zIndex: 2 }}>
          <Fade cascade={true} delay={300}>
            <div className=" p-4 rounded" style={{
              display: "inline-block",
              backgroundColor: "rgba(255, 255, 255, 0.87)"
            }}>
              <div>
                <Image src={"https://sproutandco.sirv.com/primary_logo.png"} className="img-fluid " width={300} height={0} alt="Sprout & Co" />
              </div>
              <div className=" text-center ">
                <h3 className="fw-bold text-success">Fresh Farm Produce</h3>
                <Link href="/shop"><button className="btn rounded-pill btn-outline-success">Shop Now</button></Link>

              </div>
            </div>
          </Fade>

        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <div className="col-md-6 p-0" style={{ height: "100vh", overflow: "hidden" }}>
            <Image
              src={"https://sproutandco.sirv.com/IMG-20250701-WA0053.jpg"}
              className="w-100 h-100"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt="Fruit Hampers"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center p-5" style={{ backgroundColor: "#1a5f1a", minHeight: "100vh" }}>
            <Fade direction="right" delay={300}>
              <div className="text-white">
                <h1 className="display-1 fw-bold text-white">Fruit Hampers</h1>
                <p className="text-white">Looking to satisfy your sweet tooth in the healthiest way possible? Our fruit hampers offer a vibrant selection of handpicked seasonal fruits. Whether you&apos;re gifting a loved one or treating yourself, our fruit hampers are a delicious and nutritious choice. Each hamper is designed to offer a perfect balance of flavor and variety.</p>
                <Link href="/shop"><button className="btn rounded-pill" style={{ backgroundColor: "white", color: "#1a5f1a", border: "none" }}>Buy Fruits</button></Link>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row g-0 min-vh-100">
          <div className="col-md-6 d-flex align-items-center justify-content-center p-5 order-md-1" style={{ backgroundColor: "#1a5f1a", minHeight: "100vh" }}>
            <Fade direction="left" delay={300}>
              <div className="text-white">
                <h1 className="display-1 fw-bold text-white">Vegetable Hampers</h1>
                <p className="text-white">Fresh, crunchy, and nutrient-packed vegetables are just a click away. Our vegetable hampers come with a variety of seasonal produce that's perfect for every meal. From leafy greens to root vegetables, we have all your dietary needs covered with the freshest offerings straight from the farm.</p>
                <Link href="/shop"><button className="btn rounded-pill" style={{ backgroundColor: "white", color: "#1a5f1a", border: "none" }}>Buy Vegetables</button></Link>
              </div>
            </Fade>
          </div>
          <div className="col-md-6 p-0 order-md-1" style={{ height: "100vh", overflow: "hidden" }}>
            <Image
              src={"https://sproutandco.sirv.com/IMG-20250701-WA0045.jpg"}
              className="w-100 h-100"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt="Vegetable Hampers"
            />
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
            <div className="accordion-collapse collapse show" id="collapseOne">

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
            <div className="accordion-collapse collapse show" id="collapseOne">

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
            <div className="accordion-collapse collapse show" id="collapseOne">

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
