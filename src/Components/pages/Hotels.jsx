import React, { Component } from 'react'
import './Hotels.css';

export default class Hotels extends Component {
    render() {
        return (
            <div className='container-fluid' id='mainDivHotels'>
            <div className='bg-div1'>
              <div className='container' id='form-divHotels'>
                <br />
                <form>
                  <div className="form-row">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Hotel" id="inputBox1" />
                    </div>
                    <div className='to'>To</div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder='Destination' id="inputBox2" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button className='btn bg-light btn-outline-info btn-lg' id="buttonSub1">Search Hotels!</button>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        )
    }
}
