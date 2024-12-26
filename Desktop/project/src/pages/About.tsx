import React from 'react';
import { Target, Book, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Biz haqimizda
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            29-maktab - bu zamonaviy ta'lim maskani
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Maqsadimiz</h3>
              <p className="mt-2 text-base text-gray-500">
                Har bir o'quvchining iste'dodini kashf etish va rivojlantirish
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Book className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Ta'lim sifati</h3>
              <p className="mt-2 text-base text-gray-500">
                Zamonaviy o'quv dasturlari va innovatsion yondashuv
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Jamoa</h3>
              <p className="mt-2 text-base text-gray-500">
                Tajribali va malakali o'qituvchilar jamoasi
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Tariximiz</h3>
              <p className="mt-4 text-gray-500">
                29-maktab 1998 yilda tashkil etilgan bo'lib, bugungi kunga qadar minglab 
                o'quvchilarni tarbiyalab voyaga yetkazdi. Maktabimiz o'tgan yillar 
                davomida ko'plab yutuqlarga erishdi va bugun ham rivojlanishda davom etmoqda.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Qadriyatlarimiz</h3>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li>• Har bir o'quvchiga individual yondashuv</li>
                <li>• Zamonaviy ta'lim texnologiyalari</li>
                <li>• Ma'naviy va jismoniy tarbiya uyg'unligi</li>
                <li>• Doimiy rivojlanish va takomillashuv</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;