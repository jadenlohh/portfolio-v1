import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'

const ProjectCard = ({ name, description, languages_url, link, github_url }) => {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        axios.get(languages_url).then(response => {
            setLanguages(response.data)
        })
    }, [])

    return (
        <Col md='4' sm='12' className='project-card mt-3'>
            <i className="fa-regular fa-folder pb-4"></i>

            <h5>{name}</h5>
            <p className='pt-2'>{description == null ? 'No description provided' : description}</p>

            <div className='programming-language pb-5'>
                {
                    Object.keys(languages).map(x => {
                        return (
                            <span>{x}</span>
                        )
                    })
                }
            </div>

            <Row className='project-links'>
                <Col md='6' className='px-1'>
                    <Button variant='dark' href={github_url} target='_blank' className='shadow-none w-100'>
                        <i className="fa-brands fa-github"></i> Github
                    </Button>
                </Col>

                {
                    link == '' || link == null ? <Col md='6'></Col> :
                        <Col md='6' className='px-1'>
                            <Button variant='outline-dark' href={link} target='_blank' className='shadow-none w-100'>
                                View <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Button>
                        </Col>
                }
            </Row>
        </Col>
    )
}

export default ProjectCard