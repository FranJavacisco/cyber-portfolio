import React from 'react';
import { Eye, Github, Shield, Lock, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SecureAuthModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-gray-900 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold pb-4">SecureAuth System</DialogTitle>
        </DialogHeader>
        
        {/* Project Banner */}
        <div className="relative w-full h-96 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-32 h-32 text-white/20" />
          </div>
          <img
            src="/project001.jpg"
            alt="SecureAuth System"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Key Features Section */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-500" />
                Biometric Authentication
              </h4>
              <p className="text-gray-300">Advanced facial recognition and fingerprint scanning with liveness detection.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-500" />
                Blockchain Integration
              </h4>
              <p className="text-gray-300">Immutable audit trails and secure credential storage using blockchain technology.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-500" />
                Zero-Knowledge Proofs
              </h4>
              <p className="text-gray-300">Privacy-preserving authentication without exposing sensitive data.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-500" />
                Real-time Monitoring
              </h4>
              <p className="text-gray-300">Advanced threat detection and automated response system.</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Technical Stack</h3>
          <div className="space-y-4">
            <div className="border border-gray-800 rounded-lg p-4">
              <h4 className="text-lg font-medium mb-2">Frontend</h4>
              <p className="text-gray-300">Built with React and TypeScript, featuring:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Material-UI components with custom theming</li>
                <li>Redux Toolkit for state management</li>
                <li>WebAuthn API integration for biometrics</li>
                <li>Real-time WebSocket connections</li>
              </ul>
            </div>
            <div className="border border-gray-800 rounded-lg p-4">
              <h4 className="text-lg font-medium mb-2">Backend</h4>
              <p className="text-gray-300">Node.js and Express backend with:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>PostgreSQL database with TypeORM</li>
                <li>Redis for caching and rate limiting</li>
                <li>Ethereum blockchain integration</li>
                <li>Docker containerization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-pink-500">Implementation Process</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-800"></div>
            <div className="space-y-8 relative">
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Phase 1: Foundation</h4>
                <p className="text-gray-300 mt-1">Core authentication system implementation and basic UI development</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Phase 2: Biometric Integration</h4>
                <p className="text-gray-300 mt-1">Implementation of facial recognition and fingerprint scanning</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Phase 3: Blockchain</h4>
                <p className="text-gray-300 mt-1">Integration of blockchain for audit trails and credential storage</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                <h4 className="text-lg font-medium">Phase 4: Security Hardening</h4>
                <p className="text-gray-300 mt-1">Implementation of zero-knowledge proofs and additional security measures</p>
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

export default SecureAuthModal;