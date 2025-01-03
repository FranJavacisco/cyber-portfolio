import React, { useState } from 'react';
import { Shield, Code, Lock, Globe, Server, Cpu } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabContent = {
    story: {
      title: "My Journey",
      content: "Front-end developer with a deep focus on cybersecurity, combining creative design with robust security practices. Specialized in creating secure, user-friendly web applications that prioritize both aesthetics and protection.",
      icon: <Shield className="w-6 h-6" />
    },
    expertise: {
      title: "Core Expertise",
      content: "Mastering the intersection of front-end development and cybersecurity, delivering solutions that are both beautiful and secure. Experienced in implementing security best practices in modern web applications.",
      icon: <Lock className="w-6 h-6" />
    },
    stack: {
      title: "Tech Stack",
      content: "Proficient in modern web technologies and security tools, constantly evolving to stay ahead of emerging threats and development trends.",
      icon: <Code className="w-6 h-6" />
    }
  };

  const technologies = [
    { name: "React.js", icon: <Code />, level: 90 },
    { name: "Cybersecurity", icon: <Shield />, level: 85 },
    { name: "Node.js", icon: <Server />, level: 80 },
    { name: "Web Security", icon: <Lock />, level: 95 },
    { name: "Cloud Services", icon: <Globe />, level: 75 },
    { name: "System Architecture", icon: <Cpu />, level: 85 }
  ];

  return (
    <div className="min-h-screen bg-black py-20" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto"/>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Info */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'bg-gray-900 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {tabContent[tab].icon}
                    <span className="capitalize">{tab}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {tabContent[activeTab].content}
              </p>
            </div>

            {/* Experience Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-2">5+</h4>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Proficiency</h3>
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-gray-300">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                  <span className="text-pink-500">{tech.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Achievement Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-colors duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Security First</h4>
            <p className="text-gray-400">Implementing robust security measures in every project</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Modern Stack</h4>
            <p className="text-gray-400">Using cutting-edge technologies and best practices</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
            <p className="text-gray-400">Always staying updated with the latest security trends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;