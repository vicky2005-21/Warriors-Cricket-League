import React from 'react';
import { motion } from 'framer-motion';

export const Teams: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Team Squads</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* VAFA Squad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-blue-500 p-6">
              <h2 className="text-3xl font-bold text-white text-center">VAFA Squad</h2>
            </div>
            <div className="p-8">
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">17</span>
                  <div>
                    <h3 className="text-xl font-bold">Sai</h3>
                    <p className="text-gray-600">Jersey #17</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">7</span>
                  <div>
                    <h3 className="text-xl font-bold">Vignesh</h3>
                    <p className="text-gray-600">Jersey #7</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">18</span>
                  <div>
                    <h3 className="text-xl font-bold">Jijnash</h3>
                    <p className="text-gray-600">Jersey #18</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* WAFA Squad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-purple-500 p-6">
              <h2 className="text-3xl font-bold text-white text-center">WAFA Squad</h2>
            </div>
            <div className="p-8">
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">45</span>
                  <div>
                    <h3 className="text-xl font-bold">Waris</h3>
                    <p className="text-gray-600">Jersey #45</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">33</span>
                  <div>
                    <h3 className="text-xl font-bold">Prem</h3>
                    <p className="text-gray-600">Jersey #33</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">49</span>
                  <div>
                    <h3 className="text-xl font-bold">Harsha</h3>
                    <p className="text-gray-600">Jersey #49</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};