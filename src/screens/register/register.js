import { useState } from 'react';
import '../register/register.css'
import { Alert, Button, IconButton, Snackbar, TextField } from '@mui/material';

const RegisterForm = ({goToLogin}) => {
    return (
        <>
            <div className='register-form'>
                <TextField id="fullName" label="Full Name" variant="outlined" />
            </div>
            <div className='register-form'>
                <TextField id="email" label="Email Address" variant="outlined" />
            </div>
            <div className='register-form'>
                <TextField id="password" label="Password" variant="outlined" type='password' />
            </div>
            <div className='register-form'>
                <TextField id="password" label="Re-enter password" variant="outlined" type='password' />
            </div>
            <div className='register-form'>
                <Button variant='text' color='secondary'>Register</Button>
            </div>
            <div className='other'>
                <span><b>OR</b></span>
            </div>
            <div className='register-methods'>
                <Button variant='contained' color='info' onClick={goToLogin}>Back to Login</Button>
            </div>
        </>
    )
}

export default RegisterForm;