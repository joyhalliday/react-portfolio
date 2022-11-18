import React from "react";

function PortfolioItem({project}) {
    const {
        name, desc, depolyed, repo, image 
    } = project
    return(<div>
        <img src = {image}></img>
    </div>)
}

export default PortfolioItem