import React from 'react';
import { motion } from 'framer-motion';
import { useMatchStore } from '../store/matchStore';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const Schedule: React.FC = () => {
  const { matches } = useMatchStore();
  const [filter, setFilter] = React.useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredMatches = matches.filter((match) => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return match.status === 'upcoming';
    return match.status === 'completed';
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Match Schedule</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with all the matches in the tournament
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-vafa to-wafa text-white'
                  : 'text-gray-600 hover:text-vafa'
              }`}
            >
              All Matches
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                filter === 'upcoming'
                  ? 'bg-gradient-to-r from-vafa to-wafa text-white'
                  : 'text-gray-600 hover:text-vafa'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                filter === 'completed'
                  ? 'bg-gradient-to-r from-vafa to-wafa text-white'
                  : 'text-gray-600 hover:text-vafa'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid gap-8">
          {filteredMatches.map((match) => (
            <motion.div
              key={match.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 flex items-center justify-center bg-gradient-to-r from-vafa to-wafa text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{match.team1}</h3>
                    <p className="text-lg">vs</p>
                    <h3 className="text-2xl font-bold mt-2">{match.team2}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="h-full flex flex-col justify-center">
                    {match.status === 'completed' ? (
                      <>
                        <div className="text-center">
                          <span className="text-gray-500">Result</span>
                          <p className="text-lg font-semibold mt-2">{match.result}</p>
                        </div>
                        {match.highlights && match.highlights.length > 0 && (
                          <button className="mt-4 bg-gradient-to-r from-vafa to-wafa text-white px-6 py-2 rounded-full">
                            View Highlights
                          </button>
                        )}
                      </>
                    ) : match.status === 'live' ? (
                      <div className="text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                          Live Now
                        </span>
                        <button className="mt-4 bg-gradient-to-r from-vafa to-wafa text-white px-6 py-2 rounded-full">
                          Watch Live
                        </button>
                      </div>
                    ) : (
                      <button className="bg-gradient-to-r from-vafa to-wafa text-white px-6 py-2 rounded-full">
                        Set Reminder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};