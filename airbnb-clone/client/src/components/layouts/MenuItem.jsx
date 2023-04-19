import React from "react";

const MenuItem = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:bg-neutral-100 cursor-pointer text-black text-sm font-medium px-2 py-3"
    >
      {text}
    </div>
  );
};

export default MenuItem;
