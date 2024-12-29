"use client";

import { useState } from "react";
// import setLanguageValue from "@/actions/set-language-action";
import { RxHamburgerMenu } from "react-icons/rx";
import { Select, SelectItem, Image } from "@nextui-org/react";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";
import japan from "../assets/japan.png";
import korea from "../assets/korea.png";
import { useTranslation } from 'react-i18next';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("kr");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };


  return (
    <div className="w-full h-full">
      <nav className="white p-4 border-b border-gray-200">
        <div className="mx-auto flex justify-between items-center px-5">
          <div className="flex items-center justify-center gap-x-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mr-2 lg:block"
            >
              <RxHamburgerMenu size={24} />
            </button>
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-auto h-10"/>
            </div>
          </div>

          {/* Navbar Links */}
          <div className="flex items-center space-x-6 text-lg">
            {/* Language Dropdown using select */}
            <div className="relative">
              {/* <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="text-lg   cursor-pointer appearance-none rounded-md border border-gray-500 
               px-10 py-1.5   outline-none sm:py-2 sm:text-base"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="bn">Bangla</option>
              </select> */}
              <Select
                className="w-40"
                onChange={handleLanguageChange}
                selectedKeys={[selectedLanguage]}
              >
                <SelectItem
                  startContent={
                    <Image
                      src={korea}
                      alt="Korean"
                      width={20}
                      height={20}
                    />
                  }
                  value="kr"
                  key="kr"
                >
                  Korean
                </SelectItem>
                <SelectItem
                  startContent={
                    <Image
                      src={japan}
                      alt="Japanese"
                      width={20}
                      height={20}
                    />
                  }
                  value="jp"
                  key="jp"
                >
                  Japanese
                </SelectItem>
              </Select>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          // selectedLanguage={selectedLanguage}
          // setSelectedLanguage={setSelectedLanguage}
        />

        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Navbar;
