import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        message: ''
      });
    }, 2000);
  };

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
              <div>
                <label className="text-gray-300 mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="Gorilla"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="text-gray-300 mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="gorilla@example.com"
                />
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
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-colors duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-500 text-center mt-4">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                  contact@example.com
                </a>
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