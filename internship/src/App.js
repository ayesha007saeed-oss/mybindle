import React, { useState } from 'react';

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

  const allTestimonials = [
    { name: "Emily R", country: "USA", rating: 5, text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth!" },
    { name: "Amit K", country: "India", rating: 5, text: "Finally, a social network that understands what I need! The privacy features are a game-changer." },
    { name: "Sophie M", country: "UK", rating: 5, text: "I joined just to explore, but now I can't imagine my day without it. The chat is amazing." },
    { name: "Javier L", country: "Spain", rating: 5, text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand" },
    { name: "Lucas T", country: "Brazil", rating: 5, text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!" },
    { name: "Nora S", country: "Canada", rating: 5, text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense" },
    { name: "Liam W", country: "Australia", rating: 5, text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones." },
    { name: "Elena G", country: "Italy", rating: 5, text: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless." },
    { name: "Marcus J", country: "Germany", rating: 5, text: "The community engagement here is unlike any other site. I feel like I've actually found my people!" }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. MAIN HERO SECTION */}
      <section className="bg-[#FF5A4D] text-white py-12 lg:py-24 px-6 lg:px-24 flex flex-col items-center">
        
        <div className="flex items-center gap-3 mb-16">
          <img src="/assets/mybindle-logo.png" alt="MyBindle Logo" className="w-16 h-16 object-contain" />
          <span className="text-3xl font-bold tracking-tight">MyBindle</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
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

          <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
            <div className="absolute -left-12 top-20 z-10 bg-white text-black px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce-slow">
              <span className="text-xl">🔥</span>
              <span className="font-bold text-sm">Seamless Connections</span>
            </div>

            <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] z-0">
              <img 
                src="/assets/phone-mockup-1.png" 
                alt="App UI" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
              />
            </div>

            <div className="absolute -right-8 bottom-20 z-10 bg-white text-black px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-pulse-slow">
              <span className="text-xl">🌎</span>
              <span className="font-bold text-sm">Discover & Explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="bg-gray-50 py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Features That Keep You Hooked!</h2>
            <p className="text-gray-600 font-medium text-lg">Meet, Chat, Share – Anytime, Anywhere!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2"><span>🔥</span> Seamless Connections</h3>
              <p className="text-gray-500 leading-relaxed">Stay in touch with friends, family, and like-minded people with just a tap.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2"><span>📸</span> Share Your Story</h3>
              <p className="text-gray-500 leading-relaxed">Upload photos, videos, and updates to let the world know what's happening.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2"><span>💬</span> Real-Time Chat</h3>
              <p className="text-gray-500 leading-relaxed">Connect instantly with smooth, lightning-fast messaging.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2"><span>🔒</span> Privacy First</h3>
              <p className="text-gray-500 leading-relaxed">Your data, your control. We prioritize your privacy with world-class security.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2"><span>🌎</span> Discover & Explore</h3>
              <p className="text-gray-500 leading-relaxed">Find trending content, join communities, and follow pages that match your interests.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2"><span>💼</span> Grow Your Business</h3>
              <p className="text-gray-500 leading-relaxed">Use our platform to market your brand and connect with customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MOBILE DUAL SECTION */}
      <section className="py-24 px-6 lg:px-24 bg-gray-50 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <div className="relative flex-1 flex items-center justify-center pt-20 pb-16 lg:pb-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF5A4D] rounded-full opacity-20 blur-3xl z-0"></div>
          <div className="relative w-[300px] sm:w-[350px] md:w-[400px] z-10 aspect-[3/4]">
            <img 
              src="/assets/plissoverPhone.png" 
              alt="Phone Back View" 
              className="absolute w-[80%] h-auto bottom-0 left-0 -rotate-[15deg] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-0 block" 
            />
            <img 
              src="/assets/plissoverPhone.png" 
              alt="Phone Front View" 
              className="absolute w-[80%] h-auto top-0 right-0 rotate-[10deg] shadow-[0_35px_70px_-15px_rgba(0,0,0,0.6)] z-10 border-4 border-white rounded-[2rem] block" 
              style={{clipPath: 'inset(1px 1px 1px 1px round 1.8rem)'}}
            />
          </div>
        </div>

        <div className="text-left flex-1 max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Where Every Click Sparks a Connection!</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!</p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
              <span className="text-2xl mt-1">🎥</span>
              <div>
                <h4 className="font-bold text-gray-900">Short Videos & Reels</h4>
                <p className="text-gray-600 text-sm">Share engaging, bite-sized content that keeps everyone entertained.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
              <span className="text-2xl mt-1">🔔</span>
              <div>
                <h4 className="font-bold text-gray-900">Smart Notifications</h4>
                <p className="text-gray-600 text-sm">Stay updated on what matters without the noise.</p>
              </div>
            </div>
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
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How to Install Our App</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Getting started is quick and easy! Follow these simple steps to install MyBindle.</p>
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gray-300 z-0"></div>
            {[
              { num: '01', title: 'Download', desc: 'Open Play Store or App Store' },
              { num: '02', title: 'Install App', desc: 'The app will install automatically.' },
              { num: '03', title: 'Ready to Use', desc: 'Sign up or log in to start exploring!' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center flex-1 px-4">
                <div className={`bg-white ${i === 0 ? 'text-[#FF5A4D]' : 'text-gray-900'} text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full mb-6 shadow-sm border border-gray-100`}>
                  {step.num}
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full min-h-[160px] flex flex-col justify-center transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DONATION BANNER */}
      <section className="px-6 lg:px-24 py-10">
        <div className="bg-[#FF5A4D] rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden">
          <div className="z-10 max-w-lg text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Be the Reason Someone Smiles Today!</h2>
            <p className="opacity-90 mb-8 leading-relaxed">Your generosity can change lives—every donation brings hope, support, and a brighter future.</p>
            <button className="bg-white text-[#FF5A4D] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">Donate Now</button>
          </div>
          
          <div className="mt-10 lg:mt-0 z-10 relative flex flex-row items-end -mr-16 lg:-mr-32">
            <div className="bg-white border-[10px] border-gray-900 rounded-[2rem] w-[260px] h-[520px] shadow-2xl z-20 overflow-hidden text-black p-5 flex flex-col items-center">
              <div className="w-full h-6 flex justify-between items-center px-2 mb-4 text-xs font-semibold">
                <div>10:03</div>
                <div className="flex gap-1"><div className="w-3 h-3 bg-black rounded-full"></div><div className="w-3 h-3 bg-black rounded-full"></div></div>
              </div>
              <div className="mb-10 scale-125 text-center pt-10">💎❤️💎<br/>❤️💎❤️<br/>💎❤️💎</div>
              <div className="text-center mt-auto">
                <p className="text-lg font-bold text-[#FF5A4D]">Thank You!</p>
                <p className="text-sm">John, You Are A Very Humble Person!</p>
              </div>
            </div>
            <div className="bg-white border-[10px] border-gray-900 rounded-[2rem] w-[260px] h-[520px] shadow-xl ml-[-100px] mb-[-40px] z-10 overflow-hidden text-black p-5">
              <div className="text-lg font-bold mb-6 mt-10">Payment Methods</div>
              <div className="grid grid-cols-2 gap-4">
                {['PayPal', 'Bank Transfer', 'Amex', 'Apple Pay', 'Mastercard', 'Visa'].map(method => (
                  <div key={method} className="bg-gray-100 h-14 rounded-lg flex items-center justify-center p-2 text-xs font-semibold text-center shadow-inner">{method}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold mb-16">What Our Users Say</h2>
        <div className={`relative transition-all duration-1000 ease-in-out ${!showAll ? 'max-h-[650px] overflow-hidden' : 'max-h-[3000px]'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} rating={5} />
            ))}
          </div>
          {!showAll && <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white via-white/90 to-transparent z-20"></div>}
        </div>
        <div className="mt-12">
          <button onClick={() => setShowAll(!showAll)} className="bg-white border-2 border-gray-100 px-10 py-3 rounded-xl font-bold text-gray-800 shadow-sm hover:bg-gray-50 transition-colors z-30 relative">
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="px-6 lg:px-24 py-10 bg-gray-50">
        <div className="bg-[#FF5A4D] rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden">
          <div className="z-10 max-w-lg text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Join the Fun - Download MyBindle Now!</h2>
            <p className="opacity-90 mb-10 leading-relaxed">Your Social Network, Your Way. Download Now!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black p-3 rounded-2xl w-48 h-16 flex items-center justify-start px-5 gap-3 hover:scale-105 transition-transform border border-gray-700">
                <div className="text-left"><div className="text-[10px] opacity-70">Download on the</div><div className="text-lg font-bold -mt-1">App Store</div></div>
              </button>
              <button className="bg-black p-3 rounded-2xl w-48 h-16 flex items-center justify-start px-5 gap-3 hover:scale-105 transition-transform border border-gray-700">
                <div className="text-left"><div className="text-[10px] opacity-70">GET IT ON</div><div className="text-lg font-bold -mt-1">Google Play</div></div>
              </button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 z-10 relative flex flex-row items-end -mr-16 lg:-mr-32">
             <img src="/assets/mybindle-logo.png" alt="Footer Logo" className="w-40 opacity-20" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;