import React from "react";
import { useSearchStore } from "../store/searchStore";
import { useLanguageStore } from "../store/languageStore";
import { textDictionary } from "./textDictionary";
import { useState, useEffect } from "react";
import { Divider } from "@nextui-org/divider";
import { useContentsStore } from "../store/contentsStore";
import { useMenuStore } from "../store/menuStore";

type LanguageContent = {
  title: string;
  subtitle: string;
  subtitleDescription: string;
};

type DictionaryItem = {
  title: string;
  [key: string]: LanguageContent | string;
};

function SearchList() {
  const { searchKeyword } = useSearchStore();
  const { selectedLanguage } = useLanguageStore();
  const { setSelectedContents } = useContentsStore();
  const {setSelectedMenu} = useMenuStore();

  const [searchResults, setSearchResults] = useState<typeof textDictionary>([]);
  useEffect(() => {
    if (searchKeyword) {
      const results = textDictionary.filter(
        (item) => {
          const content = item[selectedLanguage as keyof typeof item];
          return typeof content === 'object' && (
            content.subtitle.includes(searchKeyword) ||
            content.subtitleDescription.includes(searchKeyword)
          );
        }
      );
      setSearchResults(results as any[]);
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword, selectedLanguage]);

  console.log("searchResults:", searchResults);

  return (
    <div className="px-12 py-14 flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start border-b border-gray-300 h-full">
        <h1 className="font-bold text-[24px] mb-6">
          <span className="text-[#0A54CC]">{searchKeyword}</span>에 대한 검색
          결과 <span className="text-[#0A54CC]">{searchResults.length}</span>건
        </h1>
      </div>
      {searchResults.map((item: DictionaryItem, index) => (
        <React.Fragment key={`search-result-${index}`}>
          <div 
            onClick={() => {setSelectedContents('contents');setSelectedMenu(item.title)}} 
            className="w-full h-full flex flex-col justify-evenly items-center py-8 pointer cursor-pointer hover:bg-[#0A54CC]/5 gap-y-3"
          >
            <div className="w-full text-[#808080] text-[16px] ">
              {(item[selectedLanguage] as LanguageContent).title} {">"} {(item[selectedLanguage] as LanguageContent).subtitle}
            </div>
            <div className="w-full font-bold text-[#1A1A1A] text-[24px] ">
              {(item[selectedLanguage] as LanguageContent).subtitle.split(searchKeyword).map((part, i, arr) => (
                <React.Fragment key={`subtitle-${i}`}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#0A54CC] font-bold">{searchKeyword}</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="w-full text-[#1A1A1A] text-[16px] ">
              {(item[selectedLanguage] as LanguageContent).subtitleDescription.split(searchKeyword).map((part, i, arr) => (
                <React.Fragment key={`description-${i}`}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#0A54CC] font-bold">{searchKeyword}</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
}

export default SearchList;
