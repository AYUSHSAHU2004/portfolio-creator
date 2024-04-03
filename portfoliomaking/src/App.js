import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Home1 from './Home1'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App