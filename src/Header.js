



function Header() {

    return (
        <>
            <header>
                <video autoPlay muted loop playsInline>
                    <source src="v.mp4" type="video/mp4" />   
                </video>
                <div className="overlay">
                    <h2>BRAND ME NOW</h2>
                    <h3>Reasons for Choosing US</h3>
                    <p>Lorem.odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                    <br />
                    <button><span>SHOP NOW</span></button>

                </div>
            </header>

        </>
    );
}



export default Header;