import { Helmet } from "react-helmet";
import Amenities from "../Amenities/Amenities";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import NaverhoodGide from "../NaverhoodGide/NaverhoodGide";
import About from "./About/About";
import ApartmentData from "./ApartmentData";
// import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CityDwellers | Home</title>
      </Helmet>
      <Banner></Banner>
      <ApartmentData></ApartmentData>
      <Amenities></Amenities>
      <NaverhoodGide></NaverhoodGide>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
