import React from "react";


function About(){
    return (
        // <div className="sections home">
        // <div className="section-style section-style-about">
        //     <div className=" about-style">
        //         <img src="images/Books-and-keyboard.png" alt="books background"></img>
        //     </div>
        //     <div className="about-inner-style">
        //     <div className="about-inner-style-top">
        //     <img src="images/Jereen6.png" alt="Jereen"></img>
        //     {/* <img class="about-photo-style" src={profilePhoto} alt=""></img> */}
        //     </div>
        //     <div className="about-inner-style-bottom">
        //     <p>Recent graduate of Midwestern State University with a Bachelor of Science in Computer
        //     Science. My coursework coupled with a coding bootcamp has given me a strong foundation in the field of web development,
        //     and software engineering.</p>                
        //     </div>
        //     </div>
        // </div>
        // </div>
        <div className="rows">
        <div className="section-style about-style">
            <img  src="images/about/Books-and-keyboard.png" alt="books background"></img>
        </div>
        <div className="section-style about-style2">
            <img className="about-photo-style" src="images/about/Jereen6.png" alt="Jereen"></img>
            <p className="about-inner-style-bottom">Recent graduate of Midwestern State University with a Bachelor of Science in Computer
             Science. My coursework coupled with a coding bootcamp has given me a strong foundation in the field of web development,
             and software engineering.</p>  
        </div>
        <div className="section-style about-style3">
        </div>

        

        </div>
    )
}



export default About;