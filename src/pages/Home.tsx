import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Video, ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1920"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                VAFA vs WAFA
                <span className="block text-4xl md:text-5xl mt-2 bg-gradient-to-r from-vafa to-wafa bg-clip-text text-transparent">
                  Cricket Tournament 2024
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience the ultimate showdown between cricket's finest teams
              </p>
              <div className="flex gap-4">
                <button className="bg-vafa hover:bg-vafa-dark text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
                  View Schedule
                </button>
                <button className="bg-wafa hover:bg-wafa-dark text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
                  Buy Tickets
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Next Match</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=300"
                  alt="VAFA Team"
                  className="w-32 h-32 rounded-full border-4 border-vafa mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white">VAFA</h3>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-vafa to-wafa p-6 rounded-2xl">
                  <p className="text-white text-lg mb-2">March 15, 2024</p>
                  <p className="text-4xl font-bold text-white">15:00</p>
                </div>
              </div>
              <div className="text-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=300"
                  alt="WAFA Team"
                  className="w-32 h-32 rounded-full border-4 border-wafa mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white">WAFA</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: "Matches", value: "24" },
              { icon: Users, title: "Players", value: "48" },
              { icon: Calendar, title: "Tournament Days", value: "30" },
              { icon: Video, title: "Live Streams", value: "All Matches" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <button className="flex items-center text-vafa hover:text-vafa-dark">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600",
                title: "VAFA Announces New Captain",
                date: "March 1, 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=600",
                title: "Tournament Schedule Released",
                date: "February 28, 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600",
                title: "New Stadium Preparations",
                date: "February 25, 2024"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <button className="text-vafa hover:text-vafa-dark flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((sponsor) => (
              <div
                key={sponsor}
                className="bg-gray-100 rounded-xl p-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                  Sponsor {sponsor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};