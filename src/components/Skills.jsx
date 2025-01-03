import React, { useState } from 'react';
import { 
  Code, 
  Shield, 
  Database, 
  Globe, 
  Terminal, 
  Lock,
  Server,
  Bug,
  Search,
  Key
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      description: "Creating secure and responsive user interfaces",
      skills: [
        { name: "React.js", level: 90, icon: <Code /> },
        { name: "TypeScript", level: 85, icon: <Terminal /> },
        { name: "Tailwind CSS", level: 88, icon: <Code /> },
        { name: "Vue.js", level: 82, icon: <Code /> },
        { name: "Next.js", level: 85, icon: <Globe /> }
      ]
    },
    security: {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      description: "Implementing robust security measures",
      skills: [
        { name: "Penetration Testing", level: 85, icon: <Bug /> },
        { name: "Security Auditing", level: 88, icon: <Search /> },
        { name: "Encryption", level: 90, icon: <Key /> },
        { name: "Auth Systems", level: 85, icon: <Lock /> },
        { name: "Security Protocols", level: 87, icon: <Shield /> }
      ]
    },
    backend: {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      description: "Building secure server infrastructure",
      skills: [
        { name: "Node.js", level: 85, icon: <Server /> },
        { name: "SQL", level: 80, icon: <Database /> },
        { name: "MongoDB", level: 82, icon: <Database /> },
        { name: "API Security", level: 88, icon: <Lock /> },
        { name: "AWS", level: 80, icon: <Globe /> }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black py-20" id="skills">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining frontend expertise with cybersecurity knowledge to create secure and engaging web applications.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Category Info */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg border border-pink-500/20">
                {categories[activeCategory].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-gray-400">
                  {categories[activeCategory].description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {categories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-300">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-pink-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800 h-full">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-grid-pattern opacity-10" />
              </div>
              
              {/* Skill Cards */}
              <div className="grid grid-cols-2 gap-4 relative">
                {categories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-pink-500 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="text-white font-semibold">{skill.name}</h4>
                    </div>
                    <div className="text-sm text-gray-400">
                      Proficiency Level: {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;