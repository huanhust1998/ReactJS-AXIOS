import React from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";


function TodayStatus(props) {
    const {state} = props;

    return (
        <Container fluid>
            <h3 className="mb-3 font-weight-bold">Today's status</h3>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card mb-4 text-center text-white">
                        <div className="card-footer bg-info">
                            <h5>Today's number of visitors</h5>
                        </div>
                        <div className="card-body">12</div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card mb-4 text-center text-white">
                        <div className="card-footer bg-info">
                            <h5>Number of logins</h5>
                        </div>
                        <div className="card-body">12</div>
                    </div>
                </div>
                <Link to={{pathname: "/"}} className="col-xl-3 col-md-6 text-decoration-none">
                    <div className="card mb-4 text-center text-white">
                        <div className="card-footer bg-info">
                            <h5>Number of new sign-ups</h5>
                        </div>
                        <div className="card-body">12</div>
                    </div>
                </Link>
                <Link to={{pathname: "/"}} className="col-xl-3 col-md-6 text-decoration-none">
                    <div className="card mb-4 text-center text-white">
                        <div className="card-footer bg-info">
                            <h5>Written posts</h5>
                        </div>
                        <div className="card-body">12</div>
                    </div>
                </Link>
                <Link to={{pathname: "/"}} className="col-xl-3 col-md-6 text-decoration-none">
                    <div className="card mb-4 text-center text-white">
                        <div className="card-footer bg-info">
                            <h5>Consultation application status</h5>
                        </div>
                        <div className="card-body">12</div>
                    </div>
                </Link>
                <Link to={{pathname: "/"}} className="col-xl-3 col-md-6 text-decoration-none">
                    <div className="card mb-4 text-center text-white">
                        <div className="card-footer bg-info">
                            <h5>Number of 1:1 lives</h5>
                        </div>
                        <div className="card-body">12</div>
                    </div>
                </Link>
            </div>
        </Container>
    )
}

export default TodayStatus;