import React from 'react'

const AboutSection = () => {
    return (
        <div id='about'>
            <h2 id='aboutTitle'>About me</h2>

            <p className='mt-4' style={{'width': '60%'}}>
                I am currently pursuing a Diploma in Information Technology at Nanyang Polytechnic. 
                My interest in programming came about when I was in secondary school browsing through 
                the different choices that are available in the polytechnics. I then started to research 
                more about IT and eventually learnt my first programming language (Python) through YouTube
                videos.<br /><br />
                Currently interested in full-stack development, i hope to use my skills and knowledge
                to make tech for public good.
            </p>
        </div>
    )
}

export default AboutSection