import { Instagram, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1640598783301-3551c3e5e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: "234",
  },
  {
    image: "https://images.unsplash.com/photo-1572266625796-84b07a7d99ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: "189",
  },
  {
    image: "https://images.unsplash.com/photo-1680990999782-ba7fe26e4d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: "312",
  },
  {
    image: "https://images.unsplash.com/photo-1693561168722-5dde0bf8eb77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: "267",
  },
  {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: "198",
  },
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: "276",
  },
];

export function InstagramPage() {
  const { t } = useLanguage();

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/soleto_puresummer?igsh=Z3ZwZ3FwbHo5bGFw", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-[#D4AF37]
   <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h1 className="text-gray-900 mb-4 font-logo" style={{ fontWeight: 400 }}>{t('instagram.title')}</h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            {t('instagram.subtitle')}
          </p>
          <Button
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] active:opacity-90 md:hover:opacity-90 text-white px-6 md:px-8 py-5 md:py-6 touch-manipulation active:scale-95 md:hover:scale-105 md:hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @soleto_puresummer
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Instagram Feed Preview */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-center text-gray-900 mb-6 md:mb-8 font-logo" style={{ fontWeight: 400 }}>{t('instagram.recent')}</h2>
        
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">

{instagramPosts.slice(0, 3).map((post, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md active:shadow-2xl md:hover:shadow-2xl transition-all duration-300 touch-manipulation"
              onClick={handleInstagramClick}
            >
              <ImageWithFallback
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-black/0 active:bg-black/40 md:group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-active:opacity-100 md:group-hover:opacity-100 transition-all duration-300 transform group-active:scale-100 md:group-hover:scale-100 scale-75 text-white flex items-center gap-2">
                  <svg
                    className="w-6 h-6 fill-white animate-pulse"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-6 md:p-12 text-center border border-gray-200 shadow-sm">
          <h3 className="text-gray-900 mb-3 md:mb-4 font-heading">{t('instagram.share')}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            {t('instagram.share_desc_1')} <span className="text-[#D4AF37]">#SoletoSummer</span> {t('instagram.share_desc_2')}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6 md:mb-8">
            <span className="px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110 md:hover:shadow-md text-sm md:text-base">#SoletoSummer</span>
            <span className="px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110 md:hover:shadow-md text-sm md:text-base">#BeachVibes</span>
            <span className="px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110 md:hover:shadow-md text-sm md:text-base">#GreekSummer</span>
            <span className="px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110 md:hover:shadow-md text-sm md:text-base">#CoffeeByTheSea</span>
          </div>
          <Button
            onClick={handleInstagramClick}
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white touch-manipulation active:scale-95 md:hover:scale-105 md:hover:shadow-lg transition-all duration-300"
          >
            {t('instagram.visit_btn')}
          </Button>
        </div>
      </div>
    </div>
  );
}
