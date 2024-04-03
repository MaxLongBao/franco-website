import React from 'react';
import logo from '../images/logo.png';

function Footer() {
  return (
    <footer className='footer mt-10 py-5 px-32 bg-white'>
      <div className='flex justify-between'>
      <a href="#" class="fa fa-facebook w-16 h-16 text-white"></a>
        <a href='/'>
          <img src={logo} alt='Cerberus Capital Property Investments' className='md:w-1/12'/>
        </a>
        <div className='social'>

        </div>
      </div>
      <div className='disclaimer mt-10'>
        <p className='text-xs'>
          Cerberus Capital Property Investments, LTD (“CCPI“) operates a website at cerberuscapitalpropertyinvestments.co.uk.
          {/* By using the website, you accept our Terms of Service and Privacy Policy. */}
          All images and return and projection figures shown are for illustrative purposes only, may assume additional investments over time, and are not actual CCPI customer or model returns or projections.
          Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance.
          All securities involve risk and may result in partial or total loss. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties.
          Neither CCPI nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence.
          Prospective investors should confer with their personal tax advisors regarding the tax consequences based on their particular circumstances.
          Neither CCPI nor any of its affiliates assume responsibility for the tax consequences for any investor of any investment.
        </p>
        <p className='text-xs'>
          {new Date().getFullYear()} CCPI, LTD. All Rights Reserved. Proudly designed and coded in London, UK.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
