"use client";
import React from "react";
import Link from "next/link";

const CareersHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-secondary text-primary overflow-hidden px-4 py-8">
     
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pl-20  pt-20 text-center lg:text-left">
        
        {/* Enhanced Heading */}
        <div className="heading-container mb-8 md:mb-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-primary">Join Our </span>
            <span className="text-primary">
              Team
            </span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-20 md:w-28 lg:w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-6 mx-auto lg:mx-0"></div>
        </div>

        {/* Reduced Text Content */}
        <div className="paragraph-container mb-10 md:mb-12 max-w-4xl mx-auto lg:mx-0">
          <div className="relative mb-6 md:mb-8">
            <p className="text-lg sm:text-lg md:text-xl lg:text-xl leading-relaxed text-primary/90 lg:pl-8 font-light">
              Shape the future with <span className="">AI technology</span>. 
              Join our team of <span className="">innovators</span>.
            </p>
          </div>

          {/* Enhanced About Us Link */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            <p className="text-base sm:text-lg md:text-lg text-primary/90 mb-3 md:mb-4">
              Want to know our story?
            </p>
            <Link 
              href="/about-us" 
              className="inline-flex items-center bg-gradient-to-r from-primary to-primary/80 text-secondary font-bold px-6 py-3 md:px-6 md:py-3 rounded-xl hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">About Us</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </div>
        </div>

        {/* Simple Statistics - No Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-primary/70 text-sm md:text-base">Team Members</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Remote</div>
            <div className="text-primary/70 text-sm md:text-base">Work Options</div>
          </div>
          <div className="text-center lg:text-left col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">AI</div>
            <div className="text-primary/70 text-sm md:text-base">Innovation</div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default CareersHeader;
