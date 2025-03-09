import { useState } from 'react';
import '../register/register.css'
import { Button, TextField } from '@mui/material';

const RegisterForm = ({ goToLogin }) => {
    const [registerParams, setRegisterParams] = useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const handleForm = (event) =>{
        const {id, value} = event.target;
        if(id === 'password' && value === ''){
            registerParams.confirmPassword = ''
        }
        setRegisterParams((prevData) => ({
            ...prevData,
            [id]:value
        }))
    }
    const enableRegisterButton = () =>{
        if(Object.values(registerParams).some(v => v === '')){
            return true;
        }
        return false;
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <TextField id="fullName" label="Full Name" variant="outlined" value={registerParams.fullName} onChange={handleForm} />
                </div>
                <div className='col-md-6'>
                    <TextField id="email" label="Email Address" variant="outlined" value={registerParams.email} onChange={handleForm}  />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <TextField id="password" label="Password" variant="outlined" type='password' value={registerParams.password} onChange={handleForm}  />
                </div>
                <div className='col-md-6'>
                    <TextField id="confirmPassword" label="Re enter Password" 
                    value={registerParams.confirmPassword} variant="outlined" type='password' onChange={handleForm}
                    disabled = {!registerParams.password}/>
                </div>
            </div>
            <div className='register-form'>
                <Button variant='contained' style={{borderRadius:'60px'}} color='success' disabled={enableRegisterButton()}>Register</Button>
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