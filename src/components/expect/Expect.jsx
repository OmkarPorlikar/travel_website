import React, { useState } from 'react';
import { 
  Workflow, 
  Compass, 
  Map, 
  Navigation, 
  Sun, 
  Moon, 
  Cloud, 
  TreePine, 
  Waves 
} from 'lucide-react';

// Shared Travel Data (same as previous artifact)
const travelData = {
  description: "If you're looking for a refreshing escape from the chaos of city life, this weekend getaway to Jiunthi village is a perfect choice. This short but exhilarating trip combines nature, adventure, and serene experiences, making it an ideal plan for a quick rejuvenation.The journey begins with an overnight Volvo ride from Delhi to Solan, offering a comfortable start to your adventure. Upon arrival in Solan, you'll meet your guide who will take you through scenic routes to Pab village. From here, a gentle one-hour hike through lush Himalayan cedar forests brings you to Jiunthi village, a hidden gem surrounded by pristine nature.Spend your evening camping under a starlit sky, enjoying the warmth of a bonfire and soaking in the peace of the great outdoors. The next morning, leisure time and a delightful picnic in the forest set the tone for a relaxed day before heading back to Delhi via Shimla. This journey is a perfect mix of adventure, relaxation, and breathtaking views.",
  expectations: [
    {
      title: "A Scenic Start to Your Journey",
      description: "Begin your trip with a comfortable overnight Volvo ride from Delhi to Solan. Enjoy the changing landscape as the bus ascends from bustling cityscapes to the serene hills of Himachal Pradesh. Wake up to the cool mountain breeze and a refreshing change of scenery."
    },
    {
      title: "A Gentle Hike to Jiunthi Village",
      description: "Experience the joy of hiking as you walk for about an hour (2 km) from Pab village to Jiunthi. The trail is surrounded by towering Himalayan cedar trees, offering stunning views and fresh mountain air. This hike is perfect for beginners and nature lovers alike."
    },
    {
      title: "Overnight Camping Under the Stars",
      description: "Spend the night at Jiunthi village, camping in the lap of nature. Unwind with a cozy bonfire, gaze at the starlit sky, and share stories with your companions. It's a chance to disconnect from the digital world and reconnect with nature."
    },
    {
      title: "A Day of Leisure and Exploration",
      description: "Take the morning at your own pace, enjoying the tranquility of Jiunthi. Later, head to the nearby forest for a relaxing picnic surrounded by nature's beauty. Savor simple pleasures like fresh air, good food, and meaningful moments with fellow travelers."
    },
    {
      title: "Breathtaking Drives and Shimla's Charm",
      description: "The return journey takes you through Shimla, offering glimpses of its colonial architecture and bustling charm. Enjoy dinner in the town before boarding your overnight Volvo back to Delhi, filled with memories of your mountain retreat."
    },
    {
      title: "A Perfect Weekend Reset",
      description: "This trip is designed to give you a short but deeply fulfilling break. From hiking in lush forests to stargazing in a serene village, every moment is crafted to leave you refreshed and inspired for the week ahead."
    }
  ]
};

// Design 6: Interactive Journey Map
export const ItineraryInteractiveMap = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        <div className="p-8 bg-blue-50">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Mountain Journey Map</h1>
          <p className="text-gray-700 mb-6">{travelData.description}</p>
          
          <div className="space-y-4">
            {travelData.expectations.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedStep(index)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  selectedStep === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-800 hover:bg-blue-100'
                }`}
              >
                <div className="flex items-center">
                  <Workflow className="mr-3" />
                  <span className="font-semibold">{exp.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-8 bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              {travelData.expectations[selectedStep].title}
            </h2>
            <p className="text-gray-700">
              {travelData.expectations[selectedStep].description}
            </p>
            <div className="mt-6 flex justify-center">
              <Compass size={100} className="text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Design 7: Nature-Inspired Scrolling Experience
export const ItineraryNatureScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <div className="sticky top-0 z-10 bg-green-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Journey Through Nature</h1>
      </div>
      
      <div 
        className="flex-grow overflow-y-auto relative"
        onScroll={handleScroll}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-300">
          <div 
            className="h-full bg-green-600" 
            style={{width: `${scrollProgress}%`}}
          />
        </div>
        
        <div className="max-w-2xl mx-auto p-8 space-y-12">
          <div className="text-center">
            <p className="text-gray-700 mb-6">{travelData.description}</p>
          </div>
          
          {travelData.expectations.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <div className="absolute -left-12 top-0">
                {index === 0 && <Sun className="text-yellow-500" />}
                {index === 1 && <TreePine className="text-green-500" />}
                {index === 2 && <Moon className="text-indigo-500" />}
                {index === 3 && <Cloud className="text-blue-500" />}
                {index === 4 && <Waves className="text-teal-500" />}
                {index === 5 && <Navigation className="text-purple-500" />}
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {exp.title}
              </h2>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Design 8: Modal-Based Exploration
export const ItineraryModalExplorer = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Explore Your Mountain Journey
        </h1>
        <p className="text-center text-gray-600 mb-8">{travelData.description}</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {travelData.expectations.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedModal(index)}
              className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-left transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {exp.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{exp.description}</p>
            </button>
          ))}
        </div>

        {selectedModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl max-w-md w-full relative">
              <button 
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {travelData.expectations[selectedModal].title}
              </h2>
              <p className="text-gray-700">
                {travelData.expectations[selectedModal].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Design 9: Animated Storytelling Slider
export const ItineraryAnimatedStorytelling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === travelData.expectations.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? travelData.expectations.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-purple-50 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
        <div className="p-8 bg-purple-600 text-white text-center">
          <h1 className="text-3xl font-bold">Mountain Journey Narrative</h1>
          <p className="mt-4">{travelData.description}</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${travelData.expectations.length * 100}%`
              }}
            >
              {travelData.expectations.map((exp, index) => (
                <div 
                  key={index} 
                  className="w-full p-8 text-center"
                >
                  <h2 className="text-2xl font-bold text-purple-800 mb-4">
                    {exp.title}
                  </h2>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={prevSlide}
              className="bg-purple-100 text-purple-800 p-2 rounded-r-full"
            >
              ←
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={nextSlide}
              className="bg-purple-100 text-purple-800 p-2 rounded-l-full"
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center mt-4 pb-4">
            {travelData.expectations.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Design 10: Minimalist Progressive Reveal
export const ItineraryProgressiveReveal = () => {
  const [revealedSteps, setRevealedSteps] = useState(1);

  const revealNextStep = () => {
    setRevealedSteps((prev) => 
      Math.min(prev + 1, travelData.expectations.length)
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Journey Unveiled
        </h1>
        <p className="text-center text-gray-600 mb-8">{travelData.description}</p>
        
        <div className="space-y-4">
          {travelData.expectations.slice(0, revealedSteps).map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {exp.title}
              </h2>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
        
        {revealedSteps < travelData.expectations.length && (
          <div className="text-center mt-6">
            <button
              onClick={revealNextStep}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Reveal Next Step
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default {
  ItineraryInteractiveMap,
  ItineraryNatureScroll,
  ItineraryModalExplorer,
  ItineraryAnimatedStorytelling,
  ItineraryProgressiveReveal
};

