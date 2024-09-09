import React from 'react';
import { Camera, Menu, Settings, Info, Moon, Volume2, Wifi, Battery } from 'lucide-react';

const AppMockup = () => {
  return (
    <div className="w-[390px] h-[844px] bg-gray-900 rounded-[55px] overflow-hidden shadow-2xl border border-purple-500 relative">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/api/placeholder/390/844')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col">
        {/* iPhone Notch */}
        <div className="h-[47px] w-full bg-black rounded-b-3xl"></div>

        {/* Status Bar */}  
        <div className="flex justify-between items-center px-6 py-2 text-white">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex space-x-2">
            <Wifi size={16} />
            <Battery size={16} />
          </div>
        </div>

        {/* App Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex justify-between items-center">
          <Menu size={24} />
          <h1 className="text-xl font-bold">SignSense AI</h1>
          <Settings size={24} />
        </div>

        {/* Camera Preview */}
        <div className="flex-grow bg-black relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera size={64} className="text-purple-400 opacity-50" />
          </div>
          <div className="absolute top-4 right-4 bg-purple-500 rounded-full p-2">
            <Moon size={20} className="text-white" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-gray-800 bg-opacity-80 rounded-lg p-3 border border-purple-400">
            <p className="text-center font-semibold text-purple-200">Sign in view</p>
          </div>
        </div>

        {/* Recognition Results */}
        <div className="p-4 bg-gray-800 bg-opacity-70 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-2 text-purple-300">Recognized Sign:</h2>
          <div className="bg-gradient-to-br from-purple-700 to-blue-600 rounded-lg p-4 shadow-lg">
            <p className="text-4xl font-bold text-center text-white">Hello</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around p-4 bg-gray-800 bg-opacity-70 backdrop-blur-md">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Translate
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300">
            Practice
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gray-800 border-t border-purple-500 flex justify-around py-6 rounded-t-3xl">
          <Camera size={24} className="text-purple-400" />
          <Volume2 size={24} className="text-purple-400" />
          <Info size={24} className="text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default AppMockup;