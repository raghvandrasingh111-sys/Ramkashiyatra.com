export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string;
  category: string;
  tags: string[];
  relatedPackages?: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: 'best-time-to-visit-kashi-and-ayodhya',
    title: 'Best Time to Visit Kashi and Ayodhya: A 2026 Seasonal Guide',
    excerpt: 'Plan your spiritual journey with our comprehensive guide on weather, festivals, and the best months to experience the divinity of Varanasi and Ayodhya.',
    date: 'March 22, 2026',
    author: 'Luxury Trip India Editorial',
    image: 'https://images.unsplash.com/photo-1736568763844-2063f7761462?auto=format&fit=crop&q=80&w=1200',
    category: 'Travel Guide',
    tags: ['Best Time', 'Varanasi', 'Ayodhya', 'Planning'],
    relatedPackages: ['varanasi-ayodhya-divine-3n-4d', 'spiritual-varanasi-prayagraj-ayodhya-lucknow-agra-7d'],
    content: `
      <p>Deciding the <strong>best time to visit Kashi and Ayodhya</strong> is the first step toward a successful pilgrimage. Both cities carry a unique energy that shifts with the seasons and the Hindu lunar calendar.</p>
      
      <h3>Winter (October to March): The Peak Season</h3>
      <p>Undoubtedly, the winter months are the most pleasant for exploring the narrow alleys of Varanasi and the expansive temple complexes of Ayodhya. The temperatures range from 5°C to 15°C, making day-long sightseeing comfortable. This is also the season for major festivals like Dev Deepawali in Kashi, where every ghat is lit with millions of diyas.</p>
      
      <h3>Summer (April to June): The Spiritual Retreat</h3>
      <p>Summers in Uttar Pradesh can be intense, with temperatures often crossing 40°C. However, for those seeking fewer crowds and a more meditative experience, this can be an ideal time. We recommend scheduling temple visits for early mornings and late evenings.</p>
      
      <h3>Monsoon (July to September): The Vedic Vibe</h3>
      <p>The rains bring a lush, green beauty to the banks of the Sarayu in Ayodhya. While the Ganga levels in Varanasi may prevent boat rides during heavy rains, the atmosphere remains profoundly spiritual. The sound of rain against ancient temple walls creates a Vedic ambiance like no other.</p>
      
      <p>For more details on specific tours during these seasons, check out our <a href="/tour-packages/varanasi-ayodhya-divine-3n-4d">Varanasi & Ayodhya Divine Tour</a>.</p>
    `
  },
  {
    slug: 'vip-darshan-kashi-vishwanath-complete-guide',
    title: 'VIP Darshan in Kashi Vishwanath: Complete 2026 Booking & Entry Guide',
    excerpt: 'Navigating the crowds at Kashi Vishwanath can be daunting. Learn how to book VIP Suprabhatam Aarti and Sugam Darshan for a seamless spiritual experience.',
    date: 'March 20, 2026',
    author: 'Spiritual Guide Team',
    image: 'https://images.unsplash.com/photo-1598977123418-45454533746a?auto=format&fit=crop&q=80&w=1200',
    category: 'Temple Guide',
    tags: ['Kashi Vishwanath', 'VIP Darshan', 'Booking', 'FAQ'],
    relatedPackages: ['varanasi-prayagraj-tour-2n-3d', 'varanasi-gaya-spiritual-tour-3n-4d'],
    content: `
      <p>The Kashi Vishwanath Temple is the soul of Varanasi. To ensure every devotee has a peaceful experience, the temple trust offers various <strong>VIP Darshan</strong> and Aarti booking options.</p>
      
      <h3>What is Sugam Darshan?</h3>
      <p>Sugam Darshan is a special ticketing service that allows devotees to enter through a dedicated queue, significantly reducing wait times. It is particularly helpful for senior citizens and those on a tight schedule. You can book this through the official temple website or our <a href="/tour-packages/varanasi-prayagraj-tour-2n-3d">Kashi Vishwanath VIP Packages</a>.</p>
      
      <h3>Booking the Mangala Aarti</h3>
      <p>The most sacred experience is the Mangala Aarti, performed before dawn. Tickets are limited and should be booked at least 15-30 days in advance. Our team specializes in securing these rare slots as part of our premium spiritual itineraries.</p>
    `
  },
  {
    slug: 'ayodhya-ram-mandir-travel-guide-2026',
    title: 'Ayodhya Ram Mandir Travel Guide 2026: Everything You Need to Know',
    excerpt: 'Stay updated with the latest Darshan timings, entry rules, and must-visit spots in the newly transformed city of Ayodhya.',
    date: 'March 18, 2026',
    author: 'Ayodhya Expert',
    image: 'https://images.unsplash.com/photo-1706169599121-4182eb12fbef?auto=format&fit=crop&q=80&w=1200',
    category: 'Spiritual News',
    tags: ['Ram Mandir', 'Ayodhya', 'Guide', '2026'],
    relatedPackages: ['ayodhya-ram-janmabhoomi-tour-package-2n-3d', 'lucknow-ayodhya-tour-package-2n-3d'],
    content: `
      <p>The Shri Ram Janmabhoomi Mandir has transformed <strong>Ayodhya</strong> into a global spiritual beacon. Planning a visit in 2026 requires an understanding of the new site layout and security protocols.</p>
      
      <h3>Darshan Timings and Slots</h3>
      <p>General Darshan is open from 6:30 AM to 9:30 PM. We recommend reaching the entry point by 7:00 AM for the smoothest experience. Electronic items, including mobile phones, are strictly prohibited inside the main complex but secure lockers are provided.</p>
      
      <h3>Must-Visit Beyond the Main Temple</h3>
      <p>While the Ram Mandir is the highlight, do not miss Hanuman Garhi, where it is traditional to offer prayers before visiting Lord Ram, and the Kanak Bhawan, known for its divine architecture and idols.</p>
      <p>View our specialized <a href="/tour-packages/ayodhya-ram-janmabhoomi-tour-package-2n-3d">Ayodhya Ram Janmabhoomi Special Tour</a> for a comprehensive experience.</p>
    `
  }
];
