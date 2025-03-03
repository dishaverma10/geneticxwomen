import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs =[
    {
      "question": "What is Lawgic?",
      "answer": "Lawgic is an AI-powered legal research platform designed to help users access past court judgments, understand legal precedents, and streamline case research. It offers AI-driven case matching, legal document summarization, and a user-driven discussion forum."
    },
    {
      "question": "How does Lawgic improve legal research?",
      "answer": "Lawgic leverages AI and Natural Language Processing (NLP) to provide relevant case recommendations, summarize lengthy judgments, and categorize legal data efficiently, reducing research time and improving accessibility."
    },
    {
      "question": "Which courts and cases does Lawgic cover?",
      "answer": "Lawgic focuses on Indian legal cases, including Supreme Court and High Court judgments. We continuously expand our database to ensure comprehensive legal research."
    },
    
    {
      "question": "Is Lawgic free to use?",
      "answer": "Lawgic offers a free basic version with essential search features. Advanced features like AI-driven insights, saved searches, and personalized recommendations may be available under premium plans."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-white">
            Find answers to common questions about our legal AI platform and how it can revolutionize your legal research process.
          </p>
        </motion.div>
        
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border-4 border-transparent bg-white rounded-xl overflow-hidden ${
                openIndex === index ? "border-[#FF00CD] text-[#FF00CD]" : "border-[#734EFF] text-black"
              }`}
            >
              <div 
                className={`p-6 cursor-pointer flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index ? "" : "hover:bg-white/90"
                }`} 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ${openIndex === index ? "text-[#FF00CD]" : "text-black/60"}`}
                >
                  <FaChevronDown />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-black/90 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-black/70 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#FF00CD] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#FF00CD]/90 transition-colors duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
