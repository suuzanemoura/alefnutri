import { HashLink } from "react-router-hash-link";
import { navBarConfig } from "../../config/header";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-4 px-lg-6 px-xl-10">
        <HashLink
          smooth
          to={navBarConfig.link}
        >
          <img
            src={navBarConfig.img}
            alt={navBarConfig.alt}
          />
        </HashLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white"></i>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header p-5">
            <img
              src={navBarConfig.icon}
              alt={navBarConfig.icon_alt}
              className="offcanvas-title text-uppercase text-id-alef-red-100"
              id="offcanvasDarkNavbarLabel"
            />
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body px-5 px-lg-0 pb-5 pb-lg-0">
            <ul className="navbar-nav justify-content-end flex-grow-1 gap-lg-2 gap-xl-4">
              {navBarConfig.nav_items.map((nav_item, index) => {
                return (
                  <li
                    className="nav-item"
                    key={index}
                  >
                    <HashLink
                      smooth
                      to={nav_item.url}
                      className="nav-link"
                      aria-current="page"
                    >
                      <button
                        type="button"
                        className="btn m-0 p-0 fs-6 w-100 d-flex border-0"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="d-flex gap-2 w-100">
                          <i className={`bi ${nav_item.icon}`} />
                          {nav_item.title}
                        </div>

                        <i className="bi bi-chevron-right d-lg-none" />
                      </button>
                    </HashLink>
                    <hr className="d-lg-none" />
                  </li>
                );
              })}
            </ul>
            <button
              className="btn btn-id-alef-red-300 w-100 my-3 d-lg-none"
              type="button"
            >
              <a
                href={navBarConfig.button.link}
                className="d-flex gap-2 justify-content-center align-items-center text-decoration-none text-white text-uppercase"
              >
                {navBarConfig.button.title}
                <i className={`bi ${navBarConfig.button.icon} text-white`} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
