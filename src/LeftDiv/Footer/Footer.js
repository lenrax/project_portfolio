import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faLinkedin, faInstagram);

function Footer()
{
    return (
        <div className="footer_div_con_right">
            <a href="https://www.facebook.com/arnel.henson.7/" target = "blank" className="fa-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="fa-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="fa-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
        </div>
    );
}

export default Footer;