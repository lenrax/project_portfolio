import React from 'react';
import './NavBar.css';

import { Link } from 'react-scroll';


function NavBar()
{
    return (

        <div className="nav_bar">
                    <Link to="about_div" smooth={true} offset={0} duration={500}><span>A</span>bout</Link>
                    <Link to="projects_div" smooth={true} offset={0} duration={500}><span>P</span>ROJECTS</Link>
                    <Link to="contact_div" smooth={true} offset={0} duration={500}><span>C</span>ontact</Link>
                </div>

    );
}

export default NavBar;