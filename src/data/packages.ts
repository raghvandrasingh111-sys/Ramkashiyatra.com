export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface TourPackage {
  slug: string;
  name: string;
  duration: string;
  location: string;
  price: string;
  originalPrice: string;
  description: string;
  image: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
}

export const packages: TourPackage[] = [
  {
    slug: "varanasi-prayagraj-excursion-2n-3d",
    name: "Varanasi & Prayagraj Day Excursion",
    duration: "2 Nights / 3 Days",
    location: "Varanasi | Prayagraj",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "Explore the ancient temples of Varanasi and take a sacred day excursion to the holy Triveni Sangam in Prayagraj.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp",
    inclusions: ["AC Vehicle", "Hotel Accommodation", "Breakfast", "Sightseeing", "Ganga Boating"],
    itinerary: [
      { day: 1, title: "Arrival & Varanasi Sightseeing", activities: ["Airport/Station Pickup", "Check-in at Hotel", "Kashi Vishwanath (Golden Temple)", "Sankat Mochan & Durga Temple", "Evening Ganga Aarti & Boating"] },
      { day: 2, title: "Prayagraj Day Excursion", activities: ["Early Breakfast", "Prayagraj Fort", "Triveni Sangam", "Anand Bhavan & Swaraj Bhawan", "Return to Varanasi"] },
      { day: 3, title: "Sarnath & Departure", activities: ["Morning Breakfast", "Check-out", "Sarnath Museum & Stupas", "Deer Park & Tibetan Temple", "Airport/Station Drop"] }
    ]
  },
  {
    slug: "varanasi-gaya-spiritual-journey-3n-4d",
    name: "Varanasi & Gaya Spiritual Journey",
    duration: "3 Nights / 4 Days",
    location: "Varanasi | Gaya",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "A profound spiritual journey covering the ghats of Varanasi and the sacred Pind Daan rituals in Gaya and Bodhgaya.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-1.png.webp",
    inclusions: ["AC Transport", "Hotel Stays", "Morning Breakfast", "Professional Guide Assistance"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup & Hotel Check-in", "Varanasi Temple Tour", "Evening Ganga Aarti witness", "Stay in Varanasi"] },
      { day: 2, title: "Prayagraj Day Trip", activities: ["Breakfast at Hotel", "Drive to Prayagraj (Sangam)", "Allahabad Fort & Anand Bhavan", "Return to Varanasi"] },
      { day: 3, title: "Move to Gaya", activities: ["Drive to Gaya", "Bodhgaya Temple Visit", "Great Buddha Statue", "Mahabodhi Temple darshan", "Night Stay at Gaya"] },
      { day: 4, title: "Gaya to Varanasi Drop", activities: ["Morning Breakfast", "Check-out", "Drive back to Varanasi", "Drop at Airport/Station"] }
    ]
  },
  {
    slug: "varanasi-prayagraj-stay-tour-3n-4d",
    name: "Varanasi & Prayagraj Stay Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi | Prayagraj",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "Experience the spiritual depth of UP with relaxed stays in both Varanasi and the holy city of Prayagraj.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Prayagraj-Ayodhya-Tour-Package.webp",
    inclusions: ["Intercity Transfers", "Breakfast Included", "Sangam Boat Ride", "Temple Darshan"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup & Check-in", "Varanasi Temple Sightseeing", "Evening Ganga Aarti", "Boating on the Ganges"] },
      { day: 2, title: "Varanasi to Prayagraj", activities: ["Drive to Prayagraj", "Sangam Visit (Holy Dip)", "Allahabad Fort", "Stay in Prayagraj"] },
      { day: 3, title: "Prayagraj to Varanasi", activities: ["Return Drive to Varanasi", "Sarnath Sightseeing", "Museum & Stupas", "Overnight in Varanasi"] },
      { day: 4, title: "Local Market & Departure", activities: ["Godawaliya Market", "BHU Vishwanath Temple", "Ramnagar Fort (Optional)", "Drop at Airport"] }
    ]
  },
  {
    slug: "varanasi-ayodhya-divine-tour-3n-4d",
    name: "Varanasi & Ayodhya Divine Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi | Ayodhya",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "Step into the stories of the Ramayana with this divine circuit connecting Varanasi and the holy Ram Janmabhoomi in Ayodhya.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png-2.webp",
    inclusions: ["Professional Driver", "Heritage Hotel stay", "Daily Breakfast", "Saryu Riverfront witness"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Temples Tour", "Golden Temple Darshan", "Evening Aarti", "Night stay in Varanasi"] },
      { day: 2, title: "Varanasi to Ayodhya", activities: ["Drive to Ayodhya via Prayagraj", "Sangam Visit", "Kanak Bhawan", "Saryu River Aarti", "Stay in Ayodhya"] },
      { day: 3, title: "Ayodhya to Varanasi", activities: ["Hanuman Garhi", "Ram Mandir Visit", "Ram ki Paidi", "Return to Varanasi"] },
      { day: 4, title: "Sarnath & Departure", activities: ["Morning Sarnath Stupa visit", "Local Market shopping", "Airport/Station Drop"] }
    ]
  },
  {
    slug: "varanasi-gaya-prayagraj-pilgrimage-4n-5d",
    name: "Varanasi Gaya & Prayagraj Pilgrimage",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Gaya | Prayagraj",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "A comprehensive 5-day pilgrimage for those seeking spiritual solace and ancestor blessings across the most holy river cities.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5635.png.webp",
    inclusions: ["Pind Daan Assistance", "Ganga Boating", "Daily Breakfast", "Premium AC Vehicle"],
    itinerary: [
      { day: 1, title: "Gaya Arrival", activities: ["Gaya Airport/Station Pickup", "Bodhgaya Temple Visit", "Great Buddha Statue", "Night Stay at Gaya"] },
      { day: 2, title: "Gaya to Varanasi", activities: ["Gaya Pind Daan", "Transfer to Varanasi", "Evening Ganga Aarti witness", "Stay in Varanasi"] },
      { day: 3, title: "Varanasi & Sarnath", activities: ["Kashi Vishwanath darshan", "Kal Bhairav Temple", "BHU Tour", "Sarnath Stupa visit"] },
      { day: 4, title: "Varanasi to Prayagraj", activities: ["Drive to Prayagraj", "Triveni Sangam Holy Dip", "Anand Bhavan", "Overnight at Prayagraj"] },
      { day: 5, title: "Departure", activities: ["Breakfast at Hotel", "Transfer to Varanasi", "Drop at Airport/Station"] }
    ]
  },
  {
    slug: "varanasi-ayodhya-prayagraj-essential-4n-5d",
    name: "Varanasi Ayodhya & Prayagraj Essential",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Ayodhya | Prayagraj",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "Explore the 'Essential' spiritual triangle of North India with detailed sightseeing and comfortable stays.",
    image: "/images/bihar-up.png",
    inclusions: ["All Sightseeing in AC Car", "Daily Breakfast", "Professional Assistance", "Saryu Aarti"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup & Check-in", "Varanasi Temple Tour", "Ganga Aarti witness"] },
      { day: 2, title: "Sarnath Sightseeing", activities: ["Dhamek Stupa", "Museum & Deer Park", "Namo Ghat visit", "Night Stay at Varanasi"] },
      { day: 3, title: "Varanasi to Prayagraj", activities: ["Drive to Prayagraj", "Check-in at Hotel", "Sangam Visit", "Khusro Bagh", "Stay in Prayagraj"] },
      { day: 4, title: "Prayagraj to Ayodhya", activities: ["Drive to Ayodhya", "Hanuman Garhi", "Ram Mandir Darshan", "Stay in Ayodhya"] },
      { day: 5, title: "Ayodhya to Varanasi Departure", activities: ["Check-out", "Drive back to Varanasi", "Drop at Airport/Station"] }
    ]
  },
  {
    slug: "grand-up-chitrakoot-circuit-7n-8d",
    name: "Grand UP & Chitrakoot Spiritual Circuit",
    duration: "7 Nights / 8 Days",
    location: "Varanasi | Ayodhya | Lucknow | Chitrakoot",
    price: "Enquire for Price",
    originalPrice: "0",
    description: "Our most intensive tour: Covering Varanasi, Ayodhya, the nawabi charm of Lucknow, and the divine forest of Chitrakoot.",
    image: "/images/rajasthan.png",
    inclusions: ["Multi-city Transfers", "Breakfast in All Hotels", "Naimisharanya Visit", "Boat Rides"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi", activities: ["Arrive & Transfer to Hotel", "Rest of day free for leisure", "Overnight stay"] },
      { day: 2, title: "Varanasi to Ayodhya", activities: ["Drive to Ayodhya", "Ram Janambhoomi birth place", "Hanumangarhi Temple"] },
      { day: 3, title: "Ayodhya - Lucknow", activities: ["Check-in at Lucknow", "Bara Imambara", "Bhul Bhulaiya", "Chhota imambara"] },
      { day: 4, title: "Lucknow - Naimisharanya - Prayagraj", activities: ["Drive to Naimisharanya", "Chakra Theerth", "Transfer to Prayagraj", "Overnight stay"] },
      { day: 5, title: "Prayagraj - Chitrakoot", activities: ["Sangam Holy Dip", "Drive to Chitrakoot", "Ram Ghat Visit"] },
      { day: 6, title: "Chitrakoot to Varanasi", activities: ["Hanuman Dhara", "Janaki Kund", "Gupt Godavari", "Return drive to Varanasi"] },
      { day: 7, title: "Varanasi Full Day", activities: ["Subah-e-Banaras Boat Ride", "Temple Tour (Durga, Sankat Mochan)", "Sarnath & Evening Aarti"] },
      { day: 8, title: "Departure", activities: ["Morning Breakfast", "Check-out", "Drop at Airport/Station"] }
    ]
  }
];
