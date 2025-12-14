import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const ManagementTeam = () => {
  const teamMembersLevelOne = [
    {
      name: 'Christina Arulraj',
      title: 'Managing Director',
      imgSrc: '/managementTeam/christy-cw-team.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/christina-arulraj-24178b60/'
    },
    {
      name: 'Senthil Kumar',
      title: 'Manager- Product Delivery',
      imgSrc: '/managementTeam/senthil-cw-team.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/senthil-kumar-l-t-26a9b1132/'
    },
    {
      name: 'Mathumitha',
      title: 'HR Head',
      imgSrc: '/managementTeam/mathu-cw-team.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/mathumitha-chennakesavan-027892168/'
    },
    {
      name: 'Archana Arun',
      title: 'Director',
      imgSrc: '/managementTeam/DSC_0017.JPG',
      linkedinUrl: 'https://www.linkedin.com/in'
    },
    {
      name: 'Keerthika M',
      title: 'Project Manager',
      imgSrc: '/managementTeam/Keerthika.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/keerthika-mathi-68633419a/'
    },
    {
      name: 'Aparna Prassanakumar',
      title: 'Senior Project Manager',
      imgSrc: '/managementTeam/DSC_0067.JPG',
      linkedinUrl: 'https://www.linkedin.com/in/aparna-prasannakumar-527aa519/'
    },
  ];

  return (
    <div className="bg-secondary text-primary relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Decorative Elements */}
     
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-primary">
            <span className="text-primary">Management </span>
            <span className="text-primary">
              Team
            </span>
          </h2>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full hidden lg:block"></div>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-primary/90 lg:pl-8 font-light">
                Our management team boasts over <span className="text-primary font-medium">15 years of experience</span> in driving business excellence and fostering innovation. With a deep understanding of industry trends and a commitment to strategic growth, they ensure <span className="text-primary font-medium">Codework remains a trusted partner</span> for cutting-edge AI and technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembersLevelOne.map((member, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/50 rounded-full blur-2xl md:blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Enhanced Card */}
              <div className="relative w-full max-w-sm">
                <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 group-hover:scale-105 shadow-2xl shadow-primary/25">
                  
                  {/* Image Container - REMOVED Position Badge and Corner Decorations */}
                  <div className="relative w-full h-80 md:h-96 bg-white/10 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* LinkedIn Overlay */}
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group absolute inset-0 flex items-center justify-center bg-primary/80 backdrop-blur-sm text-primary text-4xl md:text-5xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary/90"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-300">
                        <FaLinkedin className="text-primary group-hover:text-secondary transition-colors duration-300" />
                      </div>
                    </a>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-3"></div>
                    <p className="text-primary/80 text-sm md:text-base font-medium">
                      {member.title}
                    </p>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-primary/70 text-xs md:text-sm">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">☆☆☆☆☆</div>
              <div className="text-primary/70 text-xs md:text-sm">Rating</div>
            </div>
             <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-primary/70 text-xs md:text-sm">Projects Led</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-primary/70 text-xs md:text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default ManagementTeam;
