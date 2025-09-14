import React, { useState, useRef, useEffect } from "react";

type DropdownProps = {
  label: string;
  items: string[];
  onSelect?: (item: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: string) => {
    setSelected(item);
    setOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative w-50 md:w-64 bg-white rounded-[50px] border border-gray-300 "
    >
      {/* Toggle */}
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <span>{selected || label}</span>
        <i
          className={`ri-arrow-down-s-line transition-transform duration-300 text-[20px] ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 top-[110%] right-0 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-30 ${
          open ? "max-h-60 opacity-100 " : "max-h-0 opacity-0"
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
