import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="antialiased dark:text-slate-400 bg-white dark:bg-slate-900 eading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900">
        <Home />
      </div>
    </div>
  );
}

export default App;
