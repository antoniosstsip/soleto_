import { useState } from "react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { menuData, menuCategories, MenuItem } from "./menuData";
import { useLanguage } from "./LanguageContext";

export function MenuPage() {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("All");
  const { t, language } = useLanguage();

  // Helper to get localized category name
  const getCategoryLabel = (key: string) => {
    const index = menuCategories.en.indexOf(key);
    if (index === -1) return key;
    return menuCategories[language][index];
  };

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const currentMenuData = menuData[language];
  const categoryKeys = menuCategories.en;

  const renderMenuItems = () => {
    if (selectedCategoryKey === "All") {
      // Use categoryKeys to ensure correct order (Coffee first, etc.)
      return categoryKeys
        .filter((key) => key !== "All")
        .map((categoryKey) => {
          const items = (currentMenuData as any)[categoryKey] as MenuItem[];
          if (!items) return null;

          return (
            <div key={categoryKey} className="mb-10">
              <div className="text-center mb-6">
                <h3 className="inline-block text-xl md:text-2xl font-light font-heading text-gray-900 border-b border-[#D4AF37] pb-1 uppercase tracking-widest">
                  {removeAccents(getCategoryLabel(categoryKey))}
                </h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {items.map((item: MenuItem, index: number) => (
                  <Card key={index} className="group p-4 md:p-5 active:shadow-lg active:shadow-[#D4AF37]/10 md:hover:shadow-lg md:hover:shadow-[#D4AF37]/10 transition-all duration-300 bg-white border-gray-200 active:border-[#D4AF37]/30 md:hover:border-[#D4AF37]/30">
                    <div className="flex justify-between items-start gap-3 md:gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 font-heading group-active:text-[#D4AF37] md:group-hover:text-[#D4AF37] transition-colors duration-300 mb-1">
                          {item.name}
                        </h4>
                        {item.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="flex-shrink-0 pt-0.5">
                        <span className="text-[#D4AF37] inline-block" style={{ fontWeight: 600 }}>
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        });
    } else {
      const items = (currentMenuData as any)[selectedCategoryKey] as MenuItem[] || [];

      return (
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item, index) => (
            <Card key={index} className="group p-4 md:p-5 active:shadow-lg active:shadow-[#D4AF37]/10 md:hover:shadow-lg md:hover:shadow-[#D4AF37]/10 transition-all duration-300 bg-white border-gray-200 active:border-[#D4AF37]/30 md:hover:border-[#D4AF37]/30">
              <div className="flex justify-between items-start gap-3 md:gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-heading group-active:text-[#D4AF37] md:group-hover:text-[#D4AF37] transition-colors duration-300 mb-1">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  )}
                </div>
                <div className="flex-shrink-0 pt-0.5">
                  <span className="text-[#D4AF37] inline-block" style={{ fontWeight: 600 }}>
                    {item.price}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-64 md:h-80">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1680990999782-ba7fe26e4d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMDEzNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mediterranean food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-white mb-2 font-logo" style={{ fontWeight: 300 }}>{t('menu.title')}</h1>
            <p className="text-white/80 font-heading text-xl">{t('menu.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Minimal Category Pills - Horizontal Scroll on Mobile */}
        <div className="mb-8 -mx-4 px-4">
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap md:justify-center px-1">
              {categoryKeys.map((key, index) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategoryKey(key)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap touch-manipulation active:scale-95 uppercase tracking-wide ${
                    selectedCategoryKey === key
                      ? "bg-gradient-to-br from-[#D4AF37] via-[#C9A961] to-[#B8941F] text-white shadow-md"
                      : "bg-white text-gray-700 active:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {removeAccents(menuCategories[language][index])}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        {renderMenuItems()}

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200 text-center">
          <p className="text-gray-600">
            {t('menu.footer_note')}
            <br />
            <span className="text-gray-500">{t('menu.allergy_note')}</span>
          </p>
        </div>
      </div>
    </div>
  );
}