import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/common.css';
import Home from './Home.jsx';
import Store from './components/Store.jsx';
import Favour from './components/Favour.jsx'
import Checkout from './components/Checkout.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/favour" element={<Favour/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
