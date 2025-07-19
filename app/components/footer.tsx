"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-top pt-5 pb-3 mt-3">
      <div className="container">
        {/* Footer Content - Desktop and Mobile */}
        <div className="row g-4">
          {/* Logo and Company Info */}
          <div className="col-12 col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <Image 
                src="https://sproutandco.sirv.com/primary_logo.png" 
                className="img-fluid mb-3" 
                width={70} 
                height={70} 
                alt="Sprout & Co" 
                style={{ objectFit: 'contain' }}
              />
              <p className="text-muted text-center text-md-start">
                Eco-friendly, sustainable products for a greener tomorrow.
              </p>
              <div className="d-flex gap-3 mt-2 social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted hover-green" aria-label="Facebook">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted hover-green" aria-label="Instagram">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted hover-green" aria-label="Twitter">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover-green" aria-label="LinkedIn">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h5 className="footer-heading mb-3">Shop</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/products" className="text-decoration-none text-muted hover-green">All Products</Link>
              </li>
              <li className="mb-2">
                <Link href="/bestsellers" className="text-decoration-none text-muted hover-green">Best Sellers</Link>
              </li>
              <li className="mb-2">
                <Link href="/new-arrivals" className="text-decoration-none text-muted hover-green">New Arrivals</Link>
              </li>
              <li className="mb-2">
                <Link href="/sale" className="text-decoration-none text-muted hover-green">Sale Items</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2">
            <h5 className="footer-heading mb-3">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-muted hover-green">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/sustainability" className="text-decoration-none text-muted hover-green">Sustainability</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-decoration-none text-muted hover-green">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-decoration-none text-muted hover-green">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-2">
            <h5 className="footer-heading mb-3">Support</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none text-muted hover-green">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="text-decoration-none text-muted hover-green">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link href="/shipping" className="text-decoration-none text-muted hover-green">Shipping Info</Link>
              </li>
              <li className="mb-2">
                <Link href="/returns" className="text-decoration-none text-muted hover-green">Returns & Refunds</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-2">
            <h5 className="footer-heading mb-3">Newsletter</h5>
            <p className="text-muted small">Subscribe for updates, news and offers!</p>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  aria-label="Email address" 
                  aria-describedby="subscribe-button"
                />
                <button 
                  className="btn btn-success" 
                  type="submit" 
                  id="subscribe-button"
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Payment Methods - Optional */}
        {/* <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex justify-content-center gap-3 payment-methods">
              <i className="bi bi-credit-card fs-4 text-muted"></i>
              <i className="bi bi-paypal fs-4 text-muted"></i>
              <i className="bi bi-apple fs-4 text-muted"></i>
              <i className="bi bi-google fs-4 text-muted"></i>
            </div>
          </div>
        </div> */}

        {/* Divider */}
        <hr className="mt-4 mb-3" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="text-muted small mb-0">
              &copy; {currentYear} Sprout & Co. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <Link href="/privacy" className="text-decoration-none text-muted small hover-green">Privacy Policy</Link>
              <Link href="/terms" className="text-decoration-none text-muted small hover-green">Terms of Service</Link>
              <Link href="/legal" className="text-decoration-none text-muted small hover-green">Legal</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .footer-heading {
          position: relative;
          color: #333;
          font-weight: 600;
        }
        
        .footer-heading:after {
          content: '';
          position: absolute;
          width: 30px;
          height: 2px;
          bottom: -8px;
          left: 0;
          background-color: #198754;
        }
        
        .hover-green:hover {
          color: #198754 !important;
          transition: color 0.2s ease;
        }
        
        .social-icons a {
          transition: transform 0.2s ease;
        }
        
        .social-icons a:hover {
          transform: translateY(-3px);
        }
        
        @media (max-width: 767px) {
          .footer-heading:after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .col-6 .footer-heading {
            text-align: center;
          }
          
          .footer-links {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;