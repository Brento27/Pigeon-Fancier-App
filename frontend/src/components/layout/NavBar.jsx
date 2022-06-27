import React, { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Pigeons
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li tabIndex="0">
            <Link to="/my-pigeons">
              My-pigeons
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li>
                <Link to="/my-pigeons/breeding">Breeding</Link>
              </li>
              <li>
                <Link to="/my-pigeons/racing">Racing</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/login">SignIn</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
