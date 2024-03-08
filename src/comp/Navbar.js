
import { Link } from "react-router-dom";
import Notification from "./Notification";
import Header3 from "./Header3";

function Navbar() {
   
   

    return (

        <>
            <div className="">
                <Notification />
            </div>
            <nav class="navbar">
                <div class="container-fluid">
                    <div className="logo">
                       <Link to="/"> <img src="bmnlogo.png" alt="Logo" className="ms-1" /></Link>
                    </div>
                    
                                    <div>

                                        <ul className="link-list2 ms-auto">
                                            <div className="search  me-4">
                                                <input placeholder="Search" type="text" className="" />
                                                <button type="submit" className="search-icon"><i class="bi bi-search"></i></button>
                                            </div>
                                            <li><Link to="/cart" ><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg></Link></li>
                                            <li><Link to="/account"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                           
                                            </Link></li>
                                        </ul>
                                    </div>


                                </div>
                            </nav>

                <Header3 />
                        </>
                        );
}

                        export default Navbar;