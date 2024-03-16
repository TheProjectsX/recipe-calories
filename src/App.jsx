import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Navbar />
      <Header />
      <OurRecipes />
      <Footer />
    </div>
  );
};

export default App;
