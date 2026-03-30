import { useState } from "react";
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
            <div key={categoryKey} className="mb-12">
              <div className="text-center mb-6">
                <h3 className="inline-block text-[40px] text-[#c09553] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {getCategoryLabel(categoryKey)}
                </h3>
              </div>
              <div className="space-y-6">
                {items.map((item: MenuItem, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                    <div className="flex justify-between items-center gap-4 mb-1.5">
                      <h4 className="text-[15px] text-gray-700 font-medium leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.name}
                      </h4>
                      <span className="text-[15px] text-gray-700 flex-shrink-0 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-500 text-[13px] leading-relaxed font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        });
    } else {
      const items = (currentMenuData as any)[selectedCategoryKey] as MenuItem[] || [];

      return (
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="inline-block text-[40px] text-[#c09553] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {getCategoryLabel(selectedCategoryKey)}
            </h3>
          </div>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex justify-between items-center gap-4 mb-1.5">
                  <h4 className="text-[15px] text-gray-700 font-medium leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.name}
                  </h4>
                  <span className="text-[15px] text-gray-700 flex-shrink-0 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-gray-500 text-[13px] leading-relaxed font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pt-20 animate-fade-in">
      {/* Menu Content */}
      <div className="max-w-2xl mx-auto px-5 py-6">
        {/* Category Filter Pills */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3">
            {categoryKeys.map((key, index) => (
              <button
                key={key}
                onClick={() => setSelectedCategoryKey(key)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 touch-manipulation text-sm font-medium ${
                  selectedCategoryKey === key
                    ? "bg-[#c09553] text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-300"
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {menuCategories[language][index]}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        {renderMenuItems()}

        <div className="mt-12 mb-4 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d2b17b]" />
            <span className="w-2 h-2 rounded-full bg-[#c09553]" />
            <span className="w-8 h-[1px] bg-[#d2b17b]" />
          </div>
          <p
            className="text-[14px] text-gray-500 italic leading-relaxed max-w-xl mx-auto px-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {language === "el"
              ? "Στο Soleto, όλα παρασκευάζονται καθημερινά με φρέσκες τοπικές πρώτες ύλες, για αυθεντική γεύση σε κάθε πιάτο."
              : "At Soleto, everything is prepared daily with fresh local ingredients, delivering authentic flavor in every dish."}
          </p>
        </div>
      </div>
    </div>
  );
}