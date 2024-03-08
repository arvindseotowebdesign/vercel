import { Link } from "react-router-dom";
import Filter from "./Filter";

function Projects2() {
    return ( 
        <section id="section2 my-4">
            <div className="conatianer-fluid my-5">
                <div className="row mx-5 my-0">
                    <div className="col-md-2 me-3">
                        <Filter/>
                    </div>
                    <div className="col-md-3">
                    <div className="card1">
                           <Link to="/prpage"> <figure>
                                <img src="webimg/shop/1.jpg" alt="t-shirt"/>
                            </figure></Link>
                            <section className="details">
                                <div className="min-details">
                                <h4>Remera <span>azul</span></h4>
                                    <h4 classname="price">$45.99</h4>
                                </div>

                                <div className="options">
                                    <div className="options-size">
                                        <h3>sizes</h3>
                                        <ul>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>

                                    
                                </div>
                                
                                <Link to="/" className="btn1">Add to cart</Link>
                                    
                                
                                
                            </section>
                        </div>

                        <div className="card1 mt-5">
                            <figure>
                                <img src="https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg" alt="t-shirt"/>
                            </figure>
                            <section className="details">
                                <div className="min-details">
                                <h4>Remera <span>azul</span></h4>
                                    <h4 classname="price">$45.99</h4>
                                </div>

                                <div className="options">
                                    <div className="options-size">
                                        <h3>sizes</h3>
                                        <ul>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>

                                    
                                </div>
                                
                                <Link to="/" className="btn1">Add to cart</Link>
                                    
                                
                                
                            </section>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card1">
                            <figure>
                                <img src="item3.jpg" alt="t-shirt"/>
                            </figure>
                            <section className="details">
                                <div className="min-details">
                                <h4>Remera <span>azul</span></h4>
                                    <h4 classname="price">$45.99</h4>
                                </div>

                                <div className="options">
                                    <div className="options-size">
                                        <h3>sizes</h3>
                                        <ul>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>

                                    
                                </div>
                                
                                <Link to="/" className="btn1">Add to cart</Link>
                                    
                                
                                
                            </section>
                        </div>
                        <div className="card1 mt-5">
                            <figure>
                                <img src="item4.jpg" alt="t-shirt"/>
                            </figure>
                            <section className="details">
                                <div className="min-details">
                                <h4>Remera <span>azul</span></h4>
                                    <h4 classname="price">$45.99</h4>
                                </div>

                                <div className="options">
                                    <div className="options-size">
                                        <h3>sizes</h3>
                                        <ul>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>

                                    
                                </div>
                                
                                <Link to="/" className="btn1">Add to cart</Link>
                                    
                                
                                
                            </section>
                        </div>
                       
                    </div>
                    <div className="col-md-3">
                    <div className="card1">
                            <figure>
                                <img src="https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg" alt="t-shirt"/>
                            </figure>
                            <section className="details">
                                <div className="min-details">
                                    <h4>Remera <span>azul</span></h4>
                                    <h4 classname="price">$45.99</h4>
                                </div>

                                <div className="options">
                                    <div className="options-size">
                                        <h3>sizes</h3>
                                        <ul>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>

                                    
                                </div>
                                
                                <Link to="/" className="btn1">Add to cart</Link>
                                    
                                
                                
                            </section>
                        </div>
                        <div className="card1 mt-5">
                            <figure>
                                <img src="item5.jpg" alt="t-shirt"/>
                            </figure>
                            <section className="details">
                                <div className="min-details">
                                <h4>Remera <span>azul</span></h4>
                                    <h4 classname="price">$45.99</h4>
                                </div>

                                <div className="options">
                                    <div className="options-size">
                                        <h3>sizes</h3>
                                        <ul>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>

                                    
                                </div>
                                
                                <Link to="/" className="btn1">Add to cart</Link>
                                    
                                
                                
                            </section>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Projects2;