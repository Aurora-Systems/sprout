"use client"
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, Package, Link } from 'lucide-react';
import emailjs from "@emailjs/browser"

const ContactPage = () => {
  

    const [loading, set_loading] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form:any = useRef(null);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 
  const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    set_loading(true)
    console.log(e)
    emailjs
      .sendForm("service_z2itpxa", "template_w5ed6u8", form.current, {
        publicKey: "XgsKVLLFRaudshWcX",
      })
      .then(
        () => {
          alert("Message Sent Successfully");
          form.current.reset()
        },
        (error) => {
          console.log(error)
          alert("Message Not Sent");

        },
      ).finally(()=>{
        set_loading(false)
      })
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-success" size={32} />,
      title: "Visit Our Store",
      info: "29 Bexcley Circle, Southerton, Harare",
      subinfo: "Open to the public daily"
    },
    {
      icon: <Phone className="text-success" size={32} />,
      title: "Call Us",
      info: "+263 77 674 3323",
      subinfo: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
      icon: <Mail className="text-success" size={32} />,
      title: "Email Us",
      info: "hello@sproutandco.co.zw",
      subinfo: "We respond within 24 hours"
    },
    {
      icon: <Clock className="text-success" size={32} />,
      title: "Business Hours",
      info: "Monday - Saturday: 8:00 AM - 5:00 PM",
      subinfo: "Sunday: 8:00 AM - 4:00 PM"
    }
  ];

  const services = [
    {
      icon: <Package className="text-warning" size={24} />,
      title: "Bulk Orders",
      description: "Special pricing for restaurants, hotels, and large events"
    },
    {
      icon: <MessageSquare className="text-info" size={24} />,
      title: "Custom Requests",
      description: "Looking for specific varieties? We&apos;ll help you find them"
    },
    {
      icon: <User className="text-primary" size={24} />,
      title: "Personal Shopping",
      description: "Let our experts pick the best produce for your needs"
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {/* Custom Styles */}
      <style>{`
        .hero-bg {
          background: linear-gradient(135deg, rgba(40, 167, 70, 0.61), rgba(28, 128, 37, 0.44)),
                      url('https://sproutandco.sirv.com/IMG-20250701-WA0069.jpg');
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
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .form-control:focus {
          border-color: #28a745;
          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
        }
        .btn-success {
          background: linear-gradient(135deg, #28a745, #20c997);
          border: none;
          transition: all 0.3s ease;
        }
        .btn-success:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
        }
        .contact-info-card {
          border-left: 4px solid #28a745;
          transition: all 0.3s ease;
        }
        .contact-info-card:hover {
          border-left-color: #20c997;
          transform: translateX(5px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-bg text-white py-5" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div className="row align-items-center justify-content-center min-vh-50">
            <div className="col-lg-8 text-center py-5">
              <div>
                <h1 className="display-2 fw-bold fw-light mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Get In Touch
                </h1>
                <p className="lead mb-4 fs-4">
                  We&apos;d Love to Hear From You
                </p>
                <p className="fs-5 mb-5 opacity-90">
                  Have questions about our produce? Need help with an order? 
                  Or want to partner with us? We&apos;re here to help!
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <span className="badge bg-light text-dark px-3 py-2 fs-6">Quick Response</span>
                  <span className="badge bg-light text-dark px-3 py-2 fs-6">Expert Support</span>
                  <span className="badge bg-light text-dark px-3 py-2 fs-6">Personal Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="col-lg-6">
                <div className="card border-0 shadow-sm h-100 contact-info-card">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        {contact.icon}
                      </div>
                      <div>
                        <h5 className="card-title fw-bold mb-2">{contact.title}</h5>
                        <p className="card-text mb-1 fw-semibold">{contact.info}</p>
                        <p className="card-text text-muted small mb-0">{contact.subinfo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-3">Send Us a Message</h2>
                <p className="lead text-muted">
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </p>
              </div>
              
              <div className="card shadow-sm border-0">
                <div className="card-body p-5">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-semibold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label fw-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="phone"
                          name="phone"
                        
                          placeholder="+263 4 123-4567"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label fw-semibold">
                          Subject <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="subject"
                          name="subject"
                        
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Support</option>
                          <option value="bulk">Bulk Orders</option>
                          <option value="partnership">Partnership</option>
                          <option value="complaint">Complaint</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-semibold">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          
                          required
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-success btn-lg px-5 py-3" disabled={loading}>
                          <Send size={20} className="me-2" />
                          {!loading?"Send Message":"Sending..."}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold text-success mb-3">How We Can Help</h2>
              <p className="lead text-muted">
                Beyond fresh produce, we offer specialized services to meet your unique needs
              </p>
            </div>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm h-100 card-hover text-center">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {service.icon}
                    </div>
                    <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-success text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Order?</h2>
              <p className="lead mb-4">
                Don&apos;t wait! Fresh produce is just a click away. 
                Browse our selection and taste the difference quality makes.
              </p>
                <Link href="/shop">
                <button className="btn btn-light ">
                  Browse Products
                </button>
                </Link>
               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;