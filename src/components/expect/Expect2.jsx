

import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Mountain, 
  Tent, 
  Compass, 
  Star, 
  Trees, 
  Car, 
  Sun 
} from 'lucide-react';

const whatToExpectData = [
  {
    expect_title: "A Scenic Start to Your Journey",
    expect_description: "Begin your trip with a comfortable overnight Volvo ride from Delhi to Solan. Enjoy the changing landscape as the bus ascends from bustling cityscapes to the serene hills of Himachal Pradesh. Wake up to the cool mountain breeze and a refreshing change of scenery."
  },
  {
    expect_title: "A Gentle Hike to Jiunthi Village",
    expect_description: "Experience the joy of hiking as you walk for about an hour (2 km) from Pab village to Jiunthi. The trail is surrounded by towering Himalayan cedar trees, offering stunning views and fresh mountain air. This hike is perfect for beginners and nature lovers alike."
  },
  {
    expect_title: "Overnight Camping Under the Stars",
    expect_description: "Spend the night at Jiunthi village, camping in the lap of nature. Unwind with a cozy bonfire, gaze at the starlit sky, and share stories with your companions. It's a chance to disconnect from the digital world and reconnect with nature."
  },
  {
    expect_title: "A Day of Leisure and Exploration",
    expect_description: "Take the morning at your own pace, enjoying the tranquility of Jiunthi. Later, head to the nearby forest for a relaxing picnic surrounded by nature's beauty. Savor simple pleasures like fresh air, good food, and meaningful moments with fellow travelers."
  },
  {
    expect_title: "Breathtaking Drives and Shimla's Charm",
    expect_description: "The return journey takes you through Shimla, offering glimpses of its colonial architecture and bustling charm. Enjoy dinner in the town before boarding your overnight Volvo back to Delhi, filled with memories of your mountain retreat."
  },
  {
    expect_title: "A Perfect Weekend Reset",
    expect_description: "This trip is designed to give you a short but deeply fulfilling break. From hiking in lush forests to stargazing in a serene village, every moment is crafted to leave you refreshed and inspired for the week ahead."
  }
];



// Design 4: Animated Accordion
export const WhatToExpectAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const icons = [MapPin, Mountain, Tent, Compass, Car, Sun];

  return (
    <div className="bg-white p-0 w-full ">
      <h2 className="text-3xl font-bold text-center text-teal-950 mb-12">
What To Expect
      </h2>
      <div className="space-y-4 text-left">
        {whatToExpectData.map((item, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => 
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center">
                  <Icon className="text-teal-950 w-8 h-8 mr-4" />
                  <h3 className="text-xl font-semibold text-teal-950">
                    {item.expect_title}
                  </h3>
                </div>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div 
                  className="p-6 pt-0 animate-fade-in"
                >
                  <p className="text-gray-700">{item.expect_description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default
WhatToExpectAccordion;