import { Link } from "react-router-dom";
import companylogo from "../../../../src/assets/companylogo-removebg-preview.png";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Footer = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className=" mt-10">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img className=" w-2/3 " src={companylogo} alt="" />
          <h3 className=" text-2xl font-bold">
            City<span className=" text-rose-600">Dwellers </span>Ltd.
          </h3>
          <p>
            <b>Phone : </b>+59883746665
          </p>
          <p>
            <b>Email : </b>citydedwellers@gmail.com
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>

          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <div style={{ height: "200px", width: "300px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
