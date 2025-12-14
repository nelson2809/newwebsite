"use client";
import React from "react";
import Link from "next/link";

const CaseStudiesLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-secondary text-primary overflow-hidden">
     
    
      {/* Enhanced Content Container */}
      <div className="relative z-10 w-[85%] mx-auto px-4 text-left">
        
        {/* Enhanced Heading Container */}
        <div className="heading-container pt-7 sm:pt-7 md:pt-10 lg:pt-10 xl:pt-10 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary animate-slide-up animation-delay-200">
            <span className="text-primary">Our Company </span>
            <span className="text-primary">
              Case Study
            </span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-4 animate-slide-up animation-delay-400"></div>
        </div>

        {/* Enhanced Paragraph Container */}
        <div className="paragraph-container mb-8 space-y-6">
          <div className="relative animate-slide-up animation-delay-600">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-primary/90 pl-6 font-light">
              Transforming <span className=" font-medium">Challenges</span> into <span className=" font-medium">Opportunities</span>.
            </p>
          </div>
          
          <div className="relative pl-6 animate-slide-up animation-delay-800">
            <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-primary/90 font-light">
              Looking to get similar results?{" "}
              <Link
                href="/contact-ai-solutions"
                className="text-primary hover:text-primary/80 underline font-medium transition-colors duration-300 relative group"
              >
                contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>
          </div>
        </div>


        {/* Enhanced Achievement Highlights */}
        <div className="flex flex-wrap gap-4 mt-8 animate-slide-up animation-delay-1200">
            {[
            "AI Solutions",
            "Data Analytics", 
            "Process Automation",
            "Digital Transformation"
          ].map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 text-primary rounded-full text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${1400 + index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesLanding;
