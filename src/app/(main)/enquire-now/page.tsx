"use client";

import { useState } from 'react';

export default function EnquireNow() {
  const [formData, setFormData] = useState({
    startDate: '',
    duration: '',
    adults: '',
    children: '',
    accommodation: '3 Star Hotel',
    package: 'Varanasi & Ayodhya Divine Tour (3N/4D)',
    budget: '20,000',
    extraInfo: '',
    fullName: '',
    email: '',
    whatsappNumber: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `Hello Varanasi Ayodhya, I would like to enquire about a trip:
    
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- WhatsApp No: ${formData.whatsappNumber}
- City: ${formData.city}
- Tour Start Date: ${formData.startDate}
- Duration: ${formData.duration} days
- People: ${formData.adults} Adults, ${formData.children} Children
- Accommodation: ${formData.accommodation}
- Interested In: ${formData.package}
- Budget: ₹${formData.budget}
- Extra Info: ${formData.extraInfo}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919999995475?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <main>

      <section style={{
        height: '40vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://varanasiayodhya.com/wp-content/uploads/2024/02/ayodhya-temple.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingTop: '80px',
        textAlign: 'center'
      }}>
        <p className="dancing-script" style={{ fontSize: '1.5rem' }}>Ayodhya • Varanasi • Prayagraj • Chitrakoot</p>
        <h1 style={{ fontSize: '3rem' }}>Enquire for Kashi Ayodhya Tour Packages</h1>
      </section>

      <section className="section-padding container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: 'var(--primary-orange)', fontWeight: 'bold' }}>TO GET THE BEST DEALS, JUST</p>
          <h2 style={{ fontSize: '2.5rem' }}>Fill The Form Below</h2>
          <p style={{ color: '#666' }}>Fill out the form completely. Our Team will get in touch very soon!</p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '25px', color: 'var(--primary-orange)' }}>Plan Your Trip</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tour Start Date</label>
                <input type="date" name="startDate" required value={formData.startDate} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tour Duration (in days)</label>
                <input type="number" name="duration" placeholder="Number of days" value={formData.duration} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Number of Adults</label>
                <input type="number" name="adults" placeholder="Number of Adults" value={formData.adults} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Accommodation Type</label>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {['3 Star Hotel', '4 Star Hotel', '5 Star Hotel'].map(type => (
                  <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="accommodation" value={type} checked={formData.accommodation === type} onChange={handleChange} />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Interested In</label>
              <select name="package" value={formData.package} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}>
                <option>Varanasi & Prayagraj Tour (2N/3D)</option>
                <option>Varanasi & Gaya Spiritual Tour (3N/4D)</option>
                <option>Varanasi & Prayagraj Stay Tour (3N/4D)</option>
                <option>Varanasi & Ayodhya Divine Tour (3N/4D)</option>
                <option>Gaya Varanasi & Prayagraj Tour (4N/5D)</option>
                <option>Varanasi Sarnath Prayagraj & Ayodhya (4N/5D)</option>
                <option>Prayagraj Sacred Tour (2N/3D)</option>
                <option>Lucknow & Ayodhya Heritage Tour (2N/3D)</option>
                <option>Ayodhya Ram Janmabhoomi Special (2N/3D)</option>
                <option>Grand North India Spiritual Circuit (5N/6D)</option>
                <option>Spiritual Triangle & Taj Mahal Grand Tour (6N/7D)</option>
                <option>Ultimate Spiritual Heritage Circuit (6N/7D)</option>
                <option>Divine Brij to Kashi Mahayatra (8N/9D)</option>
                <option>Brij to Ayodhya Heritage Trail (5N/6D)</option>
                <option>Customized Tour Plan</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name</label>
                <input type="text" name="fullName" required placeholder="Enter Your Name" value={formData.fullName} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>WhatsApp Number</label>
                <input type="tel" name="whatsappNumber" required placeholder="Enter Your Number" value={formData.whatsappNumber} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
            </div>

            <button type="submit" style={{
              width: '100%',
              backgroundColor: '#e31e24',
              color: 'white',
              padding: '15px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}>Get Free Quote Now</button>
          </form>
        </div>
      </section>

    </main>
  );
}
