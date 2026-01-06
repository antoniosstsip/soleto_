import { Coffee, UtensilsCrossed, Sun, Waves, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SoletoLogo } from "./SoletoLogo";
import coffeeBarImage from "figma:asset/0f37e8291f51d7f4017998025ccca896425b76ac.png";
import dinnerSectionImage from "figma:asset/36de91941d298285a1f1bbccb50f607493a1969f.png";
import summerSectionImage from "figma:asset/ed6ba905142800bda39a33c31b37745ae979d0fc.png";
import aboutSectionImage from "figma:asset/a28d13be933d749e1a7f72ef535fc6c07f843c18.png";
import { useLanguage } from "./LanguageContext";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onReserve?: () => void;
}

export function HomePage({ onNavigate, onReserve }: HomePageProps) {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    features: false,
  });
  
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch flash or initial lag
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check immediately
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setIsVisible(prev => ({ ...prev, about: true }));
          } else if (entry.target === featuresRef.current) {
            setIsVisible(prev => ({ ...prev, features: true }));
          }
        }
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {isMobile ? (
          <img
            src={coffeeBarImage}
            alt="Soleto coffee bar"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
        ) : (
          <motion.img
            src={coffeeBarImage}
            alt="Soleto coffee bar"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ y, objectPosition: 'center' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
          <div className={`mb-8 transition-all duration-700 delay-100 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <SoletoLogo 
              showTagline={true}
              showDots={true}
              className="w-full max-w-[240px] sm:max-w-[280px] mx-auto"
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
            />
          </div>
          <div className={`flex flex-col gap-3 w-full max-w-sm transition-all duration-700 delay-300 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button 
              onClick={() => onNavigate('menu')}
              className="w-full bg-gradient-to-br from-[#D4AF37] via-[#C9A961] to-[#B8941F] active:from-[#E5C158] active:via-[#D4AF37] active:to-[#C9A961] text-white shadow-lg shadow-[#D4AF37]/40 px-8 py-5 touch-manipulation active:scale-95 transition-all duration-300"
            >
              {t('hero.menu')}
            </Button>
            <Button 
              onClick={onReserve}
              variant="outline"
              className="w-full border-2 border-white bg-white/10 backdrop-blur-sm text-white active:bg-white active:text-gray-900 px-8 py-5 touch-manipulation active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              {t('hero.reserve')}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-500 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <Waves className="w-8 h-8 text-white/80" />
            <div className="w-0.5 h-10 bg-gradient-to-b from-white/80 to-transparent rounded-full" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="bg-white py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative h-80 sm:h-96 mb-10">
              <img
                src={aboutSectionImage}
                alt="Soleto coffee bar"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl -z-10" />
            </div>
            <div className="text-center space-y-5 max-w-2xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.p2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.p3')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summer Every Day Section */}
      <div className="bg-gray-50 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 sm:h-96 mb-10">
            <ImageWithFallback
              src={summerSectionImage}
              alt="Summer at Soleto"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl -z-10" />
          </div>
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            <h2 className="text-gray-900 italic tracking-wide" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: '1.2' }}>
              {t('summer.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('summer.text')}
            </p>
          </div>
        </div>
      </div>

      {/* Dinner by the Sea Section */}
      <div className="bg-white py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 sm:h-96 mb-10">
            <ImageWithFallback
              src={dinnerSectionImage}
              alt="Dinner by the sea at Soleto"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl -z-10" />
          </div>
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            <h2 className="text-gray-900" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: '1.2' }}>
              {t('dinner.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('dinner.text')}
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div ref={featuresRef} className="bg-gray-50 py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                icon: Coffee,
                title: t('features.coffee.title'),
                description: t('features.coffee.desc'),
                delay: "delay-0"
              },
              {
                icon: Sun,
                title: t('features.views.title'),
                description: t('features.views.desc'),
                delay: "delay-100"
              },
              {
                icon: UtensilsCrossed,
                title: t('features.fresh.title'),
                description: t('features.fresh.desc'),
                delay: "delay-200"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-2xl shadow-md transition-all duration-700 ${feature.delay} ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } active:scale-95`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D4AF37]/30">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-gray-900 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
