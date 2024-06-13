import { useState, useRef, useEffect } from "react";

import SocialIcons from '../components/SocialIcons'
import DownloadCV from '../components/DownloadCV'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/styles/Home.module.css";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);


  return (
    <div className={`flex items-start justify-center text-white px-4 overflow-x-hidden mt-32 ${isLoaded ? 'opacity-100 transform translate-y-0 transition-all duration-1000 ease-in' : 'opacity-0 transform -translate-y-8'}`}>
      <div className="max-w-screen-lg flex container">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg">Software Developer</h2>
          <h1 className="text-5xl font-bold mb-4">Hello, I am</h1>
          <h1 className="text-7xl font-bold mb-6">
            <span className="gradient1">Kevin Mavier</span>
          </h1>
          <p className="mb-8">Welcome to my portfolio.<br />Here you'll find my projects and more about my skills.</p>

          <div className="flex items-center relative">
            <DownloadCV />
            <SocialIcons isLoaded={isLoaded} />
          </div>
        </div>
        <img
          src="/me.png"
          alt="Profile picture"
          className={`flex h-80 w-auto ml-16 ${isLoaded ? 'opacity-100 transform translate-y-0 transition-all duration-1000 ease-in' : 'opacity-0 transform -translate-y-8'}`}
        />
      </div>
    </div>
  );
}