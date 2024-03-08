import { useState } from "react";

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleform(e) {
        e.preventDefault()
    }

    return (
        <section className="contact">
            <div className="row mt-2">
                <div className="col-md-4" id="contactno">
                    <h3>Brand me now </h3>
                    
                    <hr/>
                        <h6> <i class="bi bi-telephone-forward"></i>   Sales Enquiries Tel: 0123456789 </h6>
                        <h6> <i class="bi bi-envelope-at"></i>   Sales Mail: salesbrand@gmail.com </h6>
                        <br/>
                        
                        <img src="webimg/anil.png" alt=""/>

                </div>
                <div className="col-md-4" id="contactno">
                    <h3>Find us </h3>
                    <hr/>                  <h6>Our office is located at : </h6>
                            <h6><i class="bi bi-pin-map"></i> : uk..... </h6>

                </div>
                <div className="col-md-4" id="cform">
                    <h3>CONTACT FORM</h3>
                    <div className="form ">
                        <form onSubmit={(e) => { handleform(e) }}>
                            <label>FULL NAME</label>
                            <input type='text' value={name} name='name' className="form-control mt-1" placeholder='Enter your full name...' onChange={(e) => { setName(e.target.value) }} required />

                            <label>EMAIL</label>
                            <input type='email' value={email} name='name' className="form-control mt-1" placeholder='Enter your email address' onChange={(e) => { setEmail(e.target.value) }} required />

                            <label>REASON OF CONTACT</label>
                            <select id="reason" name="reason" className="form-control">
                                <option >Make a purchanse</option>
                                <option >Order query</option>
                                <option >others</option> 
                                
                            </select>

                            <label>MESSAGE</label>
                            <textarea name="textarea" className="form-control"/>

                            <button type="submit" className="btn btn-outline-dark form-control my-2">SUBMIT</button>
                        </form>
                    </div>

                </div>

            </div>
            <hr/>

            <div className="row mt-3 mx-3">
                <div className="col-md-12"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.0500570380439!2d-1.9318307698639!3d52.43928757319802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc92342b6879%3A0x59e032018d399cca!2sBrand%20Me%20Now!5e0!3m2!1sen!2sin!4v1698920805234!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </section>
    );
}

export default Contact;