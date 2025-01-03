import React, { useState } from 'react';
import { 
  Mail, 
  GitHub, 
  Linkedin, 
  Twitter, 
  Send,
  MessageCircle,
  User,
  AtSign
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub className="w-6 h-6" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label className="text-gray-300 mb-2 block">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="John Doe"
                  />
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="text-gray-300 mb-2 block">Your Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="john@example.com"
                  />
                  <AtSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="text-gray-300 mb-2 block">Subject</label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="Project Discussion"
                  />
                  <MessageCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="text-gray-300 mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="text-green-500 text-center">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${link.color} transition-colors duration-300 transform hover:scale-110`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-xl rounded-xl p-8 border border-pink-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Available for Freelance</h3>
              <p className="text-gray-400">
                Currently accepting new projects and opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;