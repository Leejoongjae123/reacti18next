import React from "react";
import { useSearchStore } from "../store/searchStore";
import { useLanguageStore } from "../store/languageStore";
import { textDictionary } from "./textDictionary";
import { useState, useEffect } from "react";
import { Divider } from "@nextui-org/divider";
import { useContentsStore } from "../store/contentsStore";
import { useMenuStore } from "../store/menuStore";
function SearchList() {
  const { searchKeyword } = useSearchStore();
  const { selectedLanguage } = useLanguageStore();
  const { selectedContents,setSelectedContents } = useContentsStore();
  const {selectedMenu,setSelectedMenu} = useMenuStore();

  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (searchKeyword) {
      const results = textDictionary.filter(
        (item) =>
          item[selectedLanguage as keyof typeof item].subtitle.includes(
            searchKeyword
          ) ||
          item[
            selectedLanguage as keyof typeof item
          ].subtitleDescription.includes(searchKeyword)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword, selectedLanguage]);

  console.log("searchResults:", searchResults);

  return (
    <div className="px-12 py-14 flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start border-b border-gray-300 h-[61px]">
        <h1 className="font-bold text-[24px]">
          <span className="text-[#0A54CC]">{searchKeyword}</span>에 대한 검색
          결과 <span className="text-[#0A54CC]">{searchResults.length}</span>건
        </h1>
      </div>
      {searchResults.map((item, index) => (
        <>
          <div onClick={() => {setSelectedContents('contents');setSelectedMenu(item.title)}} className="w-full h-44 flex flex-col justify-evenly items-center py-5 pointer cursor-pointer hover:bg-[#0A54CC]/5">
            <div className="w-full text-[#808080] text-[16px] ">
              {item[selectedLanguage as keyof typeof item].title} {">"} {item[selectedLanguage as keyof typeof item].subtitle}
            </div>
            <div className="w-full font-bold text-[#1A1A1A] text-[24px] ">
              {item[selectedLanguage as keyof typeof item].subtitle.split(searchKeyword).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#0A54CC] font-bold">{searchKeyword}</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="w-full text-[#1A1A1A] text-[16px] ">
              {item[selectedLanguage as keyof typeof item].subtitleDescription.split(searchKeyword).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#0A54CC] font-bold">{searchKeyword}</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <Divider></Divider>
        </>
      ))}
    </div>
  );
}

export default SearchList;
