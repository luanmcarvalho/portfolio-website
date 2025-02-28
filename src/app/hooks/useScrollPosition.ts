import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
      
      // Determine active section
      const sections = ["animation", "dev", "about", "contact"];
      const currentPosition = window.scrollY + 300; // Add offset to trigger earlier
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            currentPosition >= offsetTop && 
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial call to set initial values
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, activeSection };
}