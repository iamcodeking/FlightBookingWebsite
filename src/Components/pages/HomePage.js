import React, { Component } from 'react';
import './HomePage.css';
import ButtonGroup from '../../../node_modules/react-bootstrap/ButtonGroup';
import Button from '../../../node_modules/react-bootstrap/Button';
class HomePage extends Component {
  render() {

    return (
      <div className='container-fluid' id='mainDiv'>
        <div className='bg-div'>
          <div className='container' id='form-div'>
            <br />
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Origin" id="inputBox1" />
                </div>
                <div className='to'>To</div>
                <div className="col">
                  <input type="text" className="form-control" placeholder='Destination' id="inputBox2" />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button className='btn bg-light btn-outline-info btn-lg' id="buttonSub">Search Flights!</button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
//'../Images/first.jpg'
export default HomePage;
