
import logo from '../assets/Logo2.png';
import hero from '../assets/HerosSectionImage.png'
import smile from '../assets/smilewoman.png';
import house1 from '../assets/Rectangle 15.png'
import house2 from '../assets/Rectangle 17.png'
import house3 from '../assets/Rectangle 19.png'
import  locate from '../assets/Location icon.png'
import bed from '../assets/bed-double (1).png'
import toilet from '../assets/Group 25 (2).png'
import plant from '../assets/plant.png';
import growth from '../assets/growth.png';
import coin from '../assets/coinbag.png';
import lawal from '../assets/lawal.png';
import ngozi from '../assets/ngozi.png';
import shehu from '../assets/shehu.png';
import hands6 from '../assets/peoplehands.png';
import { Link } from 'react-router-dom';
import investimg from '../assets/makingimg.png'



const Landingpage = ()=>{
    return (
      <>
          
        <div className="row">
           <div className="col-12">

              <div className="hero-section" style={{ position: 'relative' }}>

            
                       <div className='hero'> <img src={hero} alt="Picture of A House" style={{width:'1440px', height:'850px'}}/></div> 
              
                            {/* /*-------------------------------------------Nav bar Section----------------------------------*/ }
                        <div className='herowrite' style={{ position: 'absolute', top: '0', left: '0', right: '0'}}>
                            <nav className="navbar navbar-expand-lg">
                              <div className="container-fluid" style={{backgroundColor: "rgba(176, 246, 176, 0.2)", marginLeft:'20px', marginRight:'20px', borderRadius:"30px", marginTop:'2rem', fontFamily:'fredoka'}}>
                                        <a className="navbar-brand" href="#" >
                                            <a href='#'><img src={logo} alt='Brand Logo' style={{width:'64.16px',height:'71.93px', marginLeft:'30px'}}/></a>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                          <span className="navbar-toggler-icon"></span>
                                        </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{}}>
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <div style={{display:'flex', gap:'30px', fontSize:'20px', paddingRight:"50px"}}> 
                                                   <li className="nav-item">
                                                     <a className="nav-link" href="#" style={{color:'white'}}>About Us</a>
                                                   </li>
                                                   <li className="nav-item">
                                                     <a className="nav-link" href="#" style={{color:'white'}}>Investment Options</a>
                                                   </li>
                                                   <li className="nav-item">
                                                     <a className="nav-link" href="#" style={{color:'white'}}>Blog</a>
                                                   </li>
                                                   <li className="nav-item">
                                                     <a className="nav-link" href="#" style={{color:'white'}}>Contact</a>
                                                   </li>  
                                            </div> 
                                            <div style={{display:'flex', gap:"10px", marginRight:'4rem'}}>
                                                  
                                              <Link to='/login'><button className="btn btn-outline-success" type="submit" style={{width:'144px',height:'49px', borderColor:"rgb(174, 224, 29) ", color:"black", fontSize:'22px',fontWeight:'500'}}>Login</button></Link> 
                                              <Link to='/signup'><button className="btnsignup" type="submit" style={{width:'144px',height:'49px', borderRadius:'7px',fontSize:'22px',fontWeight:'500'}}>Signup</button></Link> 
                                                 
                                            </div> 
                                        </ul>    

                                           
                                       
                                </div>
                             </div>
                         </nav>

                         {/* -------------------------------Nav section write up--------------------------------------------------------- */}

                            <div className='write' style={{textAlign: 'center', paddingTop:"8rem"}}>
                                <h1 style={{fontSize:'80px', color:'white', fontFamily:'fredoka One'}}>Build Your Wealth<br/> One Block at a Time</h1>
                                <h5 style={{fontSize:'30px', color:'white', fontFamily:'fredoka'}}>FracVerse is an easy reliable to become a co-owner<br/> of a properties and earn income
                                    while you sleep. We make investing <br/>in real estate simple and profitable.
                                </h5>
                               <Link to='/login'><button className='startinvest' type='textsubmit' style={{width:'269px',height:'60px', borderRadius:'8px', marginTop:"20px", fontSize:'22px',fontWeight:'500'}}>Start investing <i className="bi bi-arrow-right"></i></button></Link>
                            </div>


                               {/* --------------------------------------------------------------Find Investment section+---------------------------------------- */}

                      <div className='find' style={{marginTop:'3rem', marginRight:'10rem', marginLeft:'5rem'}}>
                                    <div style={{display:'flex', gap:'10px',justifyContent:'center'}}>
                                            <div className="nav-item dropdown"  style={{}}  >
                                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white', border:"2px solid rgb(174, 224, 29)",width:'158px',height:'42px', borderRadius:'10px', backgroundColor:"rgb( 0.2)", textAlign:'center', paddingTop:'5px', fontSize:'18px', fontFamily:'fredoka'}}>
                                                    Property Type
                                                  </a>
                                                 <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Bungalow</a>
                                                    <hr className="dropdown-divider"/>
                                                    <a className="dropdown-item" href="#">Duplex</a>
                                                    <hr className="dropdown-divider"/>
                                                    <a className="dropdown-item" href="#">Duplex with Boys Qtr</a>
                                                  </div>
                                            </div>
                                            <div className="nav-item dropdown" style={{}} >
                                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white', border:"2px solid rgb(174, 224, 29)", width:'150px',height:'42px', borderRadius:'10px', backgroundColor:"rgb( 0.2)", textAlign:'center', paddingTop:'5px', fontSize:'18px', fontFamily:'fredoka'}}>
                                                     Price Range
                                                  </a>
                                                 <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">#90,000,000</a>
                                                    <hr className="dropdown-divider"/>
                                                    <a className="dropdown-item" href="#">#100,000,000</a>
                                                    <hr className="dropdown-divider"/>
                                                    <a className="dropdown-item" href="#">#120,000,000</a>
                                                  </div>
                                            </div>
                                           
                                    </div>

                                    <div style={{display:'flex', justifyContent:'center', marginTop:'8px', fontFamily:'fredoka'}}>
                                           <input type="text" className="formfine"  placeholder="Find Investment Opt,Properties" style={{border:"2px solid rgb(174, 224, 29)",width:'400px',height:'49px', borderRadius:'10px', backgroundColor:"rgba(255, 249, 249, 0.0)", fontSize:'18px',paddingLeft:'20px', color:'white', fontWeight:'500'}}/>
                                           <button className="invest" type="submit" style={{width:'150px',height:'49px',position:"absolute",marginLeft:"24rem", fontSize:'22px', fontWeight:'500',borderRadius:'10px'}}>Search</button>
                                    </div>
                       </div> 
           </div>  
          </div>  
          </div>                 
          </div>


                   {/* -----------------------------------------why choose us section--------------------------------- */}


                <div className='choose' style={{borderRadius:'40px', backgroundColor:'#C8E3E7', marginTop:"8rem",height:'838px',display:'flex', gap:'150px', padding:'10rem 9rem'}}>
                  
                      <div  style={{width:'600px', height:'560px'}}>
                            <h5 style={{color:'white', display: "inline-block",width:'233.28px',height:'57.4px' ,borderRadius: '50%', border: '2px solid #4DA5B1', backgroundColor:'#4DA5B1', fontSize:'28px', fontFamily:'fredoka', textAlign:'center', paddingTop:'6px'}}> Why Choose Us</h5>
                            <h3 style={{color:'#6E7F3D', fontSize:'60px', fontWeight:'bold', fontFamily:'fredoka'}}>Transforming Real <br/> Estate Investment <br/> For Everyone</h3>
                            <h6 style={{color:'#6E7F3D', fontSize:'24px', fontFamily:'fredoka'}}>At FracVerse, we believe everyone deserves a <br/>  shot at real estate investment,
                                Our platform, <br/> Using fractional ownership models and cutting-<br/> edge tech,
                                 Makes real estate accessible to all.<br/>  We are not just changing the game; We are <br/> 
                                 democratizing it.
                            </h6>
                            <button className='learn' type='text' style={{width:'269px', height:'60px', fontFamily:'fredoka', borderRadius:'8px', color:'black', fontSize:'24px', fontWeight:'bold', marginTop:'2rem'}}>Learn More <i className="bi bi-arrow-right"></i></button>
                      </div>

                        <div className='chooseus'>
                            <img src={smile} alt='woman smiling' style={{height:'498.74px',width:'400px' ,border: '20px solid  #4696A1', backgroundColor:'#4696A1', borderRadius:'100px' }}/>
                        </div>
                   
              </div>    



              {/* ------------------------------------Features Properties---------------------------------------------------------------------------------- */}




             <div style={{marginTop:'55px', height:'1339px', width:'1440px'}}>
                <div className='feature'>
                    <h1 style={{color:'#6E7F3D', fontSize:'53.23px', fontFamily:'fredoka'}}>Featured Properties</h1>
                </div>
                         <div className='row' style={{padding:'0rem 5rem'}}>
                                     <div className='col-12' style={{display:'flex', gap:'25px'}}>

                                            <div className="card" style={{width: '424.98px',height:'525.24px' ,padding:'10px', borderRadius:'15px',  borderColor:'black',  marginTop:'40px'}}>

                                                                <img src={house1} className="card-img-top" alt="House Image" />

                                                                       <h6 style={{paddingTop:'15px', paddingLeft:'5px', paddingRight:'5px', color:"black", fontWeight:'bold', fontSize:'14px'}}>MODERN ARCHITECTURE</h6>

                                                                <div  style={{padding:'0px 5px'}}>

                                                                       <div style={{display:"flex", gap:'10px'}}>
                                                                           <img src={locate} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                           <h6 style={{fontSize:'13px'}}>Chevron road, Lekki, Lagos Island.</h6>
                                                                        </div>

                                                                       <div style={{display:"flex", gap:'10px'}}>
                                                                           <img src={bed} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                           <h6 style={{fontSize:'13px'}}>3 Bedrooms.</h6>
                                                                        </div>

                                                                        <div style={{display:"flex", gap:'10px'}}>
                                                                           <img src={toilet} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                           <h6 style={{fontSize:'13px'}}>3 Bedrooms , 1 Guest Toilet</h6>
                                                                        </div>

                                                                        <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
                                                                              <a href="#" className="card-link">More Details</a>
                                                                               <p style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#120,000,000.00</p>
                                                                         </div>
                                                                 </div>
                                             </div>


                                             <div className="card" style={{width: '424.98px',height:'525.24px' , padding:'10px', borderRadius:'15px',  borderColor:'black', marginTop:'40px'}}>

                                                         <img src={house2} className="card-img-top" alt="House Image" />

                                                         <h6 style={{paddingTop:'15px', paddingLeft:'5px', paddingRight:'5px'  , color:"black", fontWeight:'bold', fontSize:'14px'}}>URBAN MINIMALISM</h6>

                                                         <div  style={{padding:'0px 5px'}}>

                                                               <div style={{display:"flex", gap:'10px'}}>
                                                                     <img src={locate} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                    <h6 style={{fontSize:'13px'}}>Ligali Ayorinde, Victoria Island, Lagos.</h6>
                                                                 </div>

                                                                <div style={{display:"flex", gap:'10px'}}>
                                                                    <img src={bed} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                    <h6 style={{fontSize:'13px'}}>2 Bedrooms.</h6>
                                                                 </div>

                                                               <div style={{display:"flex", gap:'10px'}}>
                                                                    <img src={toilet} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                    <h6 style={{fontSize:'13px'}}>2 Bedrooms , 1 Guest Toilet</h6>
                                                                 </div>

                                                                  <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
                                                                       <a href="#" className="card-link">More Details</a>
                                                                        <p style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#90,000,000.00</p>
                                                                  </div>
                                                          </div>
                                                    </div>


                                             <div className="card" style={{width: '424.98px',height:'525.24px', padding:'10px', borderRadius:'15px',  borderColor:'black' , marginTop:'40px'}}>

                                                                     <img src={house1} className="card-img-top" alt="House Image" />

                                                                   <h6 style={{paddingTop:'15px', paddingLeft:'5px', paddingRight:'5px' , color:"black", fontWeight:'bold', fontSize:'14px' }}>MODERN ARCHITECTURE</h6>

                                                            <div  style={{padding:'0px 5px'}}>

                                                                   <div style={{display:"flex", gap:'10px'}}>
                                                                       <img src={locate} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                       <h6 style={{fontSize:'13px'}}>Chevron road, Lekki, Lagos Island.</h6>
                                                                    </div>

                                                                   <div style={{display:"flex", gap:'10px'}}>
                                                                       <img src={bed} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                       <h6 style={{fontSize:'13px'}}>3 Bedrooms.</h6>
                                                                    </div>

                                                                    <div style={{display:"flex", gap:'10px'}}>
                                                                       <img src={toilet} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                       <h6 style={{fontSize:'13px'}}>3 Bedrooms , 1 Guest Toilet</h6>
                                                                    </div>

                                                                    <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
                                                                          <a href="#" className="card-link">More Details</a>
                                                                           <p style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#100,000,000.00</p>
                                                                     </div>
                                                             </div>
                                                </div>
                                     </div>



                                      <div className='col-12' style={{display:'flex', gap:'25px', marginTop:'2rem'}}>

                                                <div className="card" style={{width: '424.98px',height:'525.24px', padding:'10px', borderRadius:'15px',  borderColor:'black', marginTop:'40px'}}>

                                                               <img src={house3} className="card-img-top" alt="House Image" />

                                                               <h6 style={{paddingTop:'15px', paddingLeft:'5px', paddingRight:'5px'  , color:"black", fontWeight:'bold', fontSize:'14px'}}>MODERN ARCHITECTURE</h6>

                                                              <div  style={{padding:'0px 5px'}}>

                                                                   <div style={{display:"flex", gap:'10px'}}>
                                                                       <img src={locate} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                       <h6 style={{fontSize:'13px'}}>Ligali Ayorinde, Victoria Island, Lagos.</h6>
                                                               </div>

                                                                <div style={{display:"flex", gap:'10px'}}>
                                                                         <img src={bed} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                         <h6 style={{fontSize:'13px'}}>3 Bedrooms.</h6>
                                                                </div>

                                                                <div style={{display:"flex", gap:'10px'}}>
                                                                       <img src={toilet} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                       <h6 style={{fontSize:'13px'}}>3 Bedrooms , 1 Guest Toilet</h6>
                                                                </div>

                                                                    <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
                                                                          <a href="#" className="card-link">More Details</a>
                                                                           <p  style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#120,000,000.00</p>
                                                                     </div>
                                                            </div>
                                              </div>




                                              <div className="card" style={{width: '424.98px',height:'525.24px', padding:'10px', borderRadius:'15px',  borderColor:'black' , marginTop:'40px'}}>

                                                     <img src={house2} className="card-img-top" alt="House Image" />

                                                     <h6 style={{paddingTop:'15px', paddingLeft:'5px', paddingRight:'5px'  , color:"black", fontWeight:'bold', fontSize:'14px'}}>URBAN MINIMALISM</h6>

                                                     <div  style={{padding:'0px 5px'}}>

                                                            <div style={{display:"flex", gap:'10px'}}>
                                                                <img src={locate} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                <h6 style={{fontSize:'13px'}}>Ligali Ayorinde, Victoria Island, Lagos.</h6>
                                                            </div>

                                                            <div style={{display:"flex", gap:'10px'}}>
                                                                  <img src={bed} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                  <h6 style={{fontSize:'13px'}}>2 Bedrooms.</h6>
                                                           </div>

                                                           <div style={{display:"flex", gap:'10px'}}>
                                                                <img src={toilet} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                <h6 style={{fontSize:'13px'}}>2 Bedrooms , 1 Guest Toilet</h6>
                                                           </div>

                                                             <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
                                                                   <a href="#" className="card-link">More Details</a>
                                                                   <p style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#90,000,000.00</p>
                                                              </div>
                                                     </div>
                                                </div>



                                                <div className="card" style={{width: '424.98px',height:'525.24px' , padding:'10px', borderRadius:'15px',  borderColor:'black', marginTop:'40px'}}>

                                                        <img src={house3} className="card-img-top" alt="House Image" />

                                                        <h6 style={{paddingTop:'15px', paddingLeft:'5px', paddingRight:'5px'  , color:"black", fontWeight:'bold', fontSize:'14px'}}>MODERN ARCHITECTURE</h6>

                                                        <div  style={{padding:'0px 5px'}}>

                                                               <div style={{display:"flex", gap:'10px'}}>
                                                                   <img src={locate} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                   <h6 style={{fontSize:'13px'}}>Ligali Ayorinde, Victoria Island, Lagos.</h6>
                                                               </div>

                                                               <div style={{display:"flex", gap:'10px'}}>
                                                                     <img src={bed} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                     <h6 style={{fontSize:'13px'}}>3 Bedrooms.</h6>
                                                              </div>

                                                              <div style={{display:"flex", gap:'10px'}}>
                                                                   <img src={toilet} alt='location Icon' style={{width:'10px',  height:'15px'}}/>
                                                                   <h6 style={{fontSize:'13px'}}>3 Bedrooms , 1 Guest Toilet</h6>
                                                              </div>

                                                                <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
                                                                      <a href="#" className="card-link">More Details</a>
                                                                       <p  style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#100,000,000.00</p>
                                                                 </div>
                                                        </div>
                                                  </div>
                                     </div>

                                    <div className='col-12'>
                                         <button className='startoption1' type='submit' style={{width:'269px',height:'60px', borderRadius:'8px',marginTop:'20px', fontSize:'22px', fontWeight:'bold', float:'right', fontFamily:'fredoka'}}>See More <i className="bi bi-arrow-right"></i></button>
                                    </div>

                                    
                                  </div>
                </div>


               {/* ----------------------------------------------investment option section-------------------------------------------  */}

               <div style={{height:"872px", backgroundColor:"#C8E3E7", borderRadius:'40px', padding:'6rem 8rem', marginTop:'3rem'}}>

                          <div style={{textAlign:'center', marginBottom:"100px"}}>
                            <h5 style={{color:'white', display: "inline-block", fontSize:'25.35px',width:'242.64px',padding:'10px 0px', borderRadius: '50%', border: '2px solid #4DA5B1', backgroundColor:'#4DA5B1', fontFamily:'fredoka'}}>Investment Options</h5>
                            <h2 style={{color:'#6E7F3D', fontSize:'54.32px', fontWeight:'bold', fontFamily:'fredoka'}}>Diverse Investment Plan Tailored <br/>to your Financial Goals</h2>
                            <h5 style={{color:'#6E7F3D', fontSize:"25.35px", fontFamily:'fredoka'}}>Choose from our fractional ownership plans designed for you</h5>
                          </div>


                          <div className='row' style={{display:'flex', justifyContent:'center', gap:'80px'}}>

                              
                                    <div className='col-12' style={{border:'2px solid #4DA5B1',height:'284.29px', width:'265.58px', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem', color:'white', backgroundColor:'#4DA5B1', textAlign:'center'}}>
                                              <img src={plant} alt='plant' style={{width:'90.54px',height:'90.54px', paddingTop:'1rem', marginBottom:'1.1rem'}}/>
                                              <h4 style={{fontSize:"36.22px"}}>Starter Plan</h4>
                                              <h6 style={{fontSize:'14.49px'}}>Ideal for first time investors looking to begin thier journey with a minimal investment.</h6>
                                    </div>

                                    <div className='col-12'  style={{border:'2px solid #6E7F3D',height:'284.29px', width:'265.58px', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem', color:'white', backgroundColor:'#6E7F3D', textAlign:'center'}}>
                                              <img src={growth}alt='growth'style={{width:'90.54px',height:'90.54px', paddingTop:'1rem',  marginBottom:'1.1rem'}}/>
                                              <h3 style={{fontSize:"36.22px"}}>Growth Plan</h3>
                                              <h6 style={{fontSize:'14.49px'}}>Perfect for investors seeking steady growth and long time wealth.</h6>
                                    </div>

                                    <div className='col-12'  style={{border:'2px solid #FDD017',height:'284.29px', width:'265.58px', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem', color:'white', backgroundColor:'#FDD017', textAlign:'center'}}>
                                              <img src={coin}alt='Coin bag' style={{width:'90.54px',height:'90.54px', paddingTop:'1rem',  marginBottom:'1.1rem'}}/>
                                              <h3 style={{fontSize:"36.22px"}}>Premium Plan</h3>
                                              <h6 style={{color:'#5C5C5C', fontSize:'14.49px'}}>Tailored for seasoned investors loking for high-yield opportunities.</h6>      
                                    </div>

                                    <div className='col-12'>
                                      <Link to='/login'><button className='startoption' type='submit' style={{width:'269px',height:'60px', borderRadius:'8px', fontSize:'22px', fontWeight:'bold', float:'right'}}>Start investing <i className="bi bi-arrow-right"></i></button></Link>             
                                    </div>
                              
                                    
                          </div>
              </div>


              {/* ------------------------------------------Making Real Investment section------------------------ */}



           <div style={{ height:'948px', padding:'2rem', fontFamily:'fredoka'}}>
                        <div style={{textAlign:'center'}}>
                               <h5 style={{display:'inline-block', width:'268px',height:'56.17', backgroundColor:'#4DA5B1',  borderRadius:'50%', border: "2px solid #4DA5B1", color:'white', marginBottom:'1rem', fontSize:'28px', fontFamily:'fredoka'}}>How It Works</h5>
                         </div>
                 <div className='real' style={{textAlign:'center', marginBottom:'60px', color:'rgb(110, 127, 61)'}}>
                      <h2 style={{fontWeight:'bold', fontSize:'60px', marginBottom:'rem', fontFamily:'fredoka', color:'#6E7F3D'}}>Making Real Estate Investment <br/> Simple with Fracverse</h2>
                 </div>

                 <div className='row'>

                    <div className='col-12 col-md-6'>
                        <img src={investimg} alt='House Image' style={{width:'575.27px', height:"540.93px", marginLeft:"5rem"}}/>
                    </div>

                    <div className='col-12 col-md-3' >

                                        <div  style={{border:'1px solid #C8E3E7', backgroundColor:'#C8E3E7', marginBottom:'2rem', width:'329.26px', height:'251.39px', borderBottomRightRadius:'2rem', textAlign:'center', padding:'10px'}}>
                                            <h4 style={{color:'#6E7F3D', fontWeight:'bold', fontSize:'27.77px'}}>01 Explore Investments</h4>
                                            <h6 style={{color:'#6E7F3D', fontSize:'20.22px', textAlign:'start', padding:'0px 10px'}}>Find the perfect properties investment that align with your vision for wealth-building</h6>
                                        </div>

                                        <div  style={{border:'1px solid #C8E3E7', width:'329.26px', height:'251.39px', backgroundColor:'#C8E3E7',borderTopRightRadius:'2rem', textAlign:'center', padding:'10px'}}>
                                             <h4 style={{color:'#6E7F3D', fontWeight:'bold', fontSize:'27.77px'}}>03 Track Your Investment</h4>
                                             <h6 style={{color:'#6E7F3D', fontSize:'20.22px', textAlign:'start', padding:'0px 10px'}}>Monitor Your investment portfolio effortlessly. Fracverse provides detailed insight
                                                into property performance, ROI, rental income and other key metrics in real-time.
                                            </h6>
                                                                    
                                        </div>   
                             
                    </div>           


                    <div className='col-12 col-md-3'>

                        <div style={{border:'1px solid #C8E3E7', backgroundColor:'#C8E3E7', marginBottom:'2rem', width:'329.26px', height:'251.39px',borderBottomLeftRadius:'2rem', textAlign:'center', padding:'10px'}}>
                                <h4 style={{color:'#6E7F3D', fontWeight:'bold', fontSize:'27.77px'}}>02 Co-own Securely</h4>
                                <h6 style={{color:'#6E7F3D', fontSize:'20.22px' , textAlign:'start', padding:'0px 10px'}}>Select the property of your choice and co-own it securely with others. 
                                    Fracverse ensures a transparent and user-friendly process for hassle-free co-ownership.
                                </h6>
                        </div>
                   

                        <div className='center2' style={{border:'1px solid #C8E3E7',  backgroundColor:'#C8E3E7', width:'329.26px', height:'251.39px',borderTopLeftRadius:'2rem', textAlign:'center', padding:'10px'}}>
                                <h4 style={{color:'#6E7F3D', fontWeight:'bold', fontSize:'27.77px', marginBottom:'1rem'}}>04 Grow Your wealth</h4>
                                <h6 style={{color:'#6E7F3D', fontSize:'20.22px' , textAlign:'start', padding:'0px 10px'}}>Co-owned property grows in value, so does your wealth. FracVerse empowers you to build a stable
                                    financial future through accessible and affordable real estate investment.
                                 </h6>
                        </div>

                    </div>
                                    

                    <div className='col-12 '>
                    <Link to='/login'><button className='buttonmake' type='submit' style={{width:'296px',height:'60px', borderRadius:'8px',backgroundColor:'#5772d6', fontSize:'24px', fontWeight:'bold', float:'right', marginTop:'3rem'}}>Start investing <i className="bi bi-arrow-right"></i></button></Link>
                    </div>                   
                                                
                 </div>
           </div>



           {/* ----------------------------------------------------Testimonial section----------------------------------------------------------------- */}



           <div className='container5' style={{marginTop:'3rem', backgroundColor:'#C8E3E7', borderRadius:'40px', height:'592px', padding:'2rem', fontFamily:'fredoka'}}>
                <div className='row'>
                    <div className='col-12'>

                            <div className='thead' style={{textAlign:'center'}}>
                                <h5 style={{marginBottom:'1rem', display:'inline-block',  padding: '5px 25px', borderRadius:'50%', border: "2px solid #4DA5B1", color:'white', backgroundColor:'#4DA5B1', fontSize:'28px'}}>Testimonials</h5>
                            </div>

    
                            <div className='rhead' style={{marginBottom:'1rem', display:'flex', textAlign:'center', justifyContent:'center'}}>
                                     <h5 style={{color:'#6E7F3D', fontSize:"40px"}}>Hear From Our Satisfied Investors</h5>
                              </div>
                          

                            <div className='people' style={{display:'flex', gap:'60px', margin:'2rem 5rem'}}>
                                <div className='lawal' style={{backgroundColor:'#6E7F3D', color:'white', width:"312px", height:'204px',marginTop:'2rem'}}>
                                    <div className='peoplepix1' style={{display:'flex', gap:'50px'}}>
                                         <h5 style={{marginTop:'2rem' , fontSize:"24px", fontWeight:'bold'}}>Lawal Adeyemi</h5>
                                         <img src={lawal}alt='lawal picture' style={{width:'70px',height:'70px', marginBottom:'10px'}}/>
                                    </div> 
                                    <h6 style={{fontSize:'16px'}}>As a busy business, FracVerse simplified real estate investment for me. Its user-friendly platform
                                        and fractional ownership model are game changers!
                                    </h6>
                                </div>

                                <div className='ngozi' style={{backgroundColor:'#4DA5B1', color:'white', width:"424px", height:'277.23px'}}>
                                    <div className='peoplepix2' style={{display:'flex', gap:'100px'}}>
                                         <h5 style={{marginTop:'3rem' , fontSize:"24px", fontWeight:'bold'}}>Ngozi Agwuronye</h5>
                                         <img src={ngozi}alt='Ngozi picture' style={{width:'70px',height:'70px', marginBottom:'10px'}}/>
                                    </div> 
                                    <h6 style={{fontSize:'16px'}}>FracVerse made real estate approachable for me as a first-time investor. The starter plan i chose
                                        has been an exciting journey and i have seen my investment grow step by step, simple, supportive and truly 
                                        outstanding.
                                    </h6>
                                </div>

                                <div className='shehu' style={{backgroundColor:'#6E7F3D', color:'white', width:"312px", height:'204px',marginTop:'2rem'}}>
                                    <div className='peoplepix3' style={{display:'flex', gap:'70px'}}>
                                         <h5 style={{marginTop:'2rem' , fontSize:"24px", fontWeight:'bold'}}>Shehu Lawal</h5>
                                         <img src={shehu}alt='Shehu picture' style={{ width:'70px',height:'70px', marginBottom:'10px'}}/>
                                    </div> 
                                    <h6 style={{fontSize:'16px'}}>FracVerse made real estate less intimidating, Transparent processes and affordable investments
                                        aligned perfectly with my financial goals.
                                    </h6>
                                </div>

                            </div>

                            <div>
                                <button className="testbtn" type="submit" style={{width:'296px', height:'60px', fontWeight:'bold', borderRadius:'8px', float:'right', fontSize:'22px'}}>Read more<i className="bi bi-arrow-right"></i></button>                           
                            </div>

                        </div>
                 </div> 
            </div>
{/* 
                            ---------------------------------------------contact us section---------------------------------- */}
                 <div className='row' style={{fontFamily:'fredoka'}}>
                        <div className='col-12'>
                            <div className='contact' style={{textAlign:'center'}}>
                                <h5 style={{marginBottom:'3rem', display:'inline-block',  padding: '5px 25px', borderRadius:'50%', border: "2px solid #4DA5B1", color:'white', fontSize:'28px', backgroundColor:'#4DA5B1', marginTop:'4rem'}}>Contact Us</h5>
                                <h3 style={{color:'#6E7F3D', fontWeight:'bold', marginBottom:'2rem', fontSize:'40px'}}>Have Questions? Contact Us!</h3>
                            </div>

                              
                            <div className='hands' style={{display:'flex',gap:"8rem", border:'2px solid rgb(110,127,61)',width:"1265px",height:'308px',margin:"0rem 5rem", backgroundColor:'rgb(110,127,61)', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px'}}>

                                <div className='handtext' style={{padding:'2.5rem'}}>
                                    <h6 style={{color:"white", fontSize:'24px'}}>Whether you are a seasoned or just starting, Our team is here to help. Reach out for personized 
                                        guidance. We are commmitted to making your real estate investment journey seamless and rewarding.
                                    </h6>
                                    <button className='contactbutton' type='submit' style={{width:'269px', height:'60px' ,borderRadius:'8px', marginTop:'1rem', fontSize:'22px', fontWeight:'bold'}}>Contact Us <i className="bi bi-arrow-right"></i></button>
                                 
                                </div>
                                      <img src={hands6} alt='People holding hands' style={{width:'374px', height:'251px', margin:'2rem'}}/>
                            </div>

                         </div>
                
                    </div>


            {/* ------------------------------------------------------footer section landing page---------------------------------------- */}

            
            <div className='containerFooter' style={{backgroundColor:'#6E7F3D', marginTop:'3rem', height:'386px', fontFamily:'fredoka', padding:'2rem'}}>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                            <div className='footerimage' style={{display:'flex', gap:'7px'}}>
                                 <a href='#'><img src={logo} alt='logo' style={{width: '70px', marginLeft:'1.4rem', marginBottom:'1.5rem', height:'78.48px'}}/></a>
                                 <h3 style={{fontSize:'30px', fontWeight:'bold', color:'#EBEBEB'}}>FracVerse</h3>
                            </div>
                        <ul>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Phone: +23480112Fracverse</li>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Email: Info@franverse.com</li>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Address: FracVerse street Nigeria</li>
                        </ul>
                        <p style={{marginLeft:'1.7rem', marginTop: '2rem', color:'white', fontSize:"18px"}}>Copyright: <br/> &copy;  2024. FracVerse. All rights reserved.</p> 
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5 style={{color:'#2A5B61', paddingLeft:'30px', fontSize:"24px"}}>Home</h5>
                            <ul>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>About Us</li>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Investment Options</li>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>How It Works</li>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Testimonials</li>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Contact</li>
                            </ul>
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5 style={{color:'#2A5B61', paddingLeft:'30px', fontSize:"24px"}}>Resources</h5>
                            <ul>
                                 <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Blog</li> 
                                 <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Newsletter</li>
                            </ul>
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5 style={{color:'#2A5B61', paddingLeft:'30px', fontSize:"24px"}}>Legal</h5>
                            <ul>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Terms</li>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Privacy</li>
                                <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"18px"}}>Bye Laws</li>
                            </ul>
                    </div>
                </div>

            </div>




    </>


  
)
}

export default Landingpage;

               
        