import React from 'react';
import { motion } from 'framer-motion';
import { useNewsStore } from '../store/newsStore';
import { Calendar, ChevronRight } from 'lucide-react';

export const News: React.FC = () => {
  const { news } = useNewsStore();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = ['all', ...new Set(news.map((item) => item.category))];
  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news and updates from the tournament
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="bg-white rounded-full shadow-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all capitalize ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-vafa to-wafa text-white'
                    : 'text-gray-600 hover:text-vafa'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {item.author}</span>
                  <button className="text-vafa hover:text-vafa-dark flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};