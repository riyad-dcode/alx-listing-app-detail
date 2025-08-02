import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isSelected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition 
        ${isSelected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"}`}
    >
      {label}
    </button>
  );
};

export default Pill;