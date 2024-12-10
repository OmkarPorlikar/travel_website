import React, { useState } from 'react';
import { Info } from 'lucide-react';

const FAQ = () => {

  const faqs = [
    { 
      question: "What documents do I need for international travel?", 
      answer: "Typically, you'll need a valid passport, and depending on the destination, you may require a visa, travel insurance, and vaccination records." 
    },
    { 
      question: "How far in advance should I book my trip?", 
      answer: "For the best deals and availability, we recommend booking 3-6 months in advance, especially during peak travel seasons." 
    },
    { 
      question: "Can I change my booking after purchase?", 
      answer: "Most bookings can be modified, but fees may apply. Check the specific terms of your reservation for details." 
    },
    { 
      question: "What travel insurance options are available?", 
      answer: "We offer comprehensive travel insurance covering medical emergencies, trip cancellations, and lost luggage." 
    },
    { 
      question: "How do I handle currency exchange?", 
      answer: "We recommend using local ATMs, credit cards with no foreign transaction fees, and carrying some local cash." 
    },
    { 
      question: "Are there any health precautions I should take?", 
      answer: "Check CDC recommendations, get recommended vaccinations, and carry a basic first-aid kit." 
    },
    { 
      question: "What's your cancellation policy?", 
      answer: "Cancellation policies vary by booking type. Most have a free cancellation window of 24-48 hours before the trip." 
    }
  ];

  return (
    <div className=" p-3 md:p-8 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-950">Traveler's Guide</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className='bg-white rounded-lg shadow-md p-6 transform transition-all duration-300   scale-105   hover:shadow-xl hover:scale-102'
                  >
            <div className="flex items-start mb-4">
              <Info className="mr-3 text-blue-600 flex-shrink-0" />
              <h3 className="font-semibold text-lg text-teal-950">{faq.question}</h3>
            </div>
              <p className="text-gray-600 text-justify mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
