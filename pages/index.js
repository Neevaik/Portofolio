
//#region import FontAwesome
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//#endregion

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="flex items-start justify-center text-white px-4 overflow-x-hidden mt-32">
        <div className="max-w-screen-lg flex container">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl">Software Developer</h2>
            <h1 className="text-7xl font-bold mb-6">Hello I am</h1>
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient1">Kevin Mavier</span></h1>
            <p className="mb-8">Welcome to my portfolio.<br />
              Here you'll find my projects and more about my skills.</p>

            <div className="flex items-center">
            <a href="/kevin.mavier.cv.fr.pdf" download className="flex items-center space-x-2 border-2 border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300">
                <span>Download CV</span>
                <FontAwesomeIcon icon={faDownload} className="text-2xl" />
              </a>

               <a href="https://www.linkedin.com/in/kevin-mavier/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl ml-4" />
              </a>

              <a href="https://github.com/Neevaik" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-3xl ml-4" />
              </a>

              <a href="kevin.mavier@hotmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl ml-4" />
              </a>
            </div>

          </div>
          <img src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&c" alt="Profile picture" className="flex-grow h-80 w-64 ml-16" />
        </div>
        
      </div>
    </div>
  );
}
