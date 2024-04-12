
import "./App.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Partners from "./components/Partners";
import Info from "./components/Info";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-900 h-[100%] w-[100%]  text-white">
      <Header />
      <Middle />
      <Partners />
      <Info/>
      <Footer />
    </div>
  );
}

export default App;
