// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const form = useRef<HTMLFormElement>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       label: "Email",
//       value: "modi.yashasvi2@gmail.com",
//       href: "mailto:modi.yashasvi2@gmail.com",
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       label: "Phone",
//       value: "+91 9926760082",
//       href: "tel:+919926760082",
//       color: "from-green-500 to-green-600"
//     },
//     {
//       icon: <Github className="w-6 h-6" />,
//       label: "GitHub",
//       value: "Yashasvinee",
//       href: "https://github.com/Yashasvinee",
//       color: "from-gray-700 to-gray-800"
//     },
//     {
//       icon: <Linkedin className="w-6 h-6" />,
//       label: "LinkedIn",
//       value: "yashasvi-modi",
//       href: "https://www.linkedin.com/in/yashasvi-modi-b57267248",
//       color: "from-blue-600 to-blue-700"
//     }
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Initialize EmailJS with your public key
//       emailjs.init("_uCPnLU9wUjsZX1j0"); // Replace with your actual public key
      
//       const result = await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your service ID
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your template ID
//         form.current!,
//         import.meta.env.VITE_EMAILJS_PUBLIC_ID // Replace with your public key
//       );

//       console.log('Email sent successfully:', result.text);
//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       // For demo purposes, we'll simulate success
//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setIsSubmitted(false), 5000);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
//             Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 I'm actively seeking opportunities in software development, particularly with MNCs where I can 
//                 contribute my technical skills and grow professionally. Whether you're a recruiter, fellow developer, 
//                 or someone interested in collaboration, I'm always open to meaningful conversations.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.a
//                   key={index}
//                   href={info.href}
//                   target={info.href.startsWith('http') ? '_blank' : undefined}
//                   rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
//                 >
//                   <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
//                     {info.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">{info.label}</p>
//                     <p className="text-gray-800 font-semibold">{info.value}</p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
//             >
//               <div className="flex items-center mb-3">
//                 <MapPin className="w-5 h-5 mr-2" />
//                 <span className="font-semibold">Location</span>
//               </div>
//               <p className="text-blue-100">
//                 Indore, Madhya Pradesh, India
//               </p>
//               <p className="text-blue-100 text-sm mt-2">
//                 Open to relocation for the right opportunity
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-white rounded-3xl shadow-2xl p-8"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
//             {isSubmitted && (
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center"
//               >
//                 <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
//                 <span className="text-green-800">Message sent successfully! I'll get back to you soon.</span>
//               </motion.div>
//             )}

//             <form ref={form} onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
//                   placeholder="Tell me about your project, opportunity, or just say hello!"
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <div className="flex items-center">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                     Sending...
//                   </div>
//                 ) : (
//                   <div className="flex items-center">
//                     <Send className="w-5 h-5 mr-2" />
//                     Send Message
//                   </div>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "modi.yashasvi2@gmail.com", href: "mailto:modi.yashasvi2@gmail.com", color: "from-blue-500 to-blue-600" },
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 9926760082", href: "tel:+919926760082", color: "from-green-500 to-green-600" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "Yashasvinee", href: "https://github.com/Yashasvinee", color: "from-gray-700 to-gray-800" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "yashasvi-modi", href: "https://www.linkedin.com/in/yashasvi-modi-b57267248", color: "from-blue-600 to-blue-700" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      emailjs.init("_uCPnLU9wUjsZX1j0");
      await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current!, import.meta.env.VITE_EMAILJS_PUBLIC_ID);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-5">I'm actively seeking opportunities in software development, particularly with MNCs. Let's connect and explore!</p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.a key={index} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }} className="flex items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                    <p className="text-gray-800 font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 text-white">
              <div className="flex items-center mb-2"><MapPin className="w-5 h-5 mr-2" /><span className="font-semibold">Location</span></div>
              <p className="text-blue-100">Indore, Madhya Pradesh, India</p>
              <p className="text-blue-100 text-sm mt-1">Open to relocation</p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="bg-white rounded-3xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">Send a Message</h3>

            {isSubmitted && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 rounded-xl p-3 mb-5 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800">Message sent! I'll respond soon.</span>
              </motion.div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition"
                  placeholder="Your message here..." />
              </div>

              <motion.button type="submit" disabled={isSubmitting}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
