"use client";
import React from "react";

const OurBlogLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-secondary text-primary overflow-hidden">


      {/* Enhanced Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 mt-16 sm:mt-0 lg:mt-0 flex flex-col md:flex-row items-center justify-between">
        
        {/* Enhanced Left: Content */}
        <div className="w-full md:w-3/5 text-left animate-slide-up">
          

          <div className="heading-container mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary">
              <span className="text-primary">Our </span>
              <span className="text-primary">
                blogs
              </span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-4"></div>
          </div>

          <div className="paragraph-container mb-12">
            <div className="relative">
              <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-primary/90 pl-6 font-light">
                Stay updated with the latest <span className=" font-medium">news and insights</span> from our blog.
              </p>
            </div>
          </div>
        </div>
    
      </div>

      {/* Enhanced Statistics */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 animate-slide-up animation-delay-800">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">50+</div>
          <div className="text-primary/80 text-sm">Articles</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">10K+</div>
          <div className="text-primary/80 text-sm">Readers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">Weekly</div>
          <div className="text-primary/80 text-sm">Updates</div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotate, 0deg));
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

        @keyframes bouncesSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bouncesSlow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default OurBlogLanding;
