import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import Navbar from "./components/Navbar";

import ImgBgMain from "./assets/main-background-image3.jpg";

function App() {
  return (
    <HashRouter>
      <Navbar titleSite={"Movientar"} />
      <div
        style={{ backgroundImage: `url(${ImgBgMain})` }}
        className="absolute w-full bg-slate-800/30 bg-contain bg-repeat">
        <div className="bg-white/20 backdrop-blur-sm backdrop-brightness-50 sm:backdrop-blur-md">
          <main className="min-h-screen px-4 py-6 pt-16">
            <MainMenu />
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
