import React, { Component } from 'react';
import './HomePage.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class HomePage extends Component {
  constructor() {
    super();
    this.state = { show: false, flights: "" };
  }
  submit = (event) => {
    event.preventDefault();
    let a = event.target.inputBox1.value;
    let b = event.target.inputBox2.value;
    let c = event.target.inputBox3.value;
    let realDate = c.split('-');
    console.log(a);
    console.log(b);
    console.log(c);
    axios.get(`http://developer.goibibo.com/api/search/?app_id=46bf9d6f&app_key=a96e999bc074ce9a868a70e637518358&format=json&source=${a}&destination=${b}&dateofdeparture=${realDate[0] + realDate[1] + realDate[2]}&seatingclass=E&adults=1&children=0&infants=0&counter=100`).then(res => {
      this.setState({ show: false, flights: res.data.data.onwardflights });
    })
    setTimeout(() => {
      console.log(this.state.flights);
      this.setState({show: true});
    },5000)
  }
  render() {
    if (this.state.show === false) {
      return (
        <div className='container-fluid' id='mainDiv'>
          <div className='bg-div'>
            <div className='container' id='form-div'>
              <br />
              <form onSubmit={this.submit}>
                <div className="form-row">
                  <div className="col">
                    <input type="text" title='Use IATA code only' className="form-control" placeholder="Origin" id="inputBox1" />
                  </div>
                  <div className="col">
                    <input type="text" title='Use IATA code only' className="form-control" placeholder='Destination' id="inputBox2" />
                  </div>
                  <div className="col">
                    <input type="date" className="form-control" id="inputBox3" />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button className='btn bg-light btn-outline-info btn-lg' id="buttonSub" type='submit'>Search Flights!</button>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <Redirect to={{
          pathname:'/result',
          state:{flights: this.state.flights}
        }}></Redirect>
      );
    }
  }
}
//'../Images/first.jpg'
export default HomePage;
