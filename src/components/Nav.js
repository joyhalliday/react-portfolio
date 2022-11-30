import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';

function Nav(props) {
const { pages = [], setCurrentPage, currentPage } = props;
console.log(currentPage)
return (
    <nav>
    <div className="d-flex justify-content-end list-unstyled mb-0">
        {pages.map((page) => (
        <Button
            className={`mx-5 ${currentPage.name === page.name && "navActive"}`}
            key={page.name}
        > 
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
        </Button>
        ))}
    </div>
    </nav>
);
}

export default Nav;
