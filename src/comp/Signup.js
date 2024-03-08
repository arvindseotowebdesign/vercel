import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const[visible,setVisible]=useState('true')
    const[name,setName]=useState('')
    const[mobile,setMobile]=useState('')


    function handleform(e){
        e.preventDefault()
        //console.log(username,password,name,mobile)
         const formData={username,password,name,mobile}
        fetch('/api/register',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
    }).then((result)=>{return result.json()}).then((data)=>{
      //console.log(data)
      if (data.status===201){
        setMessage(data.message)
      }else{
        setMessage(data.message)
      }
    })
    }
    return ( 
        <section className="signup mt-5">
                <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                
                <div className="col-md-4">
                <form onSubmit={(e)=>{handleform(e)}}>
                         <h3>REGISTER HERE</h3>
                         <p>{message}</p>
                         
                         <label>FULL NAME</label>
                         <input type="text" placeholder=""className="form-control"
                          value={name}  onChange={(e)=>{setName(e.target.value)}} required/>

                          <label>MOBILE NO.</label>
                          <input type="number" placeholder=""className="form-control" pattern="[0-9]{10}"
                          value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} />
                         
                        <label>EMAIL</label>
                        <input type="email" placeholder=""className="form-control"
                          value={username}  onChange={(e)=>{setUsername(e.target.value)}}  required/>

                        <label>PASSWORD</label>
                        <div className="input-field form-control">
                        <input type={visible?"text":"password"} 
                        placeholder=""
                         className=""
                         value={password} required
                         onChange={(e)=>{setPassword(e.target.value)}}
                          /><span onClick={()=>{setVisible(!visible)}}>{
                          visible?<i class="bi bi-eye-slash"></i>:<i class="bi bi-eye"></i>
                          }</span>

                    </div>
                        <button type="submit" className="btnsub  form-control  mt-3">Submit</button>
                        <hr/>
                        <div className="mt-4 ">
                        <Link to='/login'  ><button className=" btnreg form-control  " >HAVE ACCCOUNT?</button></Link>
                        </div>
                        </form>
                        
                </div>
                <div className="col-md-4"></div>
                </div>
                
        </div>
       </section>
 
        
     );
}

export default Signup;