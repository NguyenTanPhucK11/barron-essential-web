import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content"></div>
        <span className="card-title">Project Title - {id}</span>
        <p>Lorem mmmmmmmmm</p>
      </div>
      <div className="card-action gret lighten-4 grey-text">
        <div>Posted by the NN</div>
        <div>27th July, 11pm</div>
      </div>
    </div>
  );
}

export default ProjectDetails;
