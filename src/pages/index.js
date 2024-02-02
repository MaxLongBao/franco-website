import * as React from "react";
import Navbar from "../components/Navbar";
import franco from "../images/franco.jpeg";
import "../css/index.css";

const IndexPage = () => {
  return (
    <main className="px-40">
      <Navbar />
      <header className="flex items-center">
        <div className="flex-1">
          <h1 className="main-header text-7xl font-bold">Invest in a better alternative</h1>
          <p className="mt-5">Build a portfolio of private assets like real estate, private credit, and venture capital.</p>
          <a href="/questionnaire" className="button-signup text-white mt-5 rounded-md">Sign up</a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={franco} alt="Franco Medley" className="rounded-sm w-3/4"/>
        </div>
      </header>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Cerberus Capital Property Investments</title>
