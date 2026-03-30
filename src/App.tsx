import React, { useState, useEffect } from "react";
import { Instagram, Calendar, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { ReviewsPage } from "./components/ReviewsPage";
import { InstagramPage } from "./components/InstagramPage";
import { SoletoLogo } from "./components/SoletoLogo";
import { Header } from "./components/Header";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  
  const { t, language } = useLanguage();

  // Set theme color for Safari
  useEffect(() => {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#ffffff');
    
    let appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleStatusBar) {
      appleStatusBar = document.createElement('meta');
      appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
      document.head.appendChild(appleStatusBar);
    }
    appleStatusBar.setAttribute('content', 'default');
  }, []);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setCurrentPage("home");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReserve = () => {
    setReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Reservation Dialog */}
      <Dialog open={reservationOpen} onOpenChange={setReservationOpen}>
        <DialogContent className="sm:max-w-[380px] w-[90%] bg-white border border-gray-200 shadow-2xl p-8 rounded-2xl gap-4">
          <DialogHeader className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 bg-[#c09553] rounded-full flex items-center justify-center mb-1 shadow-lg shadow-[#c09553]/20">
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
                  className="block text-2xl font-light tracking-wider text-gray-900 transition-colors py-2"
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
              className="w-full bg-[#c09553] active:bg-[#c09553] text-white rounded-full h-11 text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#c09553]/30 touch-manipulation active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t("reservation.call")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Unified Header for ALL pages */}
      <Header
        onMenuToggle={() => setMobileMenuOpen((prev) => !prev)}
        onLogoClick={handleLogoClick}
        isMenuOpen={mobileMenuOpen}
      />

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
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c09553]/10 to-transparent rounded-bl-full -z-10" />
            
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
                      ? "text-[#c09553] font-medium"
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
                  className="mt-4 px-8 py-3 bg-[#c09553] text-white rounded-full text-lg font-medium tracking-wide shadow-lg shadow-[#c09553]/20 flex items-center gap-2"
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
              <div className="w-12 h-1 bg-[#c09553]/30 rounded-full" />
              
              <div className="text-center space-y-1">
                <p className="text-[#c09553] text-sm font-medium tracking-widest uppercase">{t("pure_summer")}</p>
                <p className="text-gray-500 text-xs">Παραλία Ελαιώνα, Αίγιο</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="transition-all duration-300 animate-fade-in">
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} onReserve={handleReserve} />}
        {currentPage === "menu" && <MenuPage />}
        {currentPage === "reviews" && <ReviewsPage />}
        {currentPage === "instagram" && <InstagramPage />}
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-[#f3e8d6] via-[#e7d2b0] to-[#dcc09a] border-t border-[#d8b88d] py-12 mt-8">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#fff2cf]/35 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c09553]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8">
            <div className="bg-white/82 backdrop-blur-sm border border-[#e5cda8] rounded-2xl p-5 shadow-md">
              <div
                className="w-fit cursor-pointer active:opacity-70 transition-opacity touch-manipulation"
                onClick={handleLogoClick}
              >
                <SoletoLogo className="w-44 md:w-52" showTagline={true} showDots={true} taglineColor="#5b5659" />
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {language === "el"
                  ? "Καλοκαιρινές γεύσεις, δίπλα στη θάλασσα. Καφές και φαγητό με θέα."
                  : "Summer flavors by the sea. Coffee and food with a view."}
              </p>
            </div>

            <div className="bg-white/82 backdrop-blur-sm border border-[#e5cda8] rounded-2xl p-5 shadow-md">
              <h4 className="text-sm font-semibold tracking-wide text-[#b58347] uppercase mb-3">
                {language === "el" ? "Επικοινωνια" : "Contact"}
              </h4>
              <div className="space-y-2.5">
                <a
                  href="tel:2691302997"
                  className="flex items-center gap-2 text-gray-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>2691302997</span>
                </a>
                <a
                  href="https://www.instagram.com/soleto_puresummer?igsh=Z3ZwZ3FwbHo5bGFw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@soleto_puresummer</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Soleto%2C%20%CE%95%CE%BB%CE%B1%CE%B9%CF%8E%CE%BD%CE%B1%CF%82%2C%20%CE%91%CE%AF%CE%B3%CE%B9%CE%BF%20250%2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>{language === "el" ? "Soleto, Ελαιώνας, Αίγιο 250 03" : "Soleto, Elaionas, Aigio 250 03"}</span>
                </a>
              </div>
            </div>

          </div>
          <div className="pt-5 border-t border-[#cfb088] text-center text-[11px] text-[#7e6849] uppercase tracking-[0.2em]">
            <p>&copy; {new Date().getFullYear()} Soleto - Pure Summer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <LanguageProvider children={<AppContent />} />
  );
}