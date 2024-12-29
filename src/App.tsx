import './App.css'
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Contents from './components/Contents';

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='w-full h-full bg-white'>
      <Navbar>
        <Contents />
      </Navbar>
    </div>
  )
}

export default App
