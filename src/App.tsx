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
        <DialogContent className="sm:max-w-md bg-white border-[#D4AF37]/20">
          <DialogHeader>
            <DialogTitle className="text-center font-heading text-2xl text-[#D4AF37]">{t("reservation.title")}</DialogTitle>
            <DialogDescription className="text-center pt-4 text-gray-700 text-base leading-relaxed">
              {t("reservation.desc_start")} <br/>
              <a href="tel:2691302997" className="font-bold text-gray-900 text-lg hover:text-[#D4AF37] transition-colors">2691302997</a>
              <br/><br/>
              {t("reservation.desc_end")}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-2 pb-2">
            <Button 
              onClick={() => window.location.href = 'tel:2691302997'}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#D4AF37]/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t("reservation.call")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Logo - Left */}
            <button
              onClick={() => handleNavigate("home")}
              className="relative z-50 flex items-center group"
            >
              <SoletoLogo 
                showTagline={false}
                showDots={false}
                className={`transition-all duration-500 origin-left ${
                  scrolled || mobileMenuOpen ? "w-24" : "w-32"
                }`}
              />
            </button>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20 shadow-sm">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`relative px-5 py-2 rounded-full transition-all duration-300 ${
                      currentPage === item.id
                        ? "bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/20"
                        : "text-gray-600 hover:text-[#D4AF37]"
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/20 shadow-sm text-gray-700 hover:text-[#D4AF37] transition-colors"
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

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/soleto_puresummer?igsh=Z3ZwZ3FwbHo5bGFw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
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
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-[#D4AF37] font-heading">{t("footer.hours")}</h4>
              <div className="text-gray-400 space-y-1">
                <p>{t("footer.days")}</p>
                <p>9:00 AM - 1:00 AM</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-[#D4AF37] font-heading">{t("footer.connect")}</h4>
              <div className="flex gap-4">
              
              </div>
              <p className="text-gray-400 mt-4 font-heading">{t("footer.location")}</p>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>{t("footer.rights")}</p>
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
