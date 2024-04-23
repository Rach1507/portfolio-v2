import "./App.css";
import PortfolioOverview from "./components/PortfolioOverview";
import AOS from "aos"; 
import { useEffect } from "react";
function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <PortfolioOverview />
    </div>
  );
}

export default App;
