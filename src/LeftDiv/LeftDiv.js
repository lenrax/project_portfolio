import './LeftDiv.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';



function LeftDiv()
{
    return (
        <div class = "left_div">
            <div class = "left_div_con">
                <b>Hello, My name is</b> 
                <h1><b id = "f_letter">A</b>rnel,</h1>
                <h2>Front-End Developer</h2>
                
                <NavBar />
                <Footer />
            </div>
        </div>


    );
}

export default LeftDiv;
