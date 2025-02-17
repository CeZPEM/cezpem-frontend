import React, { useState } from "react";
import { Button } from "./Button";
import { IoTriangleSharp } from "react-icons/io5";

type ToggleProps = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
};

function Toggle({ title, children, open }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(open === true);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <div className=" flex flex-row-reverse gap-4 justify-center items-center">
        <Button
          variant="primary"
          onClick={handleToggle}
          className="w-full font-bold"
        >
          <span className="w-full text-left">{title}</span>
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
          <div className="min-w-[40px] max-w-[40px] justify-start grid grid-cols-1 gap-0">
            <div className="w-full rounded-bl-lg border-l border-b border-black" />
            <div className="w-full" />
          </div>
          <div className="w-full mb-[2px] font-archivo font-20px">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Toggle;
