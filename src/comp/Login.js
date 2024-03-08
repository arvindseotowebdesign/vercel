import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";
 
function Login() {
    const navigate=useNavigate()
    const{setLoginname}=useContext(Contextapi)
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[visible,setVisible]=useState('true')
    const[message,setMessage]=useState('')


    function handleform(e){
        e.preventDefault()
       // console.log(username,password)
       const loginData={username,password}
       fetch('/api/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(loginData)
       }).then((result)=>{return result.json()}).then((data)=>{
        //console.log(data)
        if(data.status===200){
            localStorage.setItem('loginname',data.apiData)
          setLoginname(localStorage.getItem('loginname'))
            if(data.apiData==="info.brandmenow@co.uk"||data.apiData==="gauravyadav8190@gmail.com"){
                navigate('/dashboard')
            }else{
            navigate('/')
            }
        }else{
            setMessage(data.message)
        }
       })
    }

    return ( 
        <section  className="signup mt-5">
             <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                
                <div className="col-md-4">
                <form onSubmit={(e)=>{handleform(e)}}>
                         <h3>LOGIN HERE</h3>
                         <p>{message}</p>
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
                        <Link to='/signup'  ><button className=" btnreg form-control  " > NOT HAVE ACCCOUNT?</button></Link>
                        <Link to='/forgotpass'>forgot password ?</Link>
                        </div>
                        </form>
                        
                </div>
                <div className="col-md-4"></div>
                </div>
                
        </div>
       </section>
     );
}

export default Login;