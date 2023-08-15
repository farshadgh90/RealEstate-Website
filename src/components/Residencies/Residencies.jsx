import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common";
import "swiper/css"
import "./Residencies.css"

const Residencies = () => {
    return(
        <section id="residencies" className="r-wrapper">
            <div className="innerWidth paddings r-container">
                <div className="flexColStart r-head">
                    <div>
                        <h1>خانه های منتخب</h1>
                    </div>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText r-price">
                                        <span>{card.price}</span>
                                        <span style={{color: "orange"}}>تومان</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper()

    return(
        <div className="flexCenter r-buttons">
            <button onClick={() => {swiper.slidePrev()}}>
                &lt;
            </button>
            <button onClick={() => {swiper.slideNext()}}>
                &gt;
            </button>
        </div>
    )
}