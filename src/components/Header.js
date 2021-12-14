import React from "react";

const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <i className="fab fa-youtube fa-3x text-warning" />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link px-2 text-white">
                Dashboard
              </a>
            </li>
          </ul>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
