import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { User } from './types';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeView, setActiveView] = useState('dashboard');

  const handleLogin = async () => {
    // Implement OAuth login with backend
    const response = await fetch('https://your-gcp-backend.com/auth/google');
    const userData = await response.json();
    setUser(userData);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <TitleBar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          user={user} 
          activeView={activeView} 
          onViewChange={setActiveView}
        />
        
        <main className="flex-1 overflow-auto">
          {!user ? (
            <div className="h-full flex items-center justify-center">
              <button
                onClick={handleLogin}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign in with Google
              </button>
            </div>
          ) : (
            <Dashboard user={user} />
          )}
        </main>
      </div>
    </div>
  );
}