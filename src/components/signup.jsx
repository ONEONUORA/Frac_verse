
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/Logo2.png";
// import herologin from "../assets/HerosSectionImage.png";
// import date from '../assets/Group68.png';
// // import { register } from "../api/axios";


// const SignUp = () => {
//     const [submitted, setSubmitted] = useState(false);
//     const [isEmpty, setIsEmpty] = useState(false);
//     const [error, setError] = useState('');
//     const formRef = useRef(null);
  
//     const handleSubmit = asyn (e) => {
//         e.preventDefault();
//         setSubmitted(true);
        

//         const firstName = e.target.firstName.value;
//         const lastName = e.target.lastName.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const confirmPassword = e.target.confirmPassword.value;
//         const phoneNumber = e.target.phoneNumber.value;
//         const dateOfBirth = `${day}/${month}/${year}`;
//         const address = e.target.address.value;
//         const city = e.target.city.value;
//         const state = e.target.state.value;
//         const zipCode = e.target.zipCode.value;

//         if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber || !dateOfBirth  || !address ||!city || !state || !zipCode) {
//             setIsEmpty(true);
//             return;
//         }
//         const response = await register({ firstName, lastName, email, password, confirmPassword, phoneNumber, dateOfBirth,  address, city, state, zipCode });
        

//         if (response.error) {
//             console.error(response.error);
//             setError('Invalid email or password. Please try again.');
//             setIsEmpty(false);
//             setSubmitted(false);
//             return;
//         }

//         setError('');
//         setIsEmpty(false);
//         setSubmitted(false);
//         formRef.current.reset();
//     };


//     return (
//         <>
//             <div className='signuppage'>
//                 <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '150vh', position: 'fixed' }} />

//                 <div style={{ display: 'flex', justifyContent: 'center', marginRight: '6rem', paddingTop: "2rem", paddingBottom: '1.5rem' }}>
//                     <Link to='/'><img src={logo} alt='Brand Logo' style={{ position: 'absolute', width: '100px' }} /></Link>
//                 </div>

//                 <div className="already" style={{ position: 'absolute' }}>
//                     <p style={{ color: 'white' }}>Already have an account?</p>
//                     <Link to="/login" className="line"><p style={{ color: 'green' }}>Login</p></Link>
//                 </div>

//                 <div style={{ display: 'flex', justifyContent: 'center' }}>

//                     <form onSubmit={handleSubmit} className='formsignup' style={{ border: '1px solid white)', borderTopLeftRadius: "3rem", borderBottomRightRadius: '3rem', position: 'absolute', backgroundColor: 'white', marginTop: '7rem', minWidth: '30%', padding: '1rem' }}>

//                         {isEmpty && <div className="alert alert-danger">Please fill in all required fields</div>}

//                         <div style={{ textAlign: 'center' }}>
//                             <h5 style={{ fontWeight: 'bold', fontSize: '23px' }}>Welcome</h5>
//                             <p>Lets begin your invester journey</p>
//                         </div>

//                         <div style={{ display: 'flex', gap: '20px', textAlign: 'center', justifyContent: 'center', marginBottom: '20px' }}>
//                             <span><h6>Investor</h6></span>
//                             <h6>Property Owner</h6>
//                         </div>


//                         <h6 style={{ marginBottom: '10px' }}>Full Name</h6>

//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <select id="Title" name="Title" style={{ width: '60px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }}>
//                                 <option value="">Miss</option>
//                                 <option value="">Mr</option>
//                                 <option value="">Mrs</option>
//                             </select>

//                             <input type='text' id='text' name="firstName" className='form-control' placeholder='First-Name' style={{ marginBottom: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />
//                             <input type='text' id='text' name="lastName" className='form-control' placeholder='Last-Name' style={{ marginBottom: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />
//                         </div>


//                         <h6 style={{ marginBottom: '10px' }}>E-Mail</h6>
//                         <input type='email' id='email' name="email" className='form-control' style={{ marginBottom: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />

//                         <h6 style={{ marginBottom: '10px' }}>Password</h6>
//                         <input type='password' id='password' name="password" className='form-control' style={{ marginBottom: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />

//                         <h6 style={{ marginBottom: '10px' }}>Confirm Password</h6>
//                         <input type='password' id='password' name="confirmPassword" className='form-control' style={{ marginBottom: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />

//                         <h6 style={{ marginBottom: '10px' }}>Phone Number</h6>
//                         <input type='tel' id='tel' name="phoneNumber" className='form-control' style={{ marginBottom: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />

//                         <h6 style={{ marginBottom: '10px' }}>Date Of Birth (DD/MM/YYYY)</h6>

