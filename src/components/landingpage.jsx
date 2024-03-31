
import logo from '../assets/Logo2.png';
import hero from '../assets/Heros SectionImage.png'
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



const Landingpage = ()=>{
    return (
      <>
          
        <div className="row">
           <div className="col-12">

              <div className="hero-section" style={{ position: 'relative' }}>

            
                       <div className='hero'> <img src={hero} alt="Picture of A House" style={{width:'100%', minHeight:'150vh'}}/></div> 
              
                            {/* /*-------------------------------------------Nav bar Section----------------------------------*/ }
                        <div className='herowrite' style={{ position: 'absolute', top: '0', left: '0', right: '0', zIndex: '100'}}>
                            <nav className="navbar navbar-expand-lg" style={{marginTop:'30px', marginLeft:'20px', marginRight:'20px', backgroundColor: "rgba(30, 110, 139, 0.5)"}}>
                              <div className="container-fluid">
                                        <a className="navbar-brand" href="#" >
                                            <a href='#'><img src={logo} alt='Brand Logo' style={{width:'100px', marginLeft:'30px'}}/></a>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                          <span className="navbar-toggler-icon"></span>
                                        </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <div style={{display:'flex', gap:'50px', fontSize:'16px', paddingRight:"300px"}}> 
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
                                            <div style={{display:'flex', gap:"10px"}}>
                                                  
                                             <Link to='/login'><button className="btn btn-outline-success" type="submit" style={{padding:"5px 29px", borderColor:"rgb(174, 224, 29) ", color:"black"}}>Login</button></Link> 
                                              <Link to='/signup'><button className="btnsignup" type="submit" style={{padding:"5px 20px", borderRadius:'5px',fontSize:'15px', fontWeight:'500'}}>Signup</button></Link> 
                                                 
                                            </div> 
                                        </ul>    

                                           
                                       
                                </div>
                             </div>
                         </nav>

                         {/* -------------------------------Nav section write up--------------------------------------------------------- */}

                            <div className='write' style={{textAlign: 'center'}}>
                                <h1 style={{fontSize:'50px', fontWeight:'bolder', color:'white', paddingTop:"80px"}}>Build Your Wealth,<br/> One Block at a Time</h1>
                                <h5 style={{fontSize:'20px', color:'white', paddingTop:"90px"}}>FracVerse is an easy reliable to become a co-owner of a properties and <br/> earn income
                                    while you sleep. We make investing in real estate simple and profitable.
                                </h5>
                                <button className='startinvest' type='textsubmit' style={{padding: '10px 25px', borderRadius:'8px', marginTop:"80px", fontWeight:'600'}}>Start investing <i className="bi bi-arrow-right"></i></button>
                            </div>
           </div>  
          </div>  
          </div>                 
          </div>

          <div className='row'>
                      <div className='col-12'>
                                {/* --------------------------------------------------------------Find Investment section+---------------------------------------- */}

                      <div className='find' style={{border:"3px solid rgb(110, 127, 61)", backgroundColor:'rgb(188,196,166)', borderTopLeftRadius:"2rem", borderBottomRightRadius:'2rem', width:'auto', padding:'1rem 3rem'}}>
                                    <div style={{display:'flex', gap:'10px'}}>
                                            <div className="nav-item dropdown"  style={{left:'3%'}}  >
                                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white', border:"1px solid", padding:'5px 10px', borderRadius:'5px', backgroundColor:"rgb(152, 149, 149, 0.5)"}}>
                                                    Property Type
                                                  </a>
                                                 <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Bungalow</a>
                                                    <a className="dropdown-item" href="#">Duplex</a>
                                                    <a className="dropdown-item" href="#">Duplex with Boys Qtr</a>
                                                  </div>
                                            </div>
                                            <div className="nav-item dropdown" style={{left:'3%'}} >
                                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white', border:"1px solid ", padding:'5px 10px', borderRadius:'5px', backgroundColor:"rgb(152, 149, 149, 0.5)"}}>
                                                     Price Range
                                                  </a>
                                                 <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">#10,000,000</a>
                                                    <a className="dropdown-item" href="#">#100,000,000</a>
                                                    <a className="dropdown-item" href="#">#150,000,000</a>
                                                  </div>
                                            </div>
                                           
                                    </div>

                                    <div style={{display:'flex', marginLeft:'2rem'}}>
                                           <input type="text" className="form-control" id="inputAddress2" placeholder="Find Investment Opt, Properties"style={{padding: '7px 40px', border: '3px solid rgb(110, 127, 61)', backgroundColor: 'rgb(188, 196, 166)'}}/>
                                           <button className="invest" type="submit" style={{padding: '7px 25px', fontSize:'15px', fontWeight:'bold'}}>Search</button>
                                    </div>
                       </div> 

                      </div>
          </div>
    

                   {/* -----------------------------------------why choose us section--------------------------------- */}


                <div className='choose' style={{border:"3px solid", borderRadius:'35px', backgroundColor:'rgb(110, 127, 61)', marginTop:"3rem", padding:'2rem'}}>
                   <div className='row'>
                      <div className='col-12 col-md-6' style={{paddingTop:"7rem"}}>
                            <h5 style={{color:'white',marginLeft:'2.5rem', display: "inline-block",padding: '8px 10px', borderRadius: '50%', border: '2px solid #4DA5B1'}}> Why Choose Us</h5>
                            <h3 style={{color:'white', padding:'1rem 2.5rem', fontSize:'40px'}}>Transforming Real <br/> Estate Investment <br/> For Everyone</h3>
                            <h6 style={{color:'white', padding:'1rem 2.5rem', fontSize:'20px'}}>At FracVerse, we believe everyone deserves a <br/>  shot at real estate investment,
                                Our platform, <br/> Using fractional ownership models and cutting-<br/> edge tech,
                                 Makes real estate accessible to all.<br/>  We are not just changing the game; We are <br/> 
                                 democratizing it.
                            </h6>
                            <button className='learn' type='text' style={{padding: '7px 55px',marginLeft:'2.5rem', borderRadius:'8px', backgroundColor:'#4DA5B1', color:'black', fontSize:'15px', fontWeight:'bold'}}>Learn More <i className="bi bi-arrow-right"></i></button>
                      </div>

                      <div className='col-12 col-md-6 chooseus'>
                      <img src={smile} alt='woman smiling' style={{ maxHeight:'550px', border: '15px solid  #4DA5B1', backgroundColor:'#4DA5B1', borderRadius:'100px', marginTop:'3rem' }}/>
                        </div>
                   </div>
              </div>    



              {/* ------------------------------------Features Properties---------------------------------------------------------------------------------- */}




             <div style={{margin:'35px'}}>
                    <h1 style={{color:'black'}}>Featured Properties</h1>
                    <div  style={{border:'3px solid rgb(39, 88, 146)', width:'170px',  borderRadius:'2px'}}></div>
                         <div className='row'>
                                     <div className='col-12 col-md-4'>
                                            <div className="card" style={{width: "20rem" , padding:'10px', borderRadius:'15px',  borderColor:'black',  marginTop:'40px'}}>

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




                                             <div className="card" style={{width: "20rem"  , padding:'10px', borderRadius:'15px',  borderColor:'black' , marginTop:'40px'}}>

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
                                                                           <p style={{color:"black", fontWeight:'bold', fontSize:'14px'}}>#120,000,000.00</p>
                                                                     </div>
                                                             </div>
                                                            </div>
                                     </div>





                                     <div className='col-12 col-md-4'>
                                            <div className="card" style={{width: "20rem"  , padding:'10px', borderRadius:'15px',  borderColor:'black', marginTop:'40px'}}>

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




                                               <div className="card" style={{width: "20rem"  , padding:'10px', borderRadius:'15px',  borderColor:'black' , marginTop:'40px'}}>

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
                                     </div>




                                      <div className='col-12 col-md-4'>

                                                <div className="card" style={{width: "20rem"  , padding:'10px', borderRadius:'15px',  borderColor:'black', marginTop:'40px'}}>

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




                                              <div className="card" style={{width: "20rem"  , padding:'10px', borderRadius:'15px',  borderColor:'black', marginTop:'40px'}}>

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

                                                <button className='startoption' type='submit' style={{padding: '5px 10px', borderRadius:'8px', marginLeft:'190px', marginTop:'20px', fontSize:'15px', fontWeight:'bold'}}>See More <i className="bi bi-arrow-right"></i></button>

                                      </div>
                                  </div>
                </div>


               {/* ----------------------------------------------investment option section-------------------------------------------  */}

               <div style={{padding:'3rem'}}>

                          <div style={{textAlign:'center', marginBottom:"100px"}}>
                            <h5 style={{color:'rgb(110, 127, 61)',marginLeft:'2.5rem', display: "inline-block",padding: '8px 10px', borderRadius: '50%', border: '2px solid #4DA5B1'}}>Investment Options</h5>
                            <h2 style={{color:'rgb(110, 127, 61)', fontSize:'40px', fontWeight:'bolder'}}>Diverse Investment Plan Tailored <br/>to your Financial Goals</h2>
                            <h4 style={{color:'rgb(110, 127, 61)'}}>Choose from our fractional ownership plans designed for you</h4>
                          </div>


                          <div className='row' style={{display:'flex', justifyContent:'center', gap:'80px'}}>

                              
                                    <div className='col-12' style={{border:'2px solid', padding:'20px 35px', width:'300px', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem', color:'white', backgroundColor:'#708df5', textAlign:'center'}}>
                                              <img src={plant} alt='plant' style={{width:'100px', paddingTop:'1rem', marginBottom:'1.1rem'}}/>
                                              <h4>Starter Plan</h4>
                                              <h6>Ideal for first time investors looking to begin thier journey with a minimal investment.</h6>
                                    </div>

                                    <div className='col-12'  style={{border:'2px solid', padding:'20px 35px', width:'300px', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem', color:'white', backgroundColor:'rgb(110,127,61)', textAlign:'center'}}>
                                              <img src={growth}alt='growth'style={{width:'100px', paddingTop:'1rem',  marginBottom:'1.1rem'}}/>
                                              <h3>Growth Plan</h3>
                                              <h6>Perfect for investors seeking steady growth and long time wealth.</h6>
                                    </div>

                                    <div className='col-12'  style={{border:'2px solid', padding:'20px 35px', width:'300px', borderTopLeftRadius:"3rem", borderBottomRightRadius:'3rem', color:'white', backgroundColor:'rgb(176,156,133)', textAlign:'center'}}>
                                              <img src={coin}alt='Coin bag' style={{width:'100px', paddingTop:'1rem',  marginBottom:'1.1rem'}}/>
                                              <h3>Premium Plan</h3>
                                              <h6>Tailored for seasoned investors loking for high-yield opportunities.</h6>   
                                              <button className='startoption' type='submit' style={{padding: '7px 13px', position:'absolute', borderRadius:'8px', fontSize:'15px', fontWeight:'bold', marginTop:'35px'}}>Start investing <i className="bi bi-arrow-right"></i></button>               
                                    </div>
                              
                                    
                          </div>

                          <div style={{textAlign:'center'}}>
                               <h5 style={{display:'inline-block',marginTop:'100px',  padding: '5px 25px', borderRadius:'50%', border: "2px solid #5772d6", color:'rgb(110,127,61)'}}>How It Works</h5>
                         </div>

              </div>


              {/* ------------------------------------------Making Real Investment section------------------------ */}



           <div style={{backgroundColor:'rgb(110,127,61)', padding:'30px 60px', minHeight:'140vh'}}>
                 <div className='real' style={{textAlign:'center', marginBottom:'50px', color:'white'}}>
                      <h2 style={{fontWeight:'bolder', fontSize:'35px'}}>Making Real Estate Investment <br/> Simple with Fracverse</h2>
                 </div>
                 <div className='row'>
                      <div className='col-12' >

                                      <div className='make'>
                                                        <div className='left' style={{border:'1px solid', height:"50%", textAlign:'center', padding:"10px", backgroundColor:'rgb(60,74,19)'}}>
                                                            <h4 style={{color:'white', fontWeight:'bold'}}>02 Co-own Securely</h4>
                                                            <h6 style={{color:'white'}}>Select the property of your choice and co-own it securely with others. 
                                                                Fracverse ensures a transparent and user-friendly process for hassle-free co-ownership.
                                                            </h6>
                                                        </div>

                                                        <div className='center'>
                                                                <div className='center1' style={{border:'1px solid', textAlign:'center',padding:"10px", backgroundColor:'#5772d6'}}>
                                                                    <h4 style={{color:'white', fontWeight:'bold'}}>01 Explore Investment Plans</h4>
                                                                    <h6 style={{color:'white'}}>Find the perfect properties investment that align with your vision for wealth-building</h6>
                                                                </div>

                                                                <div className='center2' style={{border:'1px solid', textAlign:'center', padding:"10px",  backgroundColor:'rgb(60,74,19)'}}>
                                                                     <h4 style={{color:'white', fontWeight:'bold'}}>04 Grow Your wealth</h4>
                                                                     <h6 style={{color:'white'}}>Co-owned property grows in value, so does your wealth. FracVerse empowers you to build a stable
                                                                        financial future through accessible and affordable real estate investment.
                                                                     </h6>
                                                                </div>
                                                        </div>

                                                        <div className='right' style={{border:'1px solid', height:'50%', textAlign:'center', padding:"10px", backgroundColor:'rgb(60,74,19)'}}>
                                                                    <h4 style={{color:'white', fontWeight:'bold'}}>03 Track Your Investment</h4>
                                                                    <h6 style={{color:'white'}}>Monitor Your investment portfolio effortlessly. Fracverse provides detailed insight
                                                                        into property performance, ROI, rental income and other key metrics in real-time.
                                                                    </h6>
                                                                    <button className='buttonmake' type='submit' style={{padding: '7px 13px', borderRadius:'8px',backgroundColor:'#5772d6', fontSize:'15px', fontWeight:'bold', marginTop:''}}>Start investing <i className="bi bi-arrow-right"></i></button>               

                                                        </div>           
                                         </div>

                                         


                      </div>
                 </div>
           </div>



           {/* ----------------------------------------------------Testimonial section----------------------------------------------------------------- */}



           <div className='container5' style={{padding:'4rem 1rem'}}>
                <div className='row'>
                    <div className='col-12'>

                            <div className='thead' style={{textAlign:'center'}}>
                                <h5 style={{marginBottom:'3rem', display:'inline-block',  padding: '5px 25px', borderRadius:'50%', border: "2px solid #5772d6", color:'rgb(110,127,61)'}}>Testimonials</h5>
                            </div>

    
                            <div className='rhead' style={{marginBottom:'4rem', display:'flex'}}>
                                     <h5 style={{color:'rgb(110,127,61)'}}>Hear From Our Satisfied Investors</h5>
                                      <button className="testbtn" type="submit" style={{padding: '7px 15px',fontWeight:'bold', borderRadius:'8px'}}>Read more<i className="bi bi-arrow-right"></i></button>
                              </div>
                          

                            <div className='people'>
                                <div className='lawal' style={{backgroundColor:'rgb(110,127,61)', color:'white'}}>
                                    <div className='peoplepix1' style={{display:'flex', gap:'50px'}}>
                                         <h5 style={{marginTop:'1rem'}}>Lawal Adeyemi</h5>
                                         <img src={lawal}alt='lawal picture' style={{width:'60px', marginBottom:'10px'}}/>
                                    </div> 
                                    <h6>As a busy business, FracVerse simplified real estate investment for me. Its user-friendly platform
                                        and fractional ownership model are game changers!
                                    </h6>
                                </div>

                                <div className='ngozi' style={{backgroundColor:'#5772d6', color:'white'}}>
                                    <div className='peoplepix2' style={{display:'flex', gap:'30px'}}>
                                         <h5 style={{marginTop:'1rem'}}>Ngozi Agwuronye</h5>
                                         <img src={ngozi}alt='Ngozi picture' style={{width:'60px' , marginBottom:'10px'}}/>
                                    </div> 
                                    <h6>FracVerse made real estate approachable for me as a first-time investor. The 'starter plan' i chose
                                        has been an exciting journey and i've seen my investment grow step by step, simple, supportive and truly 
                                        outstanding.
                                    </h6>
                                </div>

                                <div className='shehu' style={{backgroundColor:'rgb(110,127,61)', color:'white'}}>
                                    <div className='peoplepix3' style={{display:'flex', gap:'50px'}}>
                                         <h5 style={{marginTop:'1rem'}}>Shehu Lawal</h5>
                                         <img src={shehu}alt='Shehu picture' style={{width:'60px' , marginBottom:'10px'}}/>
                                    </div> 
                                    <h6>FracVerse made real estate less intimidating, Transparent processes and affordable investments
                                        aligned perfectly with my financial goals.
                                    </h6>
                                </div>

                            </div>

                            <div className='contact' style={{textAlign:'center'}}>
                                <h5 style={{marginBottom:'3rem', display:'inline-block',  padding: '5px 25px', borderRadius:'50%', border: "2px solid #5772d6", color:'rgb(110,127,61)', fontSize:'25px'}}>Contact Us</h5>
                                <h6 style={{color:'rgb(110,127,61)'}}>Have Questions? Contact Us!</h6>
                            </div>

                              
                            <div className='hands' style={{backgroundColor:'rgb(110,127,61)'}}>
                                <div className='handtext'>
                                    
                                    <h6 style={{color:'white', padding:'10px'}}>Whether you're a seasoned or just starting, Our team is here to help. Reach out for personized 
                                        guidance. We're commmitted to making your real estate investment journey seamless and rewarding.
                                    </h6>
                                    <button className='contactbutton' type='submit' style={{padding: '7px 20px', borderRadius:'8px', backgroundColor:'#708df5', marginTop:'1rem',marginLeft:'10px', fontSize:'1rem', fontWeight:'bold'}}>Contact Us <i className="bi bi-arrow-right"></i></button>
                                 
                                </div>
                                      <div className="vertical-line"></div>

                                      <img src={hands6} alt='People holding hands'/>
                               
                                      
                            </div>

                    </div>
                </div>
            </div>


            {/* ------------------------------------------------------footer section landing page---------------------------------------- */}

            
            <div className='containerFooter' style={{backgroundColor:'rgb(110,127,61)', padding:'2rem'}}>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                            <div className='footerimage' style={{display:'flex', gap:'7px'}}>
                                 <a href='#'><img src={logo} alt='logo' style={{maxWidth: '100px', marginLeft:'1.4rem', marginBottom:'1.5rem'}}/></a>
                                 <h3 style={{fontSize: '1.1rem', paddingTop:'2.5rem', fontWeight:'bold', color:'white'}}>FracVerse</h3>
                            </div>
                        <ul>
                            <li style={{paddingBottom:'0.9rem', color:'white'}}>Phone: +23480112Fracverse</li>
                            <li style={{paddingBottom:'0.9rem', color:'white'}}>Email: Info@franverse.com</li>
                            <li style={{paddingBottom:'0.9rem', color:'white'}}>Address: FracVerse street Nigeria</li>
                        </ul>
                        <p style={{marginLeft:'1.7rem', marginTop: '2rem', color:'white'}}>Copyright: <br/> &copy;  2024. FracVerse. All rights reserved.</p> 
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5 style={{color:'#708df5', paddingLeft:'30px'}}>Home</h5>
                            <ul>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>About Us</li>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>Investment Options</li>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>How It Works</li>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>Testimonials</li>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>Contact</li>
                            </ul>
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5 style={{color:'#708df5', paddingLeft:'30px'}}>Resources</h5>
                            <ul>
                                 <li style={{paddingBottom:'0.9rem', color:'white'}}>Blog</li> 
                                 <li style={{paddingBottom:'0.9rem', color:'white'}}>Newsletter</li>
                            </ul>
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5 style={{color:'#708df5', paddingLeft:'30px'}}>Legal</h5>
                            <ul>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>Terms</li>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>Privacy</li>
                                <li style={{paddingBottom:'0.9rem', color:'white'}}>Bye Laws</li>
                            </ul>
                    </div>
                </div>

            </div>




    </>


  
)
}

export default Landingpage;

               
        