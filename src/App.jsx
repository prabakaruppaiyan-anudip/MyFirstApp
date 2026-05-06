import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ItemForm from './ItemForm.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Header />
      <Routes>
       <Route path='/' element={<Home />} ></Route>
        <Route path='/itemform' element={<ItemForm />} />
      </Routes>
     <Footer />
    </BrowserRouter>     
    </>
  )
}

export default App
