
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png"
import herologin from "../assets/Heros SectionImage.png"


const ForgetPassword=()=>{
    return(
        <>

     <div className='forgetpasswordpage'>
                      <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '100vh', position: 'fixed'}} />

                        <div style={{display:'flex', justifyContent:'center', marginRight:'6rem', paddingTop:"3rem"}}>
                           <Link to='/'><img src={logo} alt='Brand Logo' style={{position:'absolute', width:'100px'}}/></Link>
                        </div>

                        <div style={{display:'flex', justifyContent:'center'}}> 
                                
                                <form  className='forget' style={{border:'1px solid rgba(255, 255, 255, 0.2)', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem',  position:'absolute', backgroundColor:'rgba(255, 255, 255, 0.8)', marginTop:'7rem', maxWidth:'65%' ,padding:'1rem'}}>

                                        <div style={{textAlign:'center'}}>
                                            <h5 style={{fontWeight:'bold', fontSize:'23px'}}>Forgot Password?</h5>
                                            <p>Let's Have That Fixed</p>
                                        </div>

                                        <h6 style={{marginBottom:'10px'}}>E-Mail</h6>
                                        <input type='email' id='email' className='form-control' style={{marginBottom:'20px', backgroundColor:'rgb(174, 171, 171)'}}/>
                                        <p>We will send a mail containing a reset link, <br/>Kindly follow the reset link to reset your password.</p>

                                    
                                        <div style={{display:'flex', justifyContent:'center'}}>
                                       <Link to='/resetpassword' ><button className='contactbutton' type='submit' style={{padding: '7px 18px', borderRadius:'8px', marginTop:'2rem', fontSize:'15px', fontWeight:'bold'}}>Proceed <i className="bi bi-arrow-right"></i></button></Link>
                                        </div>

                                        <div style={{display:'flex', gap:'30px', position:'absolute', marginTop:'3rem'}}>
                                              <p style={{color:'white'}}>Don't have an account?</p>
                                             <Link to="/signup" className="line"><p  style={{color:'blue'}}>Register Now</p></Link> 
                                        </div>

                                </form>

                               

                         </div>
               </div>               
                                      



        </>
    )
}

export  default ForgetPassword;