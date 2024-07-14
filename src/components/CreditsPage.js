// src/components/CreditsPage.js
import React from "react";

const CreditsPage = ({ onBack }) => {
  return (

      <div className="relative z-10 text-center w-1/2 rounded-lg bg-slate-900 bg-opacity-25 p-6 text-lg">
        <h1 className="text-3xl font-bold text-white mb-4">Credits</h1>
        <div className="">
          <p className="text-white">
            Developed by{" "}
            <a
              className="hover:text-web_stek_fuchsia-500"
              href="https://www.web-stek.com"
              target="_blank"
            >
              web/stek Sàrl
            </a>{" "}
            from Strasbourg for{" "}
            <a
              className="hover:text-black"
              href="https://www.4marine.life"
              target="_blank"
            >
              4marine.life Asso
            </a>
            , Paris. An open-source project to raise awareness of marine
            conservation.
          </p>
        </div>
        <button
          className="bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onBack}
        >
          Back
        </button>
        </div>

  );
};

export default CreditsPage;
