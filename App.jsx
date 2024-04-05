import React from 'react'
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login' 
import PageNotFound from './screens/PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
     
     <Routes>
        
     <Route path='*' element = {<PageNotFound/>} /> 

       <Route path='/' element = {<Home/>} />

       <Route path='/register' element={<Register/>} />

       <Route path='/login' element = {<Login/>} />
     </Routes>
     <ToastContainer/>
      
    </Router>
  )
}

export default App