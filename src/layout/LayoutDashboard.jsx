import React, { useState } from "react";
import NavbarDashboard from "../components/navbarDashboard/NavbarDashboard";
import Sidebar from "../components/sidebar/Sidebar";


function LayoutDashboard({ children }) {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <div>
    <NavbarDashboard  sidebarStatus={sidebarShow} HandleSidebar={setSidebarShow} />
      <div className=" flex justify-center font-poppins">
        <div className="w-full flex px-5">
          <Sidebar sidebarStatus={sidebarShow} />
        <div className="w-full">
            <main className="pt-20 min-h-screen text-[#1f2937]">
          <div className= {`transition-all  ${sidebarShow ? "lg:pl-[224px]" : ""}`}>
           <div className="py-5">
            {children}
            </div> 
            </div>
            </main>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
