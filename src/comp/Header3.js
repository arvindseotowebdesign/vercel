import { Link } from "react-router-dom";

function Header3() {
    return (
        <section >
            <div className="">
                <div className="" >
                    <div className="col-md-12 px-0" >
                    <nav className="nav px-0 mx-0">
                <ul className="link-list mx-auto">
                    
                    <li><Link className="nav-link dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">ALL PRODUCTS</Link >
                        <ul className="dropdown-menu">
                            <li><Link to="/products" className="dropdown-item">T-SHIRTS</Link ></li>
                            <li><Link to="/"className="dropdown-item">SHIRTS</Link ></li>
                            <li><Link to="#"className="dropdown-item">SWEATSHIRTS</Link ></li>
                        </ul>
                    </li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">T-SHIRTS</Link >

                        <ul className="dropdown-menu">
                            <li><Link to="#"  className="dropdown-item">Mens's</Link ></li>
                            <li><Link to="#" className="dropdown-item" >Women's</Link ></li>
                            <li><Link to="#" className="dropdown-item" >Unisex</Link >

                                <ul>
                                    <li><Link to="/" className="dropdown-item"></Link ></li>
                                    <li><Link to="#" className="dropdown-item"></Link ></li>
                                    <li><Link to="#" className="dropdown-item"></Link > </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">POLO SHIRTS</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">HOODIES</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">JACKETS</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">WORKWEAR</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">COLLECTIONS</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">SUSTAINABLE</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">OFFERS</Link ></li>
                    <li><Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">INFO</Link >
                    <ul className="dropdown-menu">
                            <li><Link to="/about" className="dropdown-item">ABOUT US</Link ></li>
                            <li><Link to="/contact"className="dropdown-item">CONTACT US</Link ></li>
                           
                        </ul>
                    </li>
                </ul>
            </nav>
                    </div>
                </div>
            </div>

            

        </section>

    );
}

export default Header3;