import React, { Component } from 'react';
import './ButtonGroupCustom.css';
class ButtonGroupCustom extends Component {
    render() {

        return (
            <div className='container'>
                <div class="btn-group btn-group-lg container button-holder" role="group" aria-label="Basic example">
                    <button type="button" class="btn custom-but"><i class="far fa-check-circle"></i>&ensp;Best Price Guarantee</button>
                    <button type="button" class="btn custom-but"><i class="far fa-check-circle"></i>&ensp;No Booking fees on Single-Carrier Flights</button>
                    <button type="button" class="btn custom-but"><i class="far fa-check-circle"></i>&ensp;Deals on Hotels Too!</button>
                </div>
            </div>
        );
    }
}

export default ButtonGroupCustom;