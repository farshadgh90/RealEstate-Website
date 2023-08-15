import React, { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"
import "./Header.css"

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 800){
            return{left: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu"
                    style={getMenuStyles(menuOpened)}>
                        <a href="#residencies">املاک</a>
                        <a href="#value">ارزش های ما</a>
                        <a href="#contact">تماس با ما</a>
                        <a href="#getStarted">خرید اشتراک</a>
                        <button className="button">
                            <a href="">تماس</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default Header