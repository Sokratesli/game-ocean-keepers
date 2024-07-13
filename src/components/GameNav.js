import React, { useState } from "react";
import { Link } from "react-router-dom";

const GameNav = () => {
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { id: "settings", label: "Settings", url: "#" },
    { id: "toMenu", label: "To Menu", align: "right", url: "/" },
  ];

  const leftItems = menuItems.filter(
    (item) => !item.align || item.align === "left"
  );
  const rightItems = menuItems.filter((item) => item.align === "right");

  const handleToMenuClick = () => {
    setShowModal(true); // Show modal when "To Menu" is clicked
  };

  const handleModalConfirm = () => {
    // Handle logic when user confirms to go back to menu
    // For example, you can redirect the user or perform other actions
    setShowModal(false); // Hide modal after confirmation
  };

  const handleModalCancel = () => {
    setShowModal(false); // Hide modal if user cancels
  };

  return (
    <div className="z-30 fixed top-0 left-0 right-0 bg-ocean-500 py-4 flex justify-between items-center">
      <div className="flex ml-4">
        {leftItems.map((item) => (
          <Link
            key={item.id}
            to={item.url || "#"}
            className="text-white font-bold ml-4"
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
            className="text-white font-bold ml-4"
            onClick={item.id === "toMenu" ? handleToMenuClick : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <p className="mb-2">Are you sure you want to go back to the menu?</p>
            <div className="flex justify-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleModalConfirm}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleModalCancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameNav;
