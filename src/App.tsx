import "./App.css";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import { useSearchStore } from "./store/searchStore";
import SearchList from "./components/SearchList";
import { useContentsStore } from "./store/contentsStore";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  const { searchKeyword } = useSearchStore();
  console.log("searchKeyword:", searchKeyword);
  const { selectedContents } = useContentsStore();
  return (
    <HelmetProvider>
      <div className="w-full h-full bg-white">
        <Helmet>
          <title>User Guide</title>
          <meta name="description" content="UCWORKS SCHOOL LINE User Guide" />
        </Helmet>
        <Navbar>
          {selectedContents === "contents" ? <Contents /> : <SearchList />}
        </Navbar>
      </div>
    </HelmetProvider>
  );
}

export default App;
