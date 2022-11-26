import React from "react";
import PageContent from "./PageContent";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

function Page({ currentPage }) {
function renderPage() {
    if (currentPage.name === "About") {
    return <About />;
    } else if (currentPage.name === "Portfolio") {
    return <Portfolio />;
    } else if (currentPage.name === "Contact") {
    return <Contact />;
    } else if (currentPage.name === "Resume") {
    return <Resume />;
    } else {
    return <About />;
    }
};
return (
    <div>
    <PageContent>{renderPage()}</PageContent>
    
    </div>
);
}

export default Page;
