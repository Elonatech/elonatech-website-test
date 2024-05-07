import { Link } from "react-router-dom";
import "./dashboard-styles.css";

const SideMenu = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="">
            <div className="side-bar">
              <nav
                id="sidebarMenu"
                class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse"
              >
                <div class="position-sticky pt-3 sidebar-sticky">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <Link
                        class="nav-link active"
                        aria-current="page"
                        to="/main-dashboard"
                      >
                        <span
                          data-feather="home"
                          class="align-text-bottom"
                        ></span>
                        Dashboard
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/blog-upload">
                        <span
                          data-feather="file"
                          class="align-text-bottom"
                        ></span>
                        Blog
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/computer-write">
                        <span
                          data-feather="users"
                          class="align-text-bottom"
                        ></span>
                        Computer
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/shop-write">
                        <span
                          data-feather="bar-chart-2"
                          class="align-text-bottom"
                        ></span>
                        Shop
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="major-dashboard"></div>
          </div>

          {/* -------------------------------------------- main dash board ----------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
