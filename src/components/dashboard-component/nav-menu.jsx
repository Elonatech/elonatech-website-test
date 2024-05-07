import "./dashboard-styles.css";
import logo from "./captions/elonatech.png";
import { toast } from "react-toastify";

const NavMenu = () => {
  const logout = () => {
    const auth = localStorage.removeItem("token");
    toast.success("Admin Successfully Logout");
    setTimeout(() => {
      navigate(0);
    }, 8000);
    navigate("/");
  };
  return (
    <>
      <header class=" nav-menu navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a href="/" className="navbar-brand border-0 w-4">
          <img src={logo} id="elonatech-logo-home" class="lazyload border-0" />
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          class="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="" onClick={logout}>
              Sign out
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavMenu;
