import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import List from "./components/List";
import MainMenu from "./components/MainMenu";
import Navbar from "./components/Navbar";
import { moviesData } from "./data";

function App() {
  return (
    <BrowserRouter>
      <Navbar titleSite={"Movientar"} />
      <main className="px-4 py-6 pt-16">
        <MainMenu />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
