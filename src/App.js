import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import Navbar from "./components/Navbar";

import ImgBgMain from "./assets/main-background-image.jpg";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ backgroundImage: `url(${ImgBgMain})` }}
        className="absolute h-max w-full">
        <Navbar titleSite={"Movientar"} />
        <main className="px-4 py-6 pt-16">
          <MainMenu />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
