import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar titleSite={"Movientar"} />
      <main className="px-4 py-6 pt-28">
        <MainMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
