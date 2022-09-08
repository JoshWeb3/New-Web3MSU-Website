import { Navigation } from "../src/components/navigation/navigation";
import { Footer } from "../src/components/footer/footer";
import { Web3App } from "./pages/app/app";
import { Homepage } from "./pages/homepage/homepage";
import { AboutUs } from "../src/pages/aboutUs/aboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
     
      <Router>
         <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/web3msuapp" element={<Web3App/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
