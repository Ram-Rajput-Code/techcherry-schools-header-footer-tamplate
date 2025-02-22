import {  Container } from "@mui/material";


// import HomeBanner from "./componets/HomeBanner";
import HomeSlider from "./componets/HomeSlider";
import "../../index.css";
import HomeCards from "./componets/HomeCard";
import HeroSection from "./componets/HeroSection";
import HomeBody from "./componets/HomeBody";
const HomePage = () => {
  return (
    <>
      {/* <HomeBanner /> */}
      <HomeSlider />
      <Container>
        <HomeBody/>
        <HeroSection/>
        <HomeCards />
      </Container>
    </>
  );
};
export default HomePage;
