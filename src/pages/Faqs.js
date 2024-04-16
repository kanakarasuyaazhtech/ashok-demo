import React, { useState } from 'react';
import './Faqs.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: 'What is Fantasy Sports?',
      answer:
        'Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches.',
    },
    {
      question: 'Is it safe to add money to Dream11?',
      answer:
        'Adding money to your Dream11 account is both simple and safe. We have many different payment options enabled on Dream11 to ensure that your personal details are safe with us. What s more? After you verify your personal details, you can withdraw the money that you win on Dream11 directly to your bank account.'
        
    },
    {
        question:'How are Dream11 points calculated?',
        answer: 'Dream11 points system is calculated on the basis of the performance of the player in an actual match. Check ',
    },
    {
        question : 'How do I use the Dream11 discount coupon code?',
        answer : 'Select your favourite sport, click on a match from that sport, create your Dream11 and join any public, private, head-to-head or mega contests.',
    }
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
