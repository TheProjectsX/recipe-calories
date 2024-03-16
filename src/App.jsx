import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="max-w-[1150px] mx-auto px-5">
      <ToastContainer />
      <Navbar />
      <Header />
      <OurRecipes />
      <Footer />
    </div>
  );
};

export default App;
