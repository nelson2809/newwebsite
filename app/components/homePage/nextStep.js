import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const NextStep = () => {
  const steps = [
    {
      title: 'Contact Sales',
      description: 'Learn how our industry-leading Enterprise AI software products can help your organization.',
      link: '#contact-sales'
    },
    {
      title: 'Investor Relations',
      description: 'Contact us at codework.ai to learn more about investing at CodeWork.',
      link: '#investor-relations',
      email: 'CodeWork.ai'
    },
    {
      title: 'Request Information',
      description: 'For all other questions, please contact us here.',
      link: '#request-info'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary text-primary py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-20 text-primary">
          Take the next step
        </h1>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Button Card */}
              <a
                href={step.link}
                className="group relative border-2 border-primary p-5 mb-7 flex items-center justify-between cursor-pointer overflow-hidden"
              >
                {/* Background fill animation */}
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Content */}
                <span className="relative z-10 text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{step.title}</span>
                <IoArrowForward className="relative z-10 w-8 h-8 text-primary group-hover:text-secondary group-hover:translate-x-2 transition-all duration-300" />
              </a>

              {/* Description */}
              <p className="text-primary/70 text-lg leading-relaxed">
                {step.description.split('CodeWork.ai').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < step.description.split('CodeWork.ai').length - 1 && (
                      <span className="text-primary underline">CodeWork.ai</span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextStep;
