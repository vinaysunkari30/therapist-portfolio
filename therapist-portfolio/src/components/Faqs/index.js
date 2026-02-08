"use client";
import { useState } from "react";
import Animation from "../Animation";
import { FiPlus } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const faqsData = [
  {
    question: "What should I expect during the first session?",
    answer:
      "Our first session is a gentle consultation where we discuss your history, your current challenges, and your goals for therapy. It is a time for us to see if we are a good fit for your healing journey.",
  },
  {
    question: "Do you offer online therapy sessions?",
    answer:
      "Yes, I offer secure, HIPAA-compliant telehealth sessions for clients who prefer to meet from the comfort of their own home.",
  },
  {
    question: "How long does a typical session last?",
    answer:
      "Individual therapy sessions are typically 50 minutes long. This provides enough time for deep work while leaving space for a calm transition back to your day.",
  },
  {
    question: "What is your approach to treating anxiety?",
    answer:
      "I use an integrative approach that combines Cognitive Behavioral Therapy (CBT) with somatic grounding techniques to help calm both the mind and the nervous system.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I am an out-of-network provider. I can provide you with a monthly Superbill that you can submit to your insurance company for potential reimbursement.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="bg-Faqs pt-5 scroll-mt-20 pb-10 xs:pt-8 md:pt-10 lg:pt-10 "
    >
      <Animation>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-[28px] font-heading text-primary font-medium underline decoration-2 mb-4 tracking-wide md:text-[35px] lg:text-[38px] xl:text-[40px]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-subHeading text-md font-semibold text-primary xs:text-[17px] sm:text-lg lg:text-xl xl:text-[22px]">
                    {faq.question}
                  </span>
                  <span
                    className={`text-primary transition-transform duration-300 text-2xl ${activeIndex === index ? "rotate-180" : ""}`}
                  >
                    <FiPlus className="text-[25px]" />
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ${
                    activeIndex === index
                      ? "max-h-[500px] opacity-100 pb-6 px-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body text-justify text-body text-[16px] leading-relaxed border-t border-stone-50 md:text-[17px] xl:text-[19px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default Faqs;
