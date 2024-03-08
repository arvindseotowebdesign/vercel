

function Carousal() {

    return (
        <section className="carousal mt-1">
            <div className="" ></div>
            <div className="row mt-3 px-0" id="crow">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <div className="col-md-3"></div></div>

                <div className="row px-0 mx-0" id="crow">
                  <div className="container-fluid">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <img src="crl1.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                  
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="crl2.jpg" class="d-block w-100" alt="..."/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="crl3.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                      
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                  
                </div>

                <div className="popular row my-0 py-1">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center mt-2">
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">SHOP ALL</span>
                        </button>
                    </div>
                    <div className="col-md-4 "></div>
                </div>

            </div>

        </section >
    );
}

export default Carousal;