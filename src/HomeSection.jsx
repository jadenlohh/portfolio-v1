import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Portrait from './Images/portrait.jpg'
import './App.css'

const HomeSection = () => {
    return (
        <>
            <Row className='main'>
                <Col md='6' className='text'>
                    <h1 className='mb-0'>Hello!</h1>
                    <h1>I am Jaden</h1>

                    <p>A year 2 student studying at Nanyang Polytechnic</p>
                </Col>

                <Col md='6' className='portrait-container text-center'>
                    <Image fluid='true' src={Portrait} id='portrait' />
                </Col>
            </Row>

            <i className="fa-solid fa-chevron-down" id='arrow-down'></i>
        </>
    )
}

export default HomeSection