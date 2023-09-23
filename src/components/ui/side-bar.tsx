import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64">
      <div className="p-4">
       Logo
      </div>
      <ul className="space-y-2 mt-6">
        <li>
          <a
            href="#"
            className="flex items-center p-3 transition duration-300"
          >
            <span className="text-xl">&#9733;</span>
            <span className="ml-2">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 transition duration-300"
          >
            <span className="text-xl">&#127918;</span>
            <span className="ml-2">Games</span>
          </a>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
