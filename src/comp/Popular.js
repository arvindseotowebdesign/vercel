function Popular() {
    return (
        <section className="popular">
            <div className="container mx-auto ">
                <h2>CATEGORIES</h2>

                <div className="row">
                    <div className="col-md-3 my-1">
                        <div class="card">
                            <img src="aprons.png" alt="" className="img" />
                            <div class="textBox">
                                <h5 class="text head">APRONS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-1">
                        <div class="card">
                            <img src="headwears.png" alt="" className="img" />
                            <div class="textBox">
                                <h5 class="text head">HEADWEARS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-1">
                        <div class="card">
                            <img src="hi-vis.png" alt="" className="img" />
                            <div class="textBox">
                                <h5 class="text head">HI-VIS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-1">
                        <div class="card">
                            <img src="hoodies.png" alt="" className="img" />
                            <div class="textBox">
                                <h5 class="text head">HOODIES</h5>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center mt-5">
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">SHOP ALL</span>
                        </button>
                    </div>
                    <div className="col-md-4 "></div>
                </div>

              
            </div>

           
               
            
        </section>
    );
}

export default Popular;