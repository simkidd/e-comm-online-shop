import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";
import Featured from "../components/slides/Featured";
import Hero from "../components/slides/Hero";
import LatestNews from "../components/slides/LatestNews";
import Slide from "../components/slides/Slide";
// import framer motion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Slide />
      <h3 className="section-title">best seller</h3>
      <BestSeller />
      <div className="shop-now-ad">
        <div className="sh-left">
          <span>Adidas Men Running Sneakers</span>
          <span>Performance and design. Taken right to the edge.</span>
          <motion.span
          initial={{x:'-2rem'}}
          whileInView={{x:0}}
          transition={{delay:0.3, type:'spring'}}>
            <Link>shop now</Link>
            <hr />
          </motion.span>
        </div>
        <div className="sh-right">
          <div className="img-wrapper">
            <motion.img
              whileHover={{scale:1.2}}
              initial={{x:'3rem'}}
              whileInView={{x:0}}
              transition={{type:'spring', delay: 0.2}}
            src={require("../assets/shoey-big.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="free-shipping">
        <div>
          <div className="img-wrap">
            <img src={require("../assets/shipping.png")} alt="" />
          </div>
          <span>free shipping</span>
          <span>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div>
          <div className="img-wrap">
            <img src={require("../assets/refund.png")} alt="" />
          </div>
          <span>100% refund</span>
          <span>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div>
          <div className="img-wrap">
            <img src={require("../assets/support.png")} alt="" />
          </div>
          <span>free shipping</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
      </div>
      <h3 className="section-title">latest news</h3>
      <LatestNews />
      <h3 className="section-title">featured products</h3>
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
