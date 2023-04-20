import React from "react";

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            ${outline ? "bg-white" : "bg-rose-500"}
            ${outline ? "border-black" : "border-rose-500"}
            ${outline ? "text-black" : "text-white"}
            ${small ? "py-1" : "py-3"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {Icon && (
        <Icon
          className="
                    absolute
                    left-4
                    top-3
                    w-[24px]
                    h-[24px]
                "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
