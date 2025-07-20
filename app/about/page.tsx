"use client"
import React, { useEffect } from 'react';
import { Leaf, Heart, Truck, Users, MapPin, Clock, Award, Shield } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  useEffect(() => {
    // Add Bootstrap CSS
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const features = [
    {
      icon: <Leaf className="text-success" size={40} />,
      title: "Farm Fresh Daily",
      description: "Harvested at peak ripeness and delivered within 24 hours to ensure maximum freshness and flavor."
    },
    {
      icon: <Heart className="text-danger" size={40} />,
      title: "Traditional Heritage",
      description: "Preserving Africa&apos;s agricultural heritage with indigenous varieties like mazanje, matamba, and muhacha."
    },
    {
      icon: <Truck className="text-primary" size={40} />,
      title: "Direct from Farm",
      description: "No middlemen, no storage facilities. Straight from our partnered local farmers to your doorstep."
    },
    {
      icon: <Users className="text-warning" size={40} />,
      title: "Community Support",
      description: "Supporting local farming communities and promoting sustainable agricultural practices across Africa."
    }
  ];

  const products = [
    { name: "Traditional Leafy Greens", items: "Muboora, Mufushwa, Mutindi" },
    { name: "Indigenous Fruits", items: "Mazhanje, Matamba, Muhacha, Muchecheni" },
    { name: "Fresh Vegetables", items: "Tomatoes, Onions, Carrots, Spinach" },
    { name: "Root Vegetables", items: "Sweet Potatoes, Cassava, Yams" },
    { name: "Seasonal Specialties", items: "Groundnuts, Sugar Beans, Round Nuts" }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Partner Farmers" },
    { number: "100+", label: "Product Varieties" },
    { number: "24hrs", label: "Fresh Guarantee" }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {/* Custom Styles */}
      <style>{`
        .hero-bg {
          background: linear-gradient(135deg, rgba(40, 167, 70, 0.56), rgba(13, 129, 13, 0.29)),
                      url('https://sproutandco.sirv.com/IMG-20250701-WA0053.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px, 60px 60px;
          animation: float 20s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #28a745, #20c997);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-bg text-white py-5" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center py-5">
              <div>
                <h1 className="display-2 fw-light mb-4 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Sprout & Co
                </h1>
                <p className="lead mb-4 fs-4">
                  Africa&apos;s Premier Farm-to-Table Experience
                </p>
                <p className="fs-5 mb-5 opacity-90">
                  Bringing you the freshest produce and traditional African fruits and vegetables, 
                  harvested with love and delivered with care.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <span className="badge bg-light text-dark px-3 py-2 fs-6">Farm Fresh</span>
                  <span className="badge bg-light text-dark px-3 py-2 fs-6">Traditional Varieties</span>
                  <span className="badge bg-light text-dark px-3 py-2 fs-6">Local Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <h2 className="display-5 fw-bold text-success mb-4">Our Story</h2>
                <p className="lead text-muted mb-4">
                  Founded with a passion for preserving Africa&apos;s rich agricultural heritage, 
                  Sprout & Co bridges the gap between traditional farming and modern convenience.
                </p>
                <p className="mb-4">
                  We work directly with local farmers across Africa, ensuring they receive fair 
                  compensation while providing our customers with the freshest, most authentic 
                  produce available. From the bustling markets of major cities to the fertile fields 
                  of the countryside, we celebrate the diversity and richness of African agriculture.
                </p>
                <p className="mb-4">
                  Our mission extends beyond just selling produce - we&apos;re committed to supporting 
                  sustainable farming practices, preserving indigenous varieties, and making 
                  traditional African foods accessible to everyone.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <div 
                  className="bg-success rounded-3 d-flex align-items-center justify-content-center text-white position-relative overflow-hidden"
                  style={{ 
                    height: '400px', 
                    background: 'linear-gradient(135deg, rgba(40, 167, 70, 0.38), rgba(32, 201, 150, 0.32)), url("https://sproutandco.sirv.com/IMG-20250701-WA0065.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="text-center">
                    <Leaf size={80} className="mb-3" />
                    <h4>Fresh from Africa&apos;s Farms</h4>
                    <p className="mb-0">Supporting local agriculture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Sprout & Co?</h2>
            <p className="lead text-muted">Quality, authenticity, and community at the heart of everything we do</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-6">
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                        <p className="card-text text-muted">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold text-success mb-3">What We Offer</h2>
              <p className="lead text-muted">
                From traditional indigenous varieties to modern favorites, discover the rich flavors of Africa
              </p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            {products.map((product, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <Award size={40} className="text-warning" />
                    </div>
                    <h5 className="card-title fw-bold mb-3 text-success">{product.name}</h5>
                    <p className="card-text text-muted small">{product.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-success text-white">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-lg-3 mb-4 mb-lg-0">
                <div>
                  <div className="stat-number text-white">{stat.number}</div>
                  <p className="mb-0 fw-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div>
                <h2 className="display-5 fw-bold text-dark mb-4">Ready to Taste the Difference?</h2>
                <p className="lead text-muted mb-4">
                  Experience the authentic flavors of Africa with our farm-fresh produce. 
                  Order today and taste the tradition in every bite.
                </p>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
                  <div className="d-flex align-items-center">
                    <MapPin size={20} className="text-success me-2" />
                    <span>Harare, Zimbabwe</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Clock size={20} className="text-success me-2" />
                    <span>Fresh Daily Deliveries</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Shield size={20} className="text-success me-2" />
                    <span>Quality Guaranteed</span>
                  </div>
                </div>
                <Link href="/shop">
                <button className="btn btn-success ">
                  Start Shopping Today
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;