import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormGroup, Col, FormControl} from 'react-bootstrap';
// import Axios from "axios";

function ContactInput(props) {

      const [contactInfo, setContactInfo]= useState({
        contactName:"",
        email:"",
        company:"",
        message:""
    });
    // const [time, setTime]=useState("");
    function handleChange(event){
      const {name, value} =event.target;

      setContactInfo((prevContact) => {
        if(name === "contactName") {
          return {
            contactName: value,
            email:prevContact.email,
            company:prevContact.company,
            message:prevContact.message
          }
        }
          if(name === "email") {
            return {
              contactName: prevContact.contactName,
              email:value,
              company:prevContact.company,
              message:prevContact.message
            };
          }
          if(name === "company") {
            return {
              contactName: prevContact.contactName,
              email:prevContact.email,
              company:value,
              message:prevContact.message
            };
          }
          if(name === "message") {
            return {
              contactName: prevContact.contactName,
              email:prevContact.email,
              company:prevContact.company,
              message:value
            }
          }
      })
    } 
    function submit(event){
      // setTime("aaaaaaa");
      event.preventDefault();
      props.displayInfo(contactInfo);
      setContactInfo({
        contactName:"",
        email:"",
        company:"",
        message:""
      })
      
    }

  return (
<Form >
  {/* {contactInfo.contactName} */}

  <FormGroup controlId="formName">
    <Col  sm={7}>
      <p className="contact-text">Your Name</p>
    </Col>
    <Col sm={10}>
      <FormControl 
        type="name"
        name="contactName" 
        onChange={handleChange} 
        value={contactInfo.contactName}  
        placeholder="name" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formEmail">
    <Col  sm={7}>
      <p className="contact-text">Email Address</p>
    </Col>
    <Col sm={10}>
      <FormControl 
        type="Email"
        name="email" 
        onChange={handleChange} 
        value={contactInfo.email} 
        placeholder="Email" 

        />
    </Col>
  </FormGroup>
    <FormGroup controlId="formCompanyName">
    <Col  sm={7}>
      <p className="contact-text">Company (optional)</p>
    </Col>
    <Col sm={10}>
      <FormControl 
        type="Company" 
        name="company" 
        onChange={handleChange} 
        value={contactInfo.company}         
        placeholder="company Name"

         />
    </Col>
  </FormGroup>
    <FormGroup controlId="formMessage">
    <Col sm={10} className="contact-message">
      <FormControl 
        as="textarea" 
        rows={3} 
        type="text" 
        name="message" 
        onChange={handleChange} 
        value={contactInfo.message} 
        placeholder="Message" 

        />
    </Col>
  </FormGroup>


  <FormGroup>
    <Col sm={10} className="contact-button">
      <div><p >I'll be sure to get back to you as soon as I can.</p></div>
      <div><Button type="submit" onClick={submit}>Submit</Button></div>
    </Col>
  </FormGroup>
</Form>
  );
}

export default ContactInput;