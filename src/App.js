import React, { Component } from "react";
import "./App.css";
import data from "./data";
import logo from "./images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: false
    };
  }

  render() {
    const shortName = s => {
      if (typeof s !== "string") return "";
      return s
        .split(" ")
        .join("-")
        .toLowerCase();
    };
    return (
      <div>
        <div class="arrow-up "></div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} alt="Gro Intelligence logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto" id="navbarlist">
                {data.map((item, index) => {
                  return (
                    <div className="nav-item sideKick" key={index}>
                      {item.subnavList ? (
                        <li
                          className=" dropdown main position-static"
                          /* onMouseLeave={this.handleNavClick} */
                        >
                          <a
                            className="nav-link"
                            id={"navbarDropdown" + (index + 1)}
                            /* onMouseEnter={this.handleNavClick} */
                            href={item.href}
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {item.label}
                          </a>
                          <div
                            className="dropdown-menu w-100 arrow_box"
                            aria-labelledby={"navbarDropdown" + (index + 1)}
                          >
                            {item.subnavList.map((sub, index) => {
                              return (
                                <div
                                  key={index}
                                  className="dropdown-container"
                                  /* className={
                                item.label === this.state.activeLink &&
                                this.state.activeClass
                                  ? "active dropdown-menu"
                                  : "inactive dropdown-menu"
                              } */
                                >
                                  {sub.description ? (
                                    <div className="dropdown-container sub ">
                                      <div className="sideImage">
                                        <img
                                          alt={sub.label}
                                          src={require(`./images/` +
                                            item.label.toLowerCase() +
                                            `/` +
                                            shortName(sub.label) +
                                            `.png`)}
                                        />
                                      </div>
                                      <h2>{sub.label}</h2>
                                      <p>{sub.description}</p>
                                      <ul className="innerList">
                                        {sub.links
                                          ? sub.links.map((lab, index) => {
                                              return (
                                                <div key={index}>
                                                  <li>
                                                    <strong>
                                                      {lab.title}:
                                                    </strong>
                                                    {lab.subtitle}
                                                  </li>
                                                </div>
                                              );
                                            })
                                          : ""}
                                      </ul>
                                      <a
                                        className="learnmore"
                                        href={`${sub.href}`}
                                      >
                                        Learn More<strong>&gt;</strong>
                                        <span>
                                          <i class="fas fa-chevron-right"></i>
                                        </span>
                                      </a>
                                    </div>
                                  ) : (
                                    <div className="sideImage">
                                      <div>
                                        <img
                                          className="card"
                                          alt={sub.label}
                                          src={require(`./images` +
                                            `/` +
                                            item.label.toLowerCase() +
                                            `/` +
                                            shortName(sub.label) +
                                            `.jpg`)}
                                        />
                                        <div className="card-text">
                                          <p> {sub.label.toUpperCase()}</p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {console.log(index)}
                                  {console.log(sub.label)}
                                </div>
                              );
                            })}
                          </div>
                        </li>
                      ) : (
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href={item.href}
                            id={item.label}
                          >
                            {item.label}
                          </a>
                        </li>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
