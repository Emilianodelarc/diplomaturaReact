import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ContacsPage from "./pages/ContacsPage";
import DetailsPage from "./pages/DetailsPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import StreamsPage from "./pages/StreamsPage";
import './styles/components/mobile/style-mobile.css'

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/games" element={<GamesPage/>}/>
          <Route path="/details" element={<DetailsPage/>}/>
          <Route path="/streams" element={<StreamsPage/>}/>
          <Route path="/contacts" element={<ContacsPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
