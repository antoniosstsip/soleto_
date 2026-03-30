import { Menu, Globe, X } from "lucide-react";
import LogoText from "../imports/G192-245-353";
import { useLanguage } from "./LanguageContext";
import { useState, useEffect } from "react";

interface HeaderProps {
  onMenuToggle: () => void;
  onLogoClick: () => void;
  isMenuOpen?: boolean;
}

export function Header({ onMenuToggle, onLogoClick, isMenuOpen = false }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // At top, always show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo - Clickable */}
        <button 
          onClick={onLogoClick}
          className="flex items-center active:opacity-50 transition-opacity touch-manipulation"
          style={{ width: '100px', opacity: 0.85 }}
          aria-label="Go to home"
        >
          <div style={{ width: '100%', aspectRatio: '732/269', transform: 'scaleY(-1)' }}>
            <LogoText />
          </div>
        </button>
        
        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-4 h-12 flex items-center justify-center rounded-xl active:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Change language"
          >
            <Globe className="w-5 h-5 text-gray-700 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider text-gray-700">
              {language === 'el' ? 'EN' : 'ΕΛ'}
            </span>
          </button>

          {/* Menu Icon */}
          <button 
            onClick={onMenuToggle}
            className="w-12 h-12 flex items-center justify-center rounded-xl active:bg-gray-100 transition-colors touch-manipulation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}