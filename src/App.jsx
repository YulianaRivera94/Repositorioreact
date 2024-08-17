import {Routes, Route  } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './layout/Header/Header'
import { Header1 } from './layout/Header1/Header1';
import { Header2 } from './layout/Header2/Header2';
import { Header3 } from './layout/Header3/Header3';
import { Header4 } from './layout/Header4/Header4';
import './App.css';


export function App() {
  return (
    <>
    <>
    <Navbar/>
    </>
    <div className="container">
    <Routes>
          <Route path="/Header" element={<Header/>} />
          <Route path="/Header1" element={<Header1/>} />
          <Route path="/Header2" element={<Header2/>} />
          <Route path="/Header3" element={<Header3/>} />
          <Route path="/Header4" element={<Header4/>} />
    </Routes>
    </div>
    </>
  );
}
