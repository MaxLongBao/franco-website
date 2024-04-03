import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/services.css";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <main className="px-6 md:px-24 index-main h-svh">
        <p className="text-8xl">Under Construction</p>
        <p className="text-8xl">&#128679;</p>
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage;

export const Head = () => <title>Cerberus Capital Property Investments</title>
