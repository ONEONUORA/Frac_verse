 import logo from '../images/Logo (2).png';
 import smile from '../images/smilewoman.png';
 import plant from '../images/plant.png';
 import growth from '../images/growth.png';
 import coin from '../images/coinbag.png';
 import lawal from '../images/lawal.png';
 import ngozi from '../images/ngozi.png';
 import shehu from '../images/shehu.png';
 import hands6 from '../images/peoplehands.png';
 import { Link } from 'react-router-dom';


const Home =()=>{
    return (
         <div>
                            {/*---------------------------------Nav bar section / house styling section* fredoka-------------------*/}
            <div class='containerNavBar'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='homeimage'>
                                    
                                   <nav className="navbar navbar-expand-lg">
                                      <div className="container-fluid navbaricons">
                                               <a className="navbar-brand" href="#">
                                               <img src={logo} alt='logo' style={{maxWidth: '100px'}}/></a>
                                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                 <span className="navbar-toggler-icon"></span>
                                              </button>
                                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                       <div className='about'>
                                                               <li className="nav-item">
                                                                   <Link to="/about" className="nav-link"href="#">About Us</Link>
                                                               </li>
                                                              <li className="nav-item">
                                                                   <Link to='/investment' className="nav-link" href="#">Investment Options</Link>
                                                              </li>
                                                              <li className="nav-item">
                                                                  <Link to='/blog' className="nav-link" href="#">Blog</Link>
                                                               </li>
                                                              <li className="nav-item">
                                                                  <Link to="/contact" className="nav-link" href="#">Contact</Link>
                                                              </li>
                                                          </div>
                                                          <div className='enter'>
                                                                  <li className="nav-item">
                                                                    <Link to='/login' className="btn btn-outline-success" type="submit" style={{color: 'black', padding: '7px 30px' }}>Login</Link>
                                                                   </li>
                                                                  <li className="nav-item">
                                                                      <Link to='/signup' className="usuccess" type="submit" style={{padding: '7px 25px', borderRadius:'8px'}}>Sign Up</Link>
                                                                  </li>
                                                          </div>
                                                </ul>
                                           </div>
                                     </div>
                                  </nav>

                                       <div className='writeup'>
                                               <h2>Build Your Wealth,<br/>One Block at a Time</h2>
                                              <h6>FracVerse is an easy reliable to become a co-owner of a properties and <br/> earn income
                                                         while you sleep. We make investing in real estate simple and <br/> profitable.
                                               </h6>
                                               <button className='startinvest' type='text' style={{padding: '7px 25px', borderRadius:'8px'}}>Start investing <i class="bi bi-arrow-right"></i></button>
                                        </div>
                         </div>        

                                     
                        <div className='find'>
                                <form class="d-flex" role="search">
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Find investment Options,Properties"style={{padding: '7px 40px', border: '3px solid rgb(110, 127, 61)', backgroundColor: 'rgb(188, 196, 166)'}}/>
                                         <button class="invest" type="submit" style={{padding: '7px 35px', borderRadius:'8px', border: '3px solid rgb(188, 196, 166)'}}>Search</button>
                                </form>

                         </div> 
                    </div>




                 </div>
            </div>

                    {/*------------------------------why choose us section------------------------------------------------------ */}
            <div className='container2'>
                <div className='row'>
                        <div className='col-12 col-md-6'>
                                <div className='choose'>
                                        <h4>Why Choose Us</h4>
                                        <h2>Transforming Real Estate Investment For Everyone</h2>
                                        <h5>At FracVerse, we believe everyone has a shot at real estate investment,
                                            Our platform using fractional ownership models and cutting edge tech,
                                            Makes real estate accessible to all. We're not just changing the game; We're 
                                            democratizing it.
                                        </h5>
                                        <button className='learn' type='text' style={{padding: '7px 55px', borderRadius:'8px', backgroundColor:'#708df5', color:'black'}}>Learn More <i class="bi bi-arrow-right"></i></button>

                                </div>
                        </div>

                        <div className='col-12 col-md-6'>
                                <img src={smile} alt='woman smiling' style={{ maxHeight:'550px', border: '30px solid #708df5', backgroundColor:'#708df5', borderRadius:'100px', marginLeft:'6rem' }}/>
                        </div>
                </div>
            </div>


                     {/*----------------------------------Invest Options-------------------------------------------------------------------------- */}

            <div className='container3'>
                        <div className='options'>
                            <h5>Investment Options</h5>
                            <h2>Diverse Investment Plan Tailored <br/>to your Financial Goals</h2>
                            <h4 style={{color:'rgb(110, 127, 61)'}}>Choose from our fractional ownership plans designed for you</h4>

                        </div>
                <div className='row'>
                    <div className='col-12 col-md-4 starter'>
                            <img src={plant} alt='plant' style={{width:'100px', paddingTop:'1rem', marginLeft:'5rem', marginBottom:'1.1rem'}}/>
                            <h3>Starter Plan</h3>
                            <h6>Ideal for first time investors looking to begin thier journey with a minimal investment.</h6>
                    </div>

                    <div className='col-12 col-md-4 growth'>
                            <img src={growth}alt='growth'style={{width:'100px', paddingTop:'1rem', marginLeft:'5rem', marginBottom:'1.1rem'}}/>
                            <h3>Growth Plan</h3>
                            <h6>Perfect for investors seeking steady growth and long time wealth.</h6>
                    </div>

                    <div className='col-12 col-md-4 premium'>
                            <img src={coin}alt='Coin bag' style={{width:'100px', paddingTop:'1rem', marginLeft:'5rem', marginBottom:'1.1rem'}}/>
                            <h3>Premium Plan</h3>
                            <h6>Tailored for seasoned investors loking for high-yield opportunities.</h6>
                            <button className='startoption' type='text' style={{padding: '7px 25px', borderRadius:'8px'}}>Start investing <i class="bi bi-arrow-right"></i></button>
                    </div>

                </div>

                      <div className='optionhow'>
                            <h5>How It Works</h5>
                      </div>

            </div>

            { /*-----------------------------------------making real investment section---------------------------------------*/}


            <div className='container4'>
                    <div className="row">
                            <div className="col-12">
                                <div className='main1'>
                                        <div className='subMain'>
                                            <div className='header'>
                                               <h2>Making Real Estate Investment <br/> Simple with Fracverse</h2>
                                            </div>
                                                    <div className='main2'>
                                                        <div className='left'>
                                                            <h4>02 Co-own Securely</h4>
                                                            <h6>Select the property of your choice and co-own it securely with others. 
                                                                Fracverse ensures a transparent and user-friendly process for hassle-free co-ownership.
                                                            </h6>
                                                        </div>

                                                        <div className='center'>
                                                                <div className='center1'>
                                                                    <h4>01 Explore Investment Plans</h4>
                                                                    <h6>Find the perfect properties investment that align with your vision for wealth-building</h6>
                                                                </div>

                                                                <div className='center2'>
                                                                     <h4>04 Grow Your wealth</h4>
                                                                     <h6>Co-owned property grows in value, so does your wealth. FracVerse empowers you to build a stable
                                                                        financial future through accessible and affordable real estate investment.
                                                                     </h6>
                                                                </div>
                                                        </div>

                                                        <div className='right'>
                                                                    <h4>03 Track Your Investment</h4>
                                                                    <h6>Monitor Your investment portfolio effortlessly. Fracverse provides detailed insight
                                                                        into property performance, ROI, rental income and other key metrics in real-time.
                                                                    </h6>
                                                        </div>


                                                    </div>

                                        </div>
                                </div>
                                 <button className='startopt' type='text' style={{padding: '7px 25px', borderRadius:'8px'}}>Start investing <i class="bi bi-arrow-right"></i></button>
                            </div>
                    </div>
            </div>


            {/*-------------------------------------------Testimonials Section----------------------------------------------*/}

            <div className='container5'>
                <div className='row'>
                    <div className='col-12'>
                            <div className='thead'>
                                <h5 style={{marginBottom:'3rem'}}>Testimonials</h5>
                                    <div className='rhead' style={{marginBottom:'4rem'}}>
                                             <h2>Hear From Our Satisfied Investors</h2>
                                             <button className="rhead1" type="text" style={{padding: '7px 30px', borderRadius:'8px'}}>Read more<i class="bi bi-arrow-right"></i></button>
                                     </div>
                            </div>


                            <div className='people'>
                                <div className='lawal'>
                                    <div className='peoplepix1'>
                                         <h4>Lawal Adeyemi</h4>
                                         <img src={lawal}alt='lawal picture' style={{width:'60px'}}/>
                                    </div> 
                                    <h6>As a busy business, FracVerse simplified real estate investment for me. Its user-friendly platform
                                        and fractional ownership model are game changers!
                                    </h6>
                                </div>

                                <div className='ngozi'>
                                    <div className='peoplepix2'>
                                         <h4>Ngozi Agwuronye</h4>
                                         <img src={ngozi}alt='Ngozi picture' style={{width:'60px'}}/>
                                    </div> 
                                    <h6>FracVerse made real estate approachable for me as a first-time investor. The 'starter plan' i chose
                                        has been an exciting journey and i've seen my investment grow step by step, simple, supportive and truly 
                                        outstanding.
                                    </h6>
                                </div>

                                <div className='shehu'>
                                    <div className='peoplepix3'>
                                         <h4>Shehu Lawal</h4>
                                         <img src={shehu}alt='Shehu picture' style={{width:'60px'}}/>
                                    </div> 
                                    <h6>FracVerse made real estate less intimidating, Transparent processes and affordable investments
                                        aligned perfectly with my financial goals.
                                    </h6>
                                </div>

                            </div>

                            <div className='contact'>
                                <h5 style={{marginBottom:'1rem', marginTop:'3rem'}}>Contact Us</h5>
                                <h2>Have Questions? Contact Us!</h2>
                            </div>

                              
                            <div className='hands'>
                                <div className='handtext'>
                                    
                                    <h5 style={{fontSize:'1.5rem'}}>Whether you're a seasoned or just starting, Our team is here to help. Reach out for personized 
                                        guidance. We're commmitted to making your real estate investment journey seamless and rewarding.
                                    </h5>
                                    <button className='contactbutton' type='text' style={{padding: '7px 25px', borderRadius:'8px', backgroundColor:'#708df5', marginTop:'2rem', fontSize:'1.1rem', fontweight:'bold'}}>Contact Us <i class="bi bi-arrow-right"></i></button>
                                 
                                </div>
                                      <div className="vertical-line"></div>

                                      <img src={hands6} alt='People holding hands' style={{width: '380px', height:'250px'}}/>
                               
                                      
                            </div>

                    </div>
                </div>
            </div>


            {/*----------------------------------footer--Section----------------------*/}


            <div className='containerFooter'>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                            <div className='footerimage'>
                                 <a href='#'><img src={logo} alt='logo' style={{maxWidth: '100px', marginLeft:'1.4rem', marginBottom:'1.5rem'}}/></a>
                                 <h3 style={{fontSize: '1.5rem', paddingTop:'2.5rem', fontWeight:'bold'}}>FracVerse</h3>
                            </div>
                        <ul>
                            <li style={{paddingBottom:'0.9rem'}}>Phone: +23480112Fracverse</li>
                            <li style={{paddingBottom:'0.9rem'}}>Email: Info@franverse.com</li>
                            <li style={{paddingBottom:'0.9rem'}}>Address: FracVerse street Nigeria</li>
                        </ul>
                        <p style={{marginLeft:'1.7rem', marginTop: '2rem'}}>Copyright: <br/> &copy;  2024. FracVerse. All rights reserved.</p> 
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5>Home</h5>
                            <ul>
                                <li style={{paddingBottom:'0.9rem'}}>About Us</li>
                                <li style={{paddingBottom:'0.9rem'}}>Investment Options</li>
                                <li style={{paddingBottom:'0.9rem'}}>How It Works</li>
                                <li style={{paddingBottom:'0.9rem'}}>Testimonials</li>
                                <li style={{paddingBottom:'0.9rem'}}>Contact</li>
                            </ul>
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5>Resources</h5>
                            <ul>
                                 <li style={{paddingBottom:'0.9rem'}}>Blog</li> 
                                 <li style={{paddingBottom:'0.9rem'}}>Newsletter</li>
                            </ul>
                    </div>

                    <div className='col-12 col-md-3'>
                            <h5>Legal</h5>
                            <ul>
                                <li style={{paddingBottom:'0.9rem'}}>Terms</li>
                                <li style={{paddingBottom:'0.9rem'}}>Privacy</li>
                                <li style={{paddingBottom:'0.9rem'}}>Bye Laws</li>
                            </ul>
                    </div>
                </div>

            </div>













        </div>
    );
}




export default Home;