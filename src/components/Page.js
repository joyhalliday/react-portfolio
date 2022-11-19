import React from "react";
import PageContent from "./PageContent";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

function Page({ currentPage, setCurrentPage }) {
function renderPage() {
    if (currentPage === "About") {
    return <About />;
    } else if (currentPage === "Portfolio") {
    return <Portfolio />;
    } else if (currentPage === "Contact") {
    return <Contact />;
    } else if (currentPage === "Resume") {
    return <Resume />;
    } else {
    return <About />;
    }
};
const handlePageChange = (page) => setCurrentPage(page);
return (
    <div>
    <PageContent currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    </div>
);
}

export default Page;
