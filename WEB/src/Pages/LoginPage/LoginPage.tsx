import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../Api/axios';
import { callApi } from '../../Config/AxiosCommon';
import { BASE_URL } from '../../Config/Environment';
import useAuth from '../../Hooks/useAuth';
import { ApplicationState } from '../../Redux';
import { onLogin } from '../../Redux/Actions/LoginAction';
import "./Login.css";
import imageLogin from '../../Assets/login-image-2.png';
import useLocalStorage from '../../Hooks/useLocalStorage';
const LOGIN_URL = 'auth/signin';
const LoginPage = () => {


    const navigate = useNavigate();
    const location: any = useLocation();

    const storage = useLocalStorage();

    const [username, setUsername] = useState<String>("");

    const [password, setPassword] = useState<String>("");

    const { userCurrent, error } = useSelector(
        (state: ApplicationState) => state.userReducer
    );

    useEffect(() => {
        console.log(process.env)
    }, []);

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // handle login button
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await callApi(storage.token, "POST", LOGIN_URL, null, {
                username, password
            })
            if (response.success) {
                localStorage.setItem("user", JSON.stringify(response?.data))
                navigate("/");
                setUsername('');
                setPassword('');
            }
        } catch (error) {

        }
    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={imageLogin}
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h1 style={{ color: "#00264B", paddingBottom: '50px' }}>Travel Together Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </button>

                                <button type="button" className="btn btn-danger btn-floating mx-1">
                                    <i className="fa fa-google" aria-hidden="true"></i>
                                </button>

                                <button type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="text" id="form3Example3" className="form-control form-control-lg" onChange={handleUsername}
                                    placeholder="Enter username" />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg" onChange={handlePassword}
                                    placeholder="Enter password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{
                                        paddingLeft: '2.5rem',
                                        paddingRight: '2.5rem'
                                    }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage