import './App.css';
import Header from './Components/Header';
import Main from './Main_Body/Main';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './Components/About-me/About';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import {AnimatePresence} from 'framer-motion'
function App() {
  return (

    <div className="App">
<Router>
<Header/>
<AnimatePresence>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/About' element={   <About/>}/>
  <Route path='/Projects' element={  <Projects/> }/>
  <Route path='/Experience' element={ <Experience/>}/>
  <Route path='/Contact' element={ <Contact/>}/>



      </Routes>
      </AnimatePresence>
       
      <Footer/>
    </Router>
     
    </div>
  );
}

export default App;
