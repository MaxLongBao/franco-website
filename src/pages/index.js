import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import franco from "../images/franco.jpeg";
import "../css/index.css";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <main className="px-6 md:px-24 index-main h-svh">
        <header className="md:w-2/3 md:pt-16">
          <h1 className="main-header text-6xl md:text-7xl font-bold">Are you looking to invest your money in property?</h1>
          <p className="mt-5">Our services can help you find very lucrative deals. Whether you're an experienced investor aiming to diversify your portfolio or aspiring to become a landlord, we are certain that we can assist you.</p>
          <a href="/questionnaire" className="button-signup text-white mt-5 rounded-md mb-5 md:mb-0">Get in touch</a>
        </header>
      </main>
      <main className="pt-5">
        <h2 className="text-5xl md:text-6xl text-center mb-20">Key Benefits</h2>
        <div className="md:flex">
          <div className="md:w-1/2 h-96 flex justify-center items-center">
            <h4 className="text-3xl md:text-4xl px-6 text-center">National Coverage with access to a wide range of properties to suit your needs and meet your respective strategy.</h4>
          </div>
          <div className="md:w-1/2 h-96 bg-black flex justify-center items-center rounded-lg">
            <h4 className="text-3xl md:text-4xl text-white text-center">Compliance and transparency are integral to our property sourcing business with strict adherence to regulations and guidelines ensuring integrity in every transaction.</h4>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-1/2 h-96 md:bg-black flex justify-center items-center rounded-lg">
            <h4 className="text-3xl md:text-4xl md:text-white text-center">Customized investment opportunities tailored to your preferences and short, medium and long term goals.</h4>
          </div>
          <div className="md:w-1/2 h-96 bg-black md:bg-white flex justify-center items-center">
            <h4 className="text-3xl md:text-4xl px-6 text-center text-white md:text-black">We offer extensive guidance and support throughout the property sourcing process, while also managing the end-to-end procedure for clients lacking the time or experience.</h4>
          </div>
        </div>
      </main>
      <main className="px-6 py-20">
        <h2 className="text-4xl md:text-6xl mb-20 text-center">Knowing quality property investments</h2>
        <h4 className="text-2xl md:text-4xl px-6">Your definition of a quality investment may involve acquiring an asset at a low cost, subsequently selling it at a higher value for a profitable return. This principle holds true for property investments as well. Unlike stocks and shares, real estate investments offer consistent returns over the long term, both through rental income and property appreciation.</h4>
        <br/>
        <h4 className="text-2xl md:text-4xl px-6">The yield percentage of a property indicates the annual return on your investment relative to its purchase price. Our ability to source properties below market value, coupled with a strong rental market, ensures that we can provide investment opportunities that yield significant returns, whether through rental income or eventual property sale.</h4>
      </main>
      <main className="px-6 py-20 bg-black">
        <h2 className="text-4xl md:text-6xl mb-20 text-center text-white">Who are we?</h2>
        <h4 className="text-2xl md:text-4xl px-6 text-white">As property specialists, our fervor lies in linking investors with exceptional property opportunities throughout the UK, facilitating the growth and diversification of your property portfolio.</h4>
        <br/>
        <h4 className="text-2xl md:text-4xl px-6 text-white">Recognizing the unique needs of each investor, we acknowledge that preferences vary widely, encompassing budget, location, property type, and more. That's precisely why we're here.</h4>
        <br/>
        <h4 className="text-2xl md:text-4xl px-6 text-white">Our team meticulously assesses each property we acquire and source, aligning them with your specific criteria. This personalized approach ensures that our service is tailored to your individual requirements.</h4>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Cerberus Capital Property Investments</title>
