import React from 'react';
import image from '../assets/image 102(2).png';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
        
Sobha Hoskote - A Landmark Township Redefining Luxury in East Bangalore
         </span>
          <br />
          
            <span>
        <br />    <p>Sobha Hoskote is a thoughtfully envisioned 300-acre master-planned township that sets a new benchmark for luxury living in East Bangalore. Designed to seamlessly integrate elegant residences with curated retail and premium commercial spaces, the township offers a refined, self-sustained lifestyle in a fast-emerging growth corridor.<p/>
            <br/>
            <p>Phase 1 introduces the Signature Collection spread across 48 acres, featuring iconic high-rise towers with 1, 2, 3 & 4 BHK residences crafted for modern, upscale living. With exceptional planning, expansive layouts, and excellent connectivity from the strategic Hoskote location, Sobha Hoskote presents a rare opportunity to be part of a future-ready luxury destination. </p></p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
