import Amenities from "../Amenities/Amenities";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import NaverhoodGide from "../NaverhoodGide/NaverhoodGide";
import About from "./About/About";
import ApartmentData from "./ApartmentData";
// import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ApartmentData></ApartmentData>
      <Amenities></Amenities>
      <NaverhoodGide></NaverhoodGide>
      <Blog></Blog>
    </div>
  );
};

export default Home;
