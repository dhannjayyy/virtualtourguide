
import axios from "axios";
import { useState,useCallback } from "react";
import Lottie from "react-lottie";
import * as animationData from "./contact_lottie.json";

function contact() {
    const [contactFormData,setContactFormData] = useState({
        name:"",
        email:"",
        phoneno:"",
        message:""
    })
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };

      const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await axios.post('/api/contact',contactFormData)
        console.log(result)
      }
      const onInputChange= useCallback(

        (ev)=>{
          const name = ev.target.name;
          const value = ev.target.value;

          setContactFormData({...contactFormData, [name]:value})
        }
      ,[contactFormData])
  return (
    <section className="contact">
        <div className="contact_heading">
            <h1><span> C</span>ontact <span>U</span>s</h1>
        </div>
        <div className="contact-data">
        <div className="contact-lottie">
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
        </div>
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  onChange={onInputChange} placeholder="Name"/>
                <input type={"email"} name="email" onChange={onInputChange} placeholder="Email"/>
                <input type={"number"} name="phoneno" onChange={onInputChange} placeholder="Phone No."/>
                <input type={"text"} name="message" onChange={onInputChange} placeholder="Message" className="message"/>
                <button className="submit-button"> Submit </button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default contact