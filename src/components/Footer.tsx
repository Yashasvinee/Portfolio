
// import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Yashasvinee",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/yashasvi-modi-b57267248",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:modi.yashasvi2@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone size={20} />,
      href: "tel:+919926760082",
      label: "Phone"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Yashasvi Modi
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Science Engineering student passionate about creating innovative solutions 
              and contributing to the tech industry. Ready for exciting opportunities at leading MNCs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                modi.yashasvi2@gmail.com
              </p>
              <p className="text-gray-400 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                +91 9926760082
              </p>
              <p className="text-gray-400">
                Indore, Madhya Pradesh, India
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/20">
              <p className="text-sm text-blue-200">
                Currently seeking opportunities in software development. 
                Open to relocation for the right role.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yashasvi Modi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;