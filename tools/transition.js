
 const loadedClass = (isLoaded, delay = 0) =>
    isLoaded ? `opacity-100 transform translate-y-0 transition-all duration-1000 ease-in delay-${delay}` : 'opacity-0 transform -translate-y-8';

 
 export { loadedClass}