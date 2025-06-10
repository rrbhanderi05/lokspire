
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Moon, Sun, LogOut, Home, List, Grid3X3, Plus, Info, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { user, signInWithGoogle, logout, loading } = useAuth();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Browse', path: '/listings', icon: List },
    { name: 'Categories', path: '/categories', icon: Grid3X3 },
    { name: 'Sell', path: '/post', icon: Plus },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
                alt="Lokspire" 
                className="h-12 md:h-16 shadow-xl hover:shadow-2xl transition-all duration-500 object-contain group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group relative overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-[#007acc] via-[#00bfa6] to-[#007acc] shadow-xl shadow-blue-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#007acc] hover:to-[#00bfa6] hover:shadow-lg hover:shadow-blue-500/20'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
            
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            {loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || 'User'} 
                      className="w-12 h-12 rounded-full border-3 border-gradient-to-r from-[#007acc] to-[#00bfa6] shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300"></div>
                </div>
                <Button
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-xl transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={signInWithGoogle}
                className="bg-gradient-to-r from-[#007acc] via-[#00bfa6] to-[#007acc] hover:from-[#005f73] hover:via-[#007acc] hover:to-[#005f73] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl px-8 text-white font-semibold"
              >
                Sign In
              </Button>
            )}

            <Button className="bg-gradient-to-r from-[#007acc] via-[#00bfa6] to-[#007acc] hover:from-[#005f73] hover:via-[#007acc] hover:to-[#005f73] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl px-6">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 group ${
                        location.pathname === item.path
                          ? 'text-white bg-gradient-to-r from-[#007acc] to-[#00bfa6] shadow-xl'
                          : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#007acc] hover:to-[#00bfa6] hover:shadow-lg'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                  
                  {loading ? (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
                    </div>
                  ) : user ? (
                    <div className="pt-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl">
                        {user.photoURL ? (
                          <img 
                            src={user.photoURL} 
                            alt={user.displayName || 'User'} 
                            className="w-10 h-10 rounded-full mr-4 border-2 border-white shadow-lg"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] flex items-center justify-center mr-4 shadow-lg">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{user.displayName || 'User'}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Signed In</div>
                        </div>
                      </div>
                      <Button
                        onClick={logout}
                        variant="ghost"
                        className="w-full justify-start px-6 py-4 rounded-2xl hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-500"
                      >
                        <LogOut className="w-5 h-5 mr-4" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button 
                        onClick={signInWithGoogle}
                        className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-xl rounded-2xl py-4 text-white font-semibold"
                      >
                        Sign In with Google
                      </Button>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <Button className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-xl rounded-2xl py-4">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Support
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
