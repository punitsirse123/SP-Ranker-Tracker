import { Home, Settings, BarChart2, LogOut } from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User | null;
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ user, activeView, onViewChange }: SidebarProps) {
  if (!user) return null;

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart2, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.subscription}</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`w-full flex items-center px-3 py-2 text-sm rounded-lg ${
              activeView === id
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="mr-3 h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {/* Implement logout */}}
          className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}