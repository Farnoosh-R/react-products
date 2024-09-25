import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  let title = "";

  switch (location.pathname) {
    case "/":
      title = "Shop";
      break;

    case "/shop":
      title = "Shop";
      break;

    case "/aboutus":
      title = "About us";
      break;

    case "/contactus":
      title = "Contact us";
      break;

    case "/blog":
      title = "Blog";
      break;

    case "/blog-api":
      title = "Blog API";
      break;
    default:
      break;
  }

  console.log(location);

  return (
    <div className="header mb-5">
      <h2>{title}</h2>
    </div>
  );
};
export default Header;
