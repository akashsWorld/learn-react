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
            {/* Here use relative path becuse it not starts with / . */}
          <Link to="1">Product 1</Link>
        </li>
        <li>
          <Link to="2">Product 2</Link>
        </li>
        <li>
          <Link to="3">Product 3</Link>
        </li>
        <li>
          <Link to="4">Product 4</Link>
        </li>
        <li>
          <Link to="5">Product 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsPage;
