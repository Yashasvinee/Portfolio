// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layers, Globe } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Stack",
      icon: <Code className="w-8 h-8" />,
      skills: ["Java","MySQL","HTML","CSS","JS" ],
      color: "from-blue-500 to-blue-600"
    },
    // {
    //   title: "Database Management",
    //   icon: <Database className="w-8 h-8" />,
    //   skills: [ "Database Design", "Query Optimization", "Data Modeling"],
    //   color: "from-green-500 to-green-600"
    // },
    {
      title: "Core Concepts",
      icon: <Layers className="w-8 h-8" />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design", "Software Engineering"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Languages",
      icon: <Globe className="w-8 h-8" />,
      skills: ["English (Fluent)", "Hindi (Native)", "French (Proficient)", "Technical Communication"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  // const keyExpertise = [
  //   { name: "MySQL", level: 90, color: "bg-blue-500" },
  //   { name: "Java", level: 85, color: "bg-green-500" },
  //   { name: "Data Structures & Algorithms", level: 80, color: "bg-purple-500" },
  //   { name: "Object-Oriented Programming", level: 88, color: "bg-pink-500" }
  // ];

  return (
    <section id="skills" className="py-12 scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key Expertise with Progress Bars */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Key Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {keyExpertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-blue-100">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={`h-3 ${skill.color} rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving", "Team Collaboration", 
              "Project Management", "Code Review",
              "Version Control (Git)", "Agile Methodology"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1.5 rounded-full font-medium hover:shadow-md transition-shadow duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;