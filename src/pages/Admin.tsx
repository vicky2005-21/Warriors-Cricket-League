import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { usePlayerStore } from '../store/playerStore';
import { useMatchStore } from '../store/matchStore';
import { useNewsStore } from '../store/newsStore';
import { Users, Calendar, Newspaper, Plus, Edit2, Trash2, X } from 'lucide-react';
import { Player, Match, News } from '../types';

export const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { players, addPlayer, updatePlayer, deletePlayer } = usePlayerStore();
  const { matches, addMatch, updateMatch, deleteMatch } = useMatchStore();
  const { news, addNews, updateNews, deleteNews } = useNewsStore();
  const [activeTab, setActiveTab] = React.useState<'players' | 'matches' | 'news'>('players');
  const [isAddingPlayer, setIsAddingPlayer] = React.useState(false);
  const [isAddingMatch, setIsAddingMatch] = React.useState(false);
  const [isAddingNews, setIsAddingNews] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState<any>(null);

  React.useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  const initialPlayerState: Omit<Player, 'id'> = {
    name: '',
    team: 'VAFA',
    imageUrl: '',
    role: '',
    battingStyle: '',
    bowlingStyle: '',
    socialLinks: {},
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0,
      average: 0,
      strikeRate: 0,
      economyRate: 0,
      highestScore: 0,
      bestBowling: ''
    }
  };

  const [playerForm, setPlayerForm] = React.useState<Omit<Player, 'id'>>(initialPlayerState);

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlayer: Player = {
      id: Date.now().toString(),
      ...playerForm
    };
    addPlayer(newPlayer);
    setPlayerForm(initialPlayerState);
    setIsAddingPlayer(false);
  };

  const PlayerForm = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">
            {editingItem ? 'Edit Player' : 'Add New Player'}
          </h3>
          <button
            onClick={() => {
              setIsAddingPlayer(false);
              setEditingItem(null);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleAddPlayer} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={playerForm.name}
                onChange={(e) => setPlayerForm({ ...playerForm, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team</label>
              <select
                value={playerForm.team}
                onChange={(e) => setPlayerForm({ ...playerForm, team: e.target.value as 'VAFA' | 'WAFA' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
              >
                <option value="VAFA">VAFA</option>
                <option value="WAFA">WAFA</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input
                type="text"
                value={playerForm.role}
                onChange={(e) => setPlayerForm({ ...playerForm, role: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                value={playerForm.imageUrl}
                onChange={(e) => setPlayerForm({ ...playerForm, imageUrl: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Batting Style</label>
              <input
                type="text"
                value={playerForm.battingStyle}
                onChange={(e) => setPlayerForm({ ...playerForm, battingStyle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bowling Style</label>
              <input
                type="text"
                value={playerForm.bowlingStyle}
                onChange={(e) => setPlayerForm({ ...playerForm, bowlingStyle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Player Stats</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Matches</label>
                <input
                  type="number"
                  value={playerForm.stats.matches}
                  onChange={(e) => setPlayerForm({
                    ...playerForm,
                    stats: { ...playerForm.stats, matches: parseInt(e.target.value) }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Runs</label>
                <input
                  type="number"
                  value={playerForm.stats.runs}
                  onChange={(e) => setPlayerForm({
                    ...playerForm,
                    stats: { ...playerForm.stats, runs: parseInt(e.target.value) }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setIsAddingPlayer(false);
                setEditingItem(null);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-vafa hover:bg-vafa-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vafa"
            >
              {editingItem ? 'Update Player' : 'Add Player'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  const renderPlayers = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Players</h2>
          <button
            onClick={() => setIsAddingPlayer(true)}
            className="bg-vafa text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Player
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Player
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stats
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {players.map((player) => (
              <tr key={player.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={player.imageUrl} alt={player.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{player.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {player.team}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>Matches: {player.stats.matches}</div>
                  <div>Runs: {player.stats.runs}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      setEditingItem(player);
                      setPlayerForm(player);
                      setIsAddingPlayer(true);
                    }}
                    className="text-vafa hover:text-vafa-dark mr-3"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deletePlayer(player.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const initialMatchState: Omit<Match, 'id'> = {
    team1: '',
    team2: '',
    date: '',
    time: '',
    venue: '',
    status: 'upcoming'
  };

  const [matchForm, setMatchForm] = React.useState<Omit<Match, 'id'>>(initialMatchState);

  const handleAddMatch = (e: React.FormEvent) => {
    e.preventDefault();
    const newMatch: Match = {
      id: Date.now().toString(),
      ...matchForm
    };
    addMatch(newMatch);
    setMatchForm(initialMatchState);
    setIsAddingMatch(false);
  };

  const MatchForm = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">
            {editingItem ? 'Edit Match' : 'Add New Match'}
          </h3>
          <button
            onClick={() => {
              setIsAddingMatch(false);
              setEditingItem(null);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleAddMatch} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Team 1</label>
              <input
                type="text"
                value={matchForm.team1}
                onChange={(e) => setMatchForm({ ...matchForm, team1: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team 2</label>
              <input
                type="text"
                value={matchForm.team2}
                onChange={(e) => setMatchForm({ ...matchForm, team2: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={matchForm.date}
                onChange={(e) => setMatchForm({ ...matchForm, date: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                value={matchForm.time}
                onChange={(e) => setMatchForm({ ...matchForm, time: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Venue</label>
              <input
                type="text"
                value={matchForm.venue}
                onChange={(e) => setMatchForm({ ...matchForm, venue: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={matchForm.status}
                onChange={(e) => setMatchForm({ ...matchForm, status: e.target.value as 'upcoming' | 'live' | 'completed' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
              >
                <option value="upcoming">Upcoming</option>
                <option value="live">Live</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setIsAddingMatch(false);
                setEditingItem(null);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-vafa hover:bg-vafa-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vafa"
            >
              {editingItem ? 'Update Match' : 'Add Match'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  const renderMatches = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Matches</h2>
          <button
            onClick={() => setIsAddingMatch(true)}
            className="bg-vafa text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Match
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teams
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Venue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {matches.map((match) => (
              <tr key={match.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {match.team1} vs {match.team2}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {match.date} {match.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {match.venue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.status === 'live'
                      ? 'bg-green-100 text-green-800'
                      : match.status === 'completed'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      setEditingItem(match);
                      setMatchForm(match);
                      setIsAddingMatch(true);
                    }}
                    className="text-vafa hover:text-vafa-dark mr-3"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteMatch(match.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const initialNewsState: Omit<News, 'id'> = {
    title: '',
    category: '',
    date: '',
    author: '',
    content: '',
    imageUrl: ''
  };

  const [newsForm, setNewsForm] = React.useState<Omit<News, 'id'>>(initialNewsState);

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    const newNews: News = {
      id: Date.now().toString(),
      ...newsForm
    };
    addNews(newNews);
    setNewsForm(initialNewsState);
    setIsAddingNews(false);
  };

  const NewsForm = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">
            {editingItem ? 'Edit News' : 'Add New News'}
          </h3>
          <button
            onClick={() => {
              setIsAddingNews(false);
              setEditingItem(null);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleAddNews} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newsForm.title}
                onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                value={newsForm.category}
                onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={newsForm.date}
                onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                value={newsForm.author}
                onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                value={newsForm.content}
                onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                value={newsForm.imageUrl}
                onChange={(e) => setNewsForm({ ...newsForm, imageUrl: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vafa focus:ring-vafa"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setIsAddingNews(false);
                setEditingItem(null);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-vafa hover:bg-vafa-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vafa"
            >
              {editingItem ? 'Update News' : 'Add News'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  const renderNews = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">News</h2>
          <button
            onClick={() => setIsAddingNews(true)}
            className="bg-vafa text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Add News
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {news.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded object-cover" src={item.imageUrl} alt={item.title} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setNewsForm(item);
                      setIsAddingNews(true);
                    }}
                    className="text-vafa hover:text-vafa-dark mr-3"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteNews(item.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('players')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'players'
                    ? 'bg-vafa text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="w-5 h-5 mr-2" />
                Players
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'matches'
                    ? 'bg-vafa text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Matches
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === 'news'
                    ? 'bg-vafa text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Newspaper className="w-5 h-5 mr-2" />
                News
              </button>
            </div>
          </div>

          {activeTab === 'players' && renderPlayers()}
          {activeTab === 'matches' && renderMatches()}
          {activeTab === 'news' && renderNews()}
        </div>
      </div>

      {isAddingPlayer && <PlayerForm />}
      {isAddingMatch && <MatchForm />}
      {isAddingNews && <NewsForm />}
    </div>
  );
};