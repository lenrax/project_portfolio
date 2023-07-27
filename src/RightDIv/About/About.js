import './About.css';

import { Link } from 'react-scroll';

function About()
{
    return (

        <div className = "about_div" id = "about_div">
            <div className = "about_div_con">
                <p>I am a front-end developer in the Philippines with a passion for designing beautiful and intuitive user interfaces. With over three years of experience in the industry, I have developed a deep understanding of UI/UX design and am proficient in HTML, CSS, and JavaScript. I use these languages to bring my creative vision to life and create engaging web experiences.</p>
    
                <p>One of my core values is a dedication to responsive design, ensuring that the websites I build work flawlessly on any device. Whether it's a desktop or a mobile phone, I strive to provide a seamless and optimized user experience. Attention to detail and a sharp eye for aesthetics are qualities I take pride in, as they contribute to the high-quality work I deliver.</p>
                
                <p>Approaching every project with enthusiasm and a commitment to excellence is my mindset, regardless of its size. My skills and expertise enable me to tackle any web development task, utilizing HTML, CSS, and JavaScript to implement interactive and dynamic features. I aim to create unique and memorable user experiences that leave a lasting impression on visitors.</p>
                
                <p>I'm excited about the prospect of working on new projects and utilizing my proficiency in HTML, CSS, and JavaScript to bring innovative designs to life!</p>
    
                <Link to = "contact_div" className = "contact_div_btn" smooth={true} offset={0} duration={500}><b>Let's take it to the next level.</b></Link>
            </div>
        </div>

        
    );
}

export default About;