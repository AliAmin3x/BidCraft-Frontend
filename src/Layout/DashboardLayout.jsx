import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { RiChatFollowUpLine } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";
import { GrUpgrade } from "react-icons/gr";
const DashboardLayout = ({ children }) => {
  const baseClasses =
    "block px-4 py-2 rounded-lg transition font-medium";
  
  const activeClasses =
    "bg-blue-600 text-white shadow-lg";
  
  const inactiveClasses =
    "text-gray-300 hover:bg-white/10 hover:text-white";

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-l to-[#173e7e] from-[#0c254e] text-white flex flex-col">
        <div className="p-6 text-4xl font-bold border-b border-white bg-white/10 w-full items-center justify-center flex gap-2">
          BidCraft
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `${baseClasses} ${
      isActive ? activeClasses : inactiveClasses
    } flex items-center gap-2`
  }
>
  <MdDashboard className="text-lg" />
  <span>Dashboard</span>
</NavLink>
          <NavLink
            to="/my-proposals"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              } flex items-center gap-2`
            }
          >
            <LuNewspaper className="text-lg" />
            <span>My Proposals</span>
          </NavLink>
          <NavLink
            to="/follow-ups"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              } flex items-center gap-2`
            }
          >
            <RiChatFollowUpLine className="text-lg" />
            <span>Follow-ups</span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              } flex items-center gap-2`
            }
          >
            <MdAnalytics className="text-lg" />
            <span>Analytics</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              } flex items-center gap-2`
            }
          >
            <IoSettings className="text-lg" />
            <span>Settings</span>
          </NavLink>
        </nav>
            <div className="w-full py-5 flex items-center justify-center">
                <button className="w-1/2 py-2 rounded-sm flex items-center bg-[#2474e4] justify-center gap-2  text-white font-semibold transition hover:bg-[#1e5bb8] transition duration-300 cursor-pointer shadow-2xl">
                    <GrUpgrade size={20}/>
                    Upgrade
                </button>
            </div>
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
            &copy; 2026 BidCraft. All rights reserved.
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;