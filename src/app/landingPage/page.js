
import "swiper/css";
import "swiper/css/pagination";

import Features from "../components/landingpage/features";
import Technologies from "../components/landingpage/technologies";
import AboutUs from "../components/landingpage/aboutus";
import Section from "../components/landingpage/section";
import Demo from "../components/landingpage/Testing";
import Contactus from "../contact/page";
import Gallery from "../components/landingpage/gallery";
import Achievements from "../components/landingpage/achievement";
// import NewPractice from "../components/landingpage/newprogress";

const Landingpage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
   
      <Section/>

      {/* Features Section */}
      
      {/* Technologies Section */}
      <Technologies />
      <Gallery/>
      <Features />
      {/* About Us Section */}
      <Demo/>
      <Achievements/>
      {/* <Gallery/> */}
      <AboutUs />
      <Contactus/>
      
    </div>
  );
};

export default Landingpage;
