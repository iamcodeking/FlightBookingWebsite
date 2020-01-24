import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Result.css'

export default class Result extends Component {
    constructor(props) {
        super(props);
        var p = this.props.location.state.flights.filter((para)=>{
            return para.destination == this.props.location.state.destFilter;
        })
        this.state = { flights: p}
        console.log(p);
        console.log(this.state.destFilter);
        console.log(this.state.flights);
    }
    render() {
        return (
            <div>
                <div className='container-fluid res-top-div'>
                    <div className='res-bg-div'>
                        <div className='container res-table-div'>
                            <table className='table'>
                                <thead>
                                    <tr className='th-cust-div'>
                                        <th scope="col">Origin</th>
                                        <th scope="col">Destination</th>
                                        <th scope="col">Dept Time</th>
                                        <th scope="col">Total Fare</th>
                                        <th scope="col">Airline</th>
                                        <th scope="col">Booking</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.flights.slice(0, 15).map((flight) => {
                                        return <tr key={flight.flightcode} className='tr-cust-div'>
                                            <td>{flight.origin}</td>
                                            <td>{flight.destination}</td>
                                            <td>{flight.deptime}</td>
                                            <td>{'Rs '+flight.fare.totalfare}</td>
                                            <td>{flight.airline}</td>
                                            <td><button style={{background:'linear-gradient(to right,red,black'}}>Book Now</button></td>
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}