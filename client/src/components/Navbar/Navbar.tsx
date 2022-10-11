import { Link } from "react-router-dom";
import "./Navbar.styles.scss";
import searchLine from "../../assets/search-line.svg";
import articleLine from "../../assets/article-line.svg";
import focus3Line from "../../assets/focus-3-line.svg";
import userLine from "../../assets/user-line.svg";
import logoutuserLine from "../../assets/logout-circle-line.svg";
import LogoImg from "../../assets/logo.png";
import briefcaseLine from "../../assets/briefcase-line.svg";
import fileAddLine from "../../assets/file-add-line.svg";

export const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__header">
              <Link to="/" className="Header__logo">
                <img src={LogoImg} alt="Get That Job logo" />
              </Link>
          <ul className="navbar__header__nav-menu">
            <li>
            </li>
            <li>
              <Link
                className="prueba"
                to="/FindThatJob"
                onClick={(e) => {
                  e.target.className = "__active";
                  console.dir(e.target);
                }}
              >
                <span>
                  <img src={searchLine} alt="" />
                </span>{" "}
                Find That job
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={(e) => {
                  e.target.className = "__active";
                  console.dir(e.target);
                }}
              >
                <span>
                  <img src={articleLine} alt="" />
                </span>
                Your apllication
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={(e) => {
                  e.target.className = "__active";
                  console.dir(e.target);
                }}
              >
                <span>
                  <img src={focus3Line} alt="" />
                </span>
                Foollowing
              </Link>
            </li>
            <li>
              <Link
                to="/JobPostings"
                onClick={(e) => {
                  e.target.className = "__active";
                  console.dir(e.target);
                }}
              >
                <span>
                  <img src={briefcaseLine} alt="" />
                </span>
                Job Postings{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/CreateNewJob"
                onClick={(e) => {
                  e.target.className = "__active";
                  console.dir(e.target);
                }}
              >
                <span>
                  <img src={fileAddLine} alt="" />
                </span>
                Create New Job
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                onClick={(e) => {
                  e.target.className = "__active";
                  console.dir(e.target);
                }}
              >
                <span>
                  <img src={userLine} alt="" />
                </span>
                Profile
              </Link>
            </li>
            <li>
              {" "}
              <Link to="#">
                <span>
                  <img src={logoutuserLine} alt="" />
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <footer className="navbar__footer">
          <p>© 2022 - Get That Job</p>
          <p>Codeable - Cohort X Final Project</p>
          <ul>
            <li>Cataldo Ivan</li>
            <li>Tomas Salinas</li>
          </ul>
          <p>Source code:</p>
          <p>Ruby on Rails REST API</p>
          <p>React Responsive SPA</p>
        </footer>
      </div>
    </>
  );
};
