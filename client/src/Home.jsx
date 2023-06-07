import React from "react";
import Button from 'react-bootstrap/Button';
// import HeroBackground from 'images/Hero Section Background.png';
// import HeroImage from 'images/Hero Image.png';
function Home(prop){
    return(
        <div className="rows home">
            {/* <div className="section-style-home"> */}
                <div className="section-style home-content"> 
                    <div><h1 className="home-title"><strong>Make Things Happen With Code!</strong></h1></div>
                    <div className="home-message">I help clients like you transform their ideas into user-friendly programs that are both reliable and snappy.</div>
                    <div className="home-message">
                    <Button className="home-btn" type="submit">Hire me</Button> 
                    <Button className="btn-light home-btn2" type="submit">See my work</Button>
                    </div>
                </div>
                <div className="section-style home-background"> 
                    <img  src='images/home/Hero Section Background.png' alt="home background"></img>
                </div>
                <div className="section-style home-background2"> 
                    <img src='images/home/Hero Image.png' alt="home background"></img>
                </div>
                    <img src='images/home/Scroll Animation.svg' alt="home background"></img>
            <div className="section-style-home">

            </div>

        </div>
    )
}
export default Home;