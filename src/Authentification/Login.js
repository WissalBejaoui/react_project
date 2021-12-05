import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../redux/authAction'
import './Login.css'

function Login () {
    /* const dispatch = useDispatch ()
    const accessToken = useSelector(state=> state.auth.accessToken)
    const handleLogin = () => {dispatch(login())}
    useEffect( () => {
        if (accessToken){
        history.push('/')
        }
    }) */
    const history = useHistory()
    const handleLogin = () => history.push('/');

    return (
        <div className="login">
            <div className="loginContainer">
                <img src="/YtLogin.png" alt="Youtube Authentification"/>
                <button onClick ={handleLogin}> Login with google</button>
                <p>This project was made using React js</p>
            </div>
            
        </div>
    )
}

export default Login
