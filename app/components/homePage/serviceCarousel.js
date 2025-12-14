"use client"

import React, { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const AIKeynoteCarousel = () => {
  const topics = [
    { name: 'AI Consulting', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop' },
    { name: 'Generative AI', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop' },
    { name: 'Machine Learning', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop' },
    { name: 'AI Chatbot Integration', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop' },
    { name: 'Deep Learning', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop' },
    { name: 'AI in Cybersecurity', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop' },
    { name: 'Predictive Analysis', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
    { name: 'Neural Networks', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop' },
    { name: 'NLP', img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop' },
    { name: 'Data Engineering', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop' }
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topics.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % topics.length);
  };

  return (
    <div className="min-h-screen pt-24 bg-secondary text-primary">
      {/* Top Carousel Navigation */}
      <div className="relative px-8 py-6 overflow-hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-3 items-center">
              {topics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 border ${
                    idx === activeIndex
                      ? 'bg-primary text-secondary border-secondary/20'
                      : 'bg-secondary/70 text-primary/70 hover:bg-secondary/60 border-primary/20 hover:border-primary/30'
                  }`}
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 ml-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
            >
              <IoChevronBack className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
            >
              <IoChevronForward className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <p className="text-primary/70 text-lg mb-4">Keynote</p>
            <h1 className="text-6xl font-bold leading-tight mb-8 text-primary">
              Transforming Government<br />
              Operations with Agentic AI
            </h1>
            <h2 className="text-3xl font-semibold mb-2 text-primary">Dr. Nikhil Krishnan</h2>
            <p className="text-2xl text-primary/70 mb-12">codework.ai CTO, Data Science</p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <div className="text-secondary font-bold text-xl">CW</div>
                </div>
                <span className="text-2xl font-semibold">codework.ai FederalForum</span>
              </div>
            </div>
          </div>

          {/* Right Side - Speaker Image */}
          <div className="relative">
            <img
              src={topics[activeIndex].img}
              alt={topics[activeIndex].name}
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <button className="absolute bottom-8 right-8 bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all">
              Learn More
            </button>
            
            {/* Topic Label */}
            <div className="absolute top-8 left-8 bg-secondary/70 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-xl font-semibold text-primary">{topics[activeIndex].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIKeynoteCarousel;
