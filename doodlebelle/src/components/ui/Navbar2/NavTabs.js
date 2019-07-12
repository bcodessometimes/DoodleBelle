import React from "react";
import "./NavTabs.css";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Guardian"
          onClick={() => props.handlePageChange("Guardian")}
          className={props.currentPage === "Guardian" ? "nav-link active" : "nav-link"}
        >
          Guardian Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#shop"
          onClick={() => props.handlePageChange("Shop")}
          className={props.currentPage === "Shop" ? "nav-link active" : "nav-link"}
        >
          Available Puppies
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
