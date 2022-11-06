import React from "react";
import { Helmet } from "react-helmet-async";
import useFetch from "./UseFetch";

const About = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.github.com/users/Tifem"
  );

  if (isLoading) {
    return "Loading...";
  }

  if (!isLoading && error) {
    return (
      <div className="container text-danger">
        <h1 className="title">{error}</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>AlSchool Exam Project | About Me</title>
        <meta
          name="description"
          content="This page from the app contains informations about me and my social handles"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-6">
            <img
              src={data?.avatar_url}
              className="img-fluid rounded-circle"
              alt=""
            />
            <p className="text-center">
              <i className="bi bi-person-fill"></i>
              <a href={data?.html_url} className="link-dark">
                <i className="lead">{data?.login}</i>
              </a>
            </p>
            <p className="mt-3 social d-flex justify-content-between">
              <a href={data?.html_url} className="link-dark">
                <i className="bi bi-github mr-2"></i>
              </a>
              <a
                href={`https://twitter.com/${data?.twitter_username}`}
                className="link-dark"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/jayconcept14/"
                className="link-dark"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:boluwatifejanet7@gmail.com" className="link-dark">
                <i className="bi bi-envelope"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="row text-center">
          <p>{data?.bio}</p>
          
        </div>

        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-xxl-4 col-md-2 col-sm-10 mb-3">
            <div className="card bg-primary text-light">
              <div className="card-body">
                <h5 className="card-title">Repository</h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-folder2"></i>
                  </div>
                  <div className="ps-3">
                    <h6>&nbsp; {data?.public_repos}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-md-2 col-sm-10 mb-3">
            <div className="card bg-primary text-light">
              <div className="card-body">
                <h5 className="card-title">Gist</h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-folder2"></i>
                  </div>
                  <div className="ps-3">
                    <h6>&nbsp; {data?.public_gists}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-md-2 col-sm-10 mb-3">
            <div className="card bg-primary text-light">
              <div className="card-body">
                <h5 className="card-title">Followers</h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-person-heart"></i>
                  </div>
                  <div className="ps-3">
                    <h6>&nbsp; {data?.followers}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-md-2 col-sm-10 mb-3">
            <div className="card bg-primary text-light">
              <div className="card-body">
                <h5 className="card-title">Following</h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-chat-square-heart-fill"></i>
                  </div>
                  <div className="ps-3">
                    <h6>&nbsp; {data?.following}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;