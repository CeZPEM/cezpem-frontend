import React, { useState } from "react";
import { Button } from "./Button";
import { IoTriangleSharp } from "react-icons/io5";

type ToggleProps = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  className?: string;
};

function Toggle({ title, children, open, className }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(open === true);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={`w-full ${className ? className : ""}`}>
      <div className="flex flex-row-reverse gap-4 justify-center items-center">
        <Button
          variant="primary"
          onClick={handleToggle}
          className="w-full font-bold !justify-start pl-4 pr-2"
        >
          <span className="w-full flex text-left md:text-20px">{title}</span>
        </Button>

        <span className="flex justify-start items-center h-8 min-w-3 pl-1">
          <IoTriangleSharp
            size={14}
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "transform rotate-180" : "transform rotate-90"
            }`}
          />
        </span>
      </div>

      {isOpen && (
        <div className="pt-2 pl-[9px] justify-start flex flex-row gap-4">
          <div className="min-w-4 max-w-4 sm:min-w-6 sm:max-w-6 md:min-w-8 md:max-w-8 justify-start grid grid-cols-1 gap-0">
            <div className="w-full rounded-bl-lg border-l border-b border-black" />
            <div className="w-full" />
          </div>
          <div className="w-full mb-[2px] font-archivo md:text-20px space-y-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Toggle;
