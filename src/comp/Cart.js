function Cart() {
    return (
        <section className="aboutus">
            <div className="row m-0 mt-4">
                <div className="col-lg i-1 mt-3 ">
                    <div className="col-lg d-flex justify-content-start align-item-center">
                        <div className="target-cart-img"><img className="img-fluid  ms-4" src="webimg/purpt.webp" alt="tt" /></div>
                        <div className="info d-flex justify-content-end align-item-center">
                            <ul className="target-ul d-flex flex-column justify-content-center align-item-center ms-5">
                                <li>Smart Fit</li>
                                <li>Soft Fashion</li>
                                <li>Ribbed</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg ms-4 mb-3">
                        <select className="form-select form-select-sm mt-5 target-select" aria-label=".form-select-sm example">
                            <option selected>Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">2</option>
                        </select>
                        <h5 className="mt-4">$139.00</h5>
                    </div>
                </div>

                <div className="col-lg mt-3 ">
                    <div className="col-lg d-flex justify-content-start align-item-center">
                        <div className="target-cart-img"><img className="img-fluid  ms-4" src="webimg/blackt.webp" alt="tt" /></div>
                        <div className="info d-flex justify-content-end align-item-center">
                            <ul className="target-ul d-flex flex-column justify-content-center align-item-center ms-5">
                                <li>Smart Fit</li>
                                <li>Soft Fashion</li>
                                <li>Ribbed</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg ms-4">
                        <select className="form-select form-select-sm mt-5 target-select" aria-label=".form-select-sm example">
                            <option selected>Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">2</option>
                        </select>
                        <h5 className="mt-4">$139.00</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row m-0">
                <div className="col-lg d-flex flex-column justify-content-start align-item-center">
                    <h5>Have a Voucher Code ?</h5>
                    <div className="overlay input-group mb-3 target-inp">
                        <input type="text" className="form-control" placeholder="Enter Voucher Code"
                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="" type="button" id="button-addon2"><span>Apply</span></button>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="float-end mb-3">
                        <button type="button" className="btnc"
                            style={{ paddingY: ".25rem", paddingX: ".5rem", fontSize: ".75rem" }}>
                            Empty Cart
                        </button>
                        <button type="button" className="btnc"
                            style={{paddingyY: ".25rem", paddingX: ".5rem", fontSize: ".75rem"}}>
                            Update Cart
                        </button>
                    </div>
                    <h5 className="ms-5 mt-5">Total Amount $ 278.00</h5>
                    <div className="overlay mt-5 d-grid gap-2 ">
                        <button className="btn " type="button"><span>Checkout</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;