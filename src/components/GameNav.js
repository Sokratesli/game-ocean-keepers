// src/components/GameNav.js
import React from "react";
import { Link } from "react-router-dom";

const GameNav = () => {
  const menuItems = [
    { id: "settings", label: "Settings", url: "#" },
    { id: "toMenu", label: "To Menu", align: "right", url: "/" },
  ];

  const leftItems = menuItems.filter(
    (item) => !item.align || item.align === "left"
  );
  const rightItems = menuItems.filter((item) => item.align === "right");

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 py-4 flex justify-between items-center">
      <div className="flex ml-4">
        {leftItems.map((item) => (
          <Link
            key={item.id}
            to={item.url || "#"}
            className="text-white font-bold hover:text-gray-300 ml-4"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex mr-4">
        {rightItems.map((item) => (
          <Link
            key={item.id}
            to={item.url || "#"}
            className="text-white font-bold hover:text-gray-300 ml-4"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameNav;
