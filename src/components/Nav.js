// src/components/Nav.js
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ menuItems, onItemClick }) => {
  return (
    <div className="text-center">
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.type === "button" && (
            <button
              className="bg-ocean-500 hover:bg-ocean-700 text-white text-lg font-bold uppercase py-2 px-4 rounded mb-2 drop-shadow-md"
              onClick={() => onItemClick(item.id)}
            >
              {item.label}
            </button>
          )}
          {item.type === "link" && (
            <Link to={item.url}>
              <button className="bg-ocean-500 hover:bg-ocean-700 text-white text-lg font-bold uppercase py-2 px-4 rounded mb-2 drop-shadow-md">
                {item.label}
              </button>
            </Link>
          )}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Nav;
