import React, { useState, useRef, useEffect } from "react";
import {
  RiMailFill,
  RiArrowDropDownLine,
  RiTwitterXFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiFacebookFill,
  RiYoutubeFill,
} from "react-icons/ri";

import { BsFillTelephoneFill } from "react-icons/bs";

const TopBanner: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Fr");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsDropdownOpen(false);
  };

  return (
    <section className="flex items-center justify-between min-h-[50px] px-4 md:px-20 bg-black text-white">
      {/* Left Side */}
      <div className="flex items-center sm:gap-10">
         <div>
        <a
          href="tel:+225-27 6156 2849"
          className="hidden items-center gap-2 text-sm hover:text-secondary transition sm:flex "
        >
          <BsFillTelephoneFill /> +225-27 6156 2849
        </a>
      </div>
      <div>
        <a
          href="mailto:aide@aidnov.com"
          className="flex items-center gap-2 text-sm hover:text-secondary transition"
        >
          <RiMailFill /> aide@aidnov.com
        </a>
      </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-1 cursor-pointer select-none px-2 py-1 rounded hover:bg-gray-800"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            {selectedLang} <RiArrowDropDownLine size={20} />
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full mt-1 left-0 bg-white border rounded-md shadow-md z-50">
              {["En", "Ch", "Ar", "Ma"].map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-secondary transition">
            <RiTwitterXFill />
          </a>
          <a href="#" className="hover:text-secondary transition">
            <RiLinkedinFill />
          </a>
          <a href="#" className="hover:text-secondary transition">
            <RiInstagramLine />
          </a>
          <a href="#" className="hover:text-secondary transition">
            <RiFacebookFill />
          </a>
          <a href="#" className="hover:text-secondary transition">
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
