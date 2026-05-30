import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-18">
      <h4 className="bg-black text-white py-2 px-4 uppercase rounded-full ">
        Target Audience
      </h4>
      <button className="bg-gray-300 text-black py-2 px-4 uppercase rounded-full text-sm tracking-widest">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
