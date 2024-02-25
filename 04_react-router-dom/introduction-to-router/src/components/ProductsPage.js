import React from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      <h1>This is Products page</h1>
      <p><Link to="/" className="decoration-none">
        Go to home
      </Link>
      </p>
      <ul className="products-page">
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
        <li>
          <Link to="/products/4">Product 4</Link>
        </li>
        <li>
          <Link to="/products/5">Product 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsPage;
