import React from "react"

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Pigeons
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/about">About</a>
          </li>
          <li tabindex="0">
            <a href="/my-pigeons">
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
                <a href="/my-pigeons/breeding">Breeding</a>
              </li>
              <li>
                <a href="/my-pigeons/racing">Racing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/login">SignIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
