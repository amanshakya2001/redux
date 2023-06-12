import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function Path() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<>hello</>}/>
    </Routes>
  )
}
