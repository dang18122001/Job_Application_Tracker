import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link className="button" to={"/"}>
          Main Page
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;