import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Catalogue.css";
import catalogue from "../../Media/Screenshot_9.png";
import whiteBlack from "../../Media/1 (7).jpeg";
import { useNavigate } from "react-router-dom";

const Catalogue = () => {
  const navigate=useNavigate()
  const handleClick=(e)=>{
    navigate('/item')
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    
    e.preventDefault();
  }
  const ref = useRef(null);
  return (
    <section id="catalogue">
      <div className="container">
        <div className="row">
          <div className="catalogues ">
            <div className="catalogue-title">
              <h2>
                Mərmər - müxtəlif rəng və naxişlar olan eleqant təbii daşdır...
              </h2>
            </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              initialSlide={1}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <div className="catalogue-cards ">
                <SwiperSlide>
                  <div className="catalogue-card">
                    <div className="card-img">
                      <img src={whiteBlack} alt="catalogue-img" />
                    </div>
                    <div className="catalogue-description">
                      <div className="catalogue-code">
                        <h3>B-204, V-301</h3>
                      </div>
                      <div className="catalogue-name">
                        <p>fibrofayam</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="catalogue-card">
                    <div className="card-img">
                      <img src={whiteBlack} alt="catalogue-img" />
                    </div>
                    <div className="catalogue-description">
                      <div className="catalogue-code">
                        <h3>B-204, V-301</h3>
                      </div>
                      <div className="catalogue-name">
                        <p>fibrofayam</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="catalogue-card">
                    <div className="card-img">
                      <img src={whiteBlack} alt="catalogue-img" />
                    </div>
                    <div className="catalogue-description">
                      <div className="catalogue-code">
                        <h3>B-204, V-301</h3>
                      </div>
                      <div className="catalogue-name">
                        <p>fibrofayam</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="catalogue-card">
                    <div className="card-img">
                      <img src={catalogue} alt="catalogue-img" />
                    </div>
                    <div className="catalogue-description">
                      <div className="catalogue-code">
                        <h3>B-204, V-301</h3>
                      </div>
                      <div className="catalogue-name">
                        <p>fibrofayam</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="catalogue-card">
                    <div className="card-img">
                      <img src={catalogue} alt="catalogue-img" />
                    </div>
                    <div className="catalogue-description">
                      <div className="catalogue-code">
                        <h3>B-204, V-301</h3>
                      </div>
                      <div className="catalogue-name">
                        <p>fibrofayam</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="catalogue-card">
                    <div className="card-img">
                      <img src={catalogue} alt="catalogue-img" />
                    </div>
                    <div className="catalogue-description">
                      <div className="catalogue-code">
                        <h3>B-204, V-301</h3>
                      </div>
                      <div className="catalogue-name">
                        <p>fibrofayam</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="next-page-btn">
            <button type="submit" onClick={handleClick}>
              Bütün məhsullar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
