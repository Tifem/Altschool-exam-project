import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <h1 className="title">Page not found</h1>
      <p>
        Click <Link to="/">here to go back home</Link>
      </p>
    </div>
  );
};

export default NotFound;