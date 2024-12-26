import React from 'react';
import Hero from '../components/home/Hero';
import { BookOpen, Users, Trophy, Calendar } from 'lucide-react';

const stats = [
  { name: "O'quvchilar", value: '1200+', icon: Users },
  { name: "O'qituvchilar", value: '50+', icon: BookOpen },
  { name: 'Yutuqlar', value: '100+', icon: Trophy },
  { name: 'Tajriba', value: '25 yil', icon: Calendar },
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.name}
                  className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-500">{stat.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;