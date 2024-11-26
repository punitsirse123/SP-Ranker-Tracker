import { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';

interface NavbarProps {
  user: {
    name: string;
    imageUrl: string;
    requestsLeft: number;
  };
  onLogout: () => void;
}

export default function Navbar({ user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">
              Rank Tracker Pro
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Requests left:</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                {user.requestsLeft}
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <img
                src={user.imageUrl}
                alt={user.name}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-gray-700">{user.name}</span>
              <button
                onClick={onLogout}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-3">
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
            <div className="px-4 py-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Requests left:</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {user.requestsLeft}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}