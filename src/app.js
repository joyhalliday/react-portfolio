import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";

const App = () => {
const [pages] = useState([
    { name: "About" },
    { name: "Contact" },
    { name: "Portfolio" },
    { name: "Resume" },
]);
const [currentPage, setCurrentPage] = useState(pages[0]);
return (
    <div>
    <Header>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ></Nav>
    </Header>
    <main>
        <Page currentPage={currentPage}></Page>
    </main>
    </div>
);
};

export default App;
