import React, { Component } from 'react';
import './index.css';
import Header from './Components/headerComponents/Header';
import HomePage from './Components/pages/HomePage';
import Footer from './Components/footerComponent/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Faq from './Components/pages/FAQ';
import { BrowserRouter } from 'react-router-dom';
import ButtonGroup from './Components/pages/ButtonGroupCustom';
import Login from './Components/pages/Login';
import SignUp from './Components/pages/SignUp';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Login />
        <SignUp />
        <ButtonGroup />
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
