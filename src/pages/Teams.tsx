import React from 'react';
import { motion } from 'framer-motion';
import { usePlayerStore } from '../store/playerStore';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const Teams: React.FC = () => {
  const { players } = usePlayerStore();
  const [selectedTeam, setSelectedTeam] = React.useState<'VAFA' | 'WAFA'>('VAFA');

  const teamPlayers = players.filter((player) => player.team === selectedTeam);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Team Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-1">
            <button
              onClick={() => setSelectedTeam('VAFA')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedTeam === 'VAFA'
                  ? 'bg-vafa text-white'
                  : 'text-gray-600 hover:text-vafa'
              }`}
            >
              VAFA
            </button>
            <button
              onClick={() => setSelectedTeam('WAFA')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedTeam === 'WAFA'
                  ? 'bg-wafa text-white'
                  : 'text-gray-600 hover:text-wafa'
              }`}
            >
              WAFA
            </button>
          </div>
        </div>

        {/* Team Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {selectedTeam === 'VAFA' ? (
                <span className="text-vafa">VAFA Team</span>
              ) : (
                <span className="text-wafa">WAFA Team</span>
              )}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedTeam === 'VAFA'
                ? "VAFA's elite cricket squad, known for their strategic gameplay and exceptional teamwork."
                : "WAFA's powerhouse team, combining experience with young talent for explosive performances."}
            </p>
          </div>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamPlayers.map((player) => (
            <motion.div
              key={player.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{player.name}</h3>
                  <p className="text-gray-300">{player.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Matches</p>
                    <p className="text-lg font-semibold">{player.stats.matches}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Runs</p>
                    <p className="text-lg font-semibold">{player.stats.runs}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Wickets</p>
                    <p className="text-lg font-semibold">{player.stats.wickets}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average</p>
                    <p className="text-lg font-semibold">{player.stats.average}</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  {player.socialLinks.facebook && (
                    <a
                      href={player.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {player.socialLinks.twitter && (
                    <a
                      href={player.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {player.socialLinks.instagram && (
                    <a
                      href={player.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};