import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Moon, Sun, LogOut, Home, List, Grid3X3, Plus, Info, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAdmin } from '@/contexts/AdminContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const { isAdmin } = useAdmin();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Browse', path: '/listings', icon: List },
    { name: 'Categories', path: '/categories', icon: Grid3X3 },
    { name: 'Sell', path: '/post', icon: Plus },
    { name: 'About', path: '/about', icon: Info },
  ];

  // Add admin link if user is admin
  if (isAdmin) {
    navItems.push({ name: 'Admin', path: '/admin', icon: Shield });
  }

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
                } ${item.name === 'Admin' ? 'border border-orange-300 dark:border-orange-600' : ''}`}
              >
                <span className="relative z-10 flex items-center">
                  {item.name === 'Admin' && <Shield className="w-4 h-4 mr-1" />}
                  {item.name}
                </span>
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

            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-gradient-to-r from-[#007acc] via-[#00bfa6] to-[#007acc] hover:from-[#005f73] hover:via-[#007acc] hover:to-[#005f73] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl px-6 text-white font-semibold">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl p-2 transition-colors">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {user?.fullName || user?.emailAddresses[0]?.emailAddress}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {isAdmin ? 'Admin' : 'View Profile'}
                    </div>
                  </div>
                </Link>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                />
              </div>
            </SignedIn>

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
                      } ${item.name === 'Admin' ? 'border border-orange-300 dark:border-orange-600' : ''}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="flex items-center">
                        {item.name}
                        {item.name === 'Admin' && <Shield className="w-4 h-4 ml-2" />}
                      </span>
                    </Link>
                  ))}
                  
                  <SignedOut>
                    <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
                      <SignInButton mode="modal">
                        <Button className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-xl rounded-2xl py-4 text-white font-semibold">
                          <User className="w-5 h-5 mr-2" />
                          Sign In
                        </Button>
                      </SignInButton>
                    </div>
                  </SignedOut>

                  <SignedIn>
                    <div className="pt-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900 dark:hover:to-blue-800 transition-colors"
                      >
                        <div className="w-10 h-10 mr-4 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full flex items-center justify-center text-white font-bold">
                          {user?.fullName?.charAt(0) || user?.emailAddresses[0]?.emailAddress?.charAt(0) || 'U'}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {user?.fullName || user?.emailAddresses[0]?.emailAddress}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {isAdmin ? 'Admin User' : 'View Profile'}
                          </div>
                        </div>
                      </Link>
                      <div className="px-6">
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              rootBox: "w-full",
                              card: "w-full"
                            }
                          }}
                        />
                      </div>
                    </div>
                  </SignedIn>
                  
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