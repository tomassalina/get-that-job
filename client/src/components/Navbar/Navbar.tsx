import { Link } from "react-router-dom";
import "./Navbar.styles.scss";
import searchLine from "../../assets/search-line.svg";
import articleLine from "../../assets/article-line.svg";
import focus3Line from "../../assets/focus-3-line.svg";
import userLine from "../../assets/user-line.svg";
import logoutuserLine from "../../assets/logout-circle-line.svg";
export const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <div className="navbar">
        <Link
          className="prueba"
          to="#"
          onClick={(e) => {
            e.preventDefault();
            e.target.className = "navbar__active";
            console.dir(e.target);
          }}
        >
          <span>
            <img src={searchLine} alt="" />
          </span>{" "}
          Find That job
        </Link>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            e.target.className = "__active";
            console.dir(e.target);
          }}
        >
          <span>
            <img src={articleLine} alt="" />
          </span>
          Your apllication
        </Link>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            e.target.className = "__active";
            console.dir(e.target);
          }}
        >
          <span>
            <img src={focus3Line} alt="" />
          </span>
          Foollowing
        </Link>
        <Link to="#">
          <span>
            <img src={userLine} alt="" />
          </span>
          Profile
        </Link>
        <Link to="#">
          <span>
            <img src={logoutuserLine} alt="" />
          </span>
          Logout
        </Link>

        <footer>
          <p>© 2022 - Get That Job</p>
          <p>Codeable - Cohort X Final Project</p>
          <ul><li>Cataldo Ivan</li>
          <li>Marco Laurens</li>
          <li>Tomas Salinas</li>
          <li>Antony Sanchez</li></ul>
          <p>Source code:</p>
          <p>Ruby on Rails REST API</p>
          <p>React Responsive SPA</p>
        </footer>
      </div>
    </>
  );
};
