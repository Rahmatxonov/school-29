import React from 'react';
import { Mail, Phone } from 'lucide-react';

const teachers = [
  {
    name: 'Azizov Jamshid',
    position: 'Matematika o\'qituvchisi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'jamshid@29maktab.uz',
    phone: '+998 90 123 45 67',
  },
  {
    name: 'Karimova Nilufar',
    position: 'Ona tili va adabiyot o\'qituvchisi',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'nilufar@29maktab.uz',
    phone: '+998 90 234 56 78',
  },
  {
    name: 'Rahmonov Akmal',
    position: 'Fizika o\'qituvchisi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    email: 'akmal@29maktab.uz',
    phone: '+998 90 345 67 89',
  },
  {
    name: 'Saidova Malika',
    position: 'Ingliz tili o\'qituvchisi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    email: 'malika@29maktab.uz',
    phone: '+998 90 456 78 90',
  },
];

const Teachers = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bizning o'qituvchilar
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Malakali va tajribali o'qituvchilar jamoasi
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  className="object-cover w-full h-48"
                  src={teacher.image}
                  alt={teacher.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{teacher.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{teacher.position}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{teacher.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{teacher.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;