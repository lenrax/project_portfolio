import './RightDiv.css';

import About from './About/About';
import ProjectsDiv from './ProjectsDiv/ProjectsDiv';
import ContactDiv from './ContactDiv/ContactDiv';

function RightDiv()
{
    return (
        <div className = "right_div">
            <div className = "right_div_con">
                <About />
                <ProjectsDiv />
                <ContactDiv />			
            </div>
        </div>

    );
}

export default RightDiv;