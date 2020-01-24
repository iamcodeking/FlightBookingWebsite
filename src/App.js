import React, { Component } from 'react';
import './index.css';
import Header from './Components/headerComponents/Header';
import HomePage from './Components/pages/HomePage';
import Footer from './Components/footerComponent/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Faq from './Components/pages/FAQ';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import ButtonGroup from './Components/pages/ButtonGroupCustom';
import Login from './Components/pages/Login';
import SignUp from './Components/pages/SignUp';
import Hotels from './Components/pages/Hotels';
import ContactUs from './Components/pages/ContactUs';
import Result from './Components/pages/Result';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hotels' component={Hotels} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/result' component={Result} />
        </Router>
        {/* <ButtonGroup /> */}
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
