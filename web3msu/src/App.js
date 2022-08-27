import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "../src/components/navigation/navigation";
import { Footer } from "../src/components/footer/footer";

import { Homepage } from "./pages/homepage/homepage";
import { AboutUs } from "../src/pages/aboutUs/aboutUs";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
