import React, { Component } from 'react';
import './ButtonGroupCustom.css';
class ButtonGroupCustom extends Component {
    render() {

        return (
            <div className='container'>
                <div class="btn-group btn-group-lg container button-holder" role="group" aria-label="Basic example">
                    <button type="button" class="btn custom-but"><i class="far fa-check-circle"></i>&ensp;Best Price Guarantee</button>
                    <button type="button" class="btn custom-but"><i class="far fa-check-circle"></i>&ensp;No Booking fees <div className="d-none d-sm-inline d-md-inline d-lg-inline">on Single-Carrier Flights</div></button>
                    <button type="button" class="btn custom-but"><i class="far fa-check-circle"></i>&ensp;<div className="d-none d-sm-inline d-md-inline d-lg-inline">Deals on</div> Hotels Too!</button>
                </div>
            </div>
        );
    }
}

export default ButtonGroupCustom;