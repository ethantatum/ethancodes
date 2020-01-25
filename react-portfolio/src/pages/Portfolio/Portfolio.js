import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import ImageCard from "../../components/ImageCard/ImageCard";
import projects from "../../portfolio.json";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <Container>
          {this.state.projects.map(project => (
            <ImageCard
              id={project.id}
              key={project.id}
              image={project.image}
              alt={project.alt}
              title={project.title}
              tech={project.tech}
              repo={project.repo}
              url={project.url}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Portfolio;
