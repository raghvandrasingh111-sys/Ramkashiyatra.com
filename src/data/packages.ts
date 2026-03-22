export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  image?: string;
  imageAlt?: string;
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
  imageAlt?: string;
  images?: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  pricingTable?: PricingCategory[];
  whyChooseUs?: string[];
  faqs?: { q: string; a: string }[];
  seoContent?: string;
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
    imageAlt: "Varanasi Ghats and Ganges River Spiritual Tour Package",
    images: [
      "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi and Local Sightseeing", activities: ["Upon Arrive at Varanasi Airport or Railway Station and drive to the hotel, on arrival check in at the hotel. Later in the afternoon for sightseeing of temples visit Kashi Vishwanath Temple (also known as The Golden Temple), Sankat Mochan Temple, Durga Temple, Bhu Vishwanath Temple (VT) and Tulsi Manas temple. Later in the evening enjoy Ganga Boating & attend Ganga aarti and then return back to Hotel and Overnight stay at the Hotel in Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200", imageAlt: "Kashi Vishwanath Temple Darshan Varanasi" },
      { day: 2, title: "Varanasi – Prayagraj day Excursion", activities: ["After breakfast, take a day excursion to Prayagraj, Visit Prayagraj Fort, Khusro Bagh, Triveni Sangam, Anand Bhavan, Swaraj Bhawan Later in the evening return back to Varanasi and overnight stay at Varanasi Hotel."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi - Sarnath Sightseeing and Drop", activities: ["Enjoy morning breakfast at the hotel. After check out from the hotel & move to Sarnath, sightseeing includes Chukhandi Stupa, Sarnath Museum, Dhamek Stupa, Golden Temple, Deer Park, Tibetan Temple and then drop at the airport/railway station as per the departure schedule."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "7,950/-", pax4: "6,400/-", pax6: "5,975/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "8,900/-", pax4: "7,400/-", pax6: "6,900/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ],
    whyChooseUs: [
      "Expert Local Guides: Our certified guides are specialized in Kashi's history and Vedic traditions, ensuring a deep spiritual connection.",
      "Premium AC Vehicles: Travel in sanitized, luxury sedans or SUVs with professional, courteous drivers who know every shortcut.",
      "Seamless VIP Logistics: We coordinate VIP Darshan entries and boat rides to ensure you don't waste a minute in queues.",
      "Customized Itineraries: Every tour can be adjusted for your specific spiritual goals, including Pind Daan or special Havans.",
      "Transparent Service: No hidden costs. Our packages include all tolls, parking fees, and taxes with a best-price guarantee."
    ],
    faqs: [
      { q: "Is 3 days sufficient to cover both Varanasi and Prayagraj?", a: "Yes, our 100% optimized itinerary ensures you experience the core essence of both cities. We cover Varanasi's Kashi Vishwanath circuit on Day 1, the Sangam excursion on Day 2, and the Sarnath peace trail on Day 3." },
      { q: "Do you arrange for Pind Daan rituals in Prayagraj?", a: "Absolutely. We can arrange for experienced priests at the Triveni Sangam for Pind Daan, Shraddha, or any other specific religious rituals you wish to perform." },
      { q: "What is the best time for the Varanasi Prayagraj tour?", a: "The ideal time is between October and March when the weather is cool. However, for those seeking the ultimate spiritual experience, the Kartik Purnima or Dev Deepawali periods are truly magical." }
    ],
    seoContent: `
      <p>Embark on the ultimate <strong>Varanasi Prayagraj Tour Package 3 Days</strong>, a journey designed for seekers of peace, history, and divine energy. Varanasi, also known as Kashi, is the world's oldest living city, where every stone tells a story of ancient Vedic wisdom. Our specialized 3-day itinerary perfects the balance between spiritual intensity and modern comfort.</p>
      
      <h3>The Spiritual Significance of Kashi Vishwanath</h3>
      <p>Your journey begins at the heart of the galaxy—the Kashi Vishwanath Temple. Representing one of the twelve Jyotirlingas, this temple is the destination of a lifetime for millions. Our guides facilitate your visit to ensure a peaceful experience amidst the divine energy of Lord Shiva. Following the temple visit, the evening Ganga Aarti at Dashashwamedh Ghat offers a sensory masterpiece of fire, chants, and devotion that remains etched in memory.</p>
      
      <h3>Prayagraj: The Confluence of the Holy Rivers</h3>
      <p>On the second day, we take you to the sacred city of Prayagraj. The highlight is the <strong>Triveni Sangam</strong>, the mystical confluence of the Ganga, Yamuna, and the invisible Saraswati. Taking a holy dip here is believed to cleanse the soul and grant liberation. Beyond the Sangam, you will explore the historical Allahabad Fort and the poignant Anand Bhawan, the ancestral home of the Nehru-Gandhi family.</p>
      
      <h3>Why Luxury Trip India?</h3>
      <p>As a premier <strong>Varanasi Spiritual Travel Agency</strong>, we understand that pilgrimage is more than just sightseeing—it is a soul-stirring experience. We prioritize your serenity by handling all logistics, from station pickups to luxury hotel stays. Whether you are traveling for <em>Varanasi pilgrimage package with hotel</em> or a quick weekend spiritual break, our expertise ensures you return home transformed.</p>
    `
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
    imageAlt: "Bodhgaya Mahabodhi Temple Enlightenment Tour",
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
    ],
    whyChooseUs: [
      "Vedic Ritual Specialists: We coordinate with local pujaris in Gaya to ensure your rituals are performed with the highest scriptural integrity.",
      "Reliable Logistics: Long drives between Gaya and Kashi are made comfortable in our modern, climate-controlled cruisers.",
      "Handpicked Hotels: We only book hotels that are verified for cleanliness, vegetarian cuisine, and proximity to sacred sites.",
      "Comprehensive Care: From arrival at Bodhgaya to departure from Kashi, we manage every detail so you can focus on your prayer."
    ],
    faqs: [
      { q: "How much time is required for Pind Daan in Gaya?", a: "Typically, the Pind Daan rituals take about 3-4 hours. Our 4-day itinerary ensures you have ample time to perform these sacred rites at the Vishnupad Temple and other key altars." },
      { q: "Is the road between Varanasi and Gaya safe for night travel?", a: "We prioritize safety and generally avoid long night drives. Our tour is scheduled to ensure all major intercity travel happens during daylight hours." }
    ],
    seoContent: `
      <p>The <strong>Varanasi Gaya Spiritual Tour</strong> is a bridge between the two most sacred destinations for ancestor worship and spiritual liberation in India. This 4-day circuit is essential for those seeking to perform Pind Daan or simply experience the profound silence of Bodhgaya and the vibrant energy of Kashi.</p>
      
      <h3>Bodhgaya: The Seat of Enlightenment</h3>
      <p>Your journey begins in Bodhgaya, where Prince Siddhartha became the Buddha. The Mahabodhi Temple, a UNESCO World Heritage site, is the centerpiece of this spiritual retreat. Sitting under the Bodhi Tree, you will feel a sense of peace that is unique to this corner of the world. Our tour gives you the time to meditate and explore the diverse monasteries that represent Buddhist traditions from around the globe.</p>
      
      <h3>Varanasi: The City of Eternal Light</h3>
      <p>From the silence of Gaya, we transition to the rhythmic chants of Varanasi. The connection between Gaya and Varanasi is deep-rooted in Indian tradition. After honoring ancestors in Gaya, visiting the Kashi Vishwanath Temple in Varanasi is seen as the completion of a sacred cycle. Our 4-day Varanasi Gaya itinerary ensures that you experience the Ganga Aarti, the ancient ghats, and the narrow, mystical alleys of Kashi with expert local insights.</p>
    `
  },
  {
    slug: "varanasi-prayagraj-stay-3n-4d",
    name: "Varanasi & Prayagraj Stay Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi - 2N, Prayagraj - 1N",
    price: "7,800",
    originalPrice: "11,500",
    description: "Explore the ancient cities of Varanasi and Prayagraj with comfortable overnight stays and comprehensive spiritual sightseeing including the Holy Triveni Sangam.",
    image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Triveni Sangam Prayagraj Holy Confluence Spiritual View",
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
    ],
    whyChooseUs: [
      "In-Depth City Coverage: Unlike quick day-trips, our stay packages allow you to absorb the peaceful mornings and vibrant nights of both Kashi and Prayag.",
      "Religious Milestone Coordination: We ensure your visit aligns with high-energy rituals like the Ganga Aarti and Sangam Snan (Holy Dip).",
      "Verified Accommodations: Relax in handpicked hotels known for their spiritual ambiance and premium service standards."
    ],
    faqs: [
      { q: "What is inclusive in the spiritual sightseeing of Prayagraj?", a: "The tour includes documented visits to the Triveni Sangam, the historic Allahabad Fort, Khusro Bagh, Anand Bhavan, and the Swaraj Bhawan. We provide an expert driver-guide for all locations." },
      { q: "Can we add a visit to Ayodhya to this 4-day tour?", a: "Yes, this package can be customized or upgraded to our 'Varanasi Ayodhya Divine Tour' if you wish to include the Ram Janmabhoomi Darshan." }
    ],
    seoContent: `
      <p>The <strong>Varanasi & Prayagraj Stay Tour</strong> is our most popular 4-day spiritual immersion. By staying overnight in both Kashi and Prayagraj, you go beyond a checklist visit and truly experience the pulse of these holy cities. This package is ideal for families and seniors seeking a relaxed yet profound pilgrimage.</p>
      
      <h3>Purity of the Triveni Sangam</h3>
      <p>Prayagraj is the king of all pilgrimages (Tirtharaj). The convergence of the three holiest rivers creates an energy field that is unparalleled. Our 4-day tour ensures you have a private boat for the Sangam visit, allowing you ample time for rituals and a holy dip at the most auspicious coordinates. We also visit the Akshayavat (the eternal banyan tree) situated inside the fort, a site of immense mythological importance.</p>
    `
  },
  {
    slug: "varanasi-ayodhya-divine-3n-4d",
    name: "Varanasi & Ayodhya Divine Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi - 2N, Ayodhya - 1N",
    price: "8,000",
    originalPrice: "11,700",
    description: "A divine circuit connecting the spiritual power of Kashi with the sacred birthplace of Lord Rama in Ayodhya. Includes RAM Mandir Darshan 2026.",
    image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Ayodhya RAM Mandir Temple Entrance Spiritual Journey",
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
      { category: "Deluxe", pax2: "12,500/-", pax4: "9,000/-", pax6: "8,000/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Super Deluxe", pax2: "13,800/-", pax4: "10,500/-", pax6: "9,400/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" },
      { category: "Luxury", pax2: "15,200/-", pax4: "11,800/-", pax6: "10,700/-", pax8: "On Demand", pax10: "On Demand", pax12: "On Demand" }
    ],
    whyChooseUs: [
      "The Ultimate Spiritual Connection: Experience the birthplace of Lord Rama and the city of Lord Shiva in one seamless luxury circuit.",
      "Ram Mandir Darshan Priority: We provide the latest updates on Darshan timings and ensure your visit to the Ram Janmabhoomi is organized and comfortable.",
      "Bilingual Spiritual Guides: Our guides speak Hindi and English fluently, bridging the gap between ancient Sanskrit rituals and your understanding."
    ],
    faqs: [
      { q: "Is the new Ram Mandir in Ayodhya fully open for Darshan?", a: "Yes, the Shri Ram Janmabhoomi Mandir is open for devotees. We coordinate your visit to ensure you have a smooth Darshan of Ram Lalla." },
      { q: "What is the distance between Varanasi and Ayodhya?", a: "The distance is approximately 200 km, which takes about 4-5 hours by road via the Purvanchal Expressway or the NH-730. Our luxury AC vehicles make this journey very comfortable." }
    ],
    seoContent: `
      <p>Our <strong>Varanasi & Ayodhya Divine Tour</strong> is the quintessential North India pilgrimage for 2026. This 4-day tour connects Kashi, the city of liberation, with Ayodhya, the city of Dharma. It is a journey through the epic landscapes of the Ramayana and the Puranas, designed for the modern devotee who values both tradition and comfort.</p>
      
      <h3>Ayodhya: A New Era of Spirituality</h3>
      <p>With the grand opening of the Ram Mandir, Ayodhya has become a global destination for spiritual seekers. Our tour takes you to <strong>Hanuman Garhi</strong>, the <strong>Sarayu Ghat</strong> for the evening Aarti, and the <strong>Shri Ram Janmabhoomi</strong>. We provide deep historical context to the recent developments, making your visit enlightening and emotionally resonant.</p>
    `
  },
  {
    slug: "gaya-varanasi-prayagraj-4n-5d",
    name: "Gaya Varanasi & Prayagraj Tour",
    duration: "4 Nights / 5 Days",
    location: "Varanasi - 2N, Gaya - 1N, Prayagraj - 1N",
    price: "9,900",
    originalPrice: "14,300",
    description: "A comprehensive spiritual circuit covering Gaya, Kashi Vishwanath, and Prayag Sangam for a complete religious experience in 2026.",
    image: "https://images.unsplash.com/photo-1701619878991-716d8fbb319f?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Varanasi Ganga Aarti Spiritual Sightseeing Ghats",
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
    description: "The ultimate spiritual triangle of Uttar Pradesh, visiting the holiest cities with expert local insights and RAM Mandir Darshan 2026.",
    image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Varanasi Sarnath Buddhist Temple Peace and Spirituality",
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
    description: "Discover the sacred confluence of the three holiest rivers and the historic landmarks of Prayagraj on this specialized 2026 tour.",
    image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Prayagraj Triveni Sangam Boat Ride Spiritual Journey",
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
    description: "Explore the Nawabi grandeur of Lucknow and the divine spiritual heritage of Ayodhya in this compact 2026 tour.",
    image: "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Lucknow Bara Imambara Historical Nawabi Architecture",
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
    description: "An extensive spiritual odyssey through the holiest cities of UP, from the secrets of Naimisharanya to the ghats of Kashi.",
    image: "https://images.unsplash.com/photo-1730020933441-27eaf52e7754?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Naimisharanya Chakra Tirth Holy Spiritual Pond",
    images: [
      "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200",
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
    description: "A majestic journey from the oldest living city of Varanasi to the eternal monument of love, the Taj Mahal, on a 7-day luxury circuit.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Agra Taj Mahal Eternal Monument of Love Spiritual Sightseeing",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pick up and transfer to hotel. In the evening visit Dashashwamedh Ghat to witness Ganga Aarti. Overnight stay at Varanasi."], image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Varanasi Sightseeing", activities: ["Sunrise boat ride, Kashi Vishwanath temple visit, and explore the ancient city. Later visit Sarnath and return for overnight stay."], image: "https://images.unsplash.com/photo-1704872833406-1536a3d3e613?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Varanasi to Prayagraj", activities: ["Drive to Prayagraj. Visit Triveni Sangam, Hanuman Temple, and Anand Bhawan. Overnight stay at Prayagraj."], image: "https://images.unsplash.com/photo-1675788462399-bcde574140b0?auto=format&fit=crop&q=80&w=1200" },
      { day: 4, title: "Prayagraj to Ayodhya", activities: ["Drive to Ayodhya. Visit Ramjanam Bhoomi, Kanak Bhawan, Hanuman Garhi, and the Saryu River. Overnight stay at Ayodhya."], image: "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200" },
      { day: 5, title: "Ayodhya to Lucknow", activities: ["En-route visit Naimishrayna (Chakra Tirth). Transfer to Lucknow and visit the evening markets. Overnight stay at Lucknow."], image: "https://images.unsplash.com/photo-1730020933441-27eaf52e7754?auto=format&fit=crop&q=80&w=1200" },
      { day: 6, title: "Lucknow to Agra", activities: ["Morning Lucknow sightseeing (Bara Imambara, Zoo). Late afternoon drive to Agra via Express Way. Overnight stay at Agra."], image: "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200" },
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
    description: "The complete spiritual trail covering enlightenment, ancient rituals, and Nawabi history across iconic cities of North India.",
    image: "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Bodhgaya Mahabodhi Temple Enlightenment Spiritual View",
    images: [
      "https://images.unsplash.com/photo-1725951602381-3e759a5ce430?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583504491264-3a905f593981?auto=format&fit=crop&q=80&w=1200"
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
    description: "The ultimate North Indian pilgrimage connecting the playground of Krishna, the glory of Rama, and the holy city of Shiva, Varanasi.",
    image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Vrindavan Prem Mandir Temple Night Lighting",
    images: [
      "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Mathura/Vrindavan Arrival", activities: ["Pickup and transfer to hotel. Evening visit to Prem Mandir and local Vrindavan temples. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Mathura & Vrindavan Sightseeing", activities: ["Visit Sri Krishna Janmabhoomi, Banke Bihari Temple, Dwarkadhish Temple, and ISKCON Vrindavan. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200" },
      { day: 3, title: "Brij Bhoomi Excursion", activities: ["Explore Goverdhan, Gokul, and Barsana. Experience the spiritual vibes of Brij Bhoomi. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200" },
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
    description: "A specialized 2026 tour connecting sacred lands of Brij and the divine birthplace of Lord Rama with luxury comfort.",
    image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Mathura Krishna Janmabhoomi Temple Spiritual View",
    images: [
      "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Mathura Arrival", activities: ["Pickup and transfer to hotel in Vrindavan/Mathura. Evening visit to local Vrindavan temples. Overnight stay."], image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200" },
      { day: 2, title: "Mathura/Vrindavan Sightseeing", activities: ["Full day visit to Sri Krishna Janmabhoomi, Banke Bihari, and ISKCON temple. Overnight stay at Vrindavan."], image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&q=80&w=1200" },
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
