import React from 'react';
import Navbar from '../components/Navbar';

function Questionnaire() {
  return (
    <div>
      <Navbar />
      <main className='px-32 mt-4 h-svh'>
        <div className='text-center'>
          <h1 className='text-2xl'>Tell us about yourself</h1>
          <div className='h-svh'>
            <iframe
              src="https://link.propernetics.com/widget/form/xfOVs63DvqA86V8qH3Gj"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
              id="inline-xfOVs63DvqA86V8qH3Gj" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Investors"
              data-height="579"
              data-layout-iframe-id="inline-xfOVs63DvqA86V8qH3Gj"
              data-form-id="xfOVs63DvqA86V8qH3Gj"
              title="Investors"
                  >
            </iframe>
            <script src="https://link.propernetics.com/js/form_embed.js"></script>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Questionnaire;
