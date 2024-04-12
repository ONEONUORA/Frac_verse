import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png"
import herologin from "../assets/HerosSectionImage.png"
import { forgetPassword } from "../api/axios";


const ForgetPassword=()=>{
    const [submitted, setSubmitted] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const formRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();


        setSubmitted(true);

        const email = e.target.email.value;
     

        if (!email) {
            setIsEmpty(true);
            return;
        }

        const response = await forgetPassword({ email});

        if (response.error) {
            console.error(response.error);
            return;
        }

        // setError('');
        // setIsEmpty(false);
        // setSubmitted(false);
        formRef.current.reset();
    };


    return(
        <>

     <div className='forgetpasswordpage' style={{fontFamily:'fredoka'}}>
                      <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '100vh', position: 'fixed'}} />

                        <div style={{display:'flex', justifyContent:'center', marginRight:'6rem', paddingTop:"3rem"}}>
                           <Link to='/'><img src={logo} alt='Brand Logo' style={{position:'absolute', width:'100px'}}/></Link>
                        </div>

                        <div style={{display:'flex', justifyContent:'center'}}> 
                                
                                <form ref={formRef} onSubmit={handleSubmit} className='forget' style={{border:'1px solid white', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem',  position:'absolute', backgroundColor:'white', marginTop:'7rem', maxWidth:'65%' ,padding:'1rem'}}>
                                     {isEmpty && <div className='alert alert-danger'>Please fill in all required fields</div>}
                                        <div style={{textAlign:'center'}}>
                                            <h5 style={{fontWeight:'bold', fontSize:'23px'}}>Forgot Password?</h5>
                                            <p>Lets Have That Fixed</p>
                                        </div>

                                        <h6 style={{marginBottom:'10px'}}>E-Mail</h6>
                                        <input type='email' id='email' className='form-control' style={{marginBottom:'20px', backgroundColor:'#D9D9D9'}}/>
                                        <p>We will send a mail containing a reset link, <br/>Kindly follow the reset link to reset your password.</p>

                                    
                                        <div style={{display:'flex', justifyContent:'center'}}>
                                       <Link to='/resetpassword' ><button className='contactbutton1' type='submit' style={{padding: '7px 18px', borderRadius:'8px', marginTop:'2rem', fontSize:'15px', fontWeight:'bold'}}>Proceed <i className="bi bi-arrow-right"></i></button></Link>
                                        </div>

                                        <div style={{display:'flex', gap:'30px', position:'absolute', marginTop:'3rem'}}>
                                              <p style={{color:'white'}}>Dont have an account?</p>
                                             <Link to="/signup" className="line"><p  style={{color:'green'}}>Register Now</p></Link> 
                                        </div>

                                </form>

                                {submitted && <p>Form submitted!</p>}

                         </div>
               </div>               
                                      



        </>
    )
}

export  default ForgetPassword;