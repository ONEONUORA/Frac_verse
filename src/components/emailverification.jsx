
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png"
import herologin from "../assets/Heros SectionImage.png"





const EmailVerification=()=>{


    return(
        <>
          
          <div className='emailverificationpage'>
                      <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '100vh', position: 'fixed'}} />

                        <div style={{display:'flex', justifyContent:'center', marginRight:'6rem', paddingTop:"3rem"}}>
                           <Link to='/'><img src={logo} alt='Brand Logo' style={{position:'absolute', width:'100px'}}/></Link>
                        </div>

                        <div style={{display:'flex', justifyContent:'center'}}>
                                
                                <form className='emailverify' style={{border:'1px solid rgba(255, 255, 255, 0.2)', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem',  position:'absolute', backgroundColor:'rgba(255, 255, 255, 0.8)', marginTop:'7rem', minWidth:'25%' ,padding:'1rem'}}>

                                        <div style={{textAlign:'center'}}>
                                            <h5 style={{fontWeight:'bold', fontSize:'23px'}}>Verify Your Identity</h5>
                                            <p>We will send your a mail containing a verification link. Kindly follow the link<br/>
                                                to verify your Email and complete your registration.
                                            </p>
                                        </div>

                                        <div style={{display:'flex', gap:'20px', justifyContent:'center'}}>
                                            <h6>Didn't get the link?</h6>
                                            <h6 style={{color:'rgb(8,53,8)'}}>Resend</h6>
                                        </div>

                                        <div style={{display:'flex', justifyContent:'center'}}>
                                             <button className='contactbutton' type='submit' style={{padding: '7px 18px', borderRadius:'8px', marginTop:'2rem', fontSize:'15px', fontWeight:'bold'}}>Proceed <i className="bi bi-arrow-right"></i></button>
                                        </div>

                                        <div style={{display:'flex',justifyContent:'center',textAlign:'center', gap:'30px', position:'absolute', marginTop:'3rem'}}>
                                              <p style={{color:'white'}}>Don't have an account?</p>
                                             <Link to="/signup" className="line"><p  style={{color:'blue'}}>Register Now</p></Link> 
                                        </div>

                                </form>

                               

                         </div>
               </div>               
                                      
        </>
    )
}

export default EmailVerification;