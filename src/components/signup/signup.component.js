import React, {useEffect, useState} from "react";
import {Button, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import user from "../../model/user";
import {Modal} from '../../script/core/constant'
import OkModal from "../modal/ok.modal.component";
import axios from "axios";

const validation_fail = {
    color : 'red'
}

const SignUp = () => {

    const [ isMatch, setMatch ] = useState(true);
    const [ rePassword, setRePassword ] = useState('');
    const [ modalShow, setModalShow ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState('');
    const [ modalBody, setModalBody ] = useState('');

    useEffect(() => {

    }, []);

    const handleChange = ({target}) => {
        const id = target.id;
        user[id] = target.value;
    }

    const checkPasswords = ({target}) => {
        const rePassword = target.value;
        setRePassword(rePassword);
        if (rePassword === user.password){
            setMatch(true);
        } else {
            setMatch(false);
        }
    }

    const showModalContent = (modalType) => {
        setModalShow(true)
        setModalTitle(modalType.title)
        setModalBody(modalType.body)
    }

    const register = () => {
        validate()
            .then(data => {
            if (data){
                axios.post('/api/register', user)
                    .then(data => {
                        console.log (data);
                    })
            }
        });
    }

    const validate = () => {
        return new Promise(((resolve, reject) => {
            if (user.password !== rePassword){
                showModalContent(Modal.REGISTRATION.FAIL.password_not_match);
                resolve(false);
            }
            Object.entries(user).reverse().forEach(entry => {
                const key = entry[0];
                const value = entry[1];
                if (!value){
                    showModalContent(Modal.REGISTRATION.FAIL[key]);
                    resolve(false);
                }
            })
            resolve(true);
        }))
    }

    return (
        <>
            <h3>Register</h3>
            <div className="form-group">
                <label>User Name</label>
                <input
                    type='text'
                    id='username'
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Name"
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type='password'
                    id='password'
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>

            <div className="form-group">
                <label>Password Confirm</label>
                <input
                    type='password'
                    id='confirmedPassword'
                    onKeyUp={checkPasswords}
                    className="form-control"
                    placeholder="Confirm password"
                />
            </div>

            <p style={validation_fail}>
                { isMatch ? '' : "Passwords don't match."}
            </p>

            <Button className="btn btn-dark btn-lg btn-block" onClick={register}>Register</Button>
            <p className="forgot-password text-right">
                Already registered <Link to={'/sign-in'}>log in?</Link>
            </p>
            <OkModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={modalTitle}
                body={modalBody}
            />
        </>

    );

}
export default SignUp;
