export default function About() {
    return (
        <div className="about">
          <h1>About</h1>
        <img src={require('../../assets/icon.jpg')} alt="Joy Halliday photo" className="rounded-circle"/>
        <p className="content is-italic mt-4">
          I'm Joy, a student of a coding bootcamp through the University of Arizona.
        </p>
        <p className="content">
        I have been excited to learn new skills in programming and expand my horizons!
        </p>
      </div>
    );
  }

