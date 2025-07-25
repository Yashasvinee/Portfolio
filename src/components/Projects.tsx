import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [];

  const projects = [
    {
      title: "Number-Ninjas",
      description: "Number Ninja is an AI-powered interactive math game designed to make learning fun through puzzles, quizzes, and Tic-Tac-Toe challenges.It uses AI to track player performance and dynamically adjust difficulty, ensuring a personalized and engaging experience.",
      category: "Web Development",
      technologies: ["HTML5", "CSS3", "JavaScript", "TensorFlow.js","Canvas API"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Yashasvinee/Portfolio",
      demo: "portfolio-swart-theta-96.vercel.app",
      color: "from-blue-500 to-blue-600"
    },
    // {
    //   title: "Student Information System",
    //   description: "A database-driven application for managing student records, grades, and academic information with advanced search and reporting features.",
    //   category: "Database Projects",
    //   technologies: ["Java", "MySQL", "JavaFX", "Reports"],
    //   image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   github: "#",
    //   demo: "#",
    //   color: "from-green-500 to-green-600"
    // },
    // {
    //   title: "Algorithm Visualizer",
    //   description: "Interactive web application to visualize sorting algorithms and data structures, helping students understand complex algorithms through animations.",
    //   category: "Algorithms",
    //   technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
    //   image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   github: "#",
    //   demo: "#",
    //   color: "from-purple-500 to-purple-600"
    // },
    // {
    //   title: "Library Management System",
    //   description: "Complete library management solution with book inventory, member management, issue/return tracking, and fine calculation system.",
    //   category: "Java Applications",
    //   technologies: ["Java", "MySQL", "Swing", "JasperReports"],
    //   image: "https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   github: "#",
    //   demo: "#",
    //   color: "from-pink-500 to-pink-600"
    // },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills, built with modern web technologies and smooth animations.",
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Data Structure Implementation",
      description: "Comprehensive implementation of various data structures including trees, graphs, and hash tables with detailed documentation.",
      category: "Algorithms",
      technologies: ["Java", "JUnit", "Documentation", "Testing"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      color: "from-red-500 to-red-600"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 scroll-mt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-5">
            A showcase of my technical projects demonstrating proficiency in various technologies and problem-solving skills
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.2 }}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.2 }}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-3">Want to see more projects?</h3>
            <p className="text-blue-100 mb-4 max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <motion.a
              href="https://github.com/Yashasvinee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Github className="mr-2" size={20} />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;