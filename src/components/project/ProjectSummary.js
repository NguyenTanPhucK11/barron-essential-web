import React from "react";
import projectReducer from "../../store/reducers/authReducer";

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Post by the NN</p>
        <p className="grey-text">27th July, 10pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
