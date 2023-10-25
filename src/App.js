import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <div className="antialiased min-h-screen w-screen bg-gradient-to-bl from-blue-950 to-black dark:text-slate-400 bg-white dark:bg-slate-900 eading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900">
        <Home />
        <Experience/>
      </div>
    </div>
  );
}

export default App;
