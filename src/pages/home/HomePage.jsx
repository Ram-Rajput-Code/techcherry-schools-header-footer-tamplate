import {  Container } from "@mui/material";


// import HomeBanner from "./componets/HomeBanner";
import HomeSlider from "./componets/HomeSlider";
import "../../index.css";
import HomeCards from "./componets/HomeCard";
import HeroSection from "./componets/HeroSection";
import HomeBody from "./componets/HomeBody";
import AccordionComponent from "../about/component/AccordionComponent";
const HomePage = () => {
  return (
    <>
      {/* <HomeBanner /> */}
      <HomeSlider />
      <Container>
        <HomeBody/>
        <HeroSection/>
        <HomeCards />
        <AccordionComponent/>
      </Container>
    </>
  );
};
export default HomePage;
