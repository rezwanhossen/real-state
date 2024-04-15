import { Helmet } from "react-helmet";
import Blog from "../../Blog/Blog";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>CityDwellers | About</title>
      </Helmet>
      <div className="hero min-h-screen rounded bg-base-300">
        <div className="hero-content ">
          <div className="md:flex justify-between p-4 gap-5">
            <div className=" flex-1">
              <div className=" mt-6 space-y-3">
                <h2 className="text-3xl lg:text-7xl font-bold p-3 ">
                  About Us
                </h2>
                <p>
                  The main objective of our company CityDwellers is to provide
                  real or virtual materials to identify ideal living space for
                  people. We are introducing a team that is well known and
                  experienced in the real estate industry.
                </p>
              </div>
            </div>
            <div className=" flex-1">
              <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/S5zK8wW/pexels-pixabay-276724.jpg"
                    className="rounded-box h-[350px] w-[300px]"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/jgC3b8Q/pexels-pixabay-280212.jpg"
                    className="rounded-box h-[350px] w-[300px]"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/dffTtSx/pexels-expect-best-323780.jpg"
                    className="rounded-box h-[350px] w-[300px]"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/DwWdB7n/pexels-pixabay-271816.jpg"
                    className="rounded-box h-[350px] w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About main Contant */}

      <div className="md:flex mt-7 gap-6">
        <div className=" flex-1">
          <img
            className=" rounded"
            src="https://i.ibb.co/6BYrM1K/pexels-liene-ratniece-1329510.jpg"
            alt=""
          />
        </div>
        <div className=" flex-1 py-3 px-6 space-y-3">
          <h3 className="text-2xl md:text-4xl font-bold">
            we help you Identify the ideal residential location
          </h3>
          <p>
            Our team members are professional and skilled who are ready to
            provide you with the right assistance and advice.
          </p>
          <ul className=" text-xl font-bold list-disc list-inside space-y-1">
            <li>Experience the difference</li>
            <li>Finding home / Appartment</li>
            <li>Your Startup</li>
            <li>
              Provide personal consultation with customers, their needs,
              preferences and budget
            </li>
          </ul>
        </div>
      </div>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default About;
