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
    image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Hotel in Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi – Prayagraj day Excursion", activities: ["After breakfast, take a day excursion to Prayagraj, Visit Prayagraj Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan Later in the evening return back to Varanasi and overnight stay at Varanasi Hotel."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi - Sarnath Sightseeing and Drop", activities: ["Enjoy morning breakfast at the hotel. After check out from the hotel & move to Sarnath, sightseeing includes Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple and then drop at the airport/railway station as per the departure schedule."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" }
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
    image: "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Varanasi hotel."], image: "https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi to Prayagraj Day Excursion", activities: ["Today after breakfast at the hotel and Drive to Prayagraj. visit to Local sightseeing of Prayagraj Likes, Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan after sightseeing return back to the Varanasi & Night Stay at Hotel Varanasi."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi – Gaya Night", activities: ["Today, get ready to drive to Gaya. Arrive at Gaya and check in at Hotel. After Fresh-up visit to Bodhgaya Temple Gaya Pind Daan, Great Buddha Statue, Mahabodhi Temple, Bodhi Tree. Overnight stay at Gaya."], image: "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Gaya to Varanasi drop", activities: ["After breakfast check out from the hotel and drive to Varanasi and drop at the Railway Station or Airport to continue the journey to Home."], image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200" }
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
    image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Varanasi hotel."], image: "https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi to Prayagraj", activities: ["Today after breakfast at the hotel and Drive to Prayagraj. visit to Local sightseeing of Prayagraj Likes, Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Prayagraj to Varanasi", activities: ["After breakfast, check out from Hotel and drive to Varanasi. On Arrival at Varanasi check in at the Hotel Varanasi. Later in the afternoon visit to Sarnath Sightseeing Likes; Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple, Zoo. Overnight stay at Hotel Varanasi."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Varanasi Local Sightseeing and drop", activities: ["After breakfast check out from the hotel and visit the local market and then sightseeing of Varanasi, Godawaliya, Bhu Vishwanath Temple (VT). If time permits visit Ramnagar Fort and then drop at Airport or Railway station for your onward journey to home."], image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200" }
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
    image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1710429814573-7f07a792cba2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1691842208155-9460efbbbde8?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon processed for sightseeing, temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Varanasi hotel."], image: "https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi – Prayagraj - Ayodhya", activities: ["Morning after breakfast check out from the hotel and drive to Ayodhya via Prayagraj on arrival at Prayagraj enjoy Local sightseeing of Prayagraj like Prayagraj Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan. Later continue drive to Ayodhya and check in at the hotel and Overnight stay at the Ayodhya Hotel."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Ayodhya to Varanasi", activities: ["Post breakfast Check out from the hotel and Visit Ayodhya Sightseeing includes Hanuman Garhi, Kanak Bhawan, Ram ki Paidi, Ram Mandir. And then return back to Varanasi and overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Varanasi to Sarnath Local Sightseeing and drop", activities: ["Morning after breakfast Check out from hotel and Visit Sarnath: Visit Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple and Local market and then drop at Airport or Railway stations."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" }
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
    image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1691842208155-9460efbbbde8?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Gaya and Local Sightseeing", activities: ["Upon Arrive at Gaya Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. After Fresh-up visit to Bodhgaya Temple Gaya Pind Daan, Great Buddha Statue, Mahabodhi Temple, Bodhi Tree. Overnight stay at Gaya."], image: "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Gaya to Varanasi", activities: ["After breakfast check out from the hotel and transfer to Varanasi.Upon Arrival at Varanasi check in at the hotel. Later in the evening enjoy Ganga Boating & attend Ganga arti and then return back to Hotel and Overnight stay at the Varanasi hotel"], image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi Local Sightseeing", activities: ["Visit the Kashi Vishwanath Temple - one of the famous Hindu temples and is dedicated to Lord Shiva, where at least once in life a Hindu is expected to do pilgrimage, and if possible, also pour the remains (ashes) of cremated ancestors here on the river Ganges. Visits other temples - Anpurna Temple, Kal Bhairav temple, Bharat Mata Mandir, Tulsimanas temple, BHU. After noon, take an excursion to Sarnath. Sarnath is the place where Buddha delivered his first sermon to his disciples. The attractions at Sarnath are the Buddha temples, the Dhamekha stupa, Chaukhandi stupa and the archaeological museum."], image: "https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Varanasi to Prayagraj", activities: ["Today after breakfast at the hotel and drive to Prayagraj. visit to Local sightseeing of Prayagraj Likes, Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Prayagraj to Varanasi drop", activities: ["After breakfast check out from Hotel and drive to Varanasi for your departure."], image: "https://images.unsplash.com/photo-1691842208155-9460efbbbde8?auto=format&fit=crop&q=80&w=1200" }
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
    image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon processed for sightseeing, temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Hotel in Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi - Sarnath Sightseeing", activities: ["Post breakfast visit to Sarnath Sightseeing Includes: Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple, Namo Ghat. After sightseeing, return back to the hotel and Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi to Prayagraj", activities: ["After breakfast check out from Hotel & Drive to Prayagraj. After Arrive at Prayagraj Check in At Hotel, After Fresh up visit to Local sightseeing of Prayagraj Likes: Allahabad Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan After Sightseeing Back to the Hotel & Night Stay at Hotel Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Prayagraj to Ayodhya", activities: ["After breakfast, check out from Hotel and drive to Ayodhya. After Arrival at Ayodhya Check in at Hotel and then after Fresh Up Visit to Sightseeing like, Hanuman Garhi, Kanak Bhawan, Ram ki Paidi, Ram Mandir. Overnight stay at Ayodhya Hotel."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Ayodhya to Varanasi drop", activities: ["After breakfast check out from the hotel and drive to Varanasi, after reaching Varanasi drop at Airport or Railway stations for your onward journey to home."], image: "https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "15,250/-", pax4: "11,400/-", pax6: "10,300/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "17,100/-", pax4: "12,900/-", pax6: "11,700/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "19,300/-", pax4: "14,700/-", pax6: "13,600/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ]
  },
  {
    slug: "prayagraj-tour-package-2n-3d",
    name: "Prayagraj Sacred Tour",
    duration: "2 Nights / 3 Days",
    location: "Prayagraj",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "Discover the sacred confluence of the three holiest rivers and the historic landmarks of Prayagraj.",
    image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Prayagraj", activities: ["Meet and assist at the Airport/Railway Station and transfer to the hotel. Rest of the day at leisure. Dinner and overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Prayagraj Sightseeing", activities: ["After breakfast, drive to Triveni Sangam (confluence of Ganga, Yamuna & Saraswati). Later visit Anand Bhawan, Swaraj Bhawan, and the reclining Hanuman Temple. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Departure from Prayagraj", activities: ["After breakfast, check out from the hotel and get assisted for transfer to the Airport or Railway Station for your onward journey."], image: "https://images.unsplash.com/photo-1541013445585-5df7ca741270?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "lucknow-ayodhya-tour-package-2n-3d",
    name: "Lucknow & Ayodhya Heritage Tour",
    duration: "2 Nights / 3 Days",
    location: "Lucknow - Ayodhya",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "Explore the Nawabi grandeur of Lucknow and the divine spiritual heritage of Ayodhya in this compact tour.",
    image: "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1549225480-ce72840aa6c8?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Lucknow", activities: ["Pickup from Lucknow Airport/Railway Station and transfer to the hotel. In the afternoon, visit Bara Imambara, Bhul Bhulaiya, and Chota Imambara. Overnight stay in Lucknow."], image: "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Lucknow to Ayodhya", activities: ["After breakfast, check out and drive to Ayodhya. En-route visit Dewa Sharif. Check-in to the Ayodhya hotel and visit Saryu River Ghats for evening Aarti. Overnight stay in Ayodhya."], image: "https://images.unsplash.com/photo-1549225480-ce72840aa6c8?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Ayodhya Sightseeing & Departure", activities: ["Morning breakfast followed by Ayodhya sightseeing (Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple). Late evening drop at Lucknow Airport/Railway Station."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "ayodhya-ram-janmabhoomi-tour-package-2n-3d",
    name: "Ayodhya Ram Janmabhoomi Special",
    duration: "2 Nights / 3 Days",
    location: "Ayodhya",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "A focused pilgrimage to the birthplace of Lord Rama, visiting the most sacred temples of Ayodhya.",
    image: "https://images.unsplash.com/photo-1549225480-ce72840aa6c8?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1710429814573-7f07a792cba2?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Ayodhya Arrival", activities: ["Pickup from Lucknow/Ayodhya and transfer to the hotel. Evening visit to the local markets and Saryu River on foot. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1710429814573-7f07a792cba2?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Ayodhya Full Day Sightseeing", activities: ["After breakfast, explore the divine Ayodhya: Ram Janmabhoomi, Kanak Bhawan, Hanuman Garhi, Nageshwarnath Temple, and Gulab Bari. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Ayodhya Departure", activities: ["Check out from the hotel and get assisted for transfer to Lucknow Railway Station/Airport for your onward journey."], image: "https://images.unsplash.com/photo-1541013445585-5df7ca741270?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "lucknow-naimisharanya-ayodhya-prayagraj-varanasi-6d",
    name: "Grand North India Spiritual Circuit",
    duration: "5 Nights / 6 Days",
    location: "Lucknow - Naimishranya - Ayodhya - Prayagraj - Varanasi",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "An extensive spiritual odyssey through the holiest cities of Uttar Pradesh, from the secrets of Naimisharanya to the ghats of Kashi.",
    image: "https://images.unsplash.com/photo-1730020933441-27eaf52e7754?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1702888636184-e4070a2f7c0a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Lucknow Arrival", activities: ["Arrive at Lucknow and transfer to the hotel. Visit Bara Imambara, Bhool bhulaiya, Clock tower, and Chota Imambara. Overnight stay at Lucknow."], image: "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Lucknow - Naimisharanya - Ayodhya", activities: ["Visit Neemsaar Tirth, Chakrathirth, Hanuman Garhi, and Sita Kund in Naimisharanya. Drive to Ayodhya. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1730020933441-27eaf52e7754?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Ayodhya - Prayagraj", activities: ["Visit Saryu River, Hanuman Garhi, Ram Janmabhoomi, and Kanak Bhawan. Evening drive to Prayagraj. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Prayagraj - Varanasi", activities: ["Visit Triveni Sangam, Hanuman Temple, and Anand Bhawan. Drive to Varanasi. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Varanasi Local Sightseeing", activities: ["Sunrise boat ride at Dashashwamedh Ghat. Visit Kashi Vishwanath Temple, Annapurna Temple, and Sarnath. Evening Ganga Aarti. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Varanasi Departure", activities: ["Drop at Varanasi Airport/Railway station according to your flight/train schedule."], image: "https://images.unsplash.com/photo-1541013445585-5df7ca741270?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "spiritual-varanasi-prayagraj-ayodhya-lucknow-agra-7d",
    name: "Spiritual Triangle & Taj Mahal Grand Tour",
    duration: "6 Nights / 7 Days",
    location: "Varanasi - Prayagraj - Ayodhya - Lucknow - Agra",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "A majestic journey from the oldest living city of Varanasi to the eternal monument of love, the Taj Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1702888636184-e4070a2f7c0a?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pick up and transfer to hotel. In the evening visit Dashashwamedh Ghat to witness Ganga Aarti. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi Sightseeing", activities: ["Sunrise boat ride, Kashi Vishwanath temple visit, and explore the ancient city. Later visit Sarnath and return for overnight stay."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi to Prayagraj", activities: ["Drive to Prayagraj. Visit Triveni Sangam, Hanuman Temple, and Anand Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Prayagraj to Ayodhya", activities: ["Drive to Ayodhya. Visit Ramjanam Bhoomi, Kanak Bhawan, Hanuman Garhi, and the Saryu River. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Ayodhya to Lucknow", activities: ["En-route visit Naimishrayna (Chakra Tirth). Transfer to Lucknow and visit the evening markets. Overnight stay at Lucknow."], image: "https://images.unsplash.com/photo-1582510003544-2d095665039b?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Lucknow to Agra", activities: ["Morning Lucknow sightseeing (Bara Imambara, Zoo). Late afternoon drive to Agra via Express Way. Overnight stay at Agra."], image: "https://images.unsplash.com/photo-1702888636184-e4070a2f7c0a?auto=format&fit=crop&q=80&w=1200" },
      { day: 7, title: "Agra Sightseeing and Drop", activities: ["Visit the magnificent Taj Mahal and Agra Fort. Drop at Agra Railway Station or Airport for departure."], image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "best-of-varanasi-bodhgaya-prayagraj-ayodhya-lucknow-7d",
    name: "Ultimate Spiritual Heritage Circuit",
    duration: "6 Nights / 7 Days",
    location: "Varanasi - Bodhgaya - Prayagraj - Ayodhya - Lucknow",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "The complete spiritual trail covering enlightenment, ancient rituals, and Nawabi history across four iconic cities.",
    image: "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1702888636184-e4070a2f7c0a?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pick up and transfer to hotel. In the evening visit Dashashwamedh Ghat to witness Ganga Aarti. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi Sightseeing", activities: ["Sunrise boat ride, Kashi Vishwanath temple, and temple tour. Visit Sarnath in the afternoon. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi - Bodhgaya", activities: ["Drive to Gaya. Visit Vishnupad temple and Phalgu river for Pinda Dann. Move to Bodhgaya and visit Mahabodhi temple and the Great Buddha statue. Overnight stay at Bodhgaya."], image: "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Bodhgaya - Prayagraj", activities: ["Drive to Prayagraj. Visit Triveni Sangam, Hanuman Temple, and Anand Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Prayagraj - Ayodhya", activities: ["Drive to Ayodhya. Visit Ram Janmabhoomi, Kanak Bhawan, Hanuman Garhi, and Saryu River. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Ayodhya to Lucknow", activities: ["En-route visit Naimishrayna. Transfer to Lucknow and visit Bara Imambara and Chhota Imambara. Overnight stay at Lucknow."], image: "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200" },
      { day: 7, title: "Lucknow Departure", activities: ["Morning at leisure. Drop at Lucknow Airport/Railway station according to your departure schedule."], image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "mathura-vrindavan-ayodhya-prayagraj-varanasi-9d",
    name: "Divine Brij to Kashi Mahayatra",
    duration: "8 Nights / 9 Days",
    location: "Mathura - Vrindavan - Agra - Lucknow - Ayodhya - Prayagraj - Varanasi",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "The ultimate North Indian pilgrimage connecting the playground of Krishna, the glory of Rama, and the city of Shiva.",
    image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Mathura/Vrindavan Arrival", activities: ["Pickup and transfer to hotel. Evening visit to Prem Mandir and local Vrindavan temples. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Mathura & Vrindavan Sightseeing", activities: ["Visit Sri Krishna Janmabhoomi, Banke Bihari Temple, Dwarkadhish Temple, and ISKCON Vrindavan. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Brij Bhoomi Excursion", activities: ["Explore Goverdhan, Gokul, and Barsana. Experience the spiritual vibes of Brij Bhoomi. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Vrindavan - Agra - Lucknow", activities: ["Early morning drive to Agra. Visit the Taj Mahal and Agra Fort. Continue drive to Lucknow via Expressway. Overnight stay at Lucknow."], image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Lucknow - Naimisharanya - Ayodhya", activities: ["Visit the holy Naimisharanya (Chakra Tirth). Drive to Ayodhya and visit Saryu River in the evening. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1730020933441-27eaf52e7754?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Ayodhya to Prayagraj", activities: ["Ayodhya sightseeing (Ram Janmabhoomi, Hanuman Garhi). Afternoon drive to Prayagraj. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 7, title: "Prayagraj to Varanasi", activities: ["Morning visit to Triveni Sangam, Hanuman Temple, and Anand Bhawan. Drive to Varanasi. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 8, title: "Varanasi Local Sightseeing", activities: ["Sunrise boat ride, Kashi Vishwanath temple, and temple tour. Visit Sarnath in the afternoon. Evening Ganga Aarti. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 9, title: "Varanasi Departure", activities: ["Final departure from Varanasi. Transfer to Airport/Railway station."], image: "https://images.unsplash.com/photo-1541013445585-5df7ca741270?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    slug: "mathura-vrindavan-ayodhya-lucknow-6d",
    name: "Brij to Ayodhya Heritage Trail",
    duration: "5 Nights / 6 Days",
    location: "Mathura - Vrindavan - Agra - Lucknow - Ayodhya",
    price: "Enquire",
    originalPrice: "Enquire",
    description: "A specialized tour connecting the sacred lands of Brij and the divine birthplace of Lord Rama.",
    image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Mathura Arrival", activities: ["Pickup and transfer to hotel in Vrindavan/Mathura. Evening visit to local Vrindavan temples. Overnight stay."], image: "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Mathura/Vrindavan Sightseeing", activities: ["Full day visit to Sri Krishna Janmabhoomi, Banke Bihari, and ISKCON temple. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1725514681285-b8271101859c?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Vrindavan - Agra - Lucknow", activities: ["Morning visit to Taj Mahal and Agra Fort. Drive to Lucknow via expressway. Overnight stay at Lucknow."], image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Lucknow - Naimisharanya - Ayodhya", activities: ["Visit the holy Naimisharanya (Chakra Tirth). Drive to Ayodhya. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1730020933441-27eaf52e7754?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Ayodhya Full Day Sightseeing", activities: ["Visit Ram Janmabhoomi, Kanak Bhawan, Hanuman Garhi, and Saryu River Aarti. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Ayodhya/Lucknow Departure", activities: ["Check out and drop at Ayodhya/Lucknow Airport or Railway station for departure."], image: "https://images.unsplash.com/photo-1541013445585-5df7ca741270?auto=format&fit=crop&q=80&w=1200" }
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
