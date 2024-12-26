import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [  'Home' ,  'Itinerary', 'Testimonials' , 'Contact'];
// console.log('Inside header')
  return (
    <header
      className={`fixed overflow-hidden top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFF5EE] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Home Link */}
          <div className="logo h-full "> 
          <a
            href="/"
            className={`text-2xl font-bold hover:opacity-75 transition-opacity duration-150 md:h-[25%] md:w-[25%]  h-[30%] w-[30%] ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            <img src="/assest/logo.webp" alt="Better Backpacking India" className='h-[140%] mt-[-0.5rem] w-full ' />
          </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
              whileHover={{ scale: 1.2 }}
                key={item}
                href={`/${(item === 'Home')? '': item.toLowerCase()}`}
                className={`hover:opacity-75 transition-opacity duration-150 hover:text-orange-500 transition-transform ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item}
              </motion.a>
            ))}
         
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 hover:opacity-75 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-2 bg-white shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                console.log(item , "item"),
                <a
                  key={item}
                  href={`${(item === 'Home')? '/': item.toLowerCase()}`}
                  className="text-black hover:opacity-75 transition-opacity duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
