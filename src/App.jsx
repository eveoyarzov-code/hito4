
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; 
import Home from "./components/Home";
// import Pizza from "./components/Pizza"; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Header /> {/* Se renderiza arriba del contenido principal */}
      <Home />
       {/*<Pizza />*/}
      
      <Footer />
    </div>
  );
};

export default App;

