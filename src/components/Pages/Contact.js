import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
    <div>
        <h1>Contact</h1>
        <p>
        Connect with me!
        </p>
        <a className='me-4' href="mailto:tjoyhalliday@gmail.com"><Button className='btn-primary'  >Email</Button>{''}</a>
        <a className='me-4' href="https://github.com/joyhalliday"><Button className='btn-primary' >Github</Button>{''}</a>
        <a className='me-4' href="https://www.linkedin.com/in/joy-halliday"><Button className='btn-primary' >Linkedin</Button>{''}</a>
    </div>
    );
}



