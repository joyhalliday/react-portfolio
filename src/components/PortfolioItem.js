import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// function PortfolioItem({project}) {
//     const {
//         name, desc, depolyed, repo, image 
//     } = project
//     return(<div>
//         <img src = {image}></img>
//     </div>)
// }

function PortfolioItem({project}) {
    const {
        name, desc, depolyed, repo, image 
    } = project
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src = {image} /> 
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button variant="primary">Repo</Button>
          <Button variant="primary">Deployed</Button>
        </Card.Body>
      </Card>
    );
  }


export default PortfolioItem