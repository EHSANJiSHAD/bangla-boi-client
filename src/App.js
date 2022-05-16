import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';

function App() {
  return (
    <div>

        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>

        <Footer></Footer>
    </div>
  );
}

export default App;
