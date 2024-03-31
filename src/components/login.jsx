
import herologin from '../assets/Heros SectionImage.png'
import logo from  '../assets/Logo2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'





const Login=()=>{

    const [submitted, setSubmitted] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    
      const email = e.target.email.value;
      const password = e.target.password.value;
    
      if (!email || !password) {
        setIsEmpty(true);
        return;
      }
    
      console.log('Form submitted:', { email, password });
    
      // Reset form and state
      setIsEmpty(false);
      setSubmitted(false);
      e.target.reset();
    };
    
    return(
        <>
                <div className='loginpage'>
                      <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '100vh', position: 'fixed'}} />

                        <div style={{display:'flex', justifyContent:'center', marginRight:'6rem', paddingTop:"3rem"}}>
                           <Link to='/'><img src={logo} alt='Brand Logo' style={{position:'absolute', width:'100px'}}/></Link>
                        </div>

                        <div style={{display:'flex', justifyContent:'center'}}>
                                
                                <form  onSubmit={handleSubmit} className='login' style={{border:'1px solid rgba(255, 255, 255, 0.2)', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem',  position:'absolute', backgroundColor:'rgba(255, 255, 255, 0.8)', marginTop:'7rem', minWidth:'30%', padding:'2rem'}}>

                                {isEmpty && <div className="alert alert-danger">Please fill in all required fields</div>}    
                            
                                        <div style={{textAlign:'center'}}>
                                            <h5 style={{fontWeight:'bold', fontSize:'23px'}}>Welcome Back</h5>
                                            <p>Kick Off Where You Left Off</p>
                                        </div>

                                        <h6 style={{marginBottom:'10px'}}>E-Mail</h6>
                                        <input type='email' id='email' className='form-control' style={{marginBottom:'30px', backgroundColor:'rgb(174, 171, 171)'}}/>

                                        <h6 style={{marginBottom:'10px'}}>Password</h6>
                                        <input type='password' id='password' className='form-control' style={{marginBottom:'10px', backgroundColor:'rgb(174, 171, 171)'}}/>

                                        <div className='foget' style={{display:'flex'}}>
                                             <button className='contactbutton' type='submit' style={{padding: '7px 18px', borderRadius:'8px', marginTop:'2rem', fontSize:'15px', fontWeight:'bold'}}>Login <i className="bi bi-arrow-right"></i></button>
                                             <Link to='/forgetpassword' className='line'><p style={{color:'rgb(110, 127, 61)'}}>Forgot Password?</p></Link>
                                        </div>

                                        <div style={{display:'flex', gap:'30px', position:'absolute', marginTop:'3rem'}}>
                                              <p style={{color:'white'}}>Don't have an account?</p>
                                         <Link to='/signup' className='line'><p style={{color:'blue'}}>Register Now</p></Link> 
                                        </div>

                                </form>

                               

                         </div>
               </div>               
                                      
















        </>
    )
}


export default Login;