import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/home/HomePage";

import ContactPage from "./pages/contact/ContactPage";
import AboutLayout from "./pages/about/AboutLayout";
import AboutUs from "./pages/about/AboutUs";
import History from "./pages/about/History";
import TeamLayout from "./pages/team/TeamLayout";
import Management from "./pages/team/Management";
import Teacher from "./pages/team/Teacher";
import GalleryPage from "./pages/gallery/GalleryPage";
import FounderSection from "./pages/about/Founder";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* about */}
            <Route path="about" element={<AboutLayout />}>
              <Route index element={<AboutUs />} />
              <Route path="us" element={<AboutUs />} />
              <Route path="Founder" element={<FounderSection />} />
              <Route path="history" element={<History />} />
            </Route>
            {/* team */}
            <Route path="team" element={<TeamLayout />}>
              <Route index element={<Management />} />
              <Route path="management" element={<Management />} />
              <Route path="teacher" element={<Teacher />} />
              {/* <Route path="history" element={<History />} /> */}
            </Route>
            <Route path="contact" element={<ContactPage />} />
            <Route path="gallery" element={<GalleryPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
