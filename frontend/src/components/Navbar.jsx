import React, { useState } from "react";
export default function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 875) {
      setNavBar(true);
    } else if (
      window.scrollY >= 732 &&
      window.matchMedia("(max-width: 400px)")
    ) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
    // console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div>
        {/* <nav className="navbar active navbar-expand-lg navbar-dark bg-dark nav-background"> */}
        <nav
          className={
            navBar
              ? "navbar active navbar-expand-lg"
              : "navbar navbar-expand-lg navbar-dark bg-dark nav-background"
          }
        >
          <div className="container-fluid navigation-Spacing">
            <a className="navbar-brand " href="/">
              Igitenge Style
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              data-bs-spy="scroll"
            >
              <ul className="navbar-nav m-auto mb-1 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#aboutUs">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="#contactUs"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* <button className="  btn btn-danger btn-sale  ">
                  <a href="#uri" className=" text-light text-decoration-none">
                    Donate
                  </a>
                </button>{" "} */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
