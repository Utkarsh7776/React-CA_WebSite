
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import Home from "./PAGES/Home";
import Contact from "./PAGES/Contact";
import About from "./PAGES/About";
import Activity from "./PAGES/Activity";
import { Routes,Route } from 'react-router-dom';


function App() {

  return (   

    <>
 <Navbar/><br/>


 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/activity' element={<Activity/>}/>
 </Routes>
 </>
 
 
  );
}

export default App;
