import React from 'react';
import { Eye, Github, Plus, Server, Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SecureAPIModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-gray-900 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold pb-4">SecureAPI Gateway</DialogTitle>
        </DialogHeader>
        
        {/* Project Banner */}
        <div className="relative w-full h-96 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Server className="w-32 h-32 text-white/20" />
          </div>
          <img
            src="/project003.jpg"
            alt="SecureAPI Gateway"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Gateway Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-500">99.99%</div>
            <div className="text-sm text-gray-300 mt-1">Uptime</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-500">&lt;10ms</div>
            <div className="text-sm text-gray-300 mt-1">Latency</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-500">10k/s</div>
            <div className="text-sm text-gray-300 mt-1">Requests</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-pink-500">0.01%</div>
            <div className="text-sm text-gray-300 mt-1">Error Rate</div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Technical Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Core Components</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Express.js middleware stack
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Redis cache layer
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  JWT authentication service
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Rate limiting module
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Infrastructure</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Docker containerization
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Kubernetes orchestration
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Load balancing
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-pink-500" />
                  Auto-scaling
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Implementation Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-800"></div>
            <div className="space-y-8 relative">
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Architecture Planning</h4>
                <p className="text-gray-300 mt-1">Designing the API gateway architecture and security measures</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Core Development</h4>
                <p className="text-gray-300 mt-1">Building gateway functionality and implementing security features</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Performance Optimization</h4>
                <p className="text-gray-300 mt-1">Implementing caching and optimizing request handling</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Monitoring Setup</h4>
                <p className="text-gray-300 mt-1">Setting up logging, monitoring, and alerting systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-end gap-4 pt-6 border-t border-gray-800">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            <Eye className="w-5 h-5" />
            Live Demo
          </a>
          <a
            href="#github"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            View Code
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecureAPIModal;