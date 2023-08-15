import React from "react"
import "./GetStarted.css"

const GetStarted = () => {
    return(
        <section id="getStarted" className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">با هومیز شروع کنید</span>
                    <span className="secondaryText">اشتراک ما را تهیه کنید تا از قیمت های بسیار جذاب ما آگاه شوید
                        <br/>
                        خانه دلخواه خود را خیلی زود پیدا کنید
                    </span>
                    <button className="button">
                        <a href="mailto:f.ghorbani1990@gmail.com">خرید اشتراک</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted