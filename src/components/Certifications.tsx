import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Cloud, Shield, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const awsCertifications = [
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      icon: <Cloud className="w-8 h-8" />,
      status: "In Progress",
      color: "from-orange-500 to-orange-600",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Pricing Models"]
    },
    {
      title: "AWS Solutions Architect Associate",
      provider: "Amazon Web Services",
      description: "Design and deploy scalable, highly available systems on AWS",
      icon: <Shield className="w-8 h-8" />,
      status: "Planned",
      color: "from-blue-500 to-blue-600",
      skills: ["Architecture Design", "High Availability", "Cost Optimization", "Security"]
    }
  ];

  const otherCertifications = [
    {
      title: "International French Language Olympiad",
      provider: "International Olympiad Foundation",
      year: "2023",
      description: "Winner - Demonstrated excellence in French language proficiency",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "French Spell Bee District Champion",
      provider: "District Education Board",
      year: "2023",
      description: "First place in district-level French spelling competition",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Planned': return 'bg-blue-100 text-blue-800';
      case 'Future Goal': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="certifications" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            My journey towards cloud expertise and professional development through AWS certifications and achievements
          </p>
        </motion.div>

        {/* AWS Certifications */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-5 flex items-center"
          >
            <Cloud className="mr-3 text-orange-500" size={32} />
            AWS Cloud Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {awsCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 font-medium mb-2">{cert.provider}</p>
                <p className="text-gray-600 mb-3 leading-relaxed">{cert.description}</p>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Key Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Achievements */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 mb-5 flex items-center"
          >
            <Award className="mr-3 text-yellow-500" size={32} />
            Academic Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {otherCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color} rounded-full mb-3`} />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600 font-medium">{cert.provider}</p>
                  <span className="text-sm text-gray-500 font-medium">{cert.year}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-3">Continuous Learning Journey</h3>
            <p className="text-blue-100 mb-4 max-w-2xl mx-auto">
              I'm committed to continuous learning and professional development. Currently working towards 
              AWS certifications to enhance my cloud computing skills and stay updated with industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                View Certificate Gallery
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Discuss Opportunities
                <ExternalLink className="ml-2" size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
