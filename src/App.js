
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Component/Banner/Banner';
import Home from './Component/Home/Home';
import Chekout from './Component/Pages/Chekout';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/banner' element ={<Banner/>}/>
            <Route path='/checkout' element ={<Chekout/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
