import React from "react"

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Pigeons</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>About</a>
          </li>
          <li tabindex="0">
            <a>
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
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Breeding</a>
              </li>
              <li>
                <a>Racing</a>
              </li>
            </ul>
          </li>
          <li>
            <a>SignIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar