import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import './App.css'
import Home from './components/pages/Home'
import Cadastrar from './components/cadastrar/Cadastrar'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastrar />} path='/Cadastrar' />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
