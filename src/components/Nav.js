import React, { useEffect } from "react";

function Nav(props) {
const { pages = [], setCurrentPage, currentPage } = props;
console.log(currentPage)
return (
    <nav>
    <ul className="d-flex justify-content-end list-style-none">
        {pages.map((page) => (
        <li
            className={`mx-5 ${currentPage.name === page.name && "navActive"}`}
            key={page.name}
        > 
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
        </li>
        ))}
    </ul>
    </nav>
);
}

export default Nav;