//                         <div name='dateOfBirth' style={{ display: 'flex', gap: '10px' }}>
//                                     <select id="day" name="day"  style={{ width: '60px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }}>
//                                         <option value="">Day</option>
//                                              {Array.from({ length: 31 }, (_, index) => index + 1).map(day => (
//                                          <option key={day} value={day}>{day}</option>
//                                         ))}
//                                     </select>

//                                     <select id="month" name="month"  style={{ width: '70px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }}>
//                                         <option value="">Month</option>
//                                                 {Array.from({ length: 12 }, (_, index) => index + 1).map(month => (
//                                         <option key={month} value={month}>{month}</option>
//                                         ))}
//                                     </select>

//                                      <select id="year" name="year"  style={{ width: '60px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }}>
//                                          <option value="">Year</option>
//                                                   {Array.from({ length: 2024 - 1950 + 1 }, (_, index) => 1950 + index).map(year => (
//                                          <option key={year} value={year}>{year}</option>
//                                          ))}
//                                      </select>

//                                         <img src={date} alt="date calendar" style={{ width: '30px' }} />
//                         </div>

//                         <h6 style={{ marginTop: '20px' }}>Address</h6>
//                         <input type='text' id='text' name="address" className='form-control' style={{ marginBottom: '20px', marginTop: '20px', backgroundColor: 'rgb(174, 171, 171)' }} />

//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <div>
//                                 <h6>City</h6>
//                                 <input type="text" id="text" name="city" className="form-control" style={{ width: '100px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }} />
//                             </div>

//                             <div>
//                                 <h6>State</h6>
//                                 <input type="text" id="text" name="state" className="form-control" style={{ width: '100px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }} />
//                             </div>

//                             <div>
//                                 <h6>Zip-Code</h6>
//                                 <input type="number" id="number" name="zipCode" className="form-control" style={{ width: '100px', height: '35px', borderRadius: '5px', backgroundColor: 'rgb(174, 171, 171)' }} />
//                             </div>
//                         </div>

//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <button className='contactbutton3' type='submit' style={{ padding: '7px 18px', borderRadius: '8px', marginTop: '2rem', fontSize: '15px', fontWeight: 'bold', marginBottom: '2rem' }}>Register <i className="bi bi-arrow-right"></i></button>
//                         </div>

//                     </form>

//                     {submitted && <p>Form submitted!</p>}
//                 </div>
//             </div>
//         </>
//     )


// export default SignUp;



import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png";
import herologin from "../assets/HerosSectionImage.png";
import date from '../assets/Group68.png';
import { register } from "../api/axios"; // Import the register function

const SignUp = () => {
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

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const phoneNumber = e.target.phoneNumber.value;
        const day = e.target.day.value;
        const month = e.target.month.value;
        const year = e.target.year.value;
        const dateOfBirth = `${day}/${month}/${year}`;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const state = e.target.state.value;
        const zipCode = e.target.zipCode.value;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber || !dateOfBirth || !address || !city || !state || !zipCode) {
            setIsEmpty(true);
            return;
        }

        const response = await register({ firstName, lastName, email, password, confirmPassword, phoneNumber, dateOfBirth, address, city, state, zipCode });

        if (response.error) {
            console.error(response.error);
            setError('Invalid Details. Please try again.');
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
            <div className='signuppage'  style={{fontFamily:'fredoka'}}>
                <img src={herologin} alt="Background Image" style={{ width: '100%', minHeight: '150vh', position: 'fixed' }} />

                <div style={{ display: 'flex', justifyContent: 'center', marginRight: '6rem', paddingTop: "2rem", paddingBottom: '1.5rem' }}>
                    <Link to='/'><img src={logo} alt='Brand Logo' style={{ position: 'absolute', width: '100px' }} /></Link>
                </div>

                <div className="already" style={{ position: 'absolute', display:'flex', gap:'20px', textAlign:'center', paddingTop:'5rem', paddingLeft:'37rem'}}>
                    <p style={{ color: 'white' }}>Already have an account?</p>
                    <Link to="/login" className="line"><p style={{ color: 'green' }}>Login</p></Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <form ref={formRef} onSubmit={handleSubmit} className='formsignup' style={{ border: '1px solid white', borderTopLeftRadius: "3rem", borderBottomRightRadius: '3rem', position: 'absolute', backgroundColor: 'white', marginTop: '7rem', minWidth: '30%', padding: '1rem' }}>

                        {isEmpty && <div className="alert alert-danger">Please fill in all required fields</div>}
                        {error && <div className='alert alert-danger'>{error}</div>}

                        <div style={{ textAlign: 'center' }}>
                            <h5 style={{ fontWeight: 'bold', fontSize: '23px' }}>Welcome</h5>
                            <p>Lets begin your invester journey</p>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', textAlign: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <span><h6>Investor</h6></span>
                            <h6>Property Owner</h6>
                        </div>

                        <h6 style={{ marginBottom: '10px' }}>Full Name</h6>   

                        <div style={{ display: 'flex', gap: '10px' }}>

                                <select id="Title" name="Title" style={{ width: '60px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9'}}>
                                            <option value="">Miss</option>
                                            <option value="">Mr</option>
                                             <option value="">Mrs</option>
                                  </select>

                                  <input type='text' id='text' name="firstName" className='form-control' placeholder='First-Name' style={{ marginBottom: '20px', backgroundColor: '#D9D9D9' }} />
                                  <input type='text' id='text' name="lastName" className='form-control' placeholder='Last-Name' style={{ marginBottom: '20px', backgroundColor: '#D9D9D9' }} />
                         </div>


                         <h6 style={{ marginBottom: '10px' }}>E-Mail</h6>
                        <input type='email' id='email' name="email" className='form-control' style={{ marginBottom: '20px', backgroundColor: '#D9D9D9' }} />

                        <h6 style={{ marginBottom: '10px' }}>Password</h6>
                        <i
                              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                              style={{ position: 'absolute',  cursor: 'pointer', paddingLeft:'28rem', paddingTop:'10px' }}
                              onClick={togglePasswordVisibility}
                        ></i> 
                        <input type={showPassword ? 'text' : 'password'} id='password' name="password" className='form-control' style={{ marginBottom: '20px', backgroundColor: '#D9D9D9' }} />

                         <h6 style={{ marginBottom: '10px' }}>Confirm Password</h6>
                         <i
                              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                              style={{ position: 'absolute', cursor: 'pointer', paddingLeft:'28rem', paddingTop:'10px'  }}
                              onClick={togglePasswordVisibility}
                        ></i> 
                         <input type={showPassword ? 'text' : 'password'}  id='password' name="confirmPassword" className='form-control' style={{ marginBottom: '20px', backgroundColor: '#D9D9D9' }} />
                        
                         <h6 style={{ marginBottom: '10px' }}>Phone Number</h6>
                        <input type='tel' id='tel' name="phoneNumber" className='form-control' style={{ marginBottom: '20px', backgroundColor: '#D9D9D9' }} />

                       <h6 style={{ marginBottom: '10px' }}>Date Of Birth (DD/MM/YYYY)</h6>

                        <div name='dateOfBirth' style={{ display: 'flex', gap: '10px' }}>
                                  <select id="day" name="day"  style={{ width: '60px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9' }}>
                                        <option value="">Day</option>
                                             {Array.from({ length: 31 }, (_, index) => index + 1).map(day => (
                                             <option key={day} value={day}>{day}</option>
                                        ))}
                                   </select>

                                    <select id="month" name="month"  style={{ width: '70px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9' }}>
                                       <option value="">Month</option>
                                               {Array.from({ length: 12 }, (_, index) => index + 1).map(month => (
                                              <option key={month} value={month}>{month}</option>
                                       ))}
                                   </select>
                                    <select id="year" name="year"  style={{ width: '60px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9' }}>
                                         <option value="">Year</option>
                                                  {Array.from({ length: 2024 - 1950 + 1 }, (_, index) => 1950 + index).map(year => (  
                                                    <option key={year} value={year}>{year}</option>                                       
                                         ))}
                                    </select>

                                        <img src={date} alt="date calendar" style={{ width: '30px' }} />
                        </div>

                        <h6 style={{ marginTop: '20px' }}>Address</h6>
                        <input type='text' id='text' name="address" className='form-control' style={{ marginBottom: '20px', marginTop: '20px', backgroundColor: '#D9D9D9' }} />

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div>
                                <h6>City</h6>
                               <input type="text" id="text" name="city" className="form-control" style={{ width: '100px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9' }} />
                          </div>

                            <div>
                               <h6>State</h6>
                                <input type="text" id="text" name="state" className="form-control" style={{ width: '100px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9' }} />                             </div>

                           <div>
                                <h6>Zip-Code</h6>
                                 <input type="number" id="number" name="zipCode" className="form-control" style={{ width: '100px', height: '35px', borderRadius: '5px', backgroundColor: '#D9D9D9' }} />
                           </div>
                       </div>


                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className='contactbutton3' type='submit' style={{ padding: '7px 18px', borderRadius: '8px', marginTop: '2rem', fontSize: '15px', fontWeight: 'bold', marginBottom: '2rem' }}>Register <i className="bi bi-arrow-right"></i></button>
                        </div>

                    </form>

                    {submitted && <p>Form submitted!</p>}
                </div>
            </div>
        </>
    )
};

export default SignUp;

