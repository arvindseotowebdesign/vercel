import { useState } from "react";
import { Link } from "react-router-dom";

function Bundle() {

    const [activeIndex, setActiveIndex] = useState(0);

    function handlePrevClick  (e)  {
    // console.log("button clicked")
      setActiveIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    }
  
    function handleNextClick (e)  {
       
      const TOTAL_SLIDES = 3;
      setActiveIndex(prevIndex => prevIndex < TOTAL_SLIDES - 1 ? prevIndex + 1 : prevIndex);
    }

    return (
        <>
            <section className="popular my-0">
                <div className="bundle">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h2>AMAZING OFFERS</h2>
                        </div>
                        <div className="col-md-4 text-right">
                            <div>
                                <Link
                                    className="btn  mr-1"
                                    href="#carouselExampleIndicators2"
                                    role="button"
                                    
                                    onClick={ (e)=>{ handlePrevClick (e)}}
                                >
                                    <i className="bi bi-arrow-left"></i>
                                </Link>
                                <Link
                                    className="btn"
                                    href="#carouselExampleIndicators2"
                                    role="button"
                                    
                                    onClick=  { (e)=>{handleNextClick(e)}}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner ">
                                    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}` }>
                                        <div className="row">

                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle1.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle2.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle3.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                                        <div className="row">

                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle4.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle7.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle6.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                                        <div className="row">

                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle7.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle1.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="webimg/bundle3.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">BRAND ME NOW  BUNDLES</h4>
                                                        <p className="card-text">MAKE IT YOURS AT <Link> $ X X X X  </Link>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mx-0 my-2 pb-4">
                <div className="col-md-4 px-0"></div>
                <div className="col-md-4 text-center mt-1 px-0">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">SHOP DEALS</span>
                    </button>
                </div>
                <div className="col-md-4 px-0"></div>
            </div>
            </section>
        </>
    );
}

export default Bundle;