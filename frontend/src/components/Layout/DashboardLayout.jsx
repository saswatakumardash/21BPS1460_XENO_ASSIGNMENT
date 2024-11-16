import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Users, Send, PieChart, Settings, LogOut, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: Users, label: 'Audiences', path: '/audiences' },
    { icon: Send, label: 'Campaigns', path: '/campaigns' },
    { icon: PieChart, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <motion.div 
        initial={{ x: -200 }}
        animate={{ x: isSidebarOpen ? 0 : -200 }}
        className="w-64 bg-white shadow-lg fixed h-full z-50"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            XenoCRM
          </h1>
        </motion.div>
        
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={item.path}>
              <motion.div
                whileHover={{ x: 10, backgroundColor: '#EEF2FF' }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 cursor-pointer ${
                  location.pathname === item.path ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className={`w-5 h-5 mr-3 ${
                  location.pathname === item.path ? 'text-blue-500' : 'text-gray-600'
                }`} />
                <span className={
                  location.pathname === item.path ? 'text-blue-500 font-medium' : 'text-gray-600'
                }>{item.label}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </motion.div>

      <div className="flex-1 ml-64">
        <motion.div 
          className="bg-white shadow-sm fixed w-[calc(100%-16rem)] z-40"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="flex items-center justify-between px-8 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <motion.button 
                className="p-2 rounded-lg hover:bg-gray-100 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                SK
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="pt-20 p-8 overflow-auto">
          {children}
          <footer className="mt-8 text-center text-gray-500">
            © 2024 Saswata Kumar Dash. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
