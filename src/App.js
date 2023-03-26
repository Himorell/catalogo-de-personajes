import React from 'react'
import './App.css'
import AllCharacters from './components/AllCharacters'
import OneCharacter from './components/OneCharacter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RickAndMortyLogo from './RickAndMortyLogo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
          <img src={RickAndMortyLogo} alt='Logotipo Rick and Morty' className='logo'></img>
            <Route path='/' element={<AllCharacters></AllCharacters>}></Route>
            <Route path='/character/:id' element={<OneCharacter></OneCharacter>}></Route>
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
