import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/services.css";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <main className="px-6 md:px-24 pt-20">
        {/* <p className="text-8xl">Under Construction</p>
        <p className="text-8xl">&#128679;</p> */}
        <h2 className="text-4xl md:text-5xl mb-20 text-center">Our Services</h2>
        <h4 className="text-2xl">Our Standard services:</h4>
        <br />
        <h5 className="text-xl">Initial fact-finding meeting or call</h5>
        <p>Begin your journey with a thorough onboarding session (either in person or online) during which we'll delve into your investment goals and address any inquiries you might have.</p>
        <br/>
        <h5 className="text-xl">Property matching consultation</h5>
        <p>Benefit from a customized property consultation to explore potential investment prospects tailored to your specific criteria.</p>
        <br/>
        <h5 className="text-xl">Weekly property investor list</h5>
        <p>Stay updated with a handpicked selection of potential properties arriving in your inbox next week.</p>
        <br/>
        <h5 className="text-xl">Individual property launch emails</h5>
        <p>Receive notifications about exciting new property launches tailored to match your investment profile.</p>
        <br/>
      </main>
      <main className="px-6 md:px-24 bg-black text-white">

      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage;

export const Head = () => <title>Cerberus Capital Property Investments</title>
