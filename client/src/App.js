import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import authApi from "./api/auth";
import UserContext from "./context/userContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import PrivateRoute from "./components/routes/PrivateRoute";
import Sell from "./Pages/Sell";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
    const [user, setUser] = useState(null);
    const [userLogin, setUserLogin] = useState(true);

    useEffect(() => {
        setUser(authApi.getUser() || null);
        setUserLogin(false);
    }, []);

  return (
      <BrowserRouter>
          <UserContext.Provider value={{ user, setUser, userLogin, setUserLogin }}>
              <ToastContainer/>
              <NavBar/>

              <Routes>
                  <Route path={'/products/:id'} element={<Product/>}/>
                  <Route path={'/register'} element={<Register/>}/>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path={'/sell'} element={<PrivateRoute><Sell/></PrivateRoute>}/>
                  <Route path={'/cart'} element={<PrivateRoute><Cart/></PrivateRoute>}/>
                  <Route path={'/'} element={<PrivateRoute><Home/></PrivateRoute>}/>
              </Routes>

          </UserContext.Provider>
      </BrowserRouter>
);
}

export default App;
