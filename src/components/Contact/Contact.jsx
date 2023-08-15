import React from "react";
import { MdCall } from "react-icons/md"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter } from "react-icons/hi2"
import "./Contact.css"

const Contact = () => {
    return(
        <section id="contact" className="contact-wrapper">
            <div className="innerWidth flexCenter paddings contact-container">
                {/* right side */}
                <div className="flexColStart contact-right">
                    <span className="orangeText">تماس با ما</span>
                    <span className="primaryText">به راحتی میتوانید با ما تماس بگیرید</span>
                    <span className="secondaryText">ما همیشه آماده هستیم تا با ارائه بهترین خدمات به شما کمک کنیم
                        <br/>
                        ما معتقدیم یک مکان خوب برای زندگی می تواند زندگی شما را بهتر کند
                    </span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">تماس</span>
                                        <span className="secondaryText">8080 8800 21 98+</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">تماس بگیرید</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">چت</span>
                                        <span className="secondaryText">8080 8800 21 98+</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">چت کنید</div>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">تماس تصویری</span>
                                        <span className="secondaryText">8080 8800 21 98+</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">تماس بگیرید</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">پیام</span>
                                        <span className="secondaryText">8080 8800 21 98+</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">پیام بدهید</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* left side */}
                <div className="contact-left">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
