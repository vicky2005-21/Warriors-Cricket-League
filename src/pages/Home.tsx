import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Phone, Mail, Hash } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80">
          <img
            src="/banner1.jpg"
            alt="Cricket Tournament"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* WAFA Captain Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-purple-500 p-4">
                <h3 className="text-xl font-bold text-white">WAFA Team Captain Announcement</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  WAFA is thrilled to announce Waris as the team captain for tomorrow's match.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center text-sm text-purple-600">
                    <Hash className="w-4 h-4 mr-1" /> WAFA
                  </span>
                  <span className="inline-flex items-center text-sm text-purple-600">
                    <Hash className="w-4 h-4 mr-1" /> TeamCaptain
                  </span>
                </div>
              </div>
            </motion.div>

            {/* VAFA Captain Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-blue-500 p-4">
                <h3 className="text-xl font-bold text-white">VAFA Team Captain Announcement</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  VAFA has officially announced Vignesh as their team captain for tomorrow's match.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center text-sm text-blue-600">
                    <Hash className="w-4 h-4 mr-1" /> VAFA
                  </span>
                  <span className="inline-flex items-center text-sm text-blue-600">
                    <Hash className="w-4 h-4 mr-1" /> TeamCaptain
                  </span>
                </div>
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto mb-4 bg-white/10 flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-white">VAFA</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-white">VAFA</h3>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl">
                  <p className="text-white text-lg mb-2">January 26, 2025</p>
                  <p className="text-4xl font-bold text-white">06:00 AM</p>
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-full border-4 border-purple-500 mx-auto mb-4 bg-white/10 flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-white">WAFA</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-white">WAFA</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Total Matches", value: "9" },
              { icon: Users, title: "Players", value: "6" },
              { icon: Calendar, title: "Tournament Days", value: "2" }
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

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
          <div className="flex justify-center items-center gap-12">
            <div className="text-4xl font-bold text-gray-800">Nike</div>
            <div className="text-4xl font-bold text-gray-800">Adidas</div>
          </div>
        </div>
      </section>

      {/* Footer with Contact */}
      <footer className="bg-gray-900 text-white py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <a href="tel:+918919303900" className="text-xl hover:text-blue-400 transition-colors">
                +91 8919303900
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <a href="mailto:vigneshchowdary25@gmail.com" className="text-xl hover:text-blue-400 transition-colors">
                vigneshchowdary25@gmail.com
              </a>
            </div>
          </div>
          <div className="text-center mt-12 text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cricket Tournament. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};