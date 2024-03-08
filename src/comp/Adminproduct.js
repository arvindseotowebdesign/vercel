import { Link, useNavigate } from "react-router-dom";
import Left from "./Left";
import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";

function Adminproduct() {
    const navigate=useNavigate()
    const{loginname}= useContext(Contextapi)
    const[message,setMessage]= useState('')
    const[products,setProducts]= useState([])
    
    useEffect(() => {
        fetch('/api/allproducts').then((result)=>{return result.json()}).then((data)=>{
           console.log(data)
           if(data.status===200){
                setProducts(data.apiData)
                if(!loginname){
                    navigate('/')
                }
           }else{
                setMessage(data.message)
           }
        })
    }, [])
   
    return ( 

        <>
        <section id="mid">
            <div className="container mt-3"  >
                 <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2>Product Management</h2>
                        <div className="overlay my-2">
                            <Link to="/addproduct">
                        <button className="btn2 mx-auto"><span>Add New Product</span></button>
                        </Link>
                        </div>
                        <table className="table table-hover table-success table-striped table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Images</th>
                                    <th>Price</th>
                                    <th>Catagory</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((result,key)=>(
                                     <tr key={result._id}>
                                     <td>{key+1}</td>
                                     <td>{result.name}</td>
                                     <td>{result.desc}</td>
                                     <td><img  src={`../api/public/upload/${result.img}`} alt=""/></td>
                                     <td>{result.price}</td>
                                     <td>{result.category}</td>
                                    
                                     
                                     
                                     </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Adminproduct;