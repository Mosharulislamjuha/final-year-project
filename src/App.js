
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
