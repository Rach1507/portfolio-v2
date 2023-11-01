import "./App.css";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-0 antialiased font-light min-h-screen w-screen bg-gradient-to-bl from-blue-950 to-black leading-relaxed text-slate-300 select-none">
        <Home />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
