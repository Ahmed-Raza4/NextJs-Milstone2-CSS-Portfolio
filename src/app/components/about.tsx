import React from 'react'
import Image from 'next/image'
import myPic2 from "../../../data/mypic2.01.png"

const About = () => {
  return (
    <div className='mainAbout' id='about'>
        <div className="leftAbout" data-aos="fade-right">
        <Image src={myPic2} alt='mypic' className='image' />
        </div>
        <div className="rightAbout" data-aos="fade-left">
        <div className="aboutHeading">
            <p>About <span>Me</span></p>
        </div>
        <div className="rightSubHeading">
            <p>Frontend Developer</p>
        </div>
        <div className="aboutPara">
            <p>I am IT student specializing in frontend web development, AI solutions, and Web 3.0 technology. With a foundation in HTML, CSS, JavaScript, and TypeScript, and experience in creating responsive websites and advanced chatbots, I aim to bring impactful solutions to clients around the world.</p>
        </div>
        <div className="aboutBtn">
            <button className="btn btn2"><a href="https://www.linkedin.com/in/iahmedraza4/" target='_blank'>
                LinkedIn
                </a></button>
            <button className="btn btn1"> <a href="https://github.com/Ahmed-Raza4" target='_blank'>
                GitHub
                </a></button>
        </div>
        </div>
    </div>
  )
}

export default About