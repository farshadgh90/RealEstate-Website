import React, { useState } from "react";
import "./Value.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md"
import data from "../../utils/accordion"

const Value = () => {
    return(
        <section id="value" className="v-wrapper">
            <div className="innerWidth flexCenter paddings v-container">
                {/* right side */}
                <div className="v-right">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* left side */}
                <div className="flexColStart v-left">
                    <span className="orangeText">ارزش های ما</span>
                    <span className="primaryText">ارزشهایی که ما به شما میدهیم</span>
                    <span className="secondaryText">ما همیشه آماده هستیم تا با ارائه بهترین خدمات به شما کمک کنیم
                        <br/>
                        ما معتقدیم یک مکان خوب برای زندگی می تواند زندگی شما را بهتر کند
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {
                                const [className, setClassName] = useState(null)
                                return(
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionItemButton">
                                                <AccordionItemState>
                                                    {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">
                                                {item.detail}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value