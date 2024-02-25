import React from "react";
import Navigation from "./Navigation";

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <h1> An Error occured </h1>
      <p>Could not find the page</p>
    </div>
  );
};

export default ErrorPage;
