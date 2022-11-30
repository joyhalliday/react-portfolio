import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PortfolioItem({project}) {
    const {
        name, desc, deployed, repo, image 
    } = project
    return (
    <Card style={{ width: '25rem' }}>
        <img variant="top" src = {require(`../assets/${image}`)} /> 
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <a href={repo}><Button variant="primary">Repo</Button></a>
        <a href={deployed}><Button variant="primary">Deployed</Button></a>
        </Card.Body>
    </Card>
    );
}


export default PortfolioItem