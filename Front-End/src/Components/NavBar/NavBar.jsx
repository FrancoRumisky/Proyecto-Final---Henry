import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar.jsx";
import Style from "../NavBar/Navbar.module.css";
import { useSelector } from "react-redux";

export default function NavBar() {
let cart = useSelector((state) => state.cart)

  return (
    <main>
      <nav className={`${Style.container} container-fluid`}>
        <div className="nav">
          <div className={`${Style.logo}`}>
            <NavLink to="/">
              <button className="btn btn-dark">Logo</button>
            </NavLink>
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.active : Style.inactive
            }
            to="/suppliers"
          >
            <div className={`${Style.link} nav-link`}>
              <span>Cartilla de proveedores</span>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.active : Style.inactive
            }
            to="/contact"
          >
            <div className={`${Style.link} nav-link`}>
              <span>Contacto</span>
            </div>
          </NavLink>
          <div className={`${Style.nav_right} d-flex justify-content-end col`}>
            <Searchbar />

            <div className={Style.person}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? Style.active : Style.inactive
              }
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className={Style.cart}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </div>
            </NavLink>
            {
            cart.length > 0 
            ?
            <p className="btn btn-danger" style={{borderRadius:"90%", width:"fit-content", height:"fit-content", fontSize:"small"}}>{cart.length}</p>
            :
            ""

            }
          </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
