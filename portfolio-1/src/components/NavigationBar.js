import React from "react"


const NavigationBar = () => {
    return(
        <>  
            <img src="/asset/IMG_2046.jpeg" alt="" id="background"/>
            <div id="nav-bar-container">
                <nav>
                    <img src="/asset/logo.jpg" id="logo"/>
                    <ul>
                        <li><a href="#section1">Who</a></li>
                        <li><a href="#">What</a></li>
                        <li><a href="#section3">Work</a></li>
                        <li><a href="#">Serivces</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div id="title-container">
                <p id="header-title">Full Stack Web <br></br>Developer</p>
                <h1 id="titleh1">My names Nguyen Nguyen</h1>
            </div>
            <img src="/asset/headshot.png" alt="" id="headshot"/>  
        </>
    )
}

export default NavigationBar