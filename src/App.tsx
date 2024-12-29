import './App.css'
import Navbar from './components/Navbar';
import Contents from './components/Contents';

function App() {

  return (
    <div className='w-full h-full bg-white'>
      <Navbar>
        <Contents />
      </Navbar>
    </div>
  )
}

export default App
