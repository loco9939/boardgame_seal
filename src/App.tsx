import "./style/App.css";
import Header from "./Components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Modal from "./Components/Modal/Modal";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      {/* <Modal /> */}

      <Header />

      {/* <Sidebar /> */}

      <main>
        {/* <Home /> */}
        <Detail />
      </main>

      <Footer />
    </div>
  );
}

export default App;
