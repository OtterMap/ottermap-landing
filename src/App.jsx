import AboutUs from "./pages/aboutus/AboutUs";
import FacilitiesServices from "./pages/industries/FacilitiesServices";
import Landscaping from "./pages/industries/Landscaping";
import Paving from "./pages/industries/Paving";
import Snow from "./pages/industries/Snow";
import Landing from "./pages/landing/Landing";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WhyWe from "./pages/whywe/WhyWe";
import { useEffect } from "react";
import mixpanel from './utils/mixpanel/mixpanel.js';
import Resources from "./pages/resources/Resources.jsx";

function App() {

  useEffect(() => {
    mixpanel.track("Page View");
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="font">
            <Landing />
          </div>
        }
        />
        <Route path="/industries/snow" element={
          <div className="font">
            <Snow />
          </div>
        }
        />
        <Route path="/industries/landscaping" element={
          <div className="font">
            <Landscaping />
          </div>
        }
        />
        <Route path="/industries/paving" element={
          <div className="font">
            <Paving />
          </div>
        }
        />
        <Route path="/industries/facilities-services" element={
          <div className="font">
            <FacilitiesServices />
          </div>
        }
        />
        <Route path="/about-us" element={
          <div className="font">
            <AboutUs />
          </div>
        }
        />
        <Route path="/why-we" element={
          <div className="font">
            <WhyWe />
          </div>
        }
        />
        <Route path="/resources" element={
          <div className="font">
            <Resources />
          </div>
        }
        />
      </Routes>
    </BrowserRouter>

  )
}

export default App
