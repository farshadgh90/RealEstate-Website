import React from "react"
import { HiLocationMarker } from "react-icons/hi"
import "./Hero.css"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="flexCenter innerWidth paddings hero-container">

                {/* right side */}
                <div className="flexColStart hero-right">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        >بهترین املاک را<br />
                         در وبسایت ما<br />
                          میتوانید ببینید</motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">با ما خانه دلخواه خود را به راحتی میتوانید پیدا کنید</span>
                        <span className="secondaryText">با ما تمام مشکلات پیدا کردن خانه دلخواه خود را فراموش کنید</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">جستجو</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">بهترین املاک</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">رضایت مشتری</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">جوایز</span>
                        </div>
                    </div>
                </div>

                {/* left side */}
                <div className="flexCenter hero-left">
                    <motion.div
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="image-container"
                    >
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero