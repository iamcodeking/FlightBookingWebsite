import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {

    return (
      <div class="container-fluid">
        <div class="row footer-top">
          <div class="col-sm-4 text-center">
            <h4 class="ft-text-title">Aviation</h4>
            <h6 class="ft-desp">India<br />Book now!</h6>
            <h4 class="details">
              <a class="contact" href="tel:+91-1-41123312"><i class="fa fa-phone" aria-hidden="true"></i> +91-12300000</a>
            </h4>
          </div>
          <div class="col-sm-4 text-center border-left">
            <h4 class="ft-text-title">Our Team</h4>
            <div class="address-member">
              <p class="member">
                <b>Director</b> : Kartik Rana
              </p>
              <p class="member">
                <b>Editor</b> : Kartik Rana
              </p>
              <p class="member">
                <b>Reporter</b> : Kartik Rana
              </p>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12 text-center border-left">
            <h4 class="ft-text-title">About</h4>
            <div class="pspt-dtls">
              <a href="#" class="about">Contact Us</a>
              <a href="#" class="advertise">Book Now</a>
              <br /><br /><br /><br /><br /><br /><br />
            </div>
          </div>
        </div>
        <div class="row ft-copyright pt-2 pb-2">
          <div class="col-sm-4 text-pp-crt">copyright 2019 All  Rights Reserved, Aviation.com</div>
        </div>
      </div>
    );
  }
}

export default Footer;
