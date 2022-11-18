import React, { useState } from "react";
import PortfolioItem from "../PortfolioItem";

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "Project 1",
      desc: "placeholder about the project",
      deployed: "link",
      repo: "github",
      image: "an image link in assests folder",
    },
    {
      name: "Project 1",
      desc: "placeholder about the project",
      deployed: "link",
      repo: "github",
      image: "an image link in assests folder",
    },
    {
      name: "Project 1",
      desc: "placeholder about the project",
      deployed: "link",
      repo: "github",
      image: "an image link in assests folder",
    },
    {
      name: "Project 1",
      desc: "placeholder about the project",
      deployed: "link",
      repo: "github",
      image: "an image link in assests folder",
    },
    {
      name: "Project 1",
      desc: "placeholder about the project",
      deployed: "link",
      repo: "github",
      image: "an image link in assests folder",
    },
    {
      name: "Project 1",
      desc: "placeholder about the project",
      deployed: "link",
      repo: "github",
      image: "an image link in assests folder",
    },
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
