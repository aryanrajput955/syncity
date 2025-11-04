'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Star, MapPin, Calendar, Users, Award, Gift } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {children}
    </div>
  );
}

function Button({ className = "", children, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] hover:from-[#6B4A57] hover:to-[#C68E9D] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white/90 hover:bg-white text-[#7A5E6B] border border-[#D4A5B2]/30 hover:border-[#D4A5B2]",
    ghost: "bg-transparent hover:bg-white/10 text-current border border-current/20 hover:border-current/40"
  };
  
  return (
    <button
      className={`px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#D4A5B2]/20 to-[#7A5E6B]/20 text-[#7A5E6B] border border-[#D4A5B2]/30 ${className}`}>
      {children}
    </span>
  );
}

function FloatingElement({ children, delay = 0 }) {
  return (
    <div 
      className="animate-pulse"
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'farm-tourism',
      title: 'Farm Tourism',
      icon: '🌾',
      description: 'Immersive agricultural experiences in pristine natural settings',
      features: ['Luxury Farm Stays', 'Organic Farm Tours', 'Adventure Activities', 'Wellness Retreats']
    },
    {
      id: 'corporate-events',
      title: 'Corporate Events',
      icon: '🏢',
      description: 'Professional gatherings with a touch of natural elegance',
      features: ['Team Building', 'Conferences', 'Stress Relief Retreats', 'Executive Retreats']
    },
    {
      id: 'destination-weddings',
      title: 'Destination Weddings',
      icon: '💍',
      description: 'Unforgettable celebrations in breathtaking mountain venues',
      features: ['Luxury Venues', 'Custom Themes', 'Full-Service Planning', 'Return Gift Services']
    },
    {
      id: 'birthday-parties',
      title: 'Special Occasions',
      icon: '🎉',
      description: 'Joyful celebrations tailored for all ages',
      features: ['Themed Decorations', 'Entertainment & Games', 'Catering Services', 'Return Gift Services']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F0ED] via-[#F1E6E2] to-[#EADBD5]">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-[#D4A5B2]/10 to-transparent blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-1/2 right-1/5 w-24 h-24 bg-gradient-to-br from-[#7A5E6B]/10 to-transparent blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-[#D4A5B2]/5 to-transparent blur-2xl"></div>
        </FloatingElement>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-8 text-base">Premium Event Services</Badge>
          <h1 className={`text-4xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] bg-clip-text text-transparent mb-8 leading-tight transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          One Stop. Every Service. Every Occasion.
          </h1>
          <p className={`text-xl md:text-2xl text-[#7A5E6B]/80 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Be it a wedding, a corporate event, a family function, or even a farm tourism getaway — we’ve got it all covered. With every service under one roof, we make planning easy, execution smooth, and every occasion truly unforgettable.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7A5E6B] mb-6">Our Signature Services</h2>
            <p className="text-xl text-[#7A5E6B]/70 max-w-3xl mx-auto">
              Four distinct experiences, each crafted to perfection with uncompromising attention to detail.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className={`p-8 cursor-pointer transition-all duration-500 ${activeService === index ? 'ring-2 ring-[#D4A5B2] bg-white' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#7A5E6B] mb-4">{service.title}</h3>
                <p className="text-[#7A5E6B]/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#D4A5B2] to-[#7A5E6B]"></div>
                      <span className="text-[#7A5E6B]/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Tourism Detail */}
      <section id="farm-tourism-detail" className="py-24 px-6 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible['farm-tourism-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge className="mb-6">🌾 Farm Tourism Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#7A5E6B] mb-8 leading-tight">
                Reconnect with
                <br />
                <span className="bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] bg-clip-text text-transparent">
                  Nature's Rhythm
                </span>
              </h2>
              <p className="text-lg text-[#7A5E6B]/80 mb-8 leading-relaxed">
                Immerse yourself in authentic farm life with our premium agritourism experiences. From sunrise yoga in organic gardens to gourmet farm-to-table dining, every moment is carefully curated.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Luxury Farm Stays', desc: 'Boutique cottages with modern amenities', icon: '🏡' },
                  { title: 'Curated Experiences', desc: 'Organic farming workshops & tastings', icon: '👨‍🌾' },
                  { title: 'Wellness Journeys', desc: 'Spa treatments & meditation retreats', icon: '🧘‍♀️' },
                  { title: 'Adventure Trails', desc: 'Guided hikes & cycling expeditions', icon: '🚴‍♂️' }
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 h-full">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h4 className="font-bold text-[#7A5E6B] mb-2">{item.title}</h4>
                    <p className="text-[#7A5E6B]/70 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible['farm-tourism-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Farm Stay', subtitle: 'Mountain View', image: '/peaceful-farm-stay-in-uttarakhand-with-mountain-vi.png' },
                  { title: 'Organic Farm', subtitle: 'Rural Charm', image: '/farm.png' },
                  { title: 'Nature Trail', subtitle: 'Scenic Beauty', image: '/trial.png' },
                  { title: 'Wellness Retreat', subtitle: 'Serenity', image: '/wellness.jpg' }
                ].map((item, idx) => (
                  <div key={idx} className="relative overflow-hidden shadow-2xl group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A5E6B]/50 via-transparent to-transparent group-hover:from-[#7A5E6B]/70 transition-all duration-500 flex items-end justify-center">
                      <div className="text-center text-white pb-4">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs opacity-75">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* <Card className="absolute -bottom-6 -left-6 p-4 bg-white shadow-2xl">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <div>
                    <div className="font-bold text-[#7A5E6B]">4.9/5</div>
                    <div className="text-xs text-[#7A5E6B]/60">Guest Rating</div>
                  </div>
                </div>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events Detail */}
      <section id="corporate-events-detail" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative lg:order-1 transition-all duration-1000 ${isVisible['corporate-events-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Corporate Venue', subtitle: 'Professional Setting', image: '/venues.jpg' },
                  { title: 'Team Building', subtitle: 'Collaboration Hub', image: '/teambuilding.png' },
                  { title: 'Stress Relief', subtitle: 'Wellness Focus', image: '/stress.jpg' },
                  { title: 'Conference', subtitle: 'Tech-Ready', image: '/conference.jpg' }
                ].map((item, idx) => (
                  <div key={idx} className="relative overflow-hidden shadow-2xl group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A5E6B]/50 via-transparent to-transparent group-hover:from-[#7A5E6B]/70 transition-all duration-500 flex items-end justify-center">
                      <div className="text-center text-white pb-4">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs opacity-75">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <Card className="absolute -top-0 -right-6 p-4 bg-white shadow-2xl">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#D4A5B2]" />
                  <div>
                    <div className="font-bold text-[#7A5E6B]">500+</div>
                    <div className="text-xs text-[#7A5E6B]/60">Events Hosted</div>
                  </div>
                </div>
              </Card> */}
            </div>

            <div className={`lg:order-2 transition-all duration-1000 delay-300 ${isVisible['corporate-events-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Badge className="mb-6">🏢 Corporate Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#7A5E6B] mb-8 leading-tight">
                Elevate Your
                <br />
                <span className="bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] bg-clip-text text-transparent">
                  Business Events
                </span>
              </h2>
              <p className="text-lg text-[#7A5E6B]/80 mb-8 leading-relaxed">
                Transform ordinary corporate gatherings into extraordinary experiences. Our mountain venues provide the perfect blend of professionalism and natural inspiration.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    title: 'Strategic Retreats', 
                    desc: 'Executive planning sessions in inspiring natural settings with state-of-the-art facilities',
                    icon: MapPin
                  },
                  { 
                    title: 'Team Transformation', 
                    desc: 'Innovative team building programs designed to strengthen bonds and boost productivity',
                    icon: Users
                  },
                  { 
                    title: 'Premium Conferences', 
                    desc: 'Fully equipped venues with cutting-edge AV technology and concierge services',
                    icon: Calendar
                  },
                  { 
                    title: 'Stress Relief Retreats', 
                    desc: 'Wellness-focused programs with mindfulness and relaxation activities',
                    icon: Gift
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#D4A5B2]/20 to-[#7A5E6B]/20">
                      <item.icon className="w-6 h-6 text-[#7A5E6B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7A5E6B] mb-2">{item.title}</h4>
                      <p className="text-[#7A5E6B]/70">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Weddings Detail */}
      <section id="destination-weddings-detail" className="py-24 px-6 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6">💍 Wedding Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7A5E6B] mb-8">
              Where Love Meets
              <br />
              <span className="bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] bg-clip-text text-transparent">
                Mountain Magic
              </span>
            </h2>
            <p className="text-xl text-[#7A5E6B]/80 max-w-3xl mx-auto leading-relaxed">
              Your love story deserves an extraordinary setting. Let the majestic Himalayas witness your perfect beginning.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: 'Luxury Venues', 
                desc: 'Breathtaking locations with panoramic mountain views',
                image: '🏔️',
                features: ['Heritage Properties', 'Boutique Resorts', 'Private Estates', 'Garden Venues']
              },
              { 
                title: 'Bespoke Themes', 
                desc: 'Custom-designed celebrations reflecting your unique style',
                image: '🎨',
                features: ['Royal Elegance', 'Bohemian Chic', 'Rustic Romance', 'Modern Minimalism']
              },
              { 
                title: 'Complete Planning', 
                desc: 'End-to-end wedding coordination with meticulous attention',
                image: '✨',
                features: ['Personal Coordinators', 'Vendor Management', 'Timeline Planning', 'Return Gift Services']
              }
            ].map((venue, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#7A5E6B]/20 to-[#D4A5B2]/20 flex items-center justify-center">
                  <div className="text-6xl">{venue.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#7A5E6B] mb-3">{venue.title}</h3>
                  <p className="text-[#7A5E6B]/70 mb-4">{venue.desc}</p>
                  <div className="space-y-2">
                    {venue.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4A5B2]"></div>
                        <span className="text-sm text-[#7A5E6B]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border-2 border-[#D4A5B2]/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#7A5E6B] mb-4">Complete Wedding Experience</h3>
              <p className="text-[#7A5E6B]/70 max-w-2xl mx-auto">
                From intimate ceremonies to grand celebrations, we orchestrate every detail with precision and passion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Pre-Wedding Services', items: ['Engagement Ceremonies', 'Mehendi & Sangeet', 'Bachelor Parties', 'Photography Sessions'] },
                { title: 'Wedding Day Magic', items: ['Ceremony Coordination', 'Reception Management', 'Guest Services', 'Return Gift Services'] },
                { title: 'Post-Wedding Care', items: ['Gift Management', 'Thank You Notes', 'Photo Delivery', 'Anniversary Planning'] }
              ].map((service, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-[#7A5E6B] mb-4 text-center">{service.title}</h4>
                  <div className="space-y-3">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#D4A5B2] to-[#7A5E6B]"></div>
                        <span className="text-[#7A5E6B]/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Birthday Parties Detail */}
<section id="birthday-parties-detail" className="py-24 px-6 bg-white/50 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className={`transition-all duration-1000 ${isVisible['birthday-parties-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <Badge className="mb-6">🎉 Birthday Excellence</Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-[#7A5E6B] mb-8 leading-tight">
          Celebrate with
          <br />
          <span className="bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] bg-clip-text text-transparent">
            Joyful Moments
          </span>
        </h2>
        <p className="text-lg text-[#7A5E6B]/80 mb-8 leading-relaxed">
          Make every birthday unforgettable with our tailored party packages. From vibrant themes to delightful entertainment, we create celebrations that spark joy for all ages.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Themed Decorations', desc: 'Customized setups for kids and adults', icon: '🎈' },
            { title: 'Entertainment & Games', desc: 'Magicians, games, and interactive fun', icon: '🎭' },
            { title: 'Catering Services', desc: 'Delicious menus for all tastes', icon: '🍽️' },
            { title: 'Return Gift Services', desc: 'Thoughtful hampers for your guests', icon: '🎁' }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 h-full">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-[#7A5E6B] mb-2">{item.title}</h4>
              <p className="text-[#7A5E6B]/70 text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className={`relative transition-all duration-1000 delay-300 ${isVisible['birthday-parties-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="relative overflow-hidden shadow-2xl group">
          <img
            src="/bday.png" // Replace with your actual image URL
            alt="Birthday Celebration"
            className="w-full h-full object-cover aspect-[4/5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7A5E6B]/30 via-transparent to-transparent group-hover:from-[#7A5E6B]/50 transition-all duration-500"></div>
        </div>
        <Card className="absolute -bottom-6 -left-6 p-4 bg-white shadow-2xl">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <div>
              <div className="font-bold text-[#7A5E6B]">4.8/5</div>
              <div className="text-xs text-[#7A5E6B]/60">Guest Rating</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* Return Gift Services */}
      <section id="return-gift-services" className="py-24 px-6 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6">🎁 Return Gift Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7A5E6B] mb-8">
              Thoughtful
              <br />
              <span className="bg-gradient-to-r from-[#7A5E6B] to-[#D4A5B2] bg-clip-text text-transparent">
                Return Gifts
              </span>
            </h2>
            <p className="text-xl text-[#7A5E6B]/80 max-w-3xl mx-auto leading-relaxed">
              Leave a lasting impression with our curated return gift hampers, designed to delight your guests and make your event unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible['return-gift-services'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                {[
                  { 
                    title: 'Personalized Hampers', 
                    desc: 'Custom gift baskets tailored to your event theme and guest preferences',
                    icon: Gift
                  },
                  { 
                    title: 'Eco-Friendly Options', 
                    desc: 'Sustainable and locally sourced gifts for environmentally conscious celebrations',
                    icon: MapPin
                  },
                  { 
                    title: 'Luxury Keepsakes', 
                    desc: 'Premium gift items for a touch of elegance and lasting memories',
                    icon: Star
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#D4A5B2]/20 to-[#7A5E6B]/20">
                      <item.icon className="w-6 h-6 text-[#7A5E6B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7A5E6B] mb-2">{item.title}</h4>
                      <p className="text-[#7A5E6B]/70">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible['return-gift-services'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Image
                src="/hamper.png"
                alt="Return Gift Hampers"
                width={400}
                height={500}
                className="w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A5E6B] via-[#8B6B78] to-[#D4A5B2]"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Create
            <br />
            Something Extraordinary?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's transform your vision into an unforgettable experience. Our team is ready to craft your perfect event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href="/contact">
            <Button variant="secondary" className="text-lg px-10 py-5">
              Schedule Consultation
            </Button>
            </Link>
            {/* <Button variant="ghost" className="text-white border-white/30 hover:border-white/60 hover:bg-white/10 text-lg px-10 py-5">
              View Our Portfolio
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}