import { Link } from "react-router-dom";


function FandQ() {
  return (
    <>
      <section className="fandq">
<hr/>
        <div className="container" id="ftr2">
          <div className="row">
            <div className="col-md-12">

              <footer className="text-center text-lg-start  text-muted">
                <div className="container text-center text-md-start  mt-1">

                  <div className="row">

                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                      <form class="form">
                        <span class="title">Subscribe to our newsletter.</span>

                        <div className="">
                          <input placeholder="Enter your email" type="email" name="email" id="email-address" className="form-control" />
                          <button type="submit" className="submit mt-2 form-control">
                            Subscribe</button>
                        </div>
                      </form>

                      <section className="d-flex justify-content-center justify-content-lg-between mt-3 border-bottom">

                        <div className="ms-5">
                          <Link to="" className="me-4 text-reset">
                            <i className="bi bi-facebook"></i>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                            <i className="bi bi-twitter"></i>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                            <i className="bi bi-google"></i>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                            <i className="bi bi-instagram"></i>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                            <i className="bi bi-linkedin"></i>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                            <i className="bi bi-github"></i>
                          </Link>
                        </div>

                      </section>

                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                      <h6 className="text-uppercase fw-bold mb-4">
                        Products
                      </h6>
                      <p>
                        <Link to="/" className="text-reset">New Arrivals</Link>
                      </p>
                      <p>
                        <Link to="/" className="text-reset">Best Seller</Link>
                      </p>
                      <p>
                        <Link to="/" className="text-reset">Categories</Link>
                      </p>
                      <p>
                        <Link to="/about" className="text-reset">About us</Link>
                      </p>
                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                      <h6 className="text-uppercase fw-bold mb-4">
                        Useful </h6>
                      <p>
                        <Link to="" className="text-reset">Pricing</Link>
                      </p>
                      <p>
                        <Link to="" className="text-reset">Settings</Link>
                      </p>
                      <p>
                        <Link to="" className="text-reset">Orders</Link>
                      </p>
                      <p>
                        <Link to="" className="text-reset">Help</Link>
                      </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p><i className="bi bi-house me-3"></i> New York, NY 10012, US</p>
                      <p>
                        <i className="bi bi-envelope me-3"></i>
                        info@example.com
                      </p>
                      <p><i className="bi bi-phone me-3"></i> + 01 234 567 88</p>
                      <p><i className="bi bi-printer me-3"></i> + 01 234 567 89</p>


                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"><h6> Payment type we accept: </h6></div>
                    <div className="col-md-3">
                      <section className="d-flex justify-content-center justify-content-lg-between ">

                        <div className="payway ">
                          <Link to="" className="me-4 text-reset">
                           <img src="webimg/AmEx.png " alt=""/>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                          <img src="webimg/mastcard.png " alt=""/>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                          <img src="webimg/visa.png " alt=""/>
                          </Link>
                          <Link to="" className="me-4 text-reset">
                          <img src="webimg/wpayt.png " alt=""/>
                          </Link>
                          
                        </div>

                      </section>
                    </div>
                  </div>
                </div>
              </footer>

            </div>
          </div>
        </div>

      </section >


    </>
  );
}

export default FandQ;