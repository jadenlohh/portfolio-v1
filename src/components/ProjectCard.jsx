import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'

const ProjectCard = ({ name, description, languages_url, link, github_url }) => {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        axios.get(languages_url).then(response => {
            setLanguages(response.data)
        })
    }, [])

    return (
        <Col xxl='3' xl='4' lg='4' md='6' sm='12' className='project-card mt-3'>
            <Card className='h-100 w-100'>
                <Card.Body>
                    <i className="fa-regular fa-folder pb-4"></i>

                    <h5>{name}</h5>
                    <p className='pt-2'>{ description == null ? 'No description provided' : description }</p>

                    <div className='programming-language pb-5'>
                        {
                            Object.keys(languages).map((x, index) => {
                                return (
                                    <span key={index}>{x}</span>
                                )
                            })
                        }
                    </div>

                    <Row className='project-links'>
                        <Col md='6' sm='12' className='pe-1'>
                            <Button variant='dark' href={github_url} target='_blank' className='shadow-none w-100'>
                                <i className="fa-brands fa-github"></i> Github
                            </Button>
                        </Col>

                        {
                            link === '' || link === null ? 
                                <Col md='6' sm='12'></Col> :
                                    <Col md='6' sm='12' className='view-btn-container'>
                                        <Button variant='outline-dark' href={link} target='_blank' className='shadow-none w-100' id='view-btn'>
                                            View <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </Button>
                                    </Col>
                        }
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard