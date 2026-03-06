import { Star, User } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useLanguage } from "./LanguageContext";

interface Review {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
}

const reviewsData = {
  en: [
    {
      name: "Thalia Alex",
      initials: "TA",
      rating: 5,
      date: "2 weeks ago",
      text: "Soleto is just perfect! Highly recommended this place with quick and super friendly service! We spent most afternoons there whilst enjoying the great beach of Elaionas! Great location, vibe, food and coffee is amazing!",
    },
    {
      name: "Maria Gazou",
      initials: "ΜΓ",
      rating: 5,
      date: "1 month ago",
      text: "Very good food, delicious. We had pork chops with potatoes, chicken fillet with potatoes, penne with chicken, fried anchovies, Soleto salad and grilled feta with honey. Everything was perfect. The same goes for the desserts we had afterwards, waffles (very fresh) with ice cream. Excellent Mojito, great coffee. We visited the place for the first time and stayed all day. Due to August 15th we had booked a table and sunbeds. I really have nothing negative to say. Impeccable service from everyone but I will mention especially Dimitra, the girl who served us most hours of the day. Our day went wonderfully. Cleanliness, available shower. The sea is wonderful. Sunbeds-umbrellas impeccable. Thank you very much for everything. We will definitely come back. I recommend it without hesitation.",
    },
    {
      name: "Panagiotis Mavromatis",
      initials: "ΠΜ",
      rating: 5,
      date: "3 weeks ago",
      text: "Nice place for coffee and food by the sea.... The food is tasty. Good service....! Of course, to be sure, we booked a table....",
    },
    {
      name: "Konstantinos Kalam",
      initials: "KK",
      rating: 5,
      date: "2 weeks ago",
      text: "It is a wonderful place by the sea. The space was very clean and tidy. The food is fantastic and the prices are reasonable. Finally, the girls were polite and helpful. I recommend it without hesitation!!!!",
    },
  ],
  el: [
    {
      name: "Thalia Alex",
      initials: "TA",
      rating: 5,
      date: "πριν 2 εβδομάδες",
      text: "Soleto is just perfect! Highly recommended this place with quick and super friendly service! We spent most afternoons there whilst enjoying the great beach of Elaionas! Great location, vibe, food and coffee is amazing!",
    },
    {
      name: "Μαρία Γάζου",
      initials: "ΜΓ",
      rating: 5,
      date: "πριν 1 μήνα",
      text: "Πολύ καλό φαγητό, νοστιμότατο. Πήραμε μπριζολάκια με πατάτες, φιλέτο κοτόπουλο με πατάτες, πένες με κοτόπουλο, γαύρο τηγανητό, σαλάτα Soleto και ψητή φέτα με μέλι. Όλα τέλεια. Το ίδιο ισχύει και για τα γλυκά που πήραμε στη συνέχεια, βάφλες (φρεσκότατες) με παγωτό. Mojito εξαιρετικό, καφέδες μια χαρά. Επισκεφθήκαμε πρώτη φορά το μέρος και καθίσαμε όλη την ημέρα. Λόγω 15 Αυγούστου είχαμε κάνει κράτηση σε τραπέζι και ξαπλώστρες. Πραγματικά δεν έχω να πω τίποτα αρνητικό. Άψογη εξυπηρέτηση από όλους αλλά θα πω κυρίως για την Δήμητρα, την κοπέλα που μας εξυπηρετούσε τις περισσότερες ώρες της ημέρας. Η μέρα μας κύλησε υπέροχα. Καθαριότητα, διαθέσιμο ντους. Η θάλασσα υπέροχη. Ξαπλώστρες-ομπρέλες άψογα. Σας ευχαριστούμε πολύ για όλα. Σίγουρα θα ξανά έρθουμε. Το συνιστώ ανεπιφύλακτα.",
    },
    {
      name: "Παναγιώτης Μαυρομμάτης",
      initials: "ΠΜ",
      rating: 5,
      date: "πριν 3 εβδομάδες",
      text: "Ωραίο μαγαζί για καφεδάκι και φαγητό δίπλα στην θάλασσα.... Νόστιμα τα φαγητά του. Καλή η εξυπηρέτηση....! Βέβαια, για να είμαστε σίγουροι κλείσαμε τραπέζι....",
    },
    {
      name: "Konstantinos Kalam",
      initials: "KK",
      rating: 5,
      date: "πριν 2 εβδομάδες",
      text: "Είναι ένα υπέροχο μαγαζί δίπλα στην θάλασσα. Ο χώρος ήταν πάρα πολύ καθαρός και τακτοποιημένος. Το φαγητό είναι φανταστικό και οι τιμές λογικές. Τέλος η κοπέλες ήταν ευγενικές και εξυπηρετικές. Το συστήνω ανεπιφύλακτα!!!!",
    },
  ]
};

export function ReviewsPage() {
  const { t, language } = useLanguage();
  const reviews = reviewsData[language].slice(0, 4);
  const averageRating = 4.6;
  const totalReviews = 380;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-gray-900 mb-6 text-center font-heading">{t('reviews.title')}</h1>
          
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-5xl mb-2" style={{ fontWeight: 300 }}>
                {averageRating}
              </div>
              <div className="flex gap-1 justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="text-gray-600">
                {t('reviews.subtitle')}
              </p>
            </div>
            
            <div className="w-px h-20 bg-gray-200 hidden md:block" />
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">{t('reviews.guests_love')}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <span className="px-3 py-1 bg-[#D4AF37]/10 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110">
                  {t('reviews.tags.coffee')}
                </span>
                <span className="px-3 py-1 bg-[#D4AF37]/10 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110">
                  {t('reviews.tags.location')}
                </span>
                <span className="px-3 py-1 bg-[#D4AF37]/10 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110">
                  {t('reviews.tags.service')}
                </span>
                <span className="px-3 py-1 bg-[#D4AF37]/10 text-gray-700 rounded-full active:bg-gradient-to-br active:from-[#D4AF37] active:to-[#B8941F] active:text-white md:hover:bg-gradient-to-br md:hover:from-[#D4AF37] md:hover:to-[#B8941F] md:hover:text-white transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-110">
                  {t('reviews.tags.atmosphere')}
                </span>
              </div>
              
              {/* Google Reviews Button */}
              <a 
                href="https://g.page/r/Cb1iuFQFdUK3EBE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm active:shadow-xl active:border-[#D4AF37]/30 md:hover:shadow-xl md:hover:border-[#D4AF37]/30 transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 md:hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-heading text-sm md:text-base">{t('reviews.google_btn')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="group p-4 md:p-6 bg-white border-gray-200 active:shadow-xl active:shadow-[#D4AF37]/10 md:hover:shadow-xl md:hover:shadow-[#D4AF37]/10 transition-all duration-300 md:hover:-translate-y-1 active:border-[#D4AF37]/30 md:hover:border-[#D4AF37]/30">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <Avatar className="w-10 h-10 md:w-12 md:h-12 md:group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-heading group-active:text-[#D4AF37] md:group-hover:text-[#D4AF37] transition-colors duration-300">{review.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 md:group-hover:scale-110 ${
                            star <= review.rating
                              ? "fill-[#D4AF37] text-[#D4AF37]"
                              : "text-gray-300"
                            }`}
                          style={{ transitionDelay: `${star * 30}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">· {review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{review.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}