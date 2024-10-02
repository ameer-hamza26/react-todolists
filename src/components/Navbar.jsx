import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="text-white bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center md:flex-row  xs:bg-red-500 justify-between">
          <div>
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">TodoLists</span>
          </a>
          </div>
          <div className="buttons">
            <button className="inline-flex items-center bg-white border-0 py-1 px-3 text-black focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0 mx-4">Home</button>
          <button className="inline-flex items-center bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">
            Your Taks
          </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
