import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contacts from'./Pages/Contacts'
import Blog from'./Pages/Blog'
import Cart from'./Pages/Cart'
import Header from "./Components/Header";


function App() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      </div>
  );
}

export default App;
