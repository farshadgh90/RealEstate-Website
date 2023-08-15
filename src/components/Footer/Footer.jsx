import React from "react"
import "./Footer.css"

const Footer = () => {
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* right side */}
                <div className="flexColStart f-right">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText">ما بهتریم خانه ها را به شما معرفی میکنیم</span>
                </div>

                {/* left side */}
                <div className="flexColStart f-left">
                    <span className="primaryText">آدرس</span>
                    <span className="secondaryText">کرج، مهرشهر، بلوار شهرداری، نبش خیابان 104، املاک هومیز</span>
                    <div className="flexCenter f-menu">
                        <span>املاک</span>
                        <span>خدمات</span>
                        <span>محصولات</span>
                        <span>درباره ما</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer