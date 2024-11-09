import React from 'react'
import Image from 'next/image'
import fruits from "../../../data/fruits1.jpg"
import medical from "../../../data/medical.jpg"
import counter from "../../../data/counter1.png"
import resume from "../../../data/resume.png"
import resume2 from "../../../data/resume2.png"
import student from "../../../data/student.jpg"

const Portfolio = () => {
    return (
        <div className='mainPortfolio' id='portfolio'>
            <div className="portfolioHeading" >
                <p><span>My </span>Portfolio</p>
            </div>
            <div className="mainProjects">
                <h1><span>Projects: </span></h1>
                <p className='proFirstPara'>Continuous learning through courses is essential in every field, especially in the rapidly evolving world of IT. Below is a detailed list of the courses I have completed or am currently pursuing in the IT field.</p>
                <div className="proBlogParent">
                    <div className="proBlogChild" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="imageContainer">
                            <Image className="imagePro" src={fruits} alt="fruits" />
                        </div>
                        <h1 className="proBlogTitle"><a href="https://assignment4-5.vercel.app/" target='-blank'>
                            Fruits Valley - Health Blog</a>
                        </h1>
                    </div>
                    <div className="proBlogChild" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="imageContainer" >
                            <Image className="imagePro" src={medical} alt="medical" />
                        </div>
                        <h1 className="proBlogTitle"><a href="https://smit-mini-hackathon-health-care.vercel.app/" target='-blank'>
                            The Stone Solution - Kidney Health Hub</a>
                        </h1>
                    </div>
                    <div className="proBlogChild" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="imageContainer">
                            <Image className="imagePro" src={student} alt="student" />
                        </div>
                        <h1 className="proBlogTitle"><a href="https://github.com/Ahmed-Raza4/Project06_student_management_system" target='-blank'>
                            Student Management System</a>
                        </h1>
                    </div>
                    <div className="proBlogChild" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="imageContainer">
                            <Image className="imagePro" src={counter} alt="student" />
                        </div>
                        <h1 className="proBlogTitle"><a href="https://github.com/Ahmed-Raza4/Project06_student_management_system" target='-blank'>
                            Student Management System</a>
                        </h1>
                    </div>
                    <div className="proBlogChild" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="imageContainer">
                            <Image className="imagePro" src={resume} alt="resume" />
                        </div>
                        <h1 className="proBlogTitle"><a href="https://my-resume-ivory-xi.vercel.app/" target='-blank'>
                            Functional Resume - HTML, CSS & JS</a>
                        </h1>
                    </div>
                    <div className="proBlogChild" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="imageContainer">
                            <Image className="imagePro" src={resume2} alt="resume" />
                        </div>
                        <h1 className="proBlogTitle"><a href="https://hackaton-resume-builder-pdf.vercel.app/" target='-blank'>
                            Resume Builder with Download Feature</a>
                        </h1>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Portfolio