import "../styles/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert } from 'react-bootstrap'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import TextField from '@mui/material/TextField';
import LoadingSpinner from "../components/LoadingSpinner";
import logo from '../assets/logo.svg'
import { useDispatch, useSelector } from "react-redux";
import { actionUserLogin, actionUserLoginWithGoogle } from "../actions/UserAction";

function Login() {
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

        dispatch(actionUserLogin({ email, password }))
    }

    useEffect(() => {
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
        
        if (isTokenExist) {
            navigate("/")
        }
        
    }, [userLoginResult, userLoginError, userLoginLoading, isLoading, navigate])

    const responseSuccessGoogle = (response) => {
        setIsLoading(true)
        
        if (response.credential) {
            dispatch(actionUserLoginWithGoogle({token: response.credential}))
        }
    }

    return (
        <div className="App-header">
            <img width="100" src={logo} alt="react img" />
            {userLoginError ? (
                <Alert show={alert} variant="danger" className="fs-6">{userLoginError}</Alert>
            ) : ""}
            <Container className="mb-5">
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        placeholder="masukan email"
                        margin="normal"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                    />
                    <button type="submit" value={isLoading ? "Loading" : "Login"} className="btn btn-success mt-3 px-4">{isLoading ? <LoadingSpinner /> : "Login"}</button>
                </form>
            </Container>
            <GoogleOAuthProvider clientId="785137861913-jraaaegd6mhuunhiuntrpighacick6ea.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        responseSuccessGoogle(credentialResponse)
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>

        </div >
    )
}

export default Login