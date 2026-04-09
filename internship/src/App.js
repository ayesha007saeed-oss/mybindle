import React, { useState } from 'react';
import phoneMockup from './assets/phone-mockup-1.png';
import logo from './assets/mybindle-logo.png';
import plissoverPhone from './assets/plissoverPhone.png';
// Reusable Components
// const FeatureRow = ({ icon, title, desc }) => (
//   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-start gap-4 mb-4 hover:shadow-md transition-shadow text-left">
//     <span className="text-2xl pt-1">{icon}</span>
//     <div>
//       <h4 className="font-bold text-gray-800">{title}</h4>
//       <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

const TestimonialCard = ({ name, country, text, rating }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 flex flex-col h-full text-left">
    <div className="flex text-yellow-400 mb-3 text-sm">
      {[...Array(rating)].map((_, i) => <span key={i}>★</span>)}
    </div>
    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed italic">"{text}"</p>
    <div className="flex items-center gap-3 pt-4 border-t mt-auto">
      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
        <img src={`https://ui-avatars.com/api/?name=${name}&background=random`} alt={name} />
      </div>
      <div>
        <h4 className="font-bold text-xs text-gray-900">{name}</h4>
        <p className="text-[10px] text-gray-400 font-medium">{country}</p>
      </div>
    </div>
  </div>
);

