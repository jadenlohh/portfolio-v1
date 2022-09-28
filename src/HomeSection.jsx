import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Portrait from './Images/portrait.jpg'
import './App.css'

const HomeSection = () => {
    return (
        <>
            <Row className='main mt-5'>
                <Col md='6' className='text'>
                    <h1 className='maintext1 mb-0'>Hello!</h1>
                    <h1>I am Jaden</h1>

                    <p>A year 2 student studying at Nanyang Polytechnic</p>
                </Col>

                <Col md='6' className='text-center'>
                    <Image fluid='true' src={Portrait} id='portrait' />
                </Col>
            </Row>

            <i className="fa-solid fa-chevron-down" id='arrowDown'></i>
        </>
    )
}

export default HomeSection