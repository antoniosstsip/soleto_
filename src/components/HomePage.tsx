import { Coffee, UtensilsCrossed, Sun, Waves, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImage from "figma:asset/531d06e2c69731a3d529de76ea54866a732231a3.png";
import dinnerSectionImage from "figma:asset/36de91941d298285a1f1bbccb50f607493a1969f.png";
import summerSectionImage from "figma:asset/ed6ba905142800bda39a33c31b37745ae979d0fc.png";
import aboutSectionImage from "figma:asset/a28d13be933d749e1a7f72ef535fc6c07f843c18.png";
import PureSummerTagline from "../imports/G252";
import CoffeeSnacksTagline from "../imports/G250-84-2465";
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
  const [isMobile, setIsMobile] = useState(true);
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
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
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full bg-black pt-[68px]" style={{ 
        height: '100vh',
        minHeight: '100vh'
      }}>
        {isMobile ? (
          <img
            src={heroImage}
            alt="Soleto coffee bar"
            className="absolute w-full h-full object-cover"
            style={{ 
              top: 0,
              left: 0,
              objectPosition: 'center 35%',
              transform: 'scale(1.05)'
            }}
          />
        ) : (
          <motion.img
            src={heroImage}
            alt="Soleto coffee bar"
            className="absolute w-full h-full object-cover will-change-transform"
            style={{ 
              y, 
              top: 0,
              left: 0,
              objectPosition: 'center 35%',
              transform: 'scale(1.05)'
            }}
          />
        )}
        
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-5 pb-20 md:pb-24">
          {/* Pure Summer Tagline */}
          <div className={`mb-3 w-full max-w-[280px] transition-all duration-700 delay-200 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ '--fill-0': '#FFFFFF' } as React.CSSProperties}>
            <PureSummerTagline />
          </div>

          {/* Coffee & Snacks Tagline */}
          <div className={`mb-10 w-full max-w-[180px] transition-all duration-700 delay-250 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="taglineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                  <stop offset="40%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#c09553', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            <div 
              style={{ 
                width: '100%', 
                aspectRatio: '463/158', 
                transform: 'scaleY(-1)',
                '--fill-0': 'url(#taglineGradient)'
              } as React.CSSProperties}
            >
              <CoffeeSnacksTagline />
            </div>
          </div>

          <div className={`flex flex-col gap-5 w-full max-w-sm transition-all duration-700 delay-300 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button 
              onClick={() => onNavigate('menu')}
              className="w-full bg-[#c09553] active:bg-[#c09553] text-white shadow-lg shadow-[#c09553]/40 px-8 py-4 touch-manipulation active:scale-95 transition-all duration-300 text-lg font-medium tracking-wide h-auto rounded-full"
            >
              {t('hero.menu')}
            </Button>
            <Button 
              onClick={onReserve}
              variant="outline"
              className="w-full border-2 border-white bg-white/10 backdrop-blur-sm text-white active:bg-white active:text-gray-900 px-8 py-4 touch-manipulation active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium tracking-wide h-auto rounded-full"
            >
              <Calendar className="w-5 h-5" />
              {t('hero.reserve')}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-500 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center gap-1.5 animate-bounce">
            <Waves className="w-5 h-5 text-white/80" strokeWidth={1.5} />
            <div className="w-[1px] h-6 bg-gradient-to-b from-white/80 to-transparent" />
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
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c09553] rounded-xl -z-10" />
            </div>
            <div className="space-y-4 px-6 sm:px-0 max-w-lg mx-auto text-left">
              <p className="text-gray-700 leading-relaxed">
                {t('about.p1')}
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
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c09553] rounded-xl -z-10" />
          </div>
          <div className="space-y-4 px-6 sm:px-0 max-w-lg mx-auto">
            <h2 className="text-gray-900 italic tracking-wide text-center" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: '1.2' }}>
              {t('summer.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed text-left">
              {t('about.p2')}
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
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c09553] rounded-xl -z-10" />
          </div>
          <div className="space-y-4 px-6 sm:px-0 max-w-lg mx-auto">
            <h2 className="text-gray-900 text-center" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: '1.2' }}>
              {t('dinner.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed text-left">
              {t('about.p3')}
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
                className={`text-center p-8 bg-white rounded-2xl shadow-md transition-all duration-700 ${feature.delay} ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } active:scale-95`}
              >
                <div className="w-16 h-16 bg-[#c09553] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#c09553]/30">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4 text-gray-900 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base px-2">
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
