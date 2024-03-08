import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Contextapi } from "./Contextapi";


function Account() {

    const { loginname, setLoginname } = useContext(Contextapi)
    const Navigate = useNavigate();
    const specificLoginId = 'gauravyadav8190@gmail.com';


    function handlelogout(e) {
        localStorage.removeItem('loginname')
        setLoginname(localStorage.getItem(loginname))
    }


    const handleDashboardClick = () => {
        // Check if the specific login ID is present in loginname
        if (loginname === specificLoginId) {

            Navigate('/dashboard');
        } else {
            // Handle other cases or show a message
            console.log('Access denied.');
        }
    }
    return (
        <section className="account">

            <div className="container">

                <div className="row mt-3">
                    <div className="col-md-9"></div>
                    <div className="overlay col-md-3">

                        {!loginname ? (
                            // If loginname exists, display login name and logout button
                            <>
                                {loginname}
                                <button onClick={(e) => handlelogout(e)} className="btn2 form-control mt-2">
                                    <span>LOGOUT</span>
                                </button>
                                {loginname === specificLoginId && (
                                    <button onClick={handleDashboardClick} className="btn2 form-control mt-2">
                                        <span>Go to Dashboard</span>
                                    </button>
                                )}
                            </>
                        ) : (
                            // If loginname doesn't exist, display sign-up button
                            <Link to="/login">
                                <button className="btn2 form-control mt-2">
                                    <span>SIGN UP</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Account;