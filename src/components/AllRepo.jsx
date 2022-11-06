import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/UseFetch";
import { Helmet } from 'react-helmet-async';


function App() {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useFetch(
    `https://api.github.com/users/Tifem/repos?per_page=100`
  );

  console.log({ isLoading, error, data });

  const PER_PAGE = 6;

  const total = data?.length;

  const pages = 6;

  const skip = page * PER_PAGE - PER_PAGE;

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!isLoading && error) {
    return <>Error</>;
  }

  return (
    <>
      <Helmet>
        <title>AlSchool Exam Project | List of Repos</title>
        <meta
          name="description"
          content="This pages is where I fetch and show the list of repositories from my github account."
        />
        <link rel="canonical" href="https://Altschool-Exam-Project.boluwatifej.repl.co/all-repo" />
      </Helmet>
      <div className="App container my-5">
        <h1 className="mb-3">List of all Repositories</h1>

        <div className="row">
          {data?.slice(skip, skip + PER_PAGE).map((each, index) => {
            const name = `${each.name} ${each.description}`;
            return (
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{each.name}</h4>
                    <p className="card-text">{each.description}</p>
                    <Link
                      to={`/all-repo/${index}`}
                      className="card-link btn btn-dark"
                    >
                      More
                    </Link>
                    <a href={each.html_url} className="card-link btn btn-primary">
                      View on Git
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 d-flex justify-content-between">
          <button
            className="btn btn-primary"
            type="button"
            disabled={page <= 1}
            aria-disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <i className="bi-skip-backward-fill"></i>
          </button>

          <p>
            {page} of {pages}
          </p>

          <button
            className="btn btn-primary"
            type="button"
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <i className="bi-skip-forward-fill"></i>
          </button>
        </div>

        <div className="mt-3 text-center">
          {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
            <button
              className="btn btn-dark mr-2"
              onClick={() => setPage(each)}
            >
              {each}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
