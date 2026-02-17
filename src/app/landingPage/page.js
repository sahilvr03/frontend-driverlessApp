
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Hero Section */}
       <div
        className="inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0h60v1H0zM0 0h1v60H0z' fill='%23000000' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      ></div> 
      <Section/>

      {/* Technologies Section */}
      <Technologies />
      <Gallery/>
      <Features />
      {/* About Us Section */}
      <Demo/>
    
      {/* <Gallery/> */}
      <AboutUs />
      <Contactus/>
      
    </div>
  );
};

export default Landingpage;
