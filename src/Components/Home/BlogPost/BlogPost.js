import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCoffee } from "@fortawesome/free-solid-svg-icons";

const BlogPost = (props) => {
  const { title, description, author, authorImg, date } = props.blog;
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: "18rem" }}>
        <div className="card-header d-flex  align-items-center">
          <img className="mx-3" src={authorImg} alt="" width="60" />
          <div>
            <h6 className="text-brand">{author}</h6>
            <p className="m-0">{date}</p>
          </div>
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p className="card-text text-secondary mt-4">{description}</p>
          <div className="icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
