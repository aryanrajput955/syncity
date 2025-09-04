import Image from "next/image";
import Link from "next/link";

export default function OneStationGallerySection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#EFE1DA] to-[#F7E9E4] relative overflow-hidden">
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#D8B7C1]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#897980]/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-white/50 backdrop-blur-sm rounded-2xl mb-8 border border-[#D8B7C1]/20 shadow-sm">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#897980] leading-tight">
              One Station For All
              <span className="block text-[#D8B7C1] mt-2">Your Needs</span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-[#D8B7C1] to-[#897980] mx-auto mb-8"></div>
          <p className="text-xl text-[#897980]/80 max-w-4xl mx-auto leading-relaxed">
            From planning to execution, we manage every aspect of your event with seamless coordination and care.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/beautiful-mountain-wedding-ceremony-in-uttarakhand.png"
              alt="Mountain Wedding Ceremony"
              width={600}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#EFE1DA]">
              <h3 className="text-2xl font-bold mb-2">Dream Weddings</h3>
              <p className="text-sm opacity-90">Ceremonies in nature’s embrace</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/corporate-team-building-event-in-mountain-resort.png"
              alt="Corporate Events"
              width={300}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/70 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-[#EFE1DA]">
              <h4 className="font-bold text-lg">Corporate</h4>
              <p className="text-sm opacity-90">Professional events</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/farm-tourism-experience-with-traditional-activitie.png"
              alt="Farm Tourism"
              width={300}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/70 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-[#EFE1DA]">
              <h4 className="font-bold text-lg">Farm Tourism</h4>
              <p className="text-sm opacity-90">Rural experiences</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/elegant-catering-setup-with-traditional-uttarakhan.png"
              alt="Catering Services"
              width={300}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/70 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-[#EFE1DA]">
              <h4 className="font-bold text-lg">Catering</h4>
              <p className="text-sm opacity-90">Exquisite cuisine</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/beautiful-event-decoration-with-flowers-and-mounta.png"
              alt="Event Decoration"
              width={300}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/70 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-[#EFE1DA]">
              <h4 className="font-bold text-lg">Decoration</h4>
              <p className="text-sm opacity-90">Stunning setups</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-all duration-300 border border-[#D8B7C1]/20">
              <span className="text-2xl">🎭</span>
            </div>
            <h4 className="font-semibold text-[#897980] mb-1">Entertainment</h4>
            <p className="text-sm text-[#897980]/70">Vibrant performances</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-all duration-300 border border-[#D8B7C1]/20">
              <span className="text-2xl">📸</span>
            </div>
            <h4 className="font-semibold text-[#897980] mb-1">Photography</h4>
            <p className="text-sm text-[#897980]/70">Timeless memories</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-all duration-300 border border-[#D8B7C1]/20">
              <span className="text-2xl">🚗</span>
            </div>
            <h4 className="font-semibold text-[#897980] mb-1">Transportation</h4>
            <p className="text-sm text-[#897980]/70">Reliable travel</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-all duration-300 border border-[#D8B7C1]/20">
              <span className="text-2xl">🏨</span>
            </div>
            <h4 className="font-semibold text-[#897980] mb-1">Accommodation</h4>
            <p className="text-sm text-[#897980]/70">Comfortable stays</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-all duration-300 border border-[#D8B7C1]/20">
              <span className="text-2xl">🎵</span>
            </div>
            <h4 className="font-semibold text-[#897980] mb-1">Sound & Music</h4>
            <p className="text-sm text-[#897980]/70">Perfect ambiance</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-all duration-300 border border-[#D8B7C1]/20">
              <span className="text-2xl">📋</span>
            </div>
            <h4 className="font-semibold text-[#897980] mb-1">Planning</h4>
            <p className="text-sm text-[#897980]/70">Flawless execution</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#D8B7C1]/20 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-[#897980] mb-4">Simplify Your Event</h3>
            <p className="text-lg text-[#897980]/80 mb-6 leading-relaxed">
              Our all-in-one approach ensures seamless coordination, saving you time and delivering exceptional quality.
            </p>
            <Link href="/services">
              <button className="bg-[#897980] hover:bg-[#6E6066] text-[#EFE1DA] px-10 py-4 text-lg rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                See All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}