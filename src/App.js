import './App.css';
import AllCharacters from './components/AllCharacters'
import OneCharacter from './components/OneCharacter'
import { BrowserRouter } from 'react-router-dom'
import RickAndMortyLogo from './'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AllCharacters></AllCharacters>}></Route>
            <Route path='/character/:id' element={<OneCharacter></OneCharacter>}></Route>
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
