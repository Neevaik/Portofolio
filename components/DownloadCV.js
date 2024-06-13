import { useState, useRef, useEffect } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DownloadCVComponent() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuTimeout = useRef(null);


    const showMenu = () => {
        clearTimeout(menuTimeout.current);
        setIsMenuVisible(true);
    };

    const hideMenu = () => {
        menuTimeout.current = setTimeout(() => {
            setIsMenuVisible(false);
        }, 200);
    };

    return (
        <div
            onMouseEnter={showMenu}
            onMouseLeave={hideMenu}
            className="relative"
        >
            <button className="flex items-center space-x-2 border-2 border-white text-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300">
                <span>Download CV</span>
                <FontAwesomeIcon icon={faDownload} />
            </button>
            <div
                className={`absolute bottom-full left-0 mb-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 transition-opacity duration-1000 ease-in-out ${isMenuVisible ? 'opacity-100 delay-200' : 'opacity-0'}`}
                onMouseEnter={showMenu}
                onMouseLeave={hideMenu}
            >
                <a
                    href="/kevin.mavier.cv.fr.pdf"
                    download
                    className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl"
                >
                    Résumé français
                </a>
                <a
                    href="/kevin.mavier.cv.en.pdf"
                    download
                    className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl"
                >
                    Resume english
                </a>
            </div>
        </div>
    )
}