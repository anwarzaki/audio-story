import { Home, GraduationCap, Phone, User } from 'lucide-react';
import type { NavigationTab } from '../types';

interface BottomNavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home' as NavigationTab, label: 'Home', icon: Home },
    { id: 'learn' as NavigationTab, label: 'Learn', icon: GraduationCap },
    { id: 'call' as NavigationTab, label: 'Call', icon: Phone },
    { id: 'profile' as NavigationTab, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 pb-safe" style={{ backgroundColor: 'var(--color-background-white)', borderTop: '1px solid var(--color-border-light)' }}>
      <div className="flex justify-around items-center h-16 responsive-container">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center gap-1 px-4 py-2 transition-colors"
            >
              <Icon
                size={24}
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-gray)',
                  strokeWidth: isActive ? 2.5 : 2
                }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text-gray)' }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}