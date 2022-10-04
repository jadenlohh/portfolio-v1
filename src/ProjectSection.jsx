import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import ProjectCard from './components/ProjectCard'

const ProjectSection = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/jadenlohh/repos').then(response => {
            setProjects(response.data)
        })
    }, [])

    return (
        <div id='projects'>
            <h2 className='text-center'>My Projects</h2>

            <Row className='mt-4'>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} name={project.name} description={project.description} languages_url={project.languages_url} link={project.homepage} github_url={project.html_url} />
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default ProjectSection