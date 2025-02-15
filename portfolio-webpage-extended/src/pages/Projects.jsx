import React, { useEffect, useState } from "react";
import "./Projects.css";

const GITHUB_USERNAME = "KshitijSawant1";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="projects-container">
      <h2>My GitHub Projects</h2>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul className="project-list">
          {repos.map(repo => (
            <li key={repo.id} className="project-card">
              <img
                src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`}
                alt={repo.name}
                className="project-img"
                onError={(e) => e.target.src = "/assets/default.jpg"} 
              />
              <div className="project-info">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description || "No description available."}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