function App() {
  const [showAll, setShowAll] = useState(false);

  // Consolidated testimonial data including the 3 new comments
  const allTestimonials = [
    { name: "Emily R", country: "USA", rating: 5, text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth!" },
    { name: "Amit K", country: "India", rating: 5, text: "Finally, a social network that understands what I need! The privacy features are a game-changer." },
    { name: "Sophie M", country: "UK", rating: 5, text: "I joined just to explore, but now I can't imagine my day without it. The chat is amazing." },
    { name: "Javier L", country: "Spain", rating: 5, text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand" },
    { name: "Lucas T", country: "Brazil", rating: 5, text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!" },
    { name: "Nora S", country: "Canada", rating: 5, text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense" },
    // Re-adding original placeholders to fill the grid if needed
    { name: "Liam W", country: "Australia", rating: 5, text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones." },
    { name: "Elena G", country: "Italy", rating: 5, text: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless." },
    { name: "Marcus J", country: "Germany", rating: 5, text: "The community engagement here is unlike any other site. I feel like I've actually found my people!" }
  ];

  return (
    <div className="bg-white overflow-hidden">
{/* 1. MAIN HERO SECTION */}
<section className="bg-[#FF5A4D] text-white py-12 lg:py-24 px-6 lg:px-24 flex flex-col items-center">
  
  {/* Top Logo and Name - INCREASED SIZE */}
  <div className="flex items-center gap-3 mb-16">
    {/* Using w-16 h-16 to make the logo larger */}
    <img src={logo} alt="MyBindle Logo" className="w-16 h-16 object-contain" />
    <span className="text-3xl font-bold tracking-tight">MyBindle</span>
  </div>

  <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
    
    {/* Left Side: Content */}
    <div className="max-w-xl text-center lg:text-left mb-16 lg:mb-0">
      <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
        Stay Connected <br/> Stay Social <br/> Stay You!
      </h1>
      <p className="mb-10 opacity-90 text-lg leading-relaxed">
        A place where friendships grow, communities thrive, and moments turn 
        into unforgettable experiences. Whether you're looking to reconnect with 
        old friends, build new relationships, or share what matters most to you – 
        MyBindle is your home on the internet.
      </p>
      <button className="bg-white text-[#FF5A4D] px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform">
        Get Started
      </button>
    </div>

    {/* Right Side: Phone with Floating Badges */}
    <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
      
      {/* Badge 1: Top Left - MOVED LOWER using top-20 */}
      <div className="absolute -left-12 top-20 z-10 bg-white text-black px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce-slow">
        <span className="text-xl">🔥</span>
        <span className="font-bold text-sm">Seamless Connections</span>
      </div>

      {/* Phone Image - Keeps previous responsive sizing */}
      <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] z-0">
        <img 
          src={phoneMockup} 
          alt="App UI" 
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
        />
      </div>

      {/* Badge 2: Bottom Right - UNCHANGED */}
      <div className="absolute -right-8 bottom-20 z-10 bg-white text-black px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-pulse-slow">
        <span className="text-xl">🌎</span>
        <span className="font-bold text-sm">Discover & Explore</span>
      </div>

    </div>
  </div>
</section>

{/* 2. FEATURES SECTION */}
<section className="bg-gray-50 py-20 px-6 lg:px-24">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading Section */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Features That Keep You Hooked!
      </h2>
      <p className="text-gray-600 font-medium text-lg">
        Meet, Chat, Share – Anytime, Anywhere!
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>🔥</span> Seamless Connections
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Stay in touch with friends, family, and like-minded people with just a tap.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>📸</span> Share Your Story
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Upload photos, videos, and updates to let the world know what's happening in your life.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>💬</span> Real-Time Chat
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>🔒</span> Privacy First
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Your data, your control. We prioritize your privacy with world-class security.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>🌎</span> Discover & Explore
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Find trending content, join communities, and follow pages that match your interests.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>💼</span> Grow Your Business
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Use our platform to market your brand, connect with customers, and build meaningful relationships.
        </p>
      </div>

    </div>
  </div>
</section>

     {/* 2. MOBILE DUAL SECTION */}
<section className="py-24 px-6 lg:px-24 bg-gray-50 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
  
  {/* Left Side: Dual Floating Phone Images */}
  <div className="relative flex-1 flex items-center justify-center pt-20 pb-16 lg:pb-0">
    
    {/* Background Glow (unchanged from your original) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF5A4D] rounded-full opacity-20 blur-3xl z-0"></div>

    {/* The Frame to hold both images and scale them responsively */}
    <div className="relative w-[300px] sm:w-[350px] md:w-[400px] z-10 aspect-[3/4]">
      
      {/* 1. Back/Bottom Image (Niche wali picture) */}
      <img 
        src={plissoverPhone} 
        alt="Phone Back View" 
        className="absolute w-[80%] h-auto bottom-0 left-0 -rotate-[15deg] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-0 block" 
      />
      
      {/* 2. Front/Top Image (Uper wali picture) */}
      <img 
        src={plissoverPhone} 
        alt="Phone Front View" 
        className="absolute w-[80%] h-auto top-0 right-0 rotate-[10deg] shadow-[0_35px_70px_-15px_rgba(0,0,0,0.6)] z-10 border-4 border-white rounded-[2rem] block" 
        style={{clipPath: 'inset(1px 1px 1px 1px round 1.8rem)'}} /* Extra smoothness for the inner border */
      />
      
    </div>
  </div>

  {/* Right Side: Text Content (mostly unchanged from original) */}
  <div className="text-left flex-1 max-w-xl">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
      Where Every Click Sparks a Connection!
    </h2>
    <p className="text-gray-500 mb-10 leading-relaxed">
      A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
    </p>
    
    <div className="space-y-6">
      {/* If FeatureRow is a component, use it as before, or write it inline: */}
      
      {/* Short Videos */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
        <span className="text-2xl mt-1">🎥</span>
        <div>
          <h4 className="font-bold text-gray-900">Short Videos & Reels</h4>
          <p className="text-gray-600 text-sm">Share engaging, bite-sized content that keeps everyone entertained.</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
        <span className="text-2xl mt-1">🔔</span>
        <div>
          <h4 className="font-bold text-gray-900">Smart Notifications</h4>
          <p className="text-gray-600 text-sm">Stay updated on what matters without the noise.</p>
        </div>
      </div>

      {/* Communities */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
        <span className="text-2xl mt-1">👥</span>
        <div>
          <h4 className="font-bold text-gray-900">Interest-Based Communities</h4>
          <p className="text-gray-600 text-sm">Join groups and discussions that match your passion.</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* 4. INSTALLATION STEPS SECTION */}
<section className="bg-gray-50 py-20 px-6 lg:px-24 text-center">
  <div className="max-w-4xl mx-auto">
    {/* Heading Section */}
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How to Install Our App</h2>
    <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
      Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
    </p>

    {/* Steps Grid */}
    <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
      
      {/* Horizontal Line (Only visible on desktop) */}
      <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gray-300 z-0"></div>

      {/* Step 01 */}
      <div className="relative z-10 flex flex-col items-center flex-1 px-4">
        <div className="bg-white text-[#FF5A4D] text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full mb-6 shadow-sm border border-gray-100">
          01
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full min-h-[160px] flex flex-col justify-center transition-transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Download</h3>
          <p className="text-gray-500 text-sm">Open Play Store or App Store</p>
        </div>
      </div>

      {/* Step 02 */}
      <div className="relative z-10 flex flex-col items-center flex-1 px-4">
        <div className="bg-white text-gray-900 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full mb-6 shadow-sm border border-gray-100">
          02
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full min-h-[160px] flex flex-col justify-center transition-transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Install App</h3>
          <p className="text-gray-500 text-sm">The app will install automatically.</p>
        </div>
      </div>

      {/* Step 03 */}
      <div className="relative z-10 flex flex-col items-center flex-1 px-4">
        <div className="bg-white text-gray-900 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full mb-6 shadow-sm border border-gray-100">
          03
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full min-h-[160px] flex flex-col justify-center transition-transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Ready to Use</h3>
          <p className="text-gray-500 text-sm">Sign up or log in to start exploring!</p>
        </div>
      </div>

    </div>
  </div>
</section>


     {/* 3. DONATION BANNER - UPDATED TO INCLUDE SCREENS */}
      <section className="px-6 lg:px-24 py-10">
        <div className="bg-[#FF5A4D] rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden">
          <div className="z-10 max-w-lg text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Be the Reason Someone Smiles Today!</h2>
            <p className="opacity-90 mb-8 leading-relaxed">Your generosity can change lives—every donation brings hope, support, and a brighter future. Give today and make a difference!</p>
            <button className="bg-white text-[#FF5A4D] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">Donate Now</button>
          </div>
          
          {/* UPDATED RIGHT SIDE: Dual Phone Display */}
          <div className="mt-10 lg:mt-0 z-10 relative flex flex-row items-end -mr-16 lg:-mr-32">
            
            {/* First Phone (Foreground - Profile and Gems) */}
            <div className="bg-white border-[10px] border-gray-900 rounded-[2rem] w-[260px] h-[520px] shadow-2xl z-20 overflow-hidden text-black p-5 flex flex-col items-center">
              
              {/* Phone Status Bar/Notch */}
              <div className="w-full h-6 flex justify-between items-center px-2 mb-4">
                <div className="text-xs font-semibold">10:03</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Top Icons */}
              <div className="w-full flex justify-between px-3 mb-6">
                <span className="text-2xl font-black">☰</span>
                <span className="text-2xl font-black text-[#FF5A4D]">×</span>
                <div className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden">
                  {/* Small Profile Pic */}
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=30&h=30&auto=format&fit=crop" alt="User" />
                </div>
              </div>

              {/* Gem Heart */}
              <div className="mb-10 scale-125">
                 💎❤️💎<br/>
                 ❤️💎❤️<br/>
                 💎❤️💎
              </div>

              {/* Thank You Text */}
              <div className="text-center mt-auto">
                <p className="text-lg font-bold text-[#FF5A4D]">Thank You!</p>
                <p className="text-sm">John, You Are A Very Humble Person!</p>
              </div>
            </div>

            {/* Second Phone (Background/Offset - Payment Methods) */}
            <div className="bg-white border-[10px] border-gray-900 rounded-[2rem] w-[260px] h-[520px] shadow-xl ml-[-100px] mb-[-40px] z-10 overflow-hidden text-black p-5 flex flex-col">
              
              {/* Top Section */}
              <div className="w-full flex justify-between p-3 mb-6">
                <span className="text-lg">←</span>
                <div className="text-xs">
                  <p>...<br/>Settings</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden invisible"></div>
              </div>

              {/* Payment Methods Title */}
              <div className="text-lg font-bold mb-6 mt-4">Payment Methods</div>

              {/* Payment Grid */}
              <div className="grid grid-cols-2 gap-4">
                {['PayPal', 'Bank Transfer', 'Amex', 'Apple Pay', 'Mastercard', 'Visa'].map(method => (
                  <div key={method} className="bg-gray-100 h-14 rounded-lg flex items-center justify-center p-2 text-xs font-semibold text-center shadow-inner">
                    {method}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 4. TESTIMONIALS WITH "SEE MORE" */}
      <section className="py-24 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold mb-16">What Our Users Say</h2>
        
        <div className={`relative transition-all duration-1000 ease-in-out ${!showAll ? 'max-h-[650px] overflow-hidden' : 'max-h-[3000px]'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allTestimonials.map((testimonial, idx) => (
              <TestimonialCard 
                key={idx}
                name={testimonial.name}
                country={testimonial.country}
                rating={5}
                text={testimonial.text}
              />
            ))}
          </div>
          
          {/* Fading Gradient Overlay when hidden */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white via-white/90 to-transparent z-20"></div>
          )}
        </div>

        <div className="mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-white border-2 border-gray-100 px-10 py-3 rounded-xl font-bold text-gray-800 shadow-sm hover:bg-gray-50 transition-colors z-30 relative"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </section>
{/* 5. FOOTER DOWNLOAD - UPDATED */}
<footer className="px-6 lg:px-24 py-10 bg-gray-50">
  <div className="bg-[#FF5A4D] rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden">
    
    {/* Left Content (Text and Buttons) */}
    <div className="z-10 max-w-lg text-left">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Join the Fun - Download MyBindle Now!</h2>
      <p className="opacity-90 mb-10 leading-relaxed">Your Social Network, Your Way Download MyBindle Now and Be a Part of a Community That's Always Evolving!</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        {/* App Store Button */}
        <button className="bg-black p-3 rounded-2xl w-48 h-16 flex items-center justify-start px-5 gap-3 hover:scale-105 transition-transform border border-gray-700">
          <svg className="w-8 h-8 fill-white" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 0 184.8 0 273.6c0 52.1 19.8 132.6 58.8 193 18.9 29.2 47.5 64.7 84 64.7 17.1 0 23.7-10.3 44.9-10.3 21.1 0 27 10.3 44.9 10.3 37.3 0 62.7-31.9 81.6-61.1 21.8-33.7 30.8-66.3 31.1-68.1-1.3-.4-60-23.1-60.8-87.1zM232.1 57.2c15.6-21.2 28.5-49.6 28.5-78 0-4.3-.4-8.7-1.2-13.1-25.1 1.7-55.9 17.4-74.1 39.8-15.6 20.1-28.9 48.7-28.9 76 0 4.3.4 9.1 1.2 13.9 29.8 1.7 57.1-16.1 74.5-38.6z"></path></svg>
          <div className="text-left">
            <div className="text-[10px] opacity-70">Download on the</div>
            <div className="text-lg font-bold -mt-1">App Store</div>
          </div>
        </button>

        {/* Google Play Button */}
        <button className="bg-black p-3 rounded-2xl w-48 h-16 flex items-center justify-start px-5 gap-3 hover:scale-105 transition-transform border border-gray-700">
          <svg className="w-8 h-8 fill-white" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-61.2 61.2 61.2 61.2 58-33.4c17.1-9.9 17.1-25.7 0-35.6zM104.6 499l220.7-121.3-60.1-60.1L104.6 499z"></path></svg>
          <div className="text-left">
            <div className="text-[10px] opacity-70">GET IT ON</div>
            <div className="text-lg font-bold -mt-1">Google Play</div>
          </div>
        </button>
      </div>
    </div>
    
    {/* Right Content (Phone Mockups from reference) */}
    <div className="mt-10 lg:mt-0 z-10 relative flex flex-row items-end -mr-16 lg:-mr-32">
      
      {/* Phone 1 (Foreground) */}
      <div className="bg-white border-[10px] border-gray-900 rounded-[2rem] w-[260px] h-[520px] shadow-2xl z-20 overflow-hidden text-black p-5 flex flex-col">
        {/* Simplified Status Bar */}
        <div className="w-full h-6 flex justify-between items-center px-2 mb-2">
          <div className="text-xs font-semibold">16:03</div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Simplified Profile Screen (Reference Image Left Phone) */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 border border-gray-300"></div>
          <div className="text-sm">
            <p className="font-semibold">Pictsun</p>
            <p className="text-xs text-gray-500">Foto Netes</p>
          </div>
        </div>
        <div className="w-full h-40 bg-gray-100 rounded-lg mb-3"></div>
        <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-100 rounded w-2/3"></div>
        
        {/* Bottom Nav */}
        <div className="mt-auto h-12 bg-white border-t border-gray-200 grid grid-cols-4 gap-2 items-center text-gray-400">
          <div className="text-center">🏠</div>
          <div className="text-center">🔍</div>
          <div className="text-center">➕</div>
          <div className="text-center">👤</div>
        </div>
      </div>

      {/* Phone 2 (Background - Offset) */}
      <div className="bg-white border-[10px] border-gray-900 rounded-[2rem] w-[260px] h-[520px] shadow-xl ml-[-100px] mb-[-40px] z-10 overflow-hidden text-black p-5 flex flex-col">
          {/* Simplified Status Bar */}
          <div className="w-full h-6 flex justify-between items-center px-2 mb-2">
            <div className="text-xs font-semibold">14:14</div>
          </div>
          
          {/* Simplified Post Screen (Reference Image Right Phone) */}
          <div className="w-full h-12 flex justify-between px-2 mb-4">
            <span className="text-xl">←</span>
            <span className="text-lg font-bold">Post</span>
            <span className="text-xl">...</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className="text-sm font-semibold">Nemtina</div>
          </div>
          <div className="w-full h-60 bg-gray-100 rounded-lg mb-3"></div>
          <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
      </div>

    </div>

    {/* Background Pattern (Optional - for texture) */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
  </div>
</footer>

    </div>
  );
}

export default App;