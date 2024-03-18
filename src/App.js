import './App.css';
import Home from './components/home';
import About from './components/about';
import Invest from './components/investment';
import Blog from './components/blog';
import Contact from './components/contact';
import Login from './components/login';
import SignUp from './components/signup';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/investment' element={<Invest/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>




        </Routes>
       
    </div>
  );
}

export default App;
