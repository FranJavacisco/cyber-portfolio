import React from 'react';
import { Eye, Github, Plus, Shield } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CyberShieldModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-gray-900 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold pb-4">CyberShield Dashboard</DialogTitle>
        </DialogHeader>
        
        {/* Project Banner */}
        <div className="relative w-full h-96 mb-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-32 h-32 text-white/20" />
          </div>
          <img
            src="/project002.jpg"
            alt="CyberShield Dashboard"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-500">99.9%</div>
            <div className="text-sm text-gray-300 mt-2">System Uptime</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-500">&lt;50ms</div>
            <div className="text-sm text-gray-300 mt-2">Response Time</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-purple-500">24/7</div>
            <div className="text-sm text-gray-300 mt-2">Monitoring</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Real-time Monitoring</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-green-500" />
                  Live traffic analysis and visualization
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-green-500" />
                  Anomaly detection and alerts
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-green-500" />
                  Resource usage tracking
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Security Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-green-500" />
                  Advanced threat detection
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-green-500" />
                  Automated incident response
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Plus className="w-4 h-4 text-green-500" />
                  Security event logging
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Technical Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">Frontend Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Vue.js with Composition API</li>
                <li>• D3.js for data visualization</li>
                <li>• Vuex for state management</li>
                <li>• TailwindCSS for styling</li>
                <li>• WebSocket for real-time updates</li>
              </ul>
            </div>
            <div className="border border-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">Backend Infrastructure</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js microservices</li>
                <li>• Redis for caching</li>
                <li>• MongoDB for data storage</li>
                <li>• Docker containers</li>
                <li>• Kubernetes orchestration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Analytics Capabilities</h3>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-500 mb-2">
                  Machine Learning
                </div>
                <p className="text-gray-300 text-sm">
                  Advanced pattern recognition and anomaly detection algorithms
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500 mb-2">
                  Predictive Analysis
                </div>
                <p className="text-gray-300 text-sm">
                  Future threat prediction and prevention strategies
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-500 mb-2">
                  Custom Reports
                </div>
                <p className="text-gray-300 text-sm">
                  Detailed insights and customizable reporting tools
                </p>
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

export default CyberShieldModal;