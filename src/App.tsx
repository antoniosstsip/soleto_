import { useState, useEffect } from "react";
import { Menu, X, Instagram, Calendar, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { ReviewsPage } from "./components/ReviewsPage";
import { InstagramPage } from "./components/InstagramPage";
import { SoletoLogo } from "./components/SoletoLogo";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { t, language, toggleLanguage } = useLanguage();

  // Helper to remove accents from Greek text
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Set theme color for Safari
  useEffect(() => {
    // Add or update meta theme-color tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#1A1A24');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "menu", label: t("nav.menu") },
    { id: "reviews", label: t("nav.reviews") },
    { id: "instagram", label: t("nav.instagram") },
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReserve = () => {
    setReservationOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Reservation Dialog */}
      <Dialog open={reservationOpen} onOpenChange={setReservationOpen}>
        <DialogContent className="sm:max-w-[380px] w-[90%] bg-white border border-gray-200 shadow-2xl p-8 rounded-2xl gap-4">
          <DialogHeader className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mb-1 shadow-lg shadow-[#D4AF37]/20">
              <Calendar className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            
            <DialogTitle className="text-center font-heading text-xl font-light tracking-wide text-gray-900">
              {t("reservation.title")}
            </DialogTitle>
            
            <DialogDescription asChild className="text-center space-y-4 pt-2 w-full">
              <div>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {t("reservation.desc_start")}
                </p>
                
                <a 
                  href="tel:2691302997" 
                  className="block text-2xl font-light tracking-wider text-gray-900 hover:text-[#D4AF37] transition-colors py-2"
                >
                  2691302997
                </a>
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="pt-2 pb-1">
             <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
               <p className="text-gray-600 text-xs text-center leading-relaxed">
                    {t("reservation.desc_end")}
               </p>
             </div>
            <Button 
              onClick={() => window.location.href = 'tel:2691302997'}
              className="w-full bg-gradient-to-br from-[#D4AF37] via-[#C9A961] to-[#B8941F] active:from-[#E5C158] active:via-[#D4AF37] active:to-[#C9A961] md:hover:from-[#E5C158] md:hover:via-[#D4AF37] md:hover:to-[#C9A961] text-white rounded-full h-11 text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D4AF37]/30 touch-manipulation active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t("reservation.call")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen
            ? "bg-white shadow-md py-3" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Logo - Left */}
            <button
              onClick={() => handleNavigate("home")}
              className="relative z-50 flex items-center group active:scale-95 transition-transform touch-manipulation"
            >
              <SoletoLogo 
                showTagline={false}
                showDots={false}
                taglineColor={scrolled || mobileMenuOpen ? "#1F2937" : "#FFFFFF"}
                className={`transition-all duration-500 origin-left ${
                  scrolled || mobileMenuOpen ? "w-28" : "w-36"
                }`}
              />
            </button>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-lg rounded-full px-3 py-2.5 border border-gray-200/50 shadow-sm">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`relative px-5 py-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                      currentPage === item.id
                        ? "bg-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/25"
                        : "text-gray-600 hover:text-[#D4AF37] hover:bg-gray-50 active:scale-95"
                    }`}
                  >
                    <span className="text-sm font-medium tracking-wide uppercase">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Language Toggle Desktop */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-lg border border-gray-200/50 shadow-sm text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50 transition-colors active:scale-95 touch-manipulation"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{language === 'el' ? 'EN' : 'EL'}</span>
              </button>
            </div>

            {/* Mobile Actions - Right */}
            <div className="md:hidden flex items-center gap-3 relative z-[60]">
              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLanguage}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border border-gray-200 shadow-lg active:scale-95 transition-transform"
                style={{ zIndex: 60 }}
                aria-label="Change language"
              >
                 <span className="text-xs font-black uppercase tracking-wider">{language === 'el' ? 'EN' : 'EL'}</span>
              </button>

              {/* Menu Button (Mobile) */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  mobileMenuOpen 
                    ? "bg-gray-100 text-gray-900" 
                    : scrolled 
                      ? "text-gray-900 hover:bg-gray-100" 
                      : "text-white bg-black/20 backdrop-blur-md"
                }`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex items-center justify-center relative">
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full -z-10" />
            
            <div className="flex-1 flex flex-col justify-center items-center space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-3xl font-light tracking-tight transition-colors ${
                    currentPage === item.id
                      ? "text-[#D4AF37] font-medium"
                      : "text-gray-900"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={handleReserve}
                  className="mt-4 px-8 py-3 bg-[#D4AF37] text-white rounded-full text-lg font-medium tracking-wide shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {t("reservation.title")}
              </motion.button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto flex flex-col items-center gap-6"
            >
              <div className="w-12 h-1 bg-[#D4AF37]/30 rounded-full" />
              
              <div className="text-center space-y-1">
                <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">{t("pure_summer")}</p>
                <p className="text-gray-400 text-xs">{t("footer.location")}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`
        transition-all duration-300
        ${["home", "menu"].includes(currentPage) ? "pt-0" : "pt-24 md:pt-28"}
      `}>
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} onReserve={handleReserve} />}
        {currentPage === "menu" && <MenuPage />}
        {currentPage === "reviews" && <ReviewsPage />}
        {currentPage === "instagram" && <InstagramPage />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer active:opacity-70 md:hover:opacity-80 transition-opacity touch-manipulation" onClick={() => handleNavigate("home")}>
             <SoletoLogo className="w-24 md:w-28" showTagline={false} showDots={false} />
          </div>

          {/* Socials */}
           <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/soleto_puresummer?igsh=Z3ZwZ3FwbHo5bGFw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 active:bg-[#D4AF37] active:text-white md:hover:bg-[#D4AF37] md:hover:text-white transition-all duration-300 shadow-sm touch-manipulation active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
               <a
                href="tel:2691302997"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 active:bg-[#D4AF37] active:text-white md:hover:bg-[#D4AF37] md:hover:text-white transition-all duration-300 shadow-sm touch-manipulation active:scale-95"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
           </div>

           {/* Copyright */}
           <div className="text-[10px] text-gray-400 uppercase tracking-widest text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Soleto</p>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}