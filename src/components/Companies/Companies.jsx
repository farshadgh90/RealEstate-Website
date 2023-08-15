import React from "react";
import "./Companies.css"

const Companies = () => {
    return(
        <section className="c-wrapper">
            <div className="innerWidth flexCenter paddings c-container">
                <div>
                    <img src="./Coprate.svg" alt="" />
                    <h3>عضویت آژانس املاک</h3>
                </div>
                <div>
                    <img src="realtor.svg" alt="" />
                    <h3>عضویت مشاور مستقل</h3>
                </div>
                <div>
                    <img src="star.svg" alt="" />
                    <h3>آژانس های فعال برتر</h3>
                </div>
            </div>
        </section>
    )
}

export default Companies