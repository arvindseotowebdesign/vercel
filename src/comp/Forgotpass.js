import { useState } from "react";
import { Link } from "react-router-dom";

function Forgotpass() {

    
    
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
      
        function handleForgotPassword  (e) {
            e.preventDefault()
            //console.log(email)
           // const email={email}
            
            fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
              });
        }
    return ( 
        <>
            <div className="account container">
                <div className="row mt-3">
                    <div className="col-lg-4  col-md-12 "></div>
                    <div className="col-lg-4 col-md-12">
                        <div className="overlay" >
                            <h5>Enter your resitered email here to reset your password</h5>
                            <p>{message}</p>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="ENTER YOUR MAIL"/>
                                <button onClick={(e)=>{handleForgotPassword(e)}} className="btnsend form-control mt-2"><span>Send link</span></button>
                        </div>
                       <Link to="/login"> Go back </Link>
                    </div>
                    <div className="col-lg-4 col-md-12"></div>
                </div>
                </div>        
        </>
     );
}

export default Forgotpass;