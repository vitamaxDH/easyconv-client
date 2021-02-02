import React from "react";
import {Button, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

const SignUp = () => {
        return (
            <>
                <h3>Register</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Button className="btn btn-dark btn-lg btn-block">Register</Button>
                <p className="forgot-password text-right">
                    Already registered <Link to={'/sign-in'}>log in?</Link>
                </p>
            </>
        );

}
export default SignUp;
