
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Component/Banner/Banner';
import Home from './Component/Home/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/banner' element ={<Banner/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
