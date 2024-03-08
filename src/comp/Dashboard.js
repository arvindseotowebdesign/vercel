import Left from "./Left";

function Dashboard() {
    return ( 
        <section id="mid">
            <div className="container mt-3"  >
                 <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2>Mid</h2>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Dashboard;