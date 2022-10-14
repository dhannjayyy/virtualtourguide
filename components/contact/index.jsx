
import Lottie from "react-lottie";
import * as animationData from "./contact_lottie.json";

function contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
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
            <form>
                
                <input type="text"  placeholder="Name"/>
                <input type={"email"}  placeholder="Email"/>
                <input type={"number"}placeholder="Phone No."/>
                <input type={"text"} placeholder="Message" className="message"/>

            </form>
        </div>
        </div>
    </section>
  )
}

export default contact