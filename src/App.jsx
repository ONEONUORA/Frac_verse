

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/landingpage';
import Login from './components/login';
import ErrorPage from './components/errorpage';
import ForgetPassword from './components/forgetpassword';
import ResetPassword from './components/resetpasword';
import SignUp from './components/signup';
import EmailVerification from './components/emailverification';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path='/forgetpassword' element={<ForgetPassword/>}/>
              <Route path='/resetpassword' element={<ResetPassword/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/emailverification' element={<EmailVerification/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

