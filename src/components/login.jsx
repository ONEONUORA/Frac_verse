                
import herologin from '../assets/HerosSectionImage.png';
import logo from '../assets/Logo2.png';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { login } from '../api/axios.js';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        setSubmitted(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            setIsEmpty(true);
            return;
        }

        const response = await login({ email, password });

        if (response.error) {
            console.error(response.error);
            setError('Invalid email or password. Please try again.');
            setIsEmpty(false);
            setSubmitted(false);
            return;
        }

        setError('');
        setIsEmpty(false);
        setSubmitted(false);
        formRef.current.reset();
    };

    return (
        <>
            <div className='loginpage' style={{fontFamily:'fredoka'}}>
                <img src={herologin} alt='Background Image' style={{ width: '100%', minHeight: '100vh', position: 'fixed' }} />

                <div style={{ display: 'flex', justifyContent: 'center', marginRight: '6rem', paddingTop: '3rem' }}>
                    <Link to='/'>
                        <img src={logo} alt='Brand Logo' style={{ position: 'absolute', width: '100px' }} />
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <form ref={formRef} onSubmit={handleSubmit} className='login' style={{ border: '1px solid white', borderTopLeftRadius: '3rem', borderBottomRightRadius: '3rem', position: 'absolute', backgroundColor: 'white', marginTop: '7rem', minWidth: '30%', padding: '2rem' }}>
                        {isEmpty && <div className='alert alert-danger'>Please fill in all required fields</div>}
                        {error && <div className='alert alert-danger'>{error}</div>}
                        <div style={{ textAlign: 'center' }}>
                            <h5 style={{ fontWeight: 'bold', fontSize: '23px' }}>Welcome Back</h5>
                            <p>Kick Off Where You Left Off</p>
                        </div>

                        <h6 style={{ marginBottom: '10px' }}>E-Mail</h6>
                        <input type='email' id='email' name='email' className='form-control' style={{ marginBottom: '30px', backgroundColor: '#D9D9D9' }} />

                        <h6 style={{ marginBottom: '10px' }}>Password</h6>
                        
                        <input type={showPassword ? 'text' : 'password'} id='password' name='password' className='form-control'style={{ marginBottom: '10px', backgroundColor: '#D9D9D9' }} />
                        <i
                              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                              style={{ position: 'absolute', right: '40px', top: '65%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                              onClick={togglePasswordVisibility}
                        ></i> 

                        <div className='foget' style={{ display: 'flex' }}>
                            <button className='contactbutton4' onClick={togglePasswordVisibility} type='submit' style={{ width:'126px',height:'49px', borderRadius: '8px', marginTop: '2rem', fontSize: '24px', fontWeight: 'bold' }}>Login <i className='bi bi-arrow-right'></i> </button>
                            <Link to='/forgetpassword' className='line'><p style={{ color: 'rgb(110, 127, 61)' }}>Forgot Password?</p></Link>
                        </div>

                        <div style={{ display: 'flex', gap: '30px', position: 'absolute', marginTop: '3rem' }}>
                            <p style={{ color: 'white' }}>Dont have an account?</p>
                            <Link to='/signup' className='line'><p style={{ color: 'green' }}>Register Now</p></Link>
                        </div>
                    </form>
                    {submitted && <p>Form submitted!</p>}
                </div>
            </div>
        </>
    );
};

export default Login;















