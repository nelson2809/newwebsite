import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-secondary text-primary relative overflow-hidden py-16 md:py-20 lg:py-24">
    
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-16 md:space-y-20">

        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-primary text-sm font-medium">— About Our Company —</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-primary">
            <span className="text-primary">Get to Know </span>
            <span className="text-primary">
              Codework
            </span>
          </h1>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto"></div>
        </div>

        {/* Why Choose Codework Section */}
        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 relative group">
          {/* Icon */}
          <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
            Why Choose <span className="text-primary">Codework?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "AI-Driven Solutions",
                description: "We specialize in crafting innovative AI-based products tailored to your business needs.",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                )
              },
              {
                title: "End-to-End Expertise",
                description: "From development to deployment, we ensure seamless technology integration.",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                )
              },
              {
                title: "User-Centric Approach",
                description: "We design solutions that prioritize user experience and real-world impact.",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )
              },
              {
                title: "Proven Technologies",
                description: "Proficiency in React.js, Java, Python, Azure, AWS, R, Next.js, and more.",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                )
              },
              {
                title: "Scalable & Secure Systems",
                description: "Ensuring reliability, scalability, and security in every solution we build.",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z"/>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-primary/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Section */}
          <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 relative group">
            <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
              Our <span className="text-primary">Mission</span>
            </h3>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                <p className="text-primary/90 text-base md:text-lg leading-relaxed pl-6">
                  Our mission is to leverage our expertise in software development to create <span className="font-medium">meaningful solutions</span> that benefit society while ensuring that our top talent shares in our organization's success.
                </p>
              </div>
              
              <p className="text-primary/80 text-base md:text-lg leading-relaxed">
             Codework, we're not just building technology. We're <span className="text-primary font-medium">shaping the future</span> of businesses. Let's innovate together!
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Vision Section */}
          <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 relative group">
            <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
              Our <span className="text-primary">Vision</span>
            </h3>

            <div className="relative">
              <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              <p className="text-primary/90 text-base md:text-lg leading-relaxed pl-6">
                Our vision is to lead the way in delivering <span className="text-primary font-medium">innovative and transformative</span> technology solutions that reshape industries and empower businesses globally. We strive to create a future where our software and services drive <span className="text-primary font-medium">digital transformation</span>, helping organizations optimize operations, boost efficiency, and unlock new growth opportunities.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* What Makes Us Different Section */}
        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 relative group">
          <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-primary">
            What Makes Us <span className="text-primary">Different?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Human-Centric Solutions",
                description: "We don't just deliver technology; we create human-centric solutions powered by AI.",
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.16-1.37-2.21-1.37H16.5c-.8 0-1.54.37-2 1l-3.5 5.5h2c.45 0 .67-.54.33-.85L12 11.5c-.19-.17-.19-.46 0-.63.19-.17.49-.17.68 0L15 13h2l-1.5-2.5L17.5 8H19l1.81 5.4c.18.53.69.6.69.6V18c0 .55-.45 1-1 1h-2v3h-2z"/>
                  </svg>
                )
              },
              {
                title: "Expert Team",
                description: "Our expert team transforms your ideas into results using artificial intelligence and next-gen technologies.",
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm2.5 9H17V9.5h1.5V11zm-2.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5S16.83 20 16 20zm-4-7H9.5v1.5H12V13zm0 7c-.83 0-1.5-.67-1.5-1.5S11.17 17 12 17s1.5.67 1.5 1.5S12.83 20 12 20zM8 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2S8 5.11 8 4zm2.5 9H8V9.5h2.5V11zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20z"/>
                  </svg>
                )
              },
              {
                title: "Goal Alignment",
                description: "With a focus on simplicity, innovation, and business growth, we align technology with your goals.",
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center group/item">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover/item:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-primary/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default WhoWeAre;
