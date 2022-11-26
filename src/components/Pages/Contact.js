import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
    <div>
        <h1>Contact</h1>
        <p>
        Connect with me!
        <a href="mailto:tjoyhalliday@gmail.com"><Button variant="primary"  >Email</Button>{''}</a>
        <a href="https://github.com/joyhalliday"><Button variant="primary"  >Github</Button>{''}</a>
        <a href="https://www.linkedin.com/in/joy-halliday"><Button variant="primary" >Linkedin</Button>{''}</a>
        </p>
    </div>
    );
}



