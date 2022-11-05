import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/UseFetch";

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://api.github.com/users/Tifem/repos?per_page=100`
  );

  console.log({ loading, error, data });

  const PER_PAGE = 6;

  const total = data?.length;

  const pages = 6;

  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
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
                    className="card-link more-btn "
                  >
                    More
                  </Link>
                  <a href={each.html_url} className="card-link view-git-btn">
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
          className="pages-btn"
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
          className="pages-btn"
          type="button"
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <i className="bi-skip-forward-fill"></i>
        </button>
      </div>

      <div className="mt-3">
        {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <button
            className="pages-btnn"
            onClick={() => setPage(each)}
          >
            {each}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
