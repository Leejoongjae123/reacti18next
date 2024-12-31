import './App.css'
import Navbar from './components/Navbar';
import Contents from './components/Contents';
import { useSearchStore } from './store/searchStore';
import SearchList from './components/SearchList';
import { useContentsStore } from './store/contentsStore';
function App() {
  const { searchKeyword } = useSearchStore();
  console.log("searchKeyword:", searchKeyword);
  const { selectedContents } = useContentsStore();
  return (
    <div className='w-full h-full bg-white'>
      <Navbar>
        {selectedContents === 'contents' ? <Contents /> : <SearchList />}
      </Navbar>
    </div>
  )
}

export default App
