import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="logo">University</div>
        <div className="navlinks">
          <div className="links">
            <Link className="links" to="/home">
              Home
            </Link>
          </div>
          <div className="links">
            <Link className="links" to="/about">
              About
            </Link>
          </div>
          <div className="links">
            <Link className="links" to="/services">
              Services
            </Link>
          </div>
          <div className="links">
            <Link className="links" to="/cources">
              Cources
            </Link>
          </div>
          <div className="links">
            <Link className="links" to="/Contacts">
              Contacts
            </Link>
          </div>
          {localStorage.getItem("token") && (
            <div className="links">
              <Link className="links" to="/admin/services">
                Add Services
              </Link>
            </div>
          )}
          {localStorage.getItem("token") &&
            localStorage.getItem("type") === "ADMIN" && (
              <div className="links">
                <Link className="links" to="/admin/lists">
                  Admin List
                </Link>
              </div>
            )}
          {localStorage.getItem("token") ? (
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/admin/login");
              }}>
              Logout
            </button>
          ) : (
            <button onClick={() => navigate("/admin/login")}>Login</button>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
