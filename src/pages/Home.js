import React, { useState, useEffect } from 'react';
import VideoPlayer from "../components/VideoPlayer";
import image from '../assets/ucl_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const words = ["Home", "Man City", "Football", "Manchester", "the Cityzens"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="bg-white min-h-screen p-8 pt-32">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-dark_blue rounded-2xl text-6xl mb-8 font-extrabold tracking-wide leading-tight shadow-lg p-3">
          Welcome to <span className={`text-light_blue transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>{words[currentWordIndex]}</span>
        </h1>
        <div className="flex bg-gray-300 p-6 rounded-3xl shadow-lg">
          <div className="flex-shrink-0">
            <VideoPlayer videoId="NEfv0P_R3P8" className="w-full max-w-md rounded-lg" />
          </div>
          <div className="ml-8 flex-grow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-dark_blue text-2xl font-bold">SAVINHO | In his own words...</h2>
              <p className="text-gray-700 mt-4">Visit the Man City YouTube channel for more videos.</p>
            </div>
            <div className="mt-4 self-center">
              <a href="https://www.youtube.com/@mancity/featured" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block text-light_blue font-semibold text-lg hover:text-dark_blue transition-colors duration-300 bg-white border border-light_blue rounded-full px-6 py-3 shadow-md hover:shadow-lg">
                Check out our YouTube channel
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <a href="#/players" className="relative block rounded-3xl overflow-hidden shadow-lg bg-cover bg-center"
             style={{ width: '1000px', height: '300px', backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-4xl">Players</span>
            </div>
          </a>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-dark_blue text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://twitter.com/ManCity" target="_blank" rel="noopener noreferrer" className="text-dark_blue hover:text-light_blue text-3xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/mancity" target="_blank" rel="noopener noreferrer" className="text-dark_blue hover:text-light_blue text-3xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/mancity/" target="_blank" rel="noopener noreferrer" className="text-dark_blue hover:text-light_blue text-3xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
