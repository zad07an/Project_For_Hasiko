import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import First_Page from './pages/First_Page/First_Page'
import Fourth_Page from './pages/Fourth_Page/Fourth_Page'
import Second_Page from './pages/Second_Page/Second_Page'
import Sixth_Page from './pages/Sixth_Page/Sixth_Page'

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const modalIsActive = () => setShowModal(!showModal);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<First_Page/>} />
        <Route path='/second-page' element={<Second_Page/>} />
        <Route path='/third-page' element={<Fourth_Page modalIsActive={modalIsActive} showModal={showModal} setShowModal={setShowModal}/>} />
        <Route path='/fourth-page' element={<Sixth_Page/>} />
      </Routes>
    </div>
  )
}

export default App
