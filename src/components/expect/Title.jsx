import React, { useState } from 'react';
import { Mountain, Compass, MapPin, Calendar, Plane , Globe } from 'lucide-react';

// Title Design 1: Clean Modern Alignment
const TitleDesign1 = ({ title, subTitle }) => (
  <div className="text-left space-y-2">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 2: Centered with Subtle Underline
const TitleDesign2 = ({ title, subTitle }) => (
  <div className="text-center space-y-2">
    <h2 className="text-2xl font-bold text-gray-900 pb-1 border-b-2 border-blue-500 inline-block">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 3: Left Aligned with Icon
const TitleDesign3 = ({ title, subTitle }) => (
  <div className="flex items-start space-x-4">
    <Mountain className="w-8 h-8 text-blue-500 mt-1" />
    <div>
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
    </div>
  </div>
);

// Title Design 4: Vertical Stacked with Thin Separator
const TitleDesign4 = ({ title, subTitle }) => (
  <div className="text-center space-y-2">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
    <div className="h-0.5 w-16 bg-blue-500 mx-auto"></div>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 5: Left Aligned with Subtle Tracking
const TitleDesign5 = ({ title, subTitle }) => (
  <div className="text-left">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">{title}</h2>
    <p className="text-xs text-gray-500 uppercase tracking-widest">{subTitle}</p>
  </div>
);

// Title Design 6: Diagonal Offset
const TitleDesign6 = ({ title, subTitle }) => (
  <div className="text-left transform -skew-x-6">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 7: Split Color
const TitleDesign7 = ({ title, subTitle }) => (
  <div className="text-left">
    <h2 className="text-2xl font-bold tracking-tight">
      <span className="text-gray-900">{title.split(' ')[0]}</span>{' '}
      <span className="text-blue-600">{title.split(' ').slice(1).join(' ')}</span>
    </h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 8: Thin Font Weight Contrast
const TitleDesign8 = ({ title, subTitle }) => (
  <div className="text-center">
    <h2 className="text-2xl font-light text-gray-700 tracking-tight">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">{subTitle}</p>
  </div>
);

// Title Design 9: Vertical Text Orientation
const TitleDesign9 = ({ title, subTitle }) => (
  <div className="text-left">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight transform -rotate-2">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 10: Minimal with Dot Separator
const TitleDesign10 = ({ title, subTitle }) => (
  <div className="text-center">
    <div className="flex items-center justify-center space-x-2">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
    </div>
  </div>
);

// Title Design 11: Gradient Text Hint
const TitleDesign11 = ({ title, subTitle }) => (
  <div className="text-left">
    <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 12: Split Layout
const TitleDesign12 = ({ title, subTitle }) => (
  <div className="flex flex-col md:flex-row justify-between items-start">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider md:text-right">{subTitle}</p>
  </div>
);

// Title Design 13: Subtle Outline Effect
const TitleDesign13 = ({ title, subTitle }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight 
      relative inline-block 
      before:absolute before:-z-10 before:inset-0 
      before:border-2 before:border-blue-500 
      before:transform before:rotate-3 
      before:translate-x-1 before:translate-y-1">{title}</h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">{subTitle}</p>
  </div>
);

// Title Design 14: Alternating Font Weights
const TitleDesign14 = ({ title, subTitle }) => (
  <div className="text-left">
    <h2 className="text-2xl tracking-tight">
      {title.split(' ').map((word, index) => (
        <span key={index} className={index % 2 === 0 ? 'font-bold text-gray-900' : 'font-light text-gray-700'}>{word} </span>
      ))}
    </h2>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
  </div>
);

// Title Design 15: Minimal Vertical Spacing
const TitleDesign15 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">{title}</h2>
      <p className="text-xs text-gray-500 uppercase tracking-widest">{subTitle}</p>
    </div>
  );

const TitleDesign16 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-transparent 
        bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 
        stroke-gray-900 stroke-2 tracking-tight">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 17: Asymmetric Text Alignment
  const TitleDesign17 = ({ title, subTitle }) => (
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight pl-4 border-l-4 border-blue-500">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1 pl-4">{subTitle}</p>
    </div>
  );
  
  // Title Design 18: Textured Text Effect
  const TitleDesign18 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight 
        bg-gradient-to-r from-gray-100 to-gray-200 
        bg-clip-text text-transparent">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 19: Vertical Text with Icon
  const TitleDesign19 = ({ title, subTitle }) => (
    <div className="flex items-center space-x-4">
      <Globe className="w-8 h-8 text-green-500" />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
      </div>
    </div>
  );
  
  // Title Design 20: Dotted Separator
  const TitleDesign20 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight relative pb-2">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-blue-500"></span>
      </h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">{subTitle}</p>
    </div>
  );
  
  // Title Design 21: Angled Text
  const TitleDesign21 = ({ title, subTitle }) => (
    <div className="text-left transform -skew-x-3">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
    </div>
  );
  
  // Title Design 22: Condensed Typography
  const TitleDesign22 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-xl font-black uppercase text-gray-900 tracking-wider">{title}</h2>
      <p className="text-xs text-gray-500 tracking-widest mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 23: Elegant Serif
  const TitleDesign23 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-serif text-gray-900 tracking-tight italic">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 24: Stacked with Thin Divider
  const TitleDesign24 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      <div className="h-0.5 w-16 bg-gray-300 mx-auto my-2"></div>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
    </div>
  );
  
  // Title Design 25: Minimal with Accent
  const TitleDesign25 = ({ title, subTitle }) => (
    <div className="text-left">
      <h2 className="text-2xl font-light text-gray-700 tracking-tight">
        <span className="font-bold text-blue-600">•</span> {title}
      </h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 26: Uppercase Emphasis
  const TitleDesign26 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-xl uppercase font-black tracking-widest text-gray-900">{title}</h2>
      <p className="text-xs text-gray-500 tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 27: Subtle Shadow
  const TitleDesign27 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight 
        drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 28: Layered Text
  const TitleDesign28 = ({ title, subTitle }) => (
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight 
        relative z-10">{title}
        <span className="absolute -left-1 -top-1 text-blue-100 -z-10">{title}</span>
      </h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{subTitle}</p>
    </div>
  );
  
  // Title Design 29: Condensed with Side Accent
  const TitleDesign29 = ({ title, subTitle }) => (
    <div className="flex items-center">
      <div className="w-1 h-12 bg-blue-500 mr-4"></div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{subTitle}</p>
      </div>
    </div>
  );
  
  // Title Design 30: Minimalist Outline
  const TitleDesign30 = ({ title, subTitle }) => (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-transparent 
        bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 
        tracking-tight border-b-2 border-gray-300 pb-2 inline-block">{title}</h2>
      <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">{subTitle}</p>
    </div>
  );



// Example Usage Component
const Titles = () => {
    const [count , setCount] = useState(1);
  const tourData = {
    1: {
      title: "WINTER LADAKH ROAD TRIP",
      subTitle: "LEH - SHAM VALLEY - NUBRA - PANGONG LAKE - LEH"
    },
    2: {
      title: "YULLA KANDA TREK",
      subTitle: "DELHI - SHIMLA - NARKANDA - YULLA KHAS - YULLA KANDA LAKE - DELHI"
    },
    3: {
      title: "Himalayan Adventure: Chandigarh to Chandratal",
      subTitle: "CHANDIGARH-MANALI-JISPA-PURNE-SISSU-CHANDRATAL-CHANDIGARH"
    },
    4: {
      title: "DHARAMSHALA TO DALHOUSIE TOUR",
      subTitle: "DELHI - DHARAMSHALA - DALHOUSIE - DELHI"
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
        <div className="count">
            Count NO:- {count}
<div>
    <button onClick={()=> setCount(count+1)} className='bg-red-300 p-6'> add  </button>
</div>
        </div>
      <h1 className="text-3xl font-bold text-center mb-8">Itinerary Titles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(tourData).map((tour, index) => {
     
     const TitleComponents = [
        TitleDesign1, TitleDesign2, TitleDesign3, TitleDesign4, TitleDesign5,
        TitleDesign6, TitleDesign7, TitleDesign8, TitleDesign9, TitleDesign10,
        TitleDesign11, TitleDesign12, TitleDesign13, TitleDesign14, TitleDesign15,
        TitleDesign16, TitleDesign17, TitleDesign18, TitleDesign19, TitleDesign20,
        TitleDesign21, TitleDesign22, TitleDesign23, TitleDesign24, TitleDesign25,
        TitleDesign26, TitleDesign27, TitleDesign28, TitleDesign29, TitleDesign30
      ];
      
          
          const SelectedTitle = TitleComponents[count];
        //   console.log(SelectedTitle , "title")
        console.log(index % TitleComponents.length , "length")
          
          return (
            <div key={index} className="p-4 border border-gray-100 rounded-lg">
              <SelectedTitle 
                title={tour.title} 
                subTitle={tour.subTitle} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Titles;