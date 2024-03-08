function Bestseller() {
    return (
        <section className="popular my-0">
            <div className="container" id="product">
                <div className="row ms-0" >
                    <h2 className="">BEST-SELLER</h2>
                    <div className="col-md-3 mt-2 me-auto ms-0">
                        <div className="product-container">
                            <div className="product">
                                <img src="product1.jpg" alt="Product 1" />
                                <h3 className="ms-5">Product 1</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2 mx-auto ">
                        <div className="product-container">
                            <div className="product">
                                <img src="product2.jpg" alt="Product 2" />
                                <h3 className="ms-5">Product 2</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2 mx-auto">
                        <div className="product-container">
                            <div className="product">
                                <img src="product3.jpg" alt="Product 3" />
                                <h3 className="ms-5">Product 3</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-4 px-0"></div>
                <div className="col-md-4 text-center mt-1 px-0">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">SHOP FOR ALL</span>
                    </button>
                </div>
                <div className="col-md-4 px-0"></div>
            </div>



        </section>
    );
}

export default Bestseller;