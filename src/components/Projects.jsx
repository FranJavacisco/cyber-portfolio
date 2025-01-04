import React, { useState } from 'react';
import {
  Shield,
  Globe,
  Github,
  ExternalLink,
  Lock,
  Code,
  Server,
  Eye,
  Plus
} from 'lucide-react';

// Importar los modales
import SecureAuthModal from './modals/SecureAuthModal';
import CyberShieldModal from './modals/CyberShieldModal';
import SecureAPIModal from './modals/SecureAPIModal';
import PenTestModal from './modals/PenTestModal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "SecureAuth System",
      description: "Authentication system with biometric verification and blockchain integration for enhanced security.",
      image: "project001.jpg",
      category: "security",
      technologies: ["React", "Node.js", "Blockchain"],
      demoLink: "#",
      githubLink: "#",
      features: ["Biometric Auth", "Encryption", "Audit Logs"]
    },
    {
      id: 2,
      title: "CyberShield Dashboard",
      description: "Real-time security monitoring dashboard for enterprise systems with threat detection.",
      image: "project002.jpg",
      category: "frontend",
      technologies: ["Vue.js", "Firebase", "D3.js"],
      demoLink: "#",
      githubLink: "#",
      features: ["Real-time Monitoring", "Analytics", "Alerts"]
    },
    {
      id: 3,
      title: "SecureAPI Gateway",
      description: "API security gateway with advanced threat protection and rate limiting capabilities.",
      image: "project003.jpg",
      category: "backend",
      technologies: ["Express", "Redis", "JWT"],
      demoLink: "#",
      githubLink: "#",
      features: ["Rate Limiting", "JWT Auth", "Logging"]
    },
    {
      id: 4,
      title: "PenTest Platform",
      description: "Automated penetration testing platform for web applications with detailed reporting.",
      image: "project004.jpg",
      category: "security",
      technologies: ["Python", "React", "Docker"],
      demoLink: "#",
      githubLink: "#",
      features: ["Automated Scans", "Report Gen", "CVE Tracking"]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: <Globe /> },
    { id: 'frontend', name: 'Frontend', icon: <Code /> },
    { id: 'security', name: 'Security', icon: <Shield /> },
    { id: 'backend', name: 'Backend', icon: <Server /> }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Función para renderizar el modal correspondiente
  const renderModal = () => {
    if (!selectedProject) return null;

    switch (selectedProject.id) {
      case 1:
        return <SecureAuthModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />;
      case 2:
        return <CyberShieldModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />;
      case 3:
        return <SecureAPIModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />;
      case 4:
        return <PenTestModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black py-20" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions in web development and cybersecurity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {filter.icon}
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-500 flex flex-col"
            >
              {/* Project Image Container */}
              <div 
                className="relative h-96 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors"
                      aria-label="View Details"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <a
                      href={project.githubLink}
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      aria-label="GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-400">
                      <Lock className="w-4 h-4 text-pink-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="p-6 border-t border-gray-800">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-pink-500 hover:text-pink-400 flex items-center gap-2"
                  >
                    <span>View Details</span>
                    <Plus className="w-4 h-4" />
                  </button>
                  <a
                    href={project.githubLink}
                    className="text-gray-400 hover:text-white flex items-center gap-2"
                  >
                    <span>View Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Render Modal */}
        {renderModal()}
      </div>
    </div>
  );
};

export default Projects;