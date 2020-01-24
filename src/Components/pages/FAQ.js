import React, { Component, useState } from 'react';
import './FAQ.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Faq extends Component {
    render() {

        return (
            <div className='container-fluid bg-light'>
                <div className='container'>
                    <br /><br />
                    <div className='container cust-helper'>
                        Continue scrolling to read more.<br/>
                        <i className="far fa-arrow-alt-circle-down"></i>
                    </div>
                    <br/>
                    <br />
                    <h2>Frequently Asked Questions</h2>
                    <br />
                    <Accordion>
                        <Card className='color-card'>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className='acc-custom'>
                                What are the advantages of online flight booking?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Through online air ticket booking you can easily compare prices of multiple airlines to get your air tickets at lowest rates.
                             Also, it is easy to do online flight booking as multiple payment options are available on websites like <strong>Aviation</strong>.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='color-card'>
                            <Accordion.Toggle as={Card.Header} eventKey="1" className='acc-custom'>
                                When should i book to get the best ticket prices?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>For best flight ticket prices and flight ticket offers, it is recommended to book at least 3 to 4 weeks in advance for domestic air tickets. For international flight ticket it is recommended to book at least 7 to
                                 8 weeks in advance, so that you can get the best flight ticket prices.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='color-card'>
                            <Accordion.Toggle as={Card.Header} eventKey="2" className='acc-custom'>
                                Will my money be refunded if I cancel my tickets?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Money will only be refunded if tickets are canceled 2 days before the flight. We do not refund money in case of missed flights.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='color-card'>
                            <Accordion.Toggle as={Card.Header} eventKey="3" className='acc-custom'>
                                How long will it take for the money to get refunded?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>It usually takes 3-4 working days for the money to be refunded to your bank account.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='color-card'>
                            <Accordion.Toggle as={Card.Header} eventKey="4" className='acc-custom'>
                                What are the popular flight routes?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body><ul>Some of the popular domestic flight routes are:
                                        <li>Delhi to Mumbai Flights</li>
                                        <li>Delhi to Bangalore Flights</li>
                                        <li>Mumbai to Bangalore Flights</li>
                                        <li>Pune to Delhi Flights</li>
                                        <li>Delhi to Goa Flights</li>
                                    </ul>
                                    <ul>Some of the popular international flight routes are:
                                        <li>Delhi to Dubai Flights</li>
                                        <li>Kolkata to Bangkok Flights</li>
                                        <li>Mumbai to Hong Kong Flights</li>
                                        <li>Delhi to Bangkok Flights</li>
                                        <li>Delhi to Singapore Flights</li>
                                    </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default Faq;
