import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { InfoProvider } from "./utils/InfoContext";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ContacsPage from "./pages/ContacsPage";
import DetailsPage from "./pages/DetailsPage";
import Error404Page from "./pages/Error404Page";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import StreamsPage from "./pages/StreamsPage";
import './styles/components/mobile/style-mobile.css'

function App() {
  return (
    <InfoProvider>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/games" element={<GamesPage/>}/>
          <Route path="/details" element={<DetailsPage/>}/>
          <Route path="/streams" element={<StreamsPage/>}/>
          <Route path="/contacts" element={<ContacsPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="*" element={<Error404Page/>}/>
        </Routes>
      <Footer/>
    </Router>
    </InfoProvider>
  );
}

export default App;
