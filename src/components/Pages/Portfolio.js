import React, { useState } from "react";
import PortfolioItem from "../PortfolioItem";

export default function Portfolio() {
const [projects] = useState([
    {
    name: "Music Index",
    desc: "A group project done through the coding bootcamp. This application uses an API to allow the user to search through musical artists and displays information about them and their work.",
    deployed: "https://unheardof77.github.io/Artist-Information-Finder/",
    repo: "https://github.com/unheardof77/Artist-Information-Finder",
    image: "music-index.jpg",
    },
    {
    name: "GameSphere",
    desc: "A group project done through the coding bootcamp. This application allows users to create an account to create blog style posts about games that they enjoy and make comments on community posts.",
    deployed: "https://gsphere.herokuapp.com/",
    repo: "https://github.com/Pogga1/GameSphere",
    image: "gamesphere.jpg",
    },
    {
    name: "Work Day Scheduler",
    desc: "A solo project done through the coding bootcamp. This app creates a calendar for a work day. It allows the user to add tasks to their day and the hour slots change color as the day progresses.",
    deployed: "https://joyhalliday.github.io/work-day-scheduler/",
    repo: "https://github.com/joyhalliday/work-day-scheduler",
    image: "scheduler.jpg",
    },
    {
    name: "Social Network API",
    desc: "A solo project done through the coding bootcamp. This is a backend only application, the video shows how it can be tested in Insomnia to create a working backend for a social network.",
    deployed: "https://drive.google.com/file/d/1byPtslrzJy4z03KpWWqstsOmft04aXl4/view",
    repo: "https://github.com/joyhalliday/social-network-api",
    image: "Social-network-api.jpg",
    },
    // {
    // name: "Project 5",
    // desc: "placeholder about the project",
    // deployed: "link",
    // repo: "github",
    // image: "an image link in assets folder",
    // },
    // {
    // name: "Project 6",
    // desc: "placeholder about the project",
    // deployed: "link",
    // repo: "github",
    // image: "an image link in assets folder",
    // },
]);
return (
    <div>
    <h1>Portfolio Page</h1>
    <div>
        {projects.map((project, index) => (
        <PortfolioItem project={project} key={"project" + index} />
        ))}
    </div>
    </div>
);
}
