import "../styles/LoginRegister.css"
import bgLogin from "../assets/bg_login.png"
import TextField from '@mui/material/TextField'
import LoadingSpinner from "../components/LoadingSpinner";
import { Container, Row, Col, Alert } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionUserLogin, actionUserLoginWithGoogle } from "../actions/UserAction";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { userLoginResult, userLoginError, userLoginLoading } = useSelector((state) => state.UserReducer)

    async function handleSubmit(e) {
        setAlert(true)
        setIsLoading(true)
        e.preventDefault()
        console.log("here1")
        dispatch(actionUserLogin({ email, password }))
    }

    useEffect(() => {
        console.log("here2", userLoginError)
        if (userLoginError) {
            setIsLoading(false)
            setEmail("")
            setPassword("")
            const timer = setTimeout(() => {
                setAlert(false)
            }, 2500)

            return () => clearTimeout(timer)
        }

        const isTokenExist = localStorage.getItem("token")

        if (isTokenExist) navigate("/")

    }, [userLoginResult, userLoginError, userLoginLoading, isLoading, navigate])

    const responseSuccessGoogle = (response) => {
        setIsLoading(true)

        if (response.credential) {
            dispatch(actionUserLoginWithGoogle({ token: response.credential }))
        }
    }

    return (
        <div className="login-page">
            <Row className="h-100">
                <Col md="7">
                    <div className="login-icon p-4">
                        <i className="bi bi-airplane-fill"></i>
                        <p className="d-flex my-auto">Garuda<span>Nih</span></p>
                    </div>
                    <Container className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
                        <h3>Login</h3>
                        {userLoginError ? (
                            <Alert show={alert} variant="danger" className="fs-6">{userLoginError}</Alert>
                        ) : ""}
                        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center w-100 mb-4">
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type="email"
                                placeholder="masukan email"
                                margin="normal"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                style={{ width: "70%" }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                placeholder="masukan password"
                                margin="normal"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                style={{ width: "70%" }}
                            />
                            <button type="submit" value={isLoading ? "Loading" : "Login"} className="btn btn-primary">{isLoading ? <LoadingSpinner /> : "Login"}</button>
                        </form>
                        <p>Another options for login</p>
                        <GoogleOAuthProvider clientId="785137861913-jraaaegd6mhuunhiuntrpighacick6ea.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    responseSuccessGoogle(credentialResponse)
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                                shape="circle"
                                type="icon"
                            />
                        </GoogleOAuthProvider>
                        <p className="mt-3">Dont have an account?<Link to={"/register"} className="ms-2">Register here</Link></p>
                    </Container>
                </Col>
                <Col md="5" style={{ background: "#2F82FF" }} className="d-flex flex-column justify-content-between">
                    <img src={bgLogin} alt="bg-login" className="w-50 m-5" />
                    <div className="login-title">
                        <h1 className="fw-bold px-5 text-white">Hi, Welcome to GarudaNih</h1>
                        <p className="px-5 py-4">Login to get interesting offers and create wonderful experiences</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}