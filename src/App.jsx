import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { About } from './About'

import './App.css'




function App(){  

    return (  
    <>
    <h1>Hello</h1>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
 
    </Routes>
    </>
  );
}

export default App



