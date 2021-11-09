import React from 'react'
import Navbar from './components/navbar.js'
import Home from './components/pages/Home.js';
import Collections from './components/pages/Collections.js';
import Men from './components/pages/Men.js';
import Women from './components/pages/Women.js';
import About from './components/pages/About.js';
import Contact from './components/pages/contact.js';

// import {SliderData} from './components/SliderData.js'
// import ImageSlider from './components/imageSlider.js'
import './App.css';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";








function App() {
  return (
    <>

    <Router>
     
      <Navbar/>
      
      <Routes>

       <Route path="/" element={<Home />}></Route>
       <Route path="/Collections" element={<Collections />}></Route>
       <Route path="/Men" element={<Men />}></Route>
       <Route path="/Women" element={<Women />}></Route>
       <Route path="/About" element={<About />}></Route>
       <Route path="/Contact" element={<Contact />}></Route>
       {/* <Route path="/Collections"  element={Collections}/>
       <Route path="/Men"  element={Men}/> */}

      </Routes>


    </Router>
  
   
    {/* <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path="/" component={Home} exact/>
          </Routes>
      
    </BrowserRouter> */}
    
    {/* <ImageSlider slides={SliderData}/> */}
    </>
  );
}


export default App;
