import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen bg-[#002147] h-16 flex flex-col border-b-4 border-[#CE261E] text-white">
      <div className="m-auto w-8/12 flex">
        <Link to="/" className="font-bold flex items-center justify-center">
          <div className="flex">
            <div>
              <div>Indian</div>
              <div>Budget</div>
            </div>
          </div>
        </Link>
        <nav className="flex items-center justify-center">
          <ul className="flex list-none">
            <li className="mr-12 ml-24">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-12">
              <NavLink to="/sunburst">Sunburst</NavLink>
            </li>
            <li className="mr-12">
              <NavLink to="/sankey">Sankey</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
