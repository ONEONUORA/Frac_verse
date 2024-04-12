import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png"
import herologin from "../assets/HerosSectionImage.png"
import { resetpassword } from "../api/axios";


const ResetPassword=()=>{

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

        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;

        if ( !newPassword || !confirmPassword) {
            setIsEmpty(true);
            return;
        }

        const response = await resetpassword({ newPassword });

        if (response.error) {
            console.error(response.error);
            setError('Password Mis-Match');
            setIsEmpty(false);
            setSubmitted(false);
            return;
        }

        setError('');
        setIsEmpty(false);
        setSubmitted(false);
        formRef.current.reset();
    };




    return(
        <>

            <div className='resetpasswordpage'  style={{fontFamily:'fredoka'}}>
                      <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '100vh', position: 'fixed'}} />

                        <div style={{display:'flex', justifyContent:'center', marginRight:'6rem', paddingTop:"3rem"}}>
                           <Link to='/'><img src={logo} alt='Brand Logo' style={{position:'absolute', width:'100px'}}/></Link>
                        </div>

                        <div style={{display:'flex', justifyContent:'center'}}>
                                
                                <form ref={formRef} onSubmit={handleSubmit} className='reset' style={{border:'1px solid white', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem',  position:'absolute', backgroundColor:'white', marginTop:'7rem', maxWidth:'65%' ,padding:'1rem'}}>
                                      {isEmpty && <div className='alert alert-danger'>Please fill in all required fields</div>}
                                      {error && <div className='alert alert-danger'>{error}</div>}

                                        <div style={{textAlign:'center'}}>
                                            <h5 style={{fontWeight:'bold', fontSize:'23px'}}>Reset Password?</h5>
                                            <p>Secure your account with a new password</p>
                                        </div>

                                        <h6 style={{marginBottom:'10px'}}>New Password</h6>
                                        <input type={showPassword ? 'text' : 'password'} name="newPassword" id='text' className='form-control' style={{marginBottom:'30px', backgroundColor:'#D9D9D9'}}/>

                                        <i
                                             className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                                             style={{ position: 'absolute', top: '39%',left:'84%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                             onClick={togglePasswordVisibility}
                                         ></i> 

                                        <h6 style={{marginBottom:'10px'}}>Confirm Password</h6>
                                        <input type={showPassword ? 'text' : 'password'} name="confirmPassword" id='text' className='form-control' style={{marginBottom:'20px', backgroundColor:'#D9D9D9'}}/>
                                    
                                        <i
                                             className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                                             style={{ position: 'absolute', right: '40px', top: '65%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                             onClick={togglePasswordVisibility}
                                         ></i> 

                                        <div style={{display:'flex', justifyContent:'center'}}>
                                           <button className='contactbutton2' type='submit' style={{padding: '7px 18px', borderRadius:'8px', marginTop:'2rem', fontSize:'15px', fontWeight:'bold'}}>Proceed <i className="bi bi-arrow-right"></i></button>
                                        </div>

                                        <div style={{display:'flex', gap:'30px', position:'absolute', marginTop:'3rem'}}>
                                              <p style={{color:'white'}}>Dont have an account?</p>
                                              <Link to='/signup' className="line"><p  style={{color:'green'}}>Register Now</p></Link>
                                        </div>

                                </form>

                               
                                {submitted && <p>Form submitted!</p>}
                         </div>
               </div>               

        </>
    )
}
export default ResetPassword;