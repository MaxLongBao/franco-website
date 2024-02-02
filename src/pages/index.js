import * as React from "react";
import Navbar from "../components/Navbar";
import franco from "../images/franco.jpeg";
import "../css/index.css";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <main className="md:px-32 mt-16">
        <header className="flex flex-wrap	items-center">
          <div className="md:flex-1 text-center md:text-left">
            <h1 className="main-header text-6xl md:text-7xl font-bold">Invest in a better alternative</h1>
            <p className="mt-5">Build a portfolio of private assets like real estate, private credit, and venture capital.</p>
            <a href="/questionnaire" className="button-signup text-white mt-5 rounded-md mb-5 md:mb-0">Sign up</a>
          </div>
          <div className="md:flex-1 flex justify-center items-center">
            <img src={franco} alt="Franco Medley" className="rounded-sm w-3/4 max-w-none"/>
          </div>
        </header>
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Cerberus Capital Property Investments</title>
