import { Alert, Button, IconButton, Snackbar, TextField } from '@mui/material';
import '../login/login.css'
import { use, useState } from 'react';
import RegisterForm from '../register/register';

const Login = () => {
    const [open, setOpen] = useState(false);
    const [registerForm, setRegisterForm] = useState(false);
    const [headerText, setHeaderText] = useState(`Talent Exchange Portal- Login`)
    const [loginInput, setLoginInput] = useState({
        userName: '', password: ''
    })
    const handleInput = (event) => {
        const { id, value } = event.target;
        setLoginInput((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }))
    }
    const getValues = () => {
        setOpen(true);
    }
    const registerUser = () => {
        setRegisterForm(true);
        setHeaderText("Talent Exchange Portal- Register")
    }
    const goToLogin = () => {
        setRegisterForm(false)
        setHeaderText("Talent Exchange Portal- Login")
    }
    const handleToast = () => {
        setOpen(false);
    }
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleToast} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleToast} severity='success'>Updated the login details</Alert>
            </Snackbar>
            <div className='card-container'>
                <div className='card'>
                    <img src='/logo192.png' alt='Logo' className='logo'></img>
                    <h3>{headerText}</h3>
                    {registerForm ? <RegisterForm goToLogin={goToLogin} /> :
                        <>
                            <div className='login-form'>
                                <TextField id="userName" label="User Name" variant="outlined" value={loginInput.userName} onChange={handleInput} />
                            </div>
                            <div className='login-form'>
                                <TextField id="password" label="Password" variant="outlined" type='password' value={loginInput.password}
                                    onChange={handleInput} />
                                <div className='forgot-password'>
                                    <span>Forgot Password</span>
                                </div>
                            </div>
                            <div className='login-form'>
                                <Button className='login-text' variant='text' color='secondary' onClick={getValues}>Login</Button> <b>|</b>
                                <Button variant='text' color='secondary' onClick={registerUser}>Register</Button>
                            </div>
                            <div className='other'>
                                <span><b>OR</b></span>
                            </div>
                            <div className='login-methods'>
                                <Button variant='contained' color='info'>Login via Google</Button>
                                <Button variant='contained' color='info'>Login via OTP</Button>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default Login;