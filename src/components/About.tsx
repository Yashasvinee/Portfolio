// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Globe, Code, Trophy } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "International French Language Olympiad Winner",
      description: "Recognized for excellence in French language proficiency"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "French Spell Bee District Champion",
      description: "Won district-level French spelling competition"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Trilingual Professional",
      description: "Fluent in English, Hindi, and French"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Strong foundation in Java, MySQL, DSA, and OOPS"
    }
  ];

  return (
    <section id="about" className="scroll-mt-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science Engineering student in my final year at Medicaps University, 
            with a strong academic foundation and diverse skill set. My journey combines technical expertise 
            with linguistic abilities, making me a well-rounded candidate for the global tech industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready for MNC Opportunities</h3>
              <p className="text-blue-100 leading-relaxed">
                With a solid academic background, technical skills, and international language proficiency, 
                I'm prepared to contribute to innovative projects at leading multinational corporations. 
                My diverse skill set and passion for technology make me an ideal candidate for challenging roles.
              </p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-3xl font-bold">7.7</div>
                <div className="text-blue-100">CGPA</div>
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;