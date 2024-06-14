import { useState } from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { loadedClass } from '../tools/transition';

export default function SocialIconsComponent({ isLoaded }) {
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isEnvelopeHovered, setIsEnvelopeHovered] = useState(false);

  return (
    <div className="flex items-center">
      <a
        href="https://www.linkedin.com/in/kevin-mavier/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsLinkedinHovered(true)}
        onMouseLeave={() => setIsLinkedinHovered(false)}
        className={`text-3xl ml-6 ${loadedClass(isLoaded, 200)}`}
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className={isLinkedinHovered ? 'fa-bounce' : ''}
        />
      </a>

      <a
        href="https://github.com/Neevaik"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsGithubHovered(true)}
        onMouseLeave={() => setIsGithubHovered(false)}
        className={`text-3xl ml-6 ${loadedClass(isLoaded, 400)}`}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={isGithubHovered ? 'fa-bounce' : ''}
        />
      </a>

      <a
        href="mailto:kevin.mavier@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsEnvelopeHovered(true)}
        onMouseLeave={() => setIsEnvelopeHovered(false)}
        className={`text-3xl ml-6 ${loadedClass(isLoaded, 100)}`}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className={isEnvelopeHovered ? 'fa-bounce' : ''}
        />
      </a>
    </div>
  );
};
