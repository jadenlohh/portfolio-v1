import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ProjectSection = () => {
    return (
        <div id='project'>
            <h2 className='text-center'>My Projects</h2>

            <Row className='mt-5 gx-5' style={{'padding': '0 12% 0 14%'}}>
                <Col md='4'>
                    <div className='px-4 py-4'>
                        <i className="fa-regular fa-folder pb-4" style={{'fontSize': '40px'}}></i>
                        <h5>Weather Forecast</h5>
                        <p className='pt-2'>A weather forecast application used to show the weather in Singapore</p>

                        <span className='language'>HTML</span>
                        <span className='language'>CSS</span>
                        <span className='language'>JS</span>
                    </div>
                </Col>

                <Col md='4'>
                    <div className='px-4 py-4'>
                        <i className="fa-regular fa-folder pb-4" style={{'fontSize': '40px'}}></i>
                        <h5>Weather Forecast</h5>
                        <p className='pt-2'>A weather forecast application used to show the weather in Singapore</p>

                        <span className='language'>HTML</span>
                        <span className='language'>CSS</span>
                        <span className='language'>JS</span>
                    </div>
                </Col>

                <Col md='4'>
                    <div className='px-4 py-4'>
                        <i className="fa-regular fa-folder pb-4" style={{'fontSize': '40px'}}></i>
                        <h5>Weather Forecast</h5>
                        <p className='pt-2'>A weather forecast application used to show the weather in Singapore</p>

                        <span className='language'>HTML</span>
                        <span className='language'>CSS</span>
                        <span className='language'>JS</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectSection