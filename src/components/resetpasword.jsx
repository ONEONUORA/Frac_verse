
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png"
import herologin from "../assets/Heros SectionImage.png"



const ResetPassword=()=>{
    return(
        <>

            <div className='resetpasswordpage'>
                      <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '100vh', position: 'fixed'}} />

                        <div style={{display:'flex', justifyContent:'center', marginRight:'6rem', paddingTop:"3rem"}}>
                           <Link to='/'><img src={logo} alt='Brand Logo' style={{position:'absolute', width:'100px'}}/></Link>
                        </div>

                        <div style={{display:'flex', justifyContent:'center'}}>
                                
                                <div className='reset' style={{border:'1px solid rgba(255, 255, 255, 0.2)', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem',  position:'absolute', backgroundColor:'rgba(255, 255, 255, 0.8)', marginTop:'7rem', maxWidth:'65%' ,padding:'1rem'}}>

                                        <div style={{textAlign:'center'}}>
                                            <h5 style={{fontWeight:'bold', fontSize:'23px'}}>Reset Password?</h5>
                                            <p>Secure your account with a new password</p>
                                        </div>

                                        <h6 style={{marginBottom:'10px'}}>New Password</h6>
                                        <input type='text' id='text' className='form-control' style={{marginBottom:'30px', backgroundColor:'rgb(174, 171, 171)'}}/>

                                        <h6 style={{marginBottom:'10px'}}>Confirm Password</h6>
                                        <input type='text' id='text' className='form-control' style={{marginBottom:'20px', backgroundColor:'rgb(174, 171, 171)'}}/>
                                    
                                        <div style={{display:'flex', justifyContent:'center'}}>
                                           <button className='contactbutton' type='submit' style={{padding: '7px 18px', borderRadius:'8px', marginTop:'2rem', fontSize:'15px', fontWeight:'bold'}}>Proceed <i className="bi bi-arrow-right"></i></button>
                                        </div>

                                        <div style={{display:'flex', gap:'30px', position:'absolute', marginTop:'3rem'}}>
                                              <p style={{color:'white'}}>Don't have an account?</p>
                                              <Link to='/signup' className="line"><p  style={{color:'blue'}}>Register Now</p></Link>
                                        </div>

                                </div>

                               

                         </div>
               </div>               

        </>
    )
}
export default ResetPassword;