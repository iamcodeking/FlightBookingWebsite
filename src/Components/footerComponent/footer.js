import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {

    return (
      <div className="container-fluid">
        <div className="row footer-top">
          <div className="col-sm-4 text-center">
            <h4 className="ft-text-title">Aviation</h4>
            <h6 className="ft-desp">India<br />Book now!</h6>
            <h4 className="details">
              <a className="contact" href="tel:+91-1-41123312"><i className="fa fa-phone" aria-hidden="true"></i> +91-12300000</a>
            </h4>
          </div>
          <div className="col-sm-4 text-center border-left">
            <h4 className="ft-text-title">Our Team</h4>
            <div className="address-member">
              <p className="member">
                <b>Director</b> : Kartik Rana
              </p>
              <p className="member">
                <b>Editor</b> : Kartik Rana
              </p>
              <p className="member">
                <b>Reporter</b> : Kartik Rana
              </p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 text-center border-left">
            <h4 className="ft-text-title">About</h4>
            <div className="pspt-dtls">
              <a href="#" className="about">Contact Us</a>
              <a href="#" className="advertise">Book Now</a>
              <br /><br /><br /><br /><br /><br /><br />
            </div>
          </div>
        </div>
        <div className="row ft-copyright pt-2 pb-2">
          <div className="col-sm-4 text-pp-crt">copyright 2019 All  Rights Reserved, Aviation.com</div>
        </div>
      </div>
    );
  }
}

export default Footer;
