import React from 'react'

const AboutLanding = () => {
  return (
    <section className="bg-secondary text-primary relative overflow-hidden py-16 md:py-20 lg:py-24">
      

      

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-primary text-sm font-medium">— About Codework —</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary">
            <span className="text-primary">Who We </span>
            <span className="text-primary">
              Are
            </span>
          </h1>
          
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto"></div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Enhanced Text Card */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 relative group">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary leading-tight">
                Shaping Tomorrow with <span className="text-primary">AI-Powered</span> Technology
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="relative">
                  <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-primary/90 pl-6 md:pl-8">
                    We are a <span className="text-primary font-medium">technology-driven company</span> leveraging cutting-edge AI technology to transform businesses and drive success.
                  </p>
                </div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-primary/80">
                  Our team combines <span className="text-primary font-medium">advanced AI tools</span>, industry expertise, and a human-first approach to deliver results that matter.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-primary/80">
                  From startups to enterprises, we partner with businesses to <span className="text-primary font-medium">unlock their full potential</span> using AI and emerging technologies.
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary/80 text-sm md:text-base">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary/80 text-sm md:text-base">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary/80 text-sm md:text-base">Human-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary/80 text-sm md:text-base">Proven Results</span>
                </div>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/50 rounded-3xl blur-2xl md:blur-3xl scale-105 opacity-60"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 lg:p-8 hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/25">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] overflow-hidden rounded-2xl">
                  <img
                    src="/aboutLanding.svg"
                    alt="Codework team"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 md:border-l-4 md:border-t-4 border-primary rounded-tl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 md:border-r-4 md:border-b-4 border-primary rounded-br-lg"></div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-primary/20 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-white/20 max-w-24 md:max-w-32">
                <div className="text-xs md:text-sm text-primary/80 font-medium">AI-First</div>
                <div className="text-xs text-primary">Company</div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary/20 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-white/20 max-w-28 md:max-w-36">
                <div className="text-xs md:text-sm text-primary/80 font-medium">500+ Projects</div>
                <div className="text-xs text-primary">Delivered</div>
              </div>
            </div>
          </div>
        </div>

        </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  )
}

export default AboutLanding
