
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
// import Skills from './Components/Skills';
import Home from './Components/Home';
import Contact from './Components/Contact';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Skill1 from './Components/Skill1';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        {/* <Route path='/skills' element={<Skills />}/> */}
        <Route path='/contact' element={<Contact />}/>
        <Route path='/skill1' element={<Skill1 />}/>
      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
