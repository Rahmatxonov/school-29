import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">29-maktab</h3>
            <p className="text-gray-400">
              Sifatli ta'lim va tarbiya bilan yoshlarni kelajakka tayyorlaymiz
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Aloqa</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+998 99 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@29maktab.uz</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Toshkent shahri, Example ko'chasi, 123-uy</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ish vaqti</h3>
            <p className="text-gray-400">
              Dushanba - Shanba: 8:00 - 17:00
              <br />
              Yakshanba: Dam olish kuni
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} 29-maktab. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;