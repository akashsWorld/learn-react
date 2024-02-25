import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  // This hook returns a function which used to navigate to other routes.
  const navigate = useNavigate();

  const navigateProductsPageHandle = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>This is Home page</h1>
      <p>
        <Link to="/products" className="decoration-none">
          Go to Products Page
        </Link>
      </p>
      <button className="btn" onClick={navigateProductsPageHandle}>
        Products
      </button>
    </div>
  );
};

export default HomePage;
