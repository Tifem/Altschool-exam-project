import React, { createContext } from "react";
import UseFetch from './UseFetch';

export const RepoContext = createContext();

const RepoContextProvider = (props) => {
  const {
    isLoading,
    error,
    data: repos,
  } = UseFetch
      ("https://api.github.com/users/Tifem/repos?per_page=100");

  return (
    <RepoContext.Provider value={{ isLoading, error, repos }}>
      {props.children}
    </RepoContext.Provider>
  );
};
export default RepoContextProvider;