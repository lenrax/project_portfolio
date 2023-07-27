import './About.css';

import { Link } from 'react-scroll';

function About()
{
    return (

        <div className = "about_div" id = "about_div">
            <div className = "about_div_con">
                <p>I am a skilled front-end developer based in the Philippines, with a strong passion for crafting user-friendly interfaces. My expertise lies in UI/UX design, HTML, CSS, and JavaScript, which serve as the foundation for translating my creative ideas into captivating web experiences.</p>
    
                <p>A fundamental value I hold is a dedication to responsive design, ensuring flawless functionality across all devices, be it desktop or mobile. I strive to deliver seamless and optimized user experiences.</p>
                
                <p>With proficiency in HTML, CSS, and JavaScript, I create captivating web experiences that function seamlessly on various devices. My strong commitment to excellence and enthusiasm empower me to handle diverse web development challenges effectively.</p>
                
                <p>I'm excited about the prospect of working on new projects and utilizing my proficiency in HTML, CSS, and JavaScript to bring innovative designs to life!</p>
    
                <Link to = "contact_div" className = "contact_div_btn" smooth={true} offset={0} duration={500}><b>Let's take it to the next level.</b></Link>
            </div>
        </div>

        
    );
}

export default About;