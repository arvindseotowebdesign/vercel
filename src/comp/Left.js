import { Link } from "react-router-dom";

function Left() {
    return ( 
        <div className="overlay col-md-3" id="left" >
        
        <Link to="/adminproducttable" ><button className="btn2 mt-2 form-control"><span>Product Table</span></button></Link>
        </div>
     );
}

export default Left;