import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "Medicaps University",
      duration: "2022 - 2026",
      grade: "CGPA: 7.7",
      status: "Currently in 4th Year",
      color: "from-blue-600 to-purple-600"
    },
    {
      degree: "12th Standard (Senior Secondary)",
      institution: "St. Norbert Senior Secondary School",
      duration: "2021 - 2022",
      grade: "88% Aggregate",
      status: "Completed",
      color: "from-purple-600 to-pink-600"
    },
    {
      degree: "10th Standard (Secondary)",
      institution: "St. Norbert Senior Secondary School",
      duration: "2019 - 2020",
      grade: "89% Aggregate",
      status: "Completed",
      color: "from-pink-600 to-red-600"
    }
  ];

  return (
    <section id="education" className="py-12 scroll-mt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey showcasing consistent performance and dedication to learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                <div className="p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white mr-4`}>
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-3 mt-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Award size={16} className="mr-2" />
                          <span className="font-semibold text-green-600">{edu.grade}</span>
                        </div>
                        <div className="flex items-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'Currently in 4th Year' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Education;