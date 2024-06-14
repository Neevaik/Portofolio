import { useState, useRef, useEffect } from "react";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { loadedClass } from "@/tools/transition";

export default function DownloadCVComponent({isLoaded}) {
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

    useEffect(() => {
        return () => {
            clearTimeout(menuTimeout.current); 
        };
    }, []);

   
    return (
        <div
            onMouseEnter={showMenu}
            onMouseLeave={hideMenu}
            className={`relative ${loadedClass(isLoaded, 200)}}`}
        >
            <button className="flex items-center space-x-2 border-2 border-white text-white px-5 py-2 rounded-xl hover:bg-white hover:text-black">
                <span>Download CV</span>
                <FontAwesomeIcon icon={faDownload} />
            </button>
            <div
                className={`absolute bottom-full left-0 mb-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 transition-opacity duration-500 ease-in-out ${isMenuVisible ? 'opacity-100 delay-100' : 'opacity-0'}`}
                onMouseEnter={showMenu}
                onMouseLeave={hideMenu}
            >
                <a
                    href="/kevin.mavier.cv.fr.pdf"
                    download
                    className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl"
                >
                    Résumé Français
                </a>
                <a
                    href="/kevin.mavier.cv.en.pdf"
                    download
                    className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl"
                >
                    Resume English
                </a>
            </div>
        </div>
    );
}
