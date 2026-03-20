export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  image?: string;
}

export interface PricingCategory {
  category: string;
  pax2: string;
  pax4: string;
  pax6: string;
  pax8: string;
  pax10: string;
  pax12: string;
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
  images?: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  pricingTable?: PricingCategory[];
}

export const packages: TourPackage[] = [
  {
    slug: "varanasi-prayagraj-tour-2n-3d",
    name: "Varanasi & Prayagraj Tour",
    duration: "2 Nights / 3 Days",
    location: "Varanasi - 2N, Prayagraj - 1D",
    price: "5,975",
    originalPrice: "7,950",
    description: "Experience the spiritual heart of India with a comprehensive tour of Varanasi's ancient temples and the sacred Sangam at Prayagraj.",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Hotel in Varanasi."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi – Prayagraj day Excursion", activities: ["After breakfast, take a day excursion to Prayagraj, Visit Prayagraj Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan Later in the evening return back to Varanasi and overnight stay at Varanasi Hotel."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi - Sarnath Sightseeing and Drop", activities: ["Enjoy morning breakfast at the hotel. After check out from the hotel & move to Sarnath, sightseeing includes Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple and then drop at the airport/railway station as per the departure schedule."], image: "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "7,950/-", pax4: "6,400/-", pax6: "5,975/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "8,900/-", pax4: "7,400/-", pax6: "6,900/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "varanasi-gaya-spiritual-tour-3n-4d",
    name: "Varanasi & Gaya Spiritual Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi - 2N, Gaya - 1N",
    price: "8,250",
    originalPrice: "12,500",
    description: "A profound spiritual journey covering the most sacred rituals in Varanasi and the enlightenment site of Bodhgaya.",
    image: "https://images.unsplash.com/photo-1544011938-34bfc6365ea9?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1544011938-34bfc6365ea9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Varanasi hotel."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi to Prayagraj Day Excursion", activities: ["Today after breakfast at the hotel and Drive to Prayagraj. visit to Local sightseeing of Prayagraj Likes, Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan after sightseeing return back to the Varanasi & Night Stay at Hotel Varanasi."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi – Gaya Night", activities: ["Today, get ready to drive to Gaya. Arrive at Gaya and check in at Hotel. After Fresh-up visit to Bodhgaya Temple Gaya Pind Daan, Great Buddha Statue, Mahabodhi Temple, Bodhi Tree. Overnight stay at Gaya."], image: "https://images.unsplash.com/photo-1544011938-34bfc6365ea9?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Gaya to Varanasi drop", activities: ["After breakfast check out from the hotel and drive to Varanasi and drop at the Railway Station or Airport to continue the journey to Home."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "12,500/-", pax4: "9,100/-", pax6: "8,250/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "13,750/-", pax4: "10,200/-", pax6: "9,450/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "14,900/-", pax4: "11,550/-", pax6: "10,600/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "varanasi-prayagraj-stay-3n-4d",
    name: "Varanasi & Prayagraj Stay Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi - 2N, Prayagraj - 1N",
    price: "7,800",
    originalPrice: "11,500",
    description: "Explore the ancient cities of Varanasi and Prayagraj with comfortable overnight stays and comprehensive sightseeing.",
    image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Varanasi hotel."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi to Prayagraj", activities: ["Today after breakfast at the hotel and Drive to Prayagraj. visit to Local sightseeing of Prayagraj Likes, Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Prayagraj to Varanasi", activities: ["After breakfast, check out from Hotel and drive to Varanasi. On Arrival at Varanasi check in at the Hotel Varanasi. Later in the afternoon visit to Sarnath Sightseeing Likes; Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple, Zoo. Overnight stay at Hotel Varanasi."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Varanasi Local Sightseeing and drop", activities: ["After breakfast check out from the hotel and visit the local market and then sightseeing of Varanasi, Godawaliya, Bhu Vishwanath Temple (VT). If time permits visit Ramnagar Fort and then drop at Airport or Railway station for your onward journey to home."], image: "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "11,500/-", pax4: "8,900/-", pax6: "7,800/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "12,900/-", pax4: "10,200/-", pax6: "9,200/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "14,200/-", pax4: "11,550/-", pax6: "10,500/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "varanasi-ayodhya-divine-3n-4d",
    name: "Varanasi & Ayodhya Divine Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi - 2N, Ayodhya - 1N",
    price: "8,000",
    originalPrice: "11,700",
    description: "A divine circuit connecting the spiritual power of Kashi with the sacred birthplace of Lord Rama in Ayodhya.",
    image: "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon processed for sightseeing, temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Varanasi hotel."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi – Prayagraj - Ayodhya", activities: ["Morning after breakfast check out from the hotel and drive to Ayodhya via Prayagraj on arrival at Prayagraj enjoy Local sightseeing of Prayagraj like Prayagraj Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan. Later continue drive to Ayodhya and check in at the hotel and Overnight stay at the Ayodhya Hotel."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Ayodhya to Varanasi", activities: ["Post breakfast Check out from the hotel and Visit Ayodhya Sightseeing includes Hanuman Garhi, Kanak Bhawan, Ram ki Paidi, Ram Mandir. And then return back to Varanasi and overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Varanasi to Sarnath Local Sightseeing and drop", activities: ["Morning after breakfast Check out from hotel and Visit Sarnath: Visit Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple and Local market and then drop at Airport or Railway stations."], image: "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "11,700/-", pax4: "8,900/-", pax6: "8,000/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "12,900/-", pax4: "10,200/-", pax6: "9,200/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "14,200/-", pax4: "11,500/-", pax6: "10,400/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "gaya-varanasi-prayagraj-4n-5d",
    name: "Gaya Varanasi & Prayagraj Tour",
    duration: "4 Nights / 5 Days",
    location: "Varanasi - 2N, Gaya - 1N, Prayagraj - 1N",
    price: "9,900",
    originalPrice: "14,300",
    description: "A comprehensive spiritual circuit covering Gaya, Kashi, and Prayag for a complete religious experience.",
    image: "https://images.unsplash.com/photo-1544011938-34bfc6365ea9?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1544011938-34bfc6365ea9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Gaya and Local Sightseeing", activities: ["Upon Arrive at Gaya Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. After Fresh-up visit to Bodhgaya Temple Gaya Pind Daan, Great Buddha Statue, Mahabodhi Temple, Bodhi Tree. Overnight stay at Gaya."], image: "https://images.unsplash.com/photo-1544011938-34bfc6365ea9?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Gaya to Varanasi", activities: ["After breakfast check out from the hotel and transfer to Varanasi.Upon Arrival at Varanasi check in at the hotel. Later in the evening enjoy Ganga Boating & attend Ganga arti and then return back to Hotel and Overnight stay at the Varanasi hotel"], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi Local Sightseeing", activities: ["Visit the Kashi Vishwanath Temple - one of the famous Hindu temples and is dedicated to Lord Shiva, where at least once in life a Hindu is expected to do pilgrimage, and if possible, also pour the remains (ashes) of cremated ancestors here on the river Ganges. Visits other temples - Anpurna Temple, Kal Bhairav temple, Bharat Mata Mandir, Tulsimanas temple, BHU. After noon, take an excursion to Sarnath. Sarnath is the place where Buddha delivered his first sermon to his disciples. The attractions at Sarnath are the Buddha temples, the Dhamekha stupa, Chaukhandi stupa and the archaeological museum."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Varanasi to Prayagraj", activities: ["Today after breakfast at the hotel and drive to Prayagraj. visit to Local sightseeing of Prayagraj Likes, Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Prayagraj to Varanasi drop", activities: ["After breakfast check out from Hotel and drive to Varanasi for your departure."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "14,300/-", pax4: "11,100/-", pax6: "9,900/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "15,850/-", pax4: "12,650/-", pax6: "11,450/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "17,750/-", pax4: "14,550/-", pax6: "13,350/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "varanasi-sarnath-prayagraj-ayodhya-4n-5d",
    name: "Varanasi Sarnath Prayagraj & Ayodhya",
    duration: "4 Nights / 5 Days",
    location: "Varanasi - 2N, Ayodhya - 1N, Prayagraj - 1N",
    price: "10,300",
    originalPrice: "15,250",
    description: "The ultimate spiritual triangle of Uttar Pradesh, visiting the holiest cities with expert local insights.",
    image: "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon processed for sightseeing, temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Hotel in Varanasi."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi - Sarnath Sightseeing", activities: ["Post breakfast visit to Sarnath Sightseeing Includes: Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple, Namo Ghat. After sightseeing, return back to the hotel and Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1616016149405-b7782627038e?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi to Prayagraj", activities: ["After breakfast check out from Hotel & Drive to Prayagraj. After Arrive at Prayagraj Check in At Hotel, After Fresh up visit to Local sightseeing of Prayagraj Likes: Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan After Sightseeing Back to the Hotel & Night Stay at Hotel Prayagraj."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Prayagraj to Ayodhya", activities: ["After breakfast, check out from Hotel and drive to Ayodhya. After Arrival at Ayodhya Check in at Hotel and then after Fresh Up Visit to Sightseeing like, Hanuman Garhi, Kanak Bhawan, Ram ki Paidi, Ram Mandir. Overnight stay at Ayodhya Hotel."], image: "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Ayodhya to Varanasi drop", activities: ["After breakfast check out from the hotel and drive to Varanasi, after reaching Varanasi drop at Airport or Railway stations for your onward journey to home."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "15,250/-", pax4: "11,400/-", pax6: "10,300/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "17,100/-", pax4: "12,900/-", pax6: "11,700/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "19,300/-", pax4: "14,700/-", pax6: "13,600/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "grand-up-and-chitrakoot-tour-6n-7d",
    name: "Grand UP & Chitrakoot Tour",
    duration: "6 Nights / 7 Days",
    location: "Varanasi - 3N, Ayodhya - 1N, Prayagraj - 1N, Chitrakoot - 1N",
    price: "11,100",
    originalPrice: "25,250",
    description: "The most comprehensive spiritual tour covering Varanasi, Ayodhya, Lucknow, Naimisharanya, Prayagraj, and Chitrakoot.",
    image: "https://images.unsplash.com/photo-1582239634234-fcba8a0cd983?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1582239634234-fcba8a0cd983?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1624388856860-24750a221f57?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrive Varanasi", activities: ["On arrival meet & assistance at Varanasi airport/ Railway station. Proceed to Varanasi check-in to the hotel. Overnight stay at the hotel."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi – Ayodhya", activities: ["After breakfast Proceed to Ayodhya. Arrive at Ayodhya & visit Ram Janambhoomi – the birthplace of lord Rama and other temples. It’s one of the seven most sacred cities of ancient India. Nageshnath temple. Hanumangarhi, Ram Ki Padi."], image: "https://images.unsplash.com/photo-1707153673550-6a75a7674211?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Ayodhya - Lucknow - City Tour", activities: ["After breakfast, proceed for Lucknow and check-in to the hotel. Later Proceed for Lucknow city tour and visit Bara Imambara, Bhul Bhulaiya, Chhota imambara, Clock tower, Kaiserbagh Palace, & Shah Najaf Imambara. Later return to the hotel evening free at leisure & Overnight stay at hotel."], image: "https://images.unsplash.com/photo-1582239634234-fcba8a0cd983?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Lucknow – Naimisharanya - Prayagraj", activities: ["Morning after breakfast drive to Naimisharanya. Upon arrival, sites are visited over there. Naimisharanya, it is the holy place and renowned since the time of Satya Yuga or Treta Yug, the most ancient times. It is believed that after visiting this sacred place, people can get rid of their sins. After visiting Naimisharanya, people attain Moksha (liberation) and attain immense powers. These all things and their importance are described in various ancient scriptures of India. Naimisharanya is also popularly known as Naimish or Neemsar or Neemshaar. Naimisharanya is the birthplace of many puranas and this place is the abode of all of the holy places on the earth and to visit only this place equals visiting all holy places at once. This evidence is found in The Mahaabhaarat. Also the renowned sant Goswami Tulasi Das described the prominence of Naimisharanya in Ram Charith Maanas. Later start drive to Prayagraj check-in to the hotel .Overnight stay."], image: "https://images.unsplash.com/photo-1590733856230-67e98a53164a?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Prayagraj – Chitrakoot", activities: ["Early this morning, proceed to Sangam & enjoy boat ride(Optional) and have a sacred bath in Triveni Sangam is the confluence of three of the holiest rivers in Hindu mythology – Ganga, Yamuna and the mythical Saraswati. At the Sangam, the waters of the Ganges and the Yamuna can be distinctly seen to merge into one. Later visit Hanuman Temple. Later Come back to the hotel to have breakfast & check-out. Later they started to drive to Chitrakoot - According to Hindu Mythology Lord Rama, Sita and Lakshman spent eleven and half years of their fourteen years of exile. Later in the evening visit Ram Ghat situated at the bank of River Mandakini."], image: "https://images.unsplash.com/photo-1624388856860-24750a221f57?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Chitrakoot - Varanasi", activities: ["Today after breakfast you will proceed for a city tour of Chitrakoot and visit Hanuman Dhara, Janaki kund, Kamadgiri temple, Sati Anusuya, sphatik shila & Gupt Godavari. Later check-out from the hotel and drive to Varanasi. Up-on arrival check-in to the hotel."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 7, title: "Varanasi – Full day city tour", activities: ["Early this morning, we will be taken for a boat ride on the Ganges. It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges. Experience the different ghats of Varanasi. Each ghats has its own history and Hinduism value. Later come back to the hotel for breakfast & proceed for a half day temple tour of Varanasi visiting Bharat Mata (Mother India) Mandir, Durga, Tulsi Manas, Sankat Mochan Temple and the new Vishwanath Temple. Later Afternoon Visit Sarnath and Evening Ganga Aarti at Dashashwamedh Ghat."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" },
      { day: 8, title: "Departure", activities: ["Today on time transfer to Airport/ Railway station for an onward journey with beautiful memories of your holiday."], image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "25,250/-", pax4: "16,800/-", pax6: "11,100/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "28,100/-", pax4: "23,000/-", pax6: "20,500/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "30,700/-", pax4: "25,400/-", pax6: "23,500/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  }
];

export const CHILD_POLICY = [
  "Children above 10+ years will be charged 100% as per Adult Rate (EPSR)",
  "Children of 5+ to 10 year sharing parents' room will be charged as per CWB or CNB",
  "Children below 5 years Complimentary",
  "Note: Hotels follow strict rules for child policy. ID/age proof is required for check-in."
];

export const GENERAL_INCLUSIONS = [
  "Meeting and assistance on arrival",
  "Accommodation in mentioned or similar category hotels",
  "Bed and breakfast in all hotels",
  "All Applicable Taxes of Hotel",
  "Transportation by Air-conditioned vehicle as per itinerary",
  "Toll taxes, parking fees"
];

export const GENERAL_EXCLUSIONS = [
  "Any flight tickets / Train fare",
  "Coolie/Porter charges, Camera charges, Donations at temples",
  "Extended stay or travelling due to any reason",
  "Optional tours and extra meals",
  "Expenses of personal nature like tips, laundry, telephone, beverages etc.",
  "Anything not specified in 'Tour cost includes'",
  "Guide & Entrance fees during sightseeing",
  "5% GST extra"
];

export const CANCELLATION_POLICY = [
  { duration: "Prior to 45 days", refund: "75% of tour cost" },
  { duration: "44 - 31 days", refund: "50% of tour cost" },
  { duration: "30 - 15 days", refund: "25% of tour cost" },
  { duration: "Less than 15 days", refund: "No Refund" }
];

export const HOTEL_REFERENCE = [
  { city: "Varanasi", deluxe: "Vikram Palace / Regency / Similar", luxury: "Fern Residency / Similar", premium: "Primeland / Similar" },
  { city: "Ayodhya", deluxe: "Rama Residency / Similar", luxury: "Kohinoor Palace / Similar", premium: "Ramayana / Similar" },
  { city: "Prayagraj", deluxe: "Galaxy / Mandiram / Milan Boutique", luxury: "Naveen Continental / Similar", premium: "Placid / Similar" },
  { city: "Gaya", deluxe: "Delta International / Similar", luxury: "Jataka Inn / Similar", premium: "Anand International / Similar" },
  { city: "Lucknow", deluxe: "Lords Eco Inn / Similar", luxury: "Golden Tulip / Similar", premium: "Lemon Tree / Similar" },
  { city: "Chitrakoot", deluxe: "Mandakini Resort / Similar", luxury: "The Riverfront / Similar", premium: "Bindiram By ShriGo / Similar" }
];
