import './ContactDiv.css';

function ContactDiv()
{
    return (
        <div class = "contact_div" id = "contact_div">
            <div class = "contact_div_con">
                <h1>*Send me a message</h1>
                <form class = "contact_form" id = "contact_form" name = "contact_form">
                    <div>
                        <input type = "text" placeholder="NAME" />
                        <input type = "email" placeholder="EMAIL" />
                    </div>
                    <div>
                        <input type = "text" placeholder="SUBJECT" />
                     </div>
                    <div>
                        <textarea rows="10"></textarea>
                     </div>
					<div class = "send_btn_div">
                     <button type = "submit">Send</button>
                     </div>
                </form>
            </div>
		</div>

    );
}

export default ContactDiv;