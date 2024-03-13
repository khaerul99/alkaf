import React from 'react'

function NavbarDashboard({sidebarStatus, HandleSidebar}) {
  return (
    <div className={`fixed bg-white w-full h-20  transition-all duration-150 ${
        sidebarStatus ? "pl-[220px] lg:pl-[220px]" : "pl-[0px]"
      }`}>
    <div className="navbar">
    <div className="flex-1">
    <button
            className=""
            onClick={() => HandleSidebar(!sidebarStatus)}>
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current stroke-2 fill-none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
    </div>
    
    <div className="flex-none gap-2">
      {/* <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div> */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  )
}

export default NavbarDashboard