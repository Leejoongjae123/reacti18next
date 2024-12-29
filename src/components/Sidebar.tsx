import { useState } from "react";
import {
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { IoSearch } from "react-icons/io5";
// import { useTranslations } from "next-intl";
import { useTranslation } from 'react-i18next';

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) {
  
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);
  const [isOpen6, setIsOpen6] = useState(true);
  const handleAllClose = () => {
    // Check if all sections are currently closed
    const allClosed = !isOpen1 && !isOpen2 && !isOpen3 && !isOpen4 && !isOpen5 && !isOpen6;
    
    // Toggle all sections to the opposite state
    setIsOpen1(allClosed ? true : false);
    setIsOpen2(allClosed ? true : false);
    setIsOpen3(allClosed ? true : false);
    setIsOpen4(allClosed ? true : false);
    setIsOpen5(allClosed ? true : false);
    setIsOpen6(allClosed ? true : false);
  }

  // const t = useTranslations("HomePage");

  const { t} = useTranslation();



  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
        fixed lg:static top-0 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
        h-screen lg:h-[calc(100vh-73px)]
        ${isSidebarOpen ? "w-[20vw]" : "w-0"}
        lg:block
        ${isSidebarOpen ? "z-30 lg:z-0" : ""}
        overflow-y-auto scrollbar-hide
      `}
      >
        <div className="p-4 w-full h-full overflow-y-auto scrollbar-hide">
          <div className="px-4 flex flex-col gap-y-2">
          <h2 className="text-xl font-bold ">{t("guide_title")}</h2>
          <p>1.0</p>
          </div>
          
          <Input startContent={<IoSearch className="text-gray-500 text-lg" />} className="my-4 px-4" />
          <div className="w-full px-4 my-4">
          <Divider className="" />
          </div>
          
          <Button variant="light" className="text-sm" onClick={handleAllClose}>
            {(!isOpen1 && !isOpen2 && !isOpen3 && !isOpen4 && !isOpen5 && !isOpen6) 
              ? t("expand_all") 
              : t("fold_all")}
          </Button>
          
          <div className="space-y-2 px-4">
            <div>
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen1 ? 'transform rotate-180' : ''}`} />
                <span className="text-medium flex-grow ml-2 font-bold">{t("menu1")}</span>
              </button>
              <div className={`pl-4 space-y-4 overflow-hidden transition-all ${isOpen1 ? 'max-h-40 ' : 'max-h-0'}`}>
                
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu1_1")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu1_2")}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen2 ? 'transform rotate-180' : ''}`} />
                <span className="text-medium flex-grow ml-2 font-bold">{t("menu2")}</span>
              </button>
              <div className={`pl-4 space-y-4 overflow-hidden transition-all ${isOpen2 ? 'max-h-40 ' : 'max-h-0'}`}>
                
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu2_1")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu2_2")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu2_3")}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen3 ? 'transform rotate-180' : ''}`} />
                <span className="text-medium flex-grow ml-2 font-bold">{t("menu3")}</span>
              </button>
              <div className={`pl-4 space-y-4 overflow-hidden transition-all ${isOpen3 ? 'max-h-40 ' : 'max-h-0'}`}>
                
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu3_1")}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen4(!isOpen4)}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen4 ? 'transform rotate-180' : ''}`} />
                <span className="text-medium flex-grow ml-2 font-bold">{t("menu4")}</span>
              </button>
              <div className={`pl-4 space-y-4 overflow-hidden transition-all ${isOpen4 ? 'max-h-40 ' : 'max-h-0'}`}>

                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu4_1")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu4_2")}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen5(!isOpen5)}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen1 ? 'transform rotate-180' : ''}`} />
                <span className="text-medium flex-grow ml-2 font-bold">{t("menu5")}</span>
              </button>
              <div className={`pl-4 space-y-4 overflow-hidden transition-all ${isOpen5 ? 'max-h-40 ' : 'max-h-0'}`}>
                
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu5_1")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu5_2")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu5_3")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu5_4")}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen6(!isOpen6)}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen6 ? 'transform rotate-180' : ''}`} />
                <span className="text-medium flex-grow ml-2 font-bold">{t("menu6")}</span>
              </button>
              <div className={`pl-4 space-y-4 overflow-hidden transition-all ${isOpen6 ? 'max-h-40 ' : 'max-h-0'}`}>
                
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu6_1")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu6_2")}</div>
                <div className="px-8 h-10 hover:text-[#1448CC] hover:bg-[#E0ECFF] rounded-lg flex items-center">{t("menu6_3")}</div>
              </div>
            </div>
            

          </div>
        </div>
      </aside>
    </>
  );
}


