import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Header from './component/shared/Header';

function App() {
  return (
    <div className="lg:px-12">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
