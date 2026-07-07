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
    description: "A divine circuit connecting the spiritual power of Kashi with the sacred birthplace of Lord Rama in Ayodhya. Includes RAM Mandir Darshan .",
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
      <p>Our <strong>Varanasi & Ayodhya Divine Tour</strong> is the quintessential North India pilgrimage for . This 4-day tour connects Kashi, the city of liberation, with Ayodhya, the city of Dharma. It is a journey through the epic landscapes of the Ramayana and the Puranas, designed for the modern devotee who values both tradition and comfort.</p>
      
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
    description: "A comprehensive spiritual circuit covering Gaya, Kashi Vishwanath, and Prayag Sangam for a complete religious experience in .",
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
    description: "The ultimate spiritual triangle of Uttar Pradesh, visiting the holiest cities with expert local insights and RAM Mandir Darshan .",
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
    description: "Discover the sacred confluence of the three holiest rivers and the historic landmarks of Prayagraj on this specialized  tour.",
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
    description: "Explore the Nawabi grandeur of Lucknow and the divine spiritual heritage of Ayodhya in this compact  tour.",
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
    description: "A specialized  tour connecting sacred lands of Brij and the divine birthplace of Lord Rama with luxury comfort.",
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
  },
  {
    slug: "malwa-bhopal-heritage-yatra-6d",
    name: "Malwa & Bhopal Heritage Yatra",
    duration: "5 Nights / 6 Days",
    location: "Ujjain - Mandu - Omkareshwar - Indore - Bhopal - Sanchi",
    price: "14,500",
    originalPrice: "19,500",
    description: "Explore the heart of Madhya Pradesh with visits to Mahakaleshwar & Omkareshwar Jyotirlingas, Mandu ruins, Bhimbetka caves, and Sanchi Stupa.",
    image: "/images/destinations/ujjain.png",
    imageAlt: "Mahakaleshwar Jyotirlinga Temple Ujjain Madhya Pradesh",
    images: [
      "/images/destinations/ujjain.png",
      "/images/destinations/madhya-pradesh.png",
      "/images/destinations/gwalior.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Indore – Ujjain", activities: ["Arrival at Indore airport/ railway station. Pick up the guest and proceed to Ujjain (City of Pilgrimage). On arrival, check in at the hotel and then leave to explore the beautiful Mahakal Lok Corridor. Overnight stay at Ujjain."], image: "/images/destinations/ujjain.png" },
      { day: 2, title: "Ujjain – Mandu", activities: ["Early morning, go to take darshan at the Mahakaleshwar Temple (one of the 12 Jyotirlingas) and Harsiddhi Temple. Later, return back to the hotel for breakfast, check out, and proceed to Mandu. On arrival, check into the hotel & relax. Later, proceed for local sightseeing in Mandu. Visit Rani Roopmati Mahal, Jahaz Mahal, Jami Masjid, etc. Overnight stay in Mandu."], image: "/images/destinations/ujjain.png" },
      { day: 3, title: "Mandu – Omkareshwar – Indore", activities: ["After breakfast, check out from the hotel and proceed to Omkareshwar. On arrival, take the darshan of Omkareshwar Temple (one of the 12 revered Jyotirlinga shrines of Shiva) and Mamleshwar Temple. Later, transfer to Indore for dinner and overnight stay."], image: "/images/destinations/omkareshwar.png" },
      { day: 4, title: "Indore – Bhimbetka & Bhojpur – Bhopal", activities: ["After breakfast, check out from the hotel and proceed to Bhimbetka Rock shelters (UNESCO world heritage site, exhibiting the earliest traces of human life in India) and Bhojpur Shiva Temple (incomplete 11th-century architectural marvel commissioned by King Bhoja, known for its massive Shiva Lingam). Later, proceed to Bhopal for overnight stay."], image: "/images/destinations/madhya-pradesh.png" },
      { day: 5, title: "Bhopal – Sanchi – Bhopal", activities: ["After breakfast, leave to visit Sanchi (UNESCO world heritage site, famous for its ancient Buddhist monuments, the Great Stupa, and Ashokan Pillar reflecting rich Maurya history). Checkout from the hotel and proceed to Bhopal via Sanchi. Later, return to Bhopal for overnight stay."], image: "/images/destinations/madhya-pradesh.png" },
      { day: 6, title: "Bhopal – Drop", activities: ["After breakfast, leave to visit local sightseeing like Madhya Pradesh Tribal Museum and Bhopal Upper Lake (Bhojtaal). Later, proceed to the airport or railway station for your onward journey."], image: "/images/destinations/madhya-pradesh.png" }
    ]
  },
  {
    slug: "grand-madhya-pradesh-heritage-tour-7d",
    name: "Grand Madhya Pradesh Heritage Tour",
    duration: "6 Nights / 7 Days",
    location: "Ujjain - Mandu - Omkareshwar - Indore - Bhopal - Sanchi - Khajuraho",
    price: "18,900",
    originalPrice: "24,500",
    description: "A comprehensive yatra covering major Jyotirlingas, historical ruins, UNESCO caves and monuments, and the world-famous temples of Khajuraho.",
    image: "/images/destinations/khajuraho.png",
    imageAlt: "Khajuraho Group of Monuments Western Temples Madhya Pradesh",
    images: [
      "/images/destinations/khajuraho.png",
      "/images/destinations/ujjain.png",
      "/images/destinations/gwalior.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Indore – Ujjain", activities: ["Arrival at Indore airport/ railway station. Pick up the guest and proceed to Ujjain (City of Pilgrimage). On arrival, check in at the hotel and relax. Later, go to take darshan at the Mahakaleshwar Temple (one of the 12 Jyotirlingas), followed by local sightseeing. Return back to the hotel for overnight stay. Meals: Dinner."], image: "/images/destinations/ujjain.png" },
      { day: 2, title: "Ujjain – Mandu", activities: ["After breakfast, check out from the hotel and proceed to Mandu. On arrival, check into the hotel & relax. Later, proceed for local sightseeing in Mandu. Visit Rani Roopmati Mahal, Jahaz Mahal, Jami Masjid, etc. Overnight stay in Mandu. Meals: Breakfast + Lunch + Dinner."], image: "/images/destinations/ujjain.png" },
      { day: 3, title: "Mandu – Omkareshwar – Indore", activities: ["After breakfast, check out from the hotel and proceed to Omkareshwar. On arrival, take the darshan of Omkareshwar Temple (one of the 12 revered Jyotirlinga shrines of Shiva) and local temples. Later, proceed to Indore for overnight stay. Meals: Breakfast + Lunch + Dinner."], image: "/images/destinations/omkareshwar.png" },
      { day: 4, title: "Indore – Bhimbetka – Bhojpur – Bhopal", activities: ["Early morning after breakfast, check out from the hotel and proceed for Bhimbetka Rock shelter (UNESCO world heritage site) & Bhojpur Shiva Temple. Later, transfer to Bhopal. On arrival, check into the hotel and relax. Meals: Breakfast + Lunch + Dinner."], image: "/images/destinations/madhya-pradesh.png" },
      { day: 5, title: "Bhopal – Sanchi – Khajuraho", activities: ["After breakfast, check out from the hotel and proceed to Sanchi (UNESCO world heritage site). Lunch at Sanchi, and then transfer to Khajuraho. Reach Khajuraho, dinner and overnight stay at the hotel. Meals: Breakfast + Lunch + Dinner."], image: "/images/destinations/madhya-pradesh.png" },
      { day: 6, title: "Khajuraho Local Sightseeing", activities: ["Today after breakfast, proceed for the temple tour of the UNESCO World Heritage site - 'Khajuraho Group of Monuments' followed by local sightseeing. The temple complex is divided into Western and Eastern groups. Visit the Western group of temples. Return back to the hotel and relax. Evening enjoy the Sound & Light show (subject to operational). Overnight stay at Khajuraho. Meals: Breakfast + Lunch + Dinner."], image: "/images/destinations/khajuraho.png" },
      { day: 7, title: "Khajuraho – Departure", activities: ["After breakfast, leave for shopping, check out and lunch at the hotel, and drop at Khajuraho Airport. Meals: Breakfast + Lunch."], image: "/images/destinations/khajuraho.png" }
    ]
  },
  {
    slug: "quick-ujjain-omkareshwar-indore-yatra-3d",
    name: "Quick Jyotirlinga Darshan (Ujjain & Omkareshwar)",
    duration: "2 Nights / 3 Days",
    location: "Ujjain - Omkareshwar - Indore",
    price: "7,500",
    originalPrice: "9,990",
    description: "Seek blessings at Mahakaleshwar & Omkareshwar, explore Indore's heritage, and savor street food at Sarafa Bazar on this quick 3-day spiritual escape.",
    image: "/images/destinations/ujjain.png",
    imageAlt: "Ujjain Mahakaleshwar Corridor Night View",
    images: [
      "/images/destinations/ujjain.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival at Indore – Ujjain", activities: ["Arrival at Indore Airport/ Railway station. Pickup the guest and transfer to Ujjain. On arrival, check into the hotel and relax. Go to take darshan at the Mahakaleshwar Temple (one of the 12 Jyotirlingas) and local temples. In the evening, visit the beautiful Mahakal Lok corridor. Later, return back to the hotel. Overnight stay at Ujjain."], image: "/images/destinations/ujjain.png" },
      { day: 2, title: "Ujjain – Omkareshwar – Indore", activities: ["After breakfast, proceed to Omkareshwar. On arrival, go to take the darshan of Omkareshwar Temple (one of the 12 revered Jyotirlinga shrines of Shiva) and local temples. Later, return back to Indore. In the evening, enjoy Sarafa Bazar. Return back to the hotel. Overnight stay at Indore. (Advised to start early today)."], image: "/images/destinations/omkareshwar.png" },
      { day: 3, title: "Indore / Ujjain – Departure", activities: ["After breakfast, check out from the hotel and go for local sightseeing: Rajwada (Monday closed), Kaanch Mandir, Lal Bagh Palace, and the very famous Khajrana Ganesh Mandir. Or you can go for shopping. Later, you will drop at Ujjain railway station or Indore Airport/railway station."], image: "/images/destinations/madhya-pradesh.png" }
    ]
  },
  {
    slug: "wild-satpura-khajuraho-heritage-trail-9d",
    name: "Wild Satpura & Khajuraho Heritage Trail",
    duration: "8 Nights / 9 Days",
    location: "Bhopal - Sanchi - Gyaraspur - Bhimbetka - Pachmarhi - Satpura - Khajuraho",
    price: "26,500",
    originalPrice: "34,900",
    description: "A grand combination of heritage (Sanchi Stupas & Gyaraspur), hills (Pachmarhi), wildlife safari (Satpura Tiger Reserve), and iconic temple art at Khajuraho.",
    image: "/images/destinations/jabalpur.png",
    imageAlt: "Satpura National Park Wildlife Tiger Safari Madhya Pradesh",
    images: [
      "/images/destinations/jabalpur.png",
      "/images/destinations/khajuraho.png",
      "/images/destinations/pachmarhi.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrive Bhopal and Sightseeing", activities: ["Arrive at Bhopal Airport/Railway Station and check in to the hotel. After a restful halt, get ready for local sightseeing. Visit Gohar Mahal (a blend of Hindu and Mughal architecture), Shaukat Mahal (built as a royal wedding gift), Bharat Bhavan (multi-arts complex), the Mankind Museum showcasing India's cultural evolution, and the Tribal Museum highlighting tribal art and heritage. End your day with a serene evening at Upper Lake (Bhojtaal), adorned with a statue of Raja Bhoj."], image: "/images/destinations/madhya-pradesh.png" },
      { day: 2, title: "Bhopal – Sanchi – Gyaraspur – Bhopal", activities: ["After breakfast, head to Sanchi to visit the iconic Sanchi Stupas (a UNESCO World Heritage Site commissioned by Emperor Ashoka in the 3rd century BCE) and wander the ancient Udayagiri Caves. Continue to Gyaraspur to explore its historical temples: the majestic Maladevi Temple, Hindola Torna with intricate Vishnu carvings, and Bajramath Temple with its unique triple shrine design. Return to Bhopal by evening. Tip: A guide is recommended for Sanchi. Guests can opt for an early morning heritage walk in Bhopal at an additional cost."], image: "/images/destinations/madhya-pradesh.png" },
      { day: 3, title: "Bhopal – Bhimbetka – Pachmarhi", activities: ["After breakfast, depart for Pachmarhi. En route, visit Bhojpur Temple (an unfinished 11th-century marvel from the reign of King Bhoja, showcasing ancient temple construction techniques) and explore Bhimbetka (UNESCO World Heritage Site, home to over 750 rock shelters with prehistoric cave paintings dating back 10,000 years depicting Stone Age life). Arrive in Pachmarhi, check in to the hotel, and relax. Overnight stay in Pachmarhi."], image: "/images/destinations/pachmarhi.png" },
      { day: 4, title: "Pachmarhi Sightseeing by Gypsy", activities: ["After breakfast, enjoy a gypsy tour of Pachmarhi's top attractions. Visit the Bison Museum, showcasing local wildlife through life-sized sculptures. Explore the ancient uphill Pandava Caves, believed to be carved over 1,000 years ago. Discover the lovely Bee Fall, named for the buzzing sound it makes, and Reechgarh, a large natural cave. Finally, head to Dhoopgarh, the highest point in the Satpura Range, perfect for a spectacular sunset view of your dreams. Tip: Book a local gypsy in advance to avoid walking. Note: Second half of sightseeing is closed on Wednesdays for maintenance."], image: "/images/destinations/pachmarhi.png" },
      { day: 5, title: "Pachmarhi – Satpura", activities: ["After Breakfast, proceed to Satpura (approx. 5 to 6 hrs drive). Check in to the Hotel & relax. Overnight stay at Satpura Hotel."], image: "/images/destinations/jabalpur.png" },
      { day: 6, title: "Satpura Safari", activities: ["Enjoy early morning and afternoon safaris in Satpura National Park, known for its rich biodiversity and stunning views. The park is home to leopards, tigers, bears, wild boar, and a variety of birds including hornbills and peafowl. The lush flora features sal, teak, and medicinal plants. Note: Afternoon safaris are not conducted on Wednesdays."], image: "/images/destinations/jabalpur.png" },
      { day: 7, title: "Satpura – Khajuraho", activities: ["After an early breakfast, leave for Khajuraho (approx. 380 kms). Reach Khajuraho, check into the hotel, and in the evening attend the Sound and Light show. Overnight at Hotel."], image: "/images/destinations/khajuraho.png" },
      { day: 8, title: "Khajuraho Sightseeing", activities: ["Morning: Visit the Western Group of Temples, the most famous and largest group, including the Kandariya Mahadeva, Lakshmana, and Devi Jagadambi Temples. Afternoon: Explore the less crowded Eastern Group of Temples, which features both Hindu and Jain temples like the Brahma and Parsvanath temples, showcasing architectural diversity. Overnight stay in Khajuraho."], image: "/images/destinations/khajuraho.png" },
      { day: 9, title: "Departure", activities: ["Depending on your flight schedule, you can visit the local museum of Tribal and Folk Art or do some souvenir shopping in the market. Proceed to Khajuraho Civil Airport (HJR) for your onward journey."], image: "/images/destinations/khajuraho.png" }
    ]
  },
  {
    slug: "forts-temples-bundelkhand-gwalior-orchha-khajuraho-6d",
    name: "Forts & Temples of Bundelkhand",
    duration: "5 Nights / 6 Days",
    location: "Gwalior - Orchha - Khajuraho",
    price: "13,990",
    originalPrice: "18,500",
    description: "Explore the royal forts of Gwalior, the historic riverside temples of Orchha, and the legendary Khajuraho temples in Bundelkhand.",
    image: "/images/destinations/gwalior.png",
    imageAlt: "Gwalior Fort Madhya Pradesh Bundelkhand",
    images: [
      "/images/destinations/gwalior.png",
      "/images/destinations/khajuraho.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrival in Gwalior", activities: ["Arrive at Gwalior Airport/Railway Station and transfer to hotel. Explore Gwalior Fort (Man Mandir Palace, Sas Bahu Temple, Teli Ka Mandir), Jai Vilas Palace & Museum, Gujari Mahal, and Tansen Tomb. In the evening, enjoy the Light and Sound Show at Gwalior Fort. Overnight stay in Gwalior."], image: "/images/destinations/gwalior.png" },
      { day: 2, title: "Gwalior to Orchha", activities: ["Travel from Gwalior to Orchha (approx. 120 km). En route, you may opt to visit Pitambara Peeth at Datia or Jhansi Fort. Check into hotel at Orchha and spend a serene evening by the Betwa River banks. Overnight stay in Orchha."], image: "/images/destinations/gwalior.png" },
      { day: 3, title: "Orchha Local Sightseeing", activities: ["Explore Orchha Fort Complex (Jahangir Mahal, Raj Mahal, Rai Parveen Mahal). Visit the towering Chaturbhuj Temple, Ram Raja Temple (where Rama is worshipped as a King), and the Royal Chhatris (cenotaphs) along the river. Overnight stay in Orchha."], image: "/images/destinations/gwalior.png" },
      { day: 4, title: "Orchha to Khajuraho", activities: ["Depart for Khajuraho (approx. 170 km, 3.5 hrs). Check into your hotel and spend the afternoon at leisure or exploring the local markets. Overnight stay in Khajuraho."], image: "/images/destinations/khajuraho.png" },
      { day: 5, title: "Khajuraho Temple Tour", activities: ["Dedicate the day to the UNESCO World Heritage Site of Khajuraho. Tour the Western Group of Temples (Kandariya Mahadeva, Lakshmana, Devi Jagadamba). In the evening, enjoy the Sound and Light show. Overnight stay in Khajuraho."], image: "/images/destinations/khajuraho.png" },
      { day: 6, title: "Departure from Khajuraho", activities: ["After breakfast, visit the local museum of Tribal and Folk Art, do some souvenir shopping, and transfer to Khajuraho Civil Airport or Railway Station for departure."], image: "/images/destinations/khajuraho.png" }
    ]
  },
  {
    slug: "madhya-pradesh-tiger-safari-special-6d",
    name: "Madhya Pradesh Tiger Safari Special",
    duration: "5 Nights / 6 Days",
    location: "Jabalpur - Bandhavgarh - Kanha",
    price: "19,500",
    originalPrice: "25,000",
    description: "An unforgettable wildlife yatra to Kanha and Bandhavgarh National Parks, starting from Jabalpur with Bhedaghat Marble Rocks excursion.",
    image: "/images/destinations/jabalpur.png",
    imageAlt: "Bengal Tiger in Wildlife Sanctuary Madhya Pradesh",
    images: [
      "/images/destinations/jabalpur.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Jabalpur Arrival & Transfer to Bandhavgarh", activities: ["Pickup from Jabalpur Airport/Railway Station and proceed to Bandhavgarh National Park (approx. 190 km, 4 hours drive). Check into your resort and enjoy a peaceful evening. Overnight stay at Bandhavgarh."], image: "/images/destinations/jabalpur.png" },
      { day: 2, title: "Bandhavgarh National Park Jungle Safari", activities: ["Embark on early morning and afternoon jungle safaris by open Gypsy to spot Royal Bengal Tigers, leopards, sambar deer, and diverse bird species. Enjoy the tranquil wilderness. Overnight stay at Bandhavgarh."], image: "/images/destinations/jabalpur.png" },
      { day: 3, title: "Bandhavgarh to Kanha National Park", activities: ["After breakfast, check out from the resort and drive to Kanha National Park (approx. 240 km, 5.5 hours drive), famous as the setting for Rudyard Kipling's Jungle Book. Arrive and check into your wildlife lodge. Relax for the evening. Overnight stay at Kanha."], image: "/images/destinations/jabalpur.png" },
      { day: 4, title: "Kanha National Park Jungle Safari", activities: ["Full day of wildlife exploration. Morning and evening jungle safaris in open Gypsies to spot leopards, wild dogs, gaurs, and the rare Barasingha (swamp deer). Overnight stay at Kanha."], image: "/images/destinations/jabalpur.png" },
      { day: 5, title: "Kanha to Jabalpur – Bhedaghat Excursion", activities: ["Check out after breakfast and drive to Jabalpur. On arrival, visit Bhedaghat (20 km from Jabalpur) to see the soaring Marble Rocks canyon along the Narmada River and the magnificent Dhuandhar Falls. Take a scenic boat ride. Overnight stay in Jabalpur."], image: "/images/destinations/jabalpur.png" },
      { day: 6, title: "Jabalpur Departure", activities: ["After breakfast, checkout from the hotel and transfer to Jabalpur Airport or Railway Station for your onward journey back home."], image: "/images/destinations/jabalpur.png" }
    ]
  },
  {
    slug: "pachmarhi-wildlife-nature-special-5d",
    name: "Pachmarhi Wildlife & Nature Special",
    duration: "4 Nights / 5 Days",
    location: "Pachmarhi - Satpura Madhai",
    price: "12,900",
    originalPrice: "16,500",
    description: "Explore the scenic viewpoints and cascading waterfalls of Pachmarhi hill station, combined with a peaceful wildlife retreat in Satpura.",
    image: "/images/destinations/pachmarhi.png",
    imageAlt: "Bee Falls Waterfall Pachmarhi Madhya Pradesh",
    images: [
      "/images/destinations/pachmarhi.png",
      "/images/destinations/jabalpur.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Pipariya / Bhopal to Pachmarhi", activities: ["Arrive at Pipariya Railway station / Bhopal Airport, and proceed to Pachmarhi (the queen of Satpura). Check into your hotel and enjoy the sunset at Dhoopgarh, the highest point in central India. Overnight stay in Pachmarhi."], image: "/images/destinations/pachmarhi.png" },
      { day: 2, title: "Pachmarhi Local Sightseeing", activities: ["After breakfast, enjoy a full day of sightseeing in Pachmarhi. Visit the ancient uphill Pandava Caves, explore the Bison Museum, discover the cascading Bee Fall, and wander Reechgarh natural caves. Overnight stay in Pachmarhi."], image: "/images/destinations/pachmarhi.png" },
      { day: 3, title: "Jata Shankar & Scenic Canyons", activities: ["Visit the Jata Shankar Cave Temple, dedicated to Lord Shiva and tucked inside a natural limestone cave. Later, visit Handi Khoh (a deep, forested ravine) and explore the scenic trails leading to Duchess Fall. Overnight stay in Pachmarhi."], image: "/images/destinations/pachmarhi.png" },
      { day: 4, title: "Pachmarhi to Satpura Tiger Reserve (Madhai)", activities: ["Check out and drive to Madhai, the entry gateway for Satpura Tiger Reserve. Check into your resort. Spend a serene afternoon enjoying a boat ride on the Denwa River or a nature walk in the buffer area. Overnight stay in Madhai."], image: "/images/destinations/jabalpur.png" },
      { day: 5, title: "Morning Safari & Departure", activities: ["Embark on an early morning jungle safari to spot leopards, slot bears, and wild dogs. Return for checkout and transfer to Pipariya Railway Station or Bhopal Airport for departure."], image: "/images/destinations/jabalpur.png" }
    ]
  },
  {
    slug: "kanha-wildlife-jabalpur-tour-5d",
    name: "Kanhaji Wildlife & Jabalpur Tour",
    duration: "4 Nights / 5 Days",
    location: "Jabalpur - Kanha - Bandhavgarh",
    price: "17,800",
    originalPrice: "23,000",
    description: "Witness the majestic Royal Bengal Tiger at Kanha National Park and explore the breathtaking Marble Rocks of Bhedaghat in Jabalpur.",
    image: "/images/destinations/jabalpur.png",
    imageAlt: "Marble Rocks Bhedaghat Gorge Jabalpur Madhya Pradesh",
    images: [
      "/images/destinations/jabalpur.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrive Jabalpur & Bhedaghat", activities: ["Arrive at Jabalpur and transfer to Bhedaghat. Explore the breathtaking Marble Rocks canyon on Narmada River, witness Dhuandhar Falls, and visit the historic Chausath Yogini Temple. Overnight stay at Jabalpur."], image: "/images/destinations/jabalpur.png" },
      { day: 2, title: "Jabalpur to Kanha National Park", activities: ["Checkout and drive to Kanha National Park (approx. 160 km, 4 hrs). Check into your safari lodge. Spend the evening enjoying nature walks or local tribal folk dances. Overnight stay at Kanha."], image: "/images/destinations/jabalpur.png" },
      { day: 3, title: "Kanha Jungle Safaris", activities: ["Take morning and afternoon open-Gypsy safaris in Kanha Tiger Reserve to spot Royal Bengal Tigers, leopards, slot bears, and the rare hardground Barasingha. Overnight stay at Kanha."], image: "/images/destinations/jabalpur.png" },
      { day: 4, title: "Kanha to Bandhavgarh Tiger Reserve", activities: ["After breakfast, check out and drive to Bandhavgarh National Park (approx. 220 km, 5.5 hrs). Check into your lodge. Spend a relaxed evening in the wilderness. Overnight stay at Bandhavgarh."], image: "/images/destinations/jabalpur.png" },
      { day: 5, title: "Bandhavgarh Safari & Jabalpur Drop", activities: ["Enjoy a morning safari at Bandhavgarh to spot tigers and wildlife. Return to the lodge for check-out and transfer to Jabalpur Airport/Railway Station for departure."], image: "/images/destinations/jabalpur.png" }
    ]
  },
  {
    slug: "madhya-pradesh-pilgrimage-ujjain-omkareshwar-maheshwar-5d",
    name: "Madhya Pradesh Pilgrimage Tour",
    duration: "4 Nights / 5 Days",
    location: "Ujjain - Omkareshwar - Maheshwar - Indore",
    price: "11,500",
    originalPrice: "15,500",
    description: "Embark on a divine circuit covering Ujjain Mahakal Lok, Omkareshwar Jyotirlinga, the heritage Ghats of Maheshwar, and Indore.",
    image: "/images/destinations/ujjain.png",
    imageAlt: "Mahakaleshwar Temple Darshan Ujjain",
    images: [
      "/images/destinations/ujjain.png",
      "/images/destinations/omkareshwar.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Indore to Ujjain Arrival", activities: ["Pickup from Indore Airport/Railway Station and transfer to Ujjain. Check into your hotel. Visit the holy Mahakaleshwar Temple (one of the 12 Jyotirlingas) and the newly built Mahakal Lok Corridor. Overnight stay at Ujjain."], image: "/images/destinations/ujjain.png" },
      { day: 2, title: "Ujjain Sightseeing to Indore", activities: ["Explore local Ujjain temples: Harsiddhi Temple, Kal Bhairav, and Mangalnath. In the afternoon, transfer to Indore. Evening visit to the famous Sarafa Bazar street food market. Overnight stay at Indore."], image: "/images/destinations/ujjain.png" },
      { day: 3, title: "Indore to Omkareshwar", activities: ["After breakfast, proceed to Omkareshwar. Check into your hotel. Take a holy boat ride on the Narmada River and attend Darshan at the Omkareshwar and Mamleshwar Jyotirlinga temples. Overnight stay at Omkareshwar."], image: "/images/destinations/omkareshwar.png" },
      { day: 4, title: "Omkareshwar to Maheshwar", activities: ["Proceed to the heritage town of Maheshwar. Explore the magnificent Ahilya Fort, walk along the Narmada river ghats, and see the traditional Maheshwari handloom weavers at work. Overnight stay at Maheshwar."], image: "/images/destinations/omkareshwar.png" },
      { day: 5, title: "Indore Departure Drop", activities: ["Check out after breakfast and drive back to Indore. Get assisted for transfer to Indore Airport or Railway Station for your onward journey."], image: "/images/destinations/ujjain.png" }
    ]
  },
  {
    slug: "heart-of-heritage-gwalior-jhansi-orchha-4d",
    name: "Heart of Heritage (Gwalior, Jhansi & Orchha)",
    duration: "3 Nights / 4 Days",
    location: "Gwalior - Jhansi - Orchha",
    price: "9,990",
    originalPrice: "12,990",
    description: "Relive the legendary tales of Bundelkhand by exploring Gwalior Fort, Rani Jhansi Fort, and the exquisite temples of Orchha by the Betwa River.",
    image: "/images/destinations/gwalior.png",
    imageAlt: "Jahangir Mahal Orchha Fort Madhya Pradesh",
    images: [
      "/images/destinations/gwalior.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Arrive Gwalior & Sightseeing", activities: ["Pickup on arrival and transfer to hotel. Explore the majestic Gwalior Fort (Sas Bahu Temple, Teli Ka Mandir), the grand Jai Vilas Palace Museum, and the historic Tansen Tomb. Overnight stay at Gwalior."], image: "/images/destinations/gwalior.png" },
      { day: 2, title: "Gwalior to Jhansi & Orchha", activities: ["Checkout and drive to Jhansi to visit the Jhansi Fort of Rani Laxmibai. Continue to Orchha, check into the hotel, and spend a serene evening by the Betwa River. Overnight stay at Orchha."], image: "/images/destinations/gwalior.png" },
      { day: 3, title: "Orchha Local Sightseeing", activities: ["Explore the Orchha Fort Complex containing Jahangir Mahal, Raj Mahal, and Rai Parveen Mahal. Later, visit the towering Chaturbhuj Temple and the Ram Raja Temple. Overnight stay at Orchha."], image: "/images/destinations/gwalior.png" },
      { day: 4, title: "Orchha to Gwalior / Jhansi Drop", activities: ["Check out after breakfast. Drive to Gwalior Airport or Jhansi Railway Station for your departure back home."], image: "/images/destinations/gwalior.png" }
    ]
  },
  {
    slug: "wild-tiger-trail-bandhavgarh-panna-khajuraho-6d",
    name: "Wild Tiger Trail & Khajuraho Heritage",
    duration: "5 Nights / 6 Days",
    location: "Bandhavgarh - Panna - Khajuraho",
    price: "19,900",
    originalPrice: "26,500",
    description: "An amazing trip combining the dense tiger jungles of Bandhavgarh, Panna National Park safaris, and the erotic temple art of Khajuraho.",
    image: "/images/destinations/khajuraho.png",
    imageAlt: "Western Group of Temples Khajuraho",
    images: [
      "/images/destinations/khajuraho.png",
      "/images/destinations/jabalpur.png"
    ],
    inclusions: ["Arrival/Departure Assistance", "Hotel Accommodation (Breakfast)", "Private AC Vehicle", "Toll, Parking, Driver Allowance"],
    itinerary: [
      { day: 1, title: "Jabalpur to Bandhavgarh Tiger Reserve", activities: ["Arrive at Jabalpur Airport/Railway Station and transfer to Bandhavgarh National Park. Check into your resort and enjoy a relaxing evening. Overnight stay at Bandhavgarh."], image: "/images/destinations/jabalpur.png" },
      { day: 2, title: "Bandhavgarh Jungle Safaris", activities: ["Embark on morning and afternoon open-Gypsy safaris in the reserve to spot tigers, leopards, and rich birdlife. Explore the pristine forest. Overnight stay at Bandhavgarh."], image: "/images/destinations/jabalpur.png" },
      { day: 3, title: "Bandhavgarh to Panna Tiger Reserve", activities: ["Checkout and drive to Panna Tiger Reserve (approx. 200 km, 4.5 hrs). Check into your wildlife lodge. Relax for the evening. Overnight stay at Panna."], image: "/images/destinations/jabalpur.png" },
      { day: 4, title: "Panna Safari to Khajuraho", activities: ["Enjoy a morning safari inside Panna National Park. Later, check out and drive to Khajuraho (approx. 45 km). Check in and attend the evening Sound & Light show. Overnight stay at Khajuraho."], image: "/images/destinations/khajuraho.png" },
      { day: 5, title: "Khajuraho Temple Tour", activities: ["Visit the UNESCO World Heritage Western Group of Temples (Kandariya Mahadeva, Lakshmana, Devi Jagadamba). Later, explore the Eastern Group. Overnight stay at Khajuraho."], image: "/images/destinations/khajuraho.png" },
      { day: 6, title: "Departure from Khajuraho", activities: ["Check out after breakfast. Savor lunch at the hotel, visit the local museum, and transfer to Khajuraho Civil Airport or Railway Station for departure."], image: "/images/destinations/khajuraho.png" }
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
