export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const menuData = {
  en: {
    "Breakfast": [
      {
        name: "Plain Omelette",
        description: "A classic, fluffy omelette with a fresh green garnish.",
        price: "€5.00",
      },
      {
        name: "Country-Style Omelette",
        description: "A hearty omelette with feta cheese, village sausage, fresh tomato, and pepper.",
        price: "€7.50",
      },
      {
        name: "Special Omelette",
        description: "With gouda cheese, bacon, fresh tomato, and pepper.",
        price: "€7.00",
      },
      {
        name: "Pancakes (Breakfast)",
        description: "Warm pancakes with cheese, bacon, mayonnaise, and tomato.",
        price: "€6.50",
      },
    ],

    "Sweets": [
      {
        name: "Ice Cream Scoop",
        description: "A scoop of your favorite ice cream.",
        price: "€2.50",
      },
      {
        name: "Yogurt with Honey and Walnuts",
        description: "Greek yogurt with honey and crunchy walnuts.",
        price: "€5.00",
      },
      {
        name: "Waffle with Chocolate",
        description: "Warm waffle with rich chocolate sauce. Add ice cream for the perfect treat.",
        price: "€5.00",
      },
      {
        name: "Chocolate Crepe",
        description: "A thin crepe filled with rich chocolate. Add your favorite toppings.",
        price: "€4.50",
      },
      {
        name: "Fruit Salad",
        description: "Refreshing fruit salad with seasonal fresh fruits.",
        price: "€8.00",
      },
      {
        name: "Pancakes with Praline | Bueno | Honey",
        description: "Fluffy pancakes with praline, Bueno, or honey. Add your favorite toppings.",
        price: "€5.00",
      },
    ],

    "Appetizers": [
      {
        name: "Fried Calamari",
        description: "Tender fried calamari.",
        price: "€10.00",
      },
      {
        name: "French Fries",
        description: "Crispy, golden fries.",
        price: "€4.00",
      },
      {
        name: "Fried Anchovy",
        description: "Crispy fried anchovies.",
        price: "€8.50",
      },
      {
        name: "Marinated Anchovy",
        description: "Anchovy fillets marinated in olive oil and herbs.",
        price: "€8.00",
      },
      {
        name: "Feta with Honey",
        description: "Fried wrapped feta with honey and sesame.",
        price: "€6.50",
      },
      {
        name: "Spicy Cheese Salad",
        description: "A creamy, spicy cheese spread.",
        price: "€5.00",
      },
      {
        name: "Greek Saganaki",
        description: "Pan-fried cheese with a golden crust.",
        price: "€5.50",
      },
      {
        name: "Talagani",
        description: "Grilled Talagani cheese, soft with a distinctive flavor.",
        price: "€6.00",
      },
      {
        name: "Feta Cheese",
        description: "Classic Greek feta with olive oil and oregano.",
        price: "€4.50",
      },
      {
        name: "Bread",
        description: "",
        price: "€1.00",
      },
    ],

    "Salads": [
      {
        name: "Soleto",
        description: "Our version with greens, orange, raisins, walnuts, parmesan, and balsamic cream.",
        price: "€9.00",
      },
      {
        name: "Greek Salad",
        description: "Classic Greek salad with tomato, cucumber, onion, olives, pepper, and feta.",
        price: "€8.50",
      },
      {
        name: "Rocket Salad",
        description: "Rocket leaves with parmesan and a simple balsamic dressing.",
        price: "€9.00",
      },
      {
        name: "Caesar's Salad",
        description: "Green salad, bacon, croutons, chicken, and Caesar's dressing.",
        price: "€9.00",
      },
    ],

    "Snacks": [
      {
        name: "Club Sandwich",
        description: "With cheese, ham, bacon, tomato, lettuce, and sauce.",
        price: "€8.00",
      },
      {
        name: "Chicken Club Sandwich",
        description: "Club sandwich with freshly grilled chicken fillet, cheese, tomato, lettuce, and sauce.",
        price: "€9.00",
      },
      {
        name: "Cheeseburger",
        description: "Juicy burger with melted cheese and sauce.",
        price: "€9.00",
      },
      {
        name: "Chicken Burger",
        description: "Burger with freshly grilled chicken fillet, melted cheese, tomato, lettuce, and sauce.",
        price: "€9.00",
      },
      {
        name: "Burger with Caramelized Onion",
        description: "Burger with sweet caramelized onions, tomato, and lettuce.",
        price: "€9.50",
      },
      {
        name: "Savory Crepe with Gouda",
        description: "Crepe with melted gouda cheese. Add your favorite ingredients.",
        price: "€4.50",
      },
      {
        name: "Toast (Cheese & Ham or Turkey)",
        description: "Classic toast with your choice of fillings.",
        price: "€4.00",
      },
    ],

    "Pizza": [
      {
        name: "Pizza Margarita",
        description: "Classic with tomato sauce and gouda cheese.",
        price: "€9.50",
      },
      {
        name: "Pizza Ham",
        description: "With tomato sauce, ham, and gouda cheese.",
        price: "€11.00",
      },
      {
        name: "Pizza Pepperoni",
        description: "Spicy with tomato sauce, pepperoni, and gouda cheese.",
        price: "€12.00",
      },
      {
        name: "Pizza Classic",
        description: "With tomato sauce, bacon, ham, and gouda cheese.",
        price: "€12.00",
      },
      {
        name: "Pizza Greek",
        description: "With tomato sauce, gouda, olives, pepper, fresh tomato, onion, and feta.",
        price: "€13.00",
      },
      {
        name: "Pizza Special",
        description: "Rich with tomato sauce, bacon, ham, gouda, pepper, and mushrooms.",
        price: "€13.00",
      },
    ],

    "Pasta": [
      {
        name: "Carbonara",
        description: "Creamy classic with bacon, mushrooms, and parmesan.",
        price: "€9.50",
      },
      {
        name: "Pomodoro",
        description: "Simple and tasty with tomato sauce and fresh basil.",
        price: "€8.50",
      },
      {
        name: "Baked Pasta",
        description: "Oven-baked with gouda, ham, bacon, and tomato sauce.",
        price: "€9.50",
      },
      {
        name: "Pennes All Freddo with Chicken",
        description: "Penne in a creamy parmesan and sweet paprika sauce with chicken.",
        price: "€10.00",
      },
    ],

    "Grill": [
      {
        name: "Beef Burger",
        description: "",
        price: "€10.50",
      },
      {
        name: "Pork Chops",
        description: "",
        price: "€12.00",
      },
      {
        name: "Chicken Fillet",
        description: "",
        price: "€10.50",
      },
      {
        name: "Pancetta",
        description: "",
        price: "€9.50",
      },
      {
        name: "Sausage",
        description: "",
        price: "€7.50",
      },
      {
        name: "Mix Grill (for 2 people)",
        description: "Variety with 2 beef burgers, pork chop, chicken fillet, sausage, and 2 pancettas. Served with fries and pitta bread.",
        price: "€29.50",
      },
      {
        name: "Mix Grill (for 4 people)",
        description: "Large meat variety for sharing: 4 beef burgers, 4 pancetta pieces, pork chop, chicken fillet, and 2 sausages. Served with fries and pitta bread.",
        price: "€39.50",
      },
      {
        name: "Seafood Platter (for 2 people)",
        description: "Fried and marinated anchovy, shrimps, calamari, cod, and octopus. Served with homemade spicy cheese spread.",
        price: "€35.00",
      },
      {
        name: "Seafood Platter (for 4 people)",
        description: "Large seafood variety.",
        price: "€50.00",
      },
    ],

    "Coffee": [
      {
        name: "Freddo Espresso | Cappuccino",
        description: "",
        price: "€4.00",
      },
      {
        name: "Espresso single | double",
        description: "",
        price: "€2.50 | 3.00",
      },
      {
        name: "Cappuccino single | double",
        description: "",
        price: "€4.00 | 4.50",
      },
      {
        name: "Latte",
        description: "",
        price: "€4.50",
      },
      {
        name: "Greek Coffee single | double",
        description: "",
        price: "€2.50 | 4.00",
      },
      {
        name: "Filter Coffee",
        description: "",
        price: "€4.00",
      },
      {
        name: "Frappe | Nes",
        description: "",
        price: "€4.00",
      },
      {
        name: "Freddo Cappuccino (Caramel or Strawberry)",
        description: "",
        price: "€4.00",
      },
      {
        name: "Frappe with Ice Cream",
        description: "",
        price: "€5.00",
      },
    ],

    "Beverages | Sodas": [
      {
        name: "Orangeade | Lemonade | Sour Cherry | Sprite",
        description: "",
        price: "€3.00",
      },
      {
        name: "Coca-Cola | Zero",
        description: "",
        price: "€3.00",
      },
      {
        name: "Schweppes",
        description: "",
        price: "€3.50",
      },
      {
        name: "Amita Motion",
        description: "",
        price: "€3.50",
      },
      {
        name: "Drinking Chocolate (hot | cold)",
        description: "",
        price: "€4.00",
      },
      {
        name: "Milk Shake",
        description: "Homemade milkshake with your choice of flavor.",
        price: "€5.00",
      },
      {
        name: "Granita (Strawberry | Watermelon)",
        description: "",
        price: "€4.00",
      },
      {
        name: "Fresh Orange Juice",
        description: "",
        price: "€3.00",
      },
      {
        name: "Mixed Fresh Juice",
        description: "",
        price: "€5.00",
      },
      {
        name: "Fuze Tea Peach | Lemon | Pomegranate",
        description: "",
        price: "€3.50",
      },
      {
        name: "Arizona Tea Pomegranate | Green | Honey",
        description: "",
        price: "€4.00",
      },
      {
        name: "Homemade Lemonade | Ginger",
        description: "",
        price: "€4.00",
      },
      {
        name: "B-Fresh (sugar free)",
        description: "",
        price: "€4.50",
      },
      {
        name: "Monster",
        description: "",
        price: "€3.50",
      },
      {
        name: "Red Bull",
        description: "",
        price: "€4.50",
      },
      {
        name: "Tea",
        description: "",
        price: "€3.50",
      },
      {
        name: "Sparkling Water",
        description: "",
        price: "€3.50",
      },
      {
        name: "Soda | Tonic Water",
        description: "",
        price: "€3.00",
      },
      {
        name: "Bottled Water 0.5lt | 1lt",
        description: "",
        price: "0.5€ | €1.00",
      },
    ],

    "Ouzo | Tsipouro | Wines": [
      {
        name: "Bulk Tsipouro 250ml",
        description: "",
        price: "€7.00",
      },
      {
        name: "Bulk Ouzo 250ml",
        description: "",
        price: "€7.50",
      },
      {
        name: "Ouzo | Tsipouro Glass with Meze (fish | meat)",
        description: "",
        price: "€5.00",
      },
      {
        name: "Bottled Ouzo | Tsipouro 50ml with Meze (fish | meat)",
        description: "",
        price: "€5.50",
      },
      {
        name: "White | Red House Wine Glass",
        description: "",
        price: "€3.50",
      },
      {
        name: "White | Red House Wine 500ml",
        description: "",
        price: "€6.00",
      },
      {
        name: "MOSCATO D'ASTI",
        description: "",
        price: "€6.00",
      },
      {
        name: "Sangria",
        description: "",
        price: "€6.00",
      },
      {
        name: "Individual Bottled Wine",
        description: "",
        price: "€4.00",
      },
      {
        name: "Malagouzia Tetramythos Nature",
        description: "",
        price: "€19.00",
      },
      {
        name: "Agiorgitiko Tetramythos Nature",
        description: "",
        price: "€17.00",
      },
      {
        name: "Kintonis Checkmate Semi Sweet White",
        description: "",
        price: "€14.00",
      },
      {
        name: "White House Wine 500ml",
        description: "",
        price: "€6.00",
      },
      {
        name: "Roditis Tetramythos Nature",
        description: "",
        price: "€15.00",
      },
    ],

    "Alcohol | beers": [
      {
        name: "TEQUILA",
        description: "",
        price: "€6.50",
      },
      {
        name: "BACARDI",
        description: "",
        price: "€6.50",
      },
      {
        name: "BACARDI BREEZER (watermelon | lemon)",
        description: "",
        price: "€3.00",
      },
      {
        name: "GORDON'S SPACE",
        description: "",
        price: "€5.00",
      },
      {
        name: "Mastic Liqueur (shot)",
        description: "",
        price: "€8.00",
      },
      {
        name: "CAMPARI",
        description: "",
        price: "€6.50",
      },
      {
        name: "APEROL",
        description: "",
        price: "€7.00",
      },
      {
        name: "GIN",
        description: "",
        price: "€6.50",
      },
      {
        name: "VODKA",
        description: "",
        price: "€6.50",
      },
      {
        name: "MALIBU",
        description: "",
        price: "€8.00",
      },
      {
        name: "MARTINI",
        description: "",
        price: "€6.50",
      },
      {
        name: "MOJITO",
        description: "",
        price: "€6.50",
      },
      {
        name: "AMSTEL",
        description: "",
        price: "€4.00",
      },
      {
        name: "SOL",
        description: "",
        price: "€4.50",
      },
      {
        name: "FISCHER",
        description: "",
        price: "€4.50",
      },
      {
        name: "MAMMOS",
        description: "",
        price: "€4.00",
      },
      {
        name: "ALFA | ALFA FREE 500ml",
        description: "",
        price: "€4.50",
      },
      {
        name: "ALFA 330ml",
        description: "",
        price: "€4.00",
      },
      {
        name: "KAIZER",
        description: "",
        price: "€4.50",
      },
      {
        name: "FIX",
        description: "",
        price: "€4.00",
      },
      {
        name: "HEINEKEN",
        description: "",
        price: "€4.50",
      },
      {
        name: "Apple Cider (Milokleftis)",
        description: "",
        price: "€4.50",
      },
      {
        name: "Radler",
        description: "",
        price: "€4.50",
      },
    ],
  },



  el: {
    "Breakfast": [
      { name: "Ομελέτα Απλή", description: "Κλασική, αφράτη ομελέτα, με πράσινη γαρνιτούρα", price: "€5.00" },
      { name: "Ομελέτα Χωριάτικη", description: "Πλούσια ομελέτα με φέτα, χωριάτικο λουκάνικο, φρέσκια ντομάτα και πιπεριά.", price: "€7.50" },
      { name: "Ομελέτα Σπέσιαλ", description: "Με τυρί γκούντα, μπέικον, φρέσκια ντομάτα και πιπεριά.", price: "€7.00" },
      { name: "Pancakes (Πρωινό)", description: "Ζεστά pancakes με τυρί, μπέικον, μαγιονέζα και ντομάτα.", price: "€6.50" },
    ],
    "Sweets": [
      { name: "Μπάλα Παγωτό", description: "Μια μπάλα από το αγαπημένο σας παγωτό", price: "€2.50" },
      { name: "Γιαούρτι με Μέλι και Καρύδια", description: "Ελληνικό γιαούρτι με μέλι και τραγανά καρύδια.", price: "€5.00" },
      { name: "Βάφλα με Σοκολάτα", description: "Ζεστή βάφλα με πλούσια σάλτσα σοκολάτας. Προσθέστε παγωτό για την τέλεια απόλαυση.", price: "€5.00" },
      { name: "Κρέπα Σοκολάτα", description: "Λεπτή κρέπα γεμισμένη με πλούσια σοκολάτα. Προσθέστε τα αγαπημένα σας υλικά.", price: "€4.50" },
      { name: "Φρουτοσαλάτα", description: "Δροσερή φρουτοσαλάτα με φρέσκα φρούτα εποχής.", price: "€8.00" },
      { name: "Pancakes με Πραλίνα | Bueno | Μέλι", description: "Αφράτα pancakes με επιλογή από πραλίνα, Bueno ή μέλι. Προσθέστε τα αγαπημένα σας υλικά.", price: "€5.00" },
    ],
    "Appetizers": [
      { name: "Καλαμαράκια Τηγανητά", description: "", price: "€10.00" },
      { name: "Πατάτες Τηγανητές", description: "", price: "€4.00" },
      { name: "Γαύρος Τηγανητός", description: "", price: "€8.50" },
      { name: "Γαύρος Μαρινάτος", description: "Φιλέτα γαύρου μαριναρισμένα σε ελαιόλαδο και μυρωδικά.", price: "€8.00" },
      { name: "Φέτα με Μέλι", description: "Τηγανιτή τυλιχτή φέτα με μέλι και σουσάμι.", price: "€6.50" },
      { name: "Τυροκαυτερή", description: "", price: "€5.00" },
      { name: "Σαγανάκι", description: "Ψητό τυρί με χρυσή κρούστα.", price: "€5.50" },
      { name: "Ταλαγάνι", description: "Ψητό τυρί Ταλαγάνι, μαλακό με ξεχωριστή γεύση.", price: "€6.00" },
      { name: "Φέτα", description: "Κλασική ελληνική φέτα με ελαιόλαδο και ρίγανη.", price: "€4.50" },
      { name: "Άρτος", description: "", price: "€1.00" },

    ],
    "Salads": [
      { name: "Soleto", description: "Η δική μας έκδοση με πράσινα λαχανικά, πορτοκάλι, σταφίδες, καρύδια, παρμεζάνα και κρέμα βαλσάμικο.", price: "€9.00" },
      { name: "Χωριάτικη", description: "Κλασική χωριάτικη με ντομάτα, αγγούρι, κρεμμύδι, ελιές, πιπεριά και φέτα.", price: "€8.50" },
      { name: "Ρόκα", description: "Φύλλα ρόκας με παρμεζάνα και απλή σάλτσα βαλσάμικο.", price: "€9.00" },
      { name: "Του Καίσαρα", description: "Πράσινη σαλάτα, μπέικον, κρουτόν, κοτόπουλο και dressing Caesar's.", price: "€9.00" },
    ],
    "Snacks": [
      { name: "Club Sandwich", description: "Με τυρί, ζαμπόν, μπέικον ,ντομάτα, μαρούλι και Σως.", price: "€8.00" },
      { name: "Club Sandwich Κοτόπουλο", description: "Club sandwich με φρεσκοψημένο φιλέτο κοτόπουλο, τυρί, ντομάτα , μαρούλι και Σως.", price: "€9.00" },
      { name: "Cheeseburger", description: "Ζουμερό μπιφτέκι με λιωμένο τυρί και Σως.", price: "€9.00" },
      { name: "Chicken Burger", description: "Burger με φρεσκοψημένο φιλέτο κοτόπουλο, λιωμένο τυρί, φρέσκια ντομάτα, μαρούλι και Σως.", price: "€9.00" },
      { name: "Burger με Καραμελωμένα Κρεμμύδια", description: "Burger με γλυκά καραμελωμένα κρεμμύδια, ντομάτα και μαρούλι.", price: "€9.50" },
      { name: "Αλμυρή Κρέπα με Γκούντα", description: "Κρέπα με λιωμένο τυρί γκούντα. Προσθέστε τα υλικά της αρεσκείας σας.", price: "€4.50" },
      { name: "Τοστ (Τυρί & Ζαμπόν ή Γαλοπούλα)", description: "Κλασικό τοστ με επιλογή υλικών.", price: "€4.00" },
    ],
    "Pizza": [
      { name: "Μαργαρίτα", description: "Κλασική με σάλτσα ντομάτας και τυρί γκούντα.", price: "€9.50" },
      { name: "Ζαμπόν", description: "Με σάλτσα ντομάτας, ζαμπόν και τυρί γκούντα.", price: "€11.00" },
      { name: "Πεππερόνι", description: "Πικάντικη με σάλτσα ντομάτας, πεπερόνι και τυρί γκούντα.", price: "€12.00" },
      { name: "Κλασική", description: "Με σάλτσα ντομάτας, μπέικον, ζαμπόν και τυρί γκούντα.", price: "€12.00" },
      { name: "Ελληνική", description: "Ελληνική γεύση με σάλτσα, γκούντα, ελιές, πιπεριά, φρέσκια ντομάτα, κρεμμύδι και φέτα.", price: "€13.00" },
      { name: "Special", description: "Πλούσια με σάλτσα, μπέικον, ζαμπόν, γκούντα, πιπεριά και μανιτάρια.", price: "€13.00" },
    ],
    "Pasta": [
      { name: "Καρπονάρα", description: "Κρεμώδης κλασική με μπέικον, μανιτάρια  και παρμεζάνα.", price: "€9.50" },
      { name: "Pomodoro", description: "Απλή και νόστιμη με σάλτσα ντομάτας, φρέσκο βασιλικό.", price: "€8.50" },
      { name: "Μακαρονάδα Φούρνου", description: "Στο φούρνο με γκούντα , ζαμπόν, μπέικον και σάλτσα ντομάτας.", price: "€9.50" },
      { name: "Πέννες All Freddo με Κοτόπουλο", description: "Πέννες σε κρεμώδη σάλτσα παρμεζάνας και γλυκιάς πάπρικας με κοτόπουλο.", price: "€10.00" },
    ],
    "Grill": [
      { name: "Μπιφτέκι Μοσχαρίσιο", description: "", price: "€10.50" },
      { name: "Χοιρινά Μπριζολάκια", description: "", price: "€12.00" },
      { name: "Φιλέτο Κοτόπουλο", description: "", price: "€10.50" },
      { name: "Πανσέτα", description: "", price: "€9.50" },
      { name: "Λουκάνικο", description: "", price: "€7.50" },
      { name: "Mix Grill (2 άτομα)", description: "Ποικιλία με 2 μπιφτέκια, Μπριζολάκι, Φιλέτο κοτόπουλο, λουκάνικο, 2 πανσέτες. Συνοδεύεται με πατάτες και πιτούλες.", price: "€29.50" },
      { name: "Mix Grill (4 άτομα)", description: "Μεγάλη ποικιλία κρεατικών για την παρέα: 4 μπιφτέκια, 4 τεμάχια πανσέτα, μπριζολάκι, φιλέτο κοτόπουλο και 2 λουκάνικα. Συνοδεύεται με πατάτες και πιτούλες.", price: "€39.50" },
      { name: "Ποικιλία Θαλασσινών (2 άτομα)", description: "Γαύρος τηγανητός και μαρινάτος, γαρίδες, καλαμαράκια, γαλέο και χταπόδι.Συνοδεύεται με χειροποίητη τυροκαυτερή", price: "€35.00" },
      { name: "Ποικιλία Θαλασσινών (4 άτομα)", description: "Μεγάλη ποικιλία θαλασσινών.", price: "€50.00" },
    ],
    "Coffee": [
      { name: "Freddo Espresso | Cappuccino ", description: "", price: "€4.00" },
      { name: "Espresso μονό | διπλό", description: "", price: "€2.50 | 3.00" },
      { name: "Cappuccino μονό | διπλό", description: "", price: "€4.00 | 4.50" },
      { name: "Latte", description: "", price: "€4.50" },
      { name: "Ελληνικός μονός | διπλός", description: "", price: "€2.50 | 4.00" },
      { name: "Φίλτρου", description: "", price: "€4.00" },
      { name: "Frappe | Nes", description: "", price: "€4.00" },
      { name: "Freddo Cappuccino (Καραμέλα ή Φράουλα)", description: "", price: "€4.00" },
      { name: "Frappe με παγωτό", description: "", price: "€5.00" },
    ],
    "Beverages | Sodas": [
      { name: "Πορτοκαλάδα| Λεμονάδα | Βυσσινάδα | Sprite", description: "", price: "€3.00" },
      { name: "Coca - Cola | Zero ", description: "", price: "€3.00" },
       { name: "Schweppes", description: "", price: "€3.50" },
      { name: "Amita motion", description: "", price: "€3.50" },
      { name: "Σοκολάτα Ρόφημα (Ζεστή | Κρύα)", description: "", price: "€4.00" },
      { name: "Milk Shake", description: "Σπιτικό Milk Shake με γεύση της επιλογής σας", price: "€5.00" },
      { name: "Γρανίτα (Φράουλα | Καρπούζι)", description: "", price: "€4.00" },
      { name: "Φρεσκοστυμμένος χυμός Πορτοκάλι ", description: "", price: "€3.00" },
      { name: "Ανάμεικτος Φυσικός Χυμός", description: "", price: "€5.00" },
      { name: "Fuze Tea Ροδάκινο | Λεμόνι | Ρόδι", description: "", price: "€3.50" },
      { name: "Arizona Τσάι Pomegranate | Green | Honey", description: "", price: "€4.00" },
      { name: "Σπιτική Λεμονάδα | Τζίντζερ", description: "", price: "€4.00" },
      { name: "B-Fresh (χωρίς ζάχαρη)", description: "", price: "€4.50" },
      { name: "Monster", description: "", price: "€3.50" },
      { name: "Red Bull", description: "", price: "€4.50" },
      { name: "Τσάι", description: "", price: "€3.50" },
      { name: "Ανθρακούχο Νερό", description: "", price: "€3.50" },
      { name: "Σόδα | Νερό Τόνικ", description: "", price: "€3.00" },
      { name: "Εμφιαλωμένο Νερό 0.5lt | 1lt", description: "", price: "0.5€ | €1.00" },

    ],
    "Ouzo | Tsipouro | Wines": [
      { name: "Τσίπουρο Χύμα 250ml", description: "", price: "€7.00" },
      { name: "Ούζο Χύμα 250ml", description: "", price: "€7.50" },
      { name: "Ούζο | Τσίπουρο  Ποτήρι με Μεζέ (ψάρι | κρέας)", description: "", price: "€5.00" },
      { name: "Ούζο | Τσίπουρο εμφιαλωμένο 50ml με μεζέ (ψάρι | κρέας)", description: "", price: "€5.50" },
      { name: "Λευκό | Κόκκινο Κρασί  Ποτήρι", description: "", price: "€3.50" },
      { name: "Λευκό | Κόκκινο Κρασί Χύμα 500ml", description: "", price: "€6.00" },
      { name: "MOSCATO D'ASTI", description: "", price: "€6.00" },
      { name: "Σαγκριά", description: "", price: "€6.00" },
      { name: "Κρασί Εμφιαλωμένο Ατομικό", description: "", price: "€4.00" },
      { name: "Μαλαγουζιά Τετράμυθος Nature", description: "", price: "€19.00" },
      { name: "Αγιωργίτικο Τετράμυθος Nature", description: "", price: "€17.00" },
      { name: "Kintonis Checkmate Semi Sweet White", description: "", price: "€14.00" },
      { name: "Λευκό Κρασί Χύμα 500ml", description: "", price: "€6.00" },
      { name: "Ροδίτης Τετράμυθος Nature", description: "", price: "€15.00" },


    ],

    "Alcohol | beers": [
      { name: "TEQUILA", description: "", price: "€6.50" },
      { name: "BACARDI", description: "", price: "€6.50" },
      { name: "BACARDI BREEZER (καρπούζι | λεμόνι)", description: "", price: "€3.00" },
      { name: "GORDON'S SPACE", description: "", price: "€5.00" },
      { name: "Λικέρ Μαστίχας (σφηνάκι)", description: "", price: "€8.00" },
      { name: "CAMPARI", description: "", price: "€6.50" },
      { name: "APEROL", description: "", price: "€7.00" },
      { name: "GIN", description: "", price: "€6.50" },
      { name: "VODKA", description: "", price: "€6.50" },
      { name: "MALIBU", description: "", price: "€8.00" },
      { name: "MARTINI", description: "", price: "€6.50" },
      { name: "MOJITO", description: "", price: "€6.50" },
      { name: "AMSTEL", description: "", price: "€4.00" },
      { name: "SOL", description: "", price: "€4.50" },
      { name: "FISCHER", description: "", price: "€4.50" },
      { name: "MAMMOS", description: "", price: "€4.00" },
      { name: "ALFA | ALFA FREE 500ml", description: "", price: "€4.50" },
      { name: "ALFA 330ml", description: "", price: "€4.00" },
      { name: "KAIZER", description: "", price: "€4.50" },
      { name: "FIX", description: "", price: "€4.00" },
      { name: "HEINEKEN", description: "", price: "€4.50" },
      { name: "Μηλοκλέφτης", description: "", price: "€4.50" },
      { name: "Radler", description: "", price: "€4.50" },
    ],
  }
};


export const menuCategories = {
  en: [
    "All",
    "Coffee",
    "Beverages | Sodas",
    "Breakfast",
    "Snacks",
    "Sweets",
    "Appetizers",
    "Salads",
    "Pizza",
    "Pasta",
    "Grill",
    "Ouzo | Tsipouro | Wines",
    "Alcohol | beers",
  ],
  el: [
    "Όλα",
    "Καφές",
    "Ροφήματα | Αναψυκτικά",
    "Σνακ",
    "Πρωινό",
    "Γλυκά",
    "Ορεκτικά",
    "Σαλάτες",
    "Πίτσα",
    "Ζυμαρικά",
    "Της Ώρας",
    "Ούζο | Τσίπουρο | Κρασιά",
    "Μπύρες | Ποτά",
  ],
};
