import React from "react";
import ContactInput from "./ContactInput";
import Axios from "axios";


function Contact(props){

    const displayInfo2= (contactInfo)=>{
    //   console.log(contactInfo);
      Axios.post('http://localhost:3001/create', {contactInfo})
      .then(response => console.log(response))
      .catch(err => console.log(err))
    }


    return (
            <div className="sections contact-box">
                <div className="rows contact-style">
                    
                    <div className="contact-col">
                    <div>Want to hire or say hello?</div>
                    <img src="images/contact/Hands Typing.svg" alt="contact background" ></img>
                    </div>
                    <div className="contact-col">
                        <ContactInput displayInfo={displayInfo2}/>
                    </div>
                </div>
            </div>







    )
}



export default Contact;