import InnerManual from './InnerManual';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../store/languageStore';
import { useMenuStore } from '../store/menuStore';
import { textDictionary } from './textDictionary';
function Contents() {
  const { selectedLanguage } = useLanguageStore();
  const { selectedMenu } = useMenuStore();
  const selectedText = textDictionary.find(item => item.title === selectedMenu);
  const languageContent = selectedText ? selectedText[selectedLanguage as keyof typeof selectedText] : null;
  console.log('languageContent:', languageContent);
  console.log('selectedLanguage:',selectedLanguage)
  console.log('selectedMenu:',selectedMenu)
  return (
    <div className='bg-white w-full flex flex-col h-full '> 
      <div className="bg-[#F2F2F2] w-full py-14 px-12">
        <h1 className="text-[24px] font-bold mb-2 text-[#0A54CC]">{languageContent?.title}</h1>
        <p className="text-[#424242] text-sm">
          {languageContent?.titleDescription}
        </p>
        
      </div>
      <div className="bg-white w-full py-10 px-12">
        <h2 className="text-[20px] font-bold mb-2">{languageContent?.subtitle}</h2>
        <p className="text-[#424242] text-sm">
          {languageContent?.subtitleDescription}
        </p>
      </div>
      <div className="bg-white w-full py-10 px-12 overflow-y-auto">
        <InnerManual />
      </div>
    </div>
  )
}

export default Contents