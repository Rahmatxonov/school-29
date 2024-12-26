import React from 'react';
import { Calendar } from 'lucide-react';

const news = [
  {
    title: 'Olimpiada g\'oliblari',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    description: 'Maktabimiz o\'quvchilari viloyat olimpiadasida faxrli o\'rinlarni qo\'lga kiritishdi.',
  },
  {
    title: 'Yangi o\'quv yili boshlanishi',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80',
    description: 'Yangi o\'quv yili munosabati bilan tantanali marosim o\'tkazildi.',
  },
  {
    title: 'Sport musobaqalari',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Maktablararo sport musobaqalarida jamoamiz g\'alaba qozondi.',
  },
];

const News = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Yangiliklar
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Maktab hayotidagi so'nggi yangiliklar
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-48"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('uz-UZ')}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-base text-gray-500">{item.description}</p>
                <div className="mt-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Batafsil →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;