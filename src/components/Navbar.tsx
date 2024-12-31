"use client";

import { useState, useEffect } from "react";
// import setLanguageValue from "@/actions/set-language-action";
import { RxHamburgerMenu } from "react-icons/rx";
import { Select, SelectItem, Image } from "@nextui-org/react";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";
import japan from "../assets/jp.png";
import korea from "../assets/kr.png";
import en from "../assets/en.png";
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from "../store/languageStore";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useLanguageStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    setIsSidebarOpen(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsSidebarOpen(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };


  return (
    <div className="w-full h-screen">
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
                <SelectItem
                  startContent={
                    <Image
                      src={en}
                      alt="English"
                      width={20}
                      height={20}
                    />
                  }
                  value="en"
                  key="en"
                >
                  English
                </SelectItem>
              </Select>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex h-[calc(100vh-73px)]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1 h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Navbar;
