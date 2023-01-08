import { useParams } from "react-router-dom";
import { RepoContext } from "./RepoContext";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";

function EachRepo() {
  const { id } = useParams();
  const { repos } = useContext(RepoContext);

  const repo = repos[id];

  return (
    <>
      <Helmet>
        <title>AltSchool GitHub Assignment | Repo Details</title>
        <meta name="description" content="This page contains more details about each repositories" />
        <link rel="cannonical" href="https://altschool-exam-project.vercel.app/all-repo/:id" />
      </Helmet>

      <div className="container my-5">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title fw-bold">{repo.full_name}</h5>
            <p className="card-text">
              {repo.description}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Owned by :{repo.owner.login} </li>
            <li className="list-group-item">fork :{repo.forks} </li>
            <li className="list-group-item">Created at : {repo.created_at} </li>
            <li className="list-group-item">Updated at :{repo.updated_at} </li>
            <li className="list-group-item">Pushed at : {repo.pushed_at} </li>
            <li className="list-group-item">Visiblity :{repo.visibility} </li>
            <li className="list-group-item">Watchers : {repo.watchers}</li>
            <li className="list-group-item">Default branch :{repo.default_branch} </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EachRepo;
