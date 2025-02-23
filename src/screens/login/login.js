import { Alert, Button, IconButton, Snackbar, TextField } from '@mui/material';
import '../login/login.css'
import { useState } from 'react';

const Login = () => {
    const [open, setOpen] = useState(false);
    const [loginInput, setLoginInput] = useState({
        userName:'', password:''
    })
    const handleInput = (event) => {
        const {id, value} = event.target;
        setLoginInput((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }))
    }
    const getValues = () => {
        setOpen(true);
    }
    const clearValues = () => {
        setLoginInput({userName:'', password:''})
    }
    const handleToast = () => {
        setOpen(false);
    }
    return (
        <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleToast} anchorOrigin={{vertical:'top', horizontal:'right'}}>
            <Alert onClose={handleToast} severity='success'>Updated the login details</Alert>
        </Snackbar>
            <div className='card-container'>
                <div className='card'>
                    <h3>Talent Exchange Portal- Login</h3>
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
                        <Button variant='contained' color='success' onClick={getValues}>Login</Button>
                        <Button variant='contained' color='error' onClick={clearValues}>Reset</Button>
                    </div>
                    <div className='other'>
                        <span><b>OR</b></span>
                    </div>
                    <div className='login-methods'>
                        <Button variant='contained' color='secondary'>Login via Google</Button>
                        <Button variant='contained' color='secondary'>Login via OTP</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;