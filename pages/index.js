import { useState, useEffect } from "react";
import SocialIcons from '../components/SocialIcons';
import DownloadCV from '../components/DownloadCV';
import NumberList from '../components/NumberList';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex items-start justify-center text-white px-4 overflow-x-hidden mt-32">
        <div className="max-w-screen-lg flex container">
          <div className="flex flex-col justify-center">
            <h2 className={`text-lg ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'} transition-opacity`}>Software Developer</h2>
            <h1 className={`text-5xl font-bold mb-4 ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'} transition-opacity`}>Hello, I am</h1>
            <h1 className={`text-7xl font-bold mb-6 ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'} transition-opacity`}>
              <span className="gradient1">Kevin Mavier</span>
            </h1>
            <p className={`mb-8 ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'} transition-opacity`}>
              Welcome to my portfolio.<br />
              Here you'll find my projects and more about my skills.
            </p>

            <div className="flex items-center relative">
              <DownloadCV isLoaded={isLoaded} />
              <SocialIcons isLoaded={isLoaded} />
            </div>
          </div>

          <img
            src="/me.png"
            alt="Profile picture"
            className={`flex h-80 w-auto ml-16 ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'} transition-opacity`}
          />
        </div>
      </div>
      <NumberList isLoaded={isLoaded}/>
    </div>
  );
}
