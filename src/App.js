import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import Manage from './pages/Manage/Manage';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>

        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/manage/:id' element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>

        <Footer></Footer>

        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
