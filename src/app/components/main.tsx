import React from 'react'
import Image from 'next/image'
import myPic from "../../../data/mypic1.01.png"

const Main = () => {
    return (
        <div className='mainBody' id='home'>
            <div className="mainLeft" data-aos="fade-up">
                <div className="leftHeading">
                    <p>Hello, Its me <span>Ahmed Raza</span></p>
                </div>
                <div className="subHeading">
                    <p>And I am <span>Frontend Developer</span></p>
                </div>
                <div className="leftPara">
                    <p>Passionate about building innovative web solutions and AI-driven chatbots to enhance user experiences.</p>
                </div>
                <div className="leftBtn">
                    <button className="btn btn1">
                        <a href="https://drive.google.com/file/d/1xY8XuI647Zb5VdHcJIPmARlhZOb9U_Je/view?usp=drive_link" target='_blank'>Download CV</a>
                    </button>
                    <button className="btn btn2">
                        <a href="#portfolio">See My Projects</a>
                    </button>
                </div>
            </div>
            <div className="mainRight" data-aos="fade-up">
                {/* <div className="imageContainer"> */}
                <Image src={myPic} alt='mypic' className='image' />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Main