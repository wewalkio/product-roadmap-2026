import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { path: '/roadmap', label: 'Overview' },
  { path: '/roadmap/2026', label: '2026 Delivery' },
  { path: '/roadmap/exploration', label: 'Exploration' },
  { path: '/roadmap/capacity-jira', label: 'Capacity & Jira' },
];

const THEMES = ['light', 'dark', 'contrast'] as const;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  
  const currentIndex = NAV_ITEMS.findIndex(item => item.path === location.pathname);

  const cycleTheme = () => {
    const currentThemeIndex = THEMES.indexOf(theme);
    const nextTheme = THEMES[(currentThemeIndex + 1) % THEMES.length];
    setTheme(nextTheme);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        const next = NAV_ITEMS[currentIndex + 1];
        if (next) navigate(next.path);
      }
      if (e.key === 'ArrowLeft') {
        const prev = NAV_ITEMS[currentIndex - 1];
        if (prev) navigate(prev.path);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, navigate]);

  return (
    <div className="presentation-outer relative overflow-hidden transition-colors duration-300 min-h-screen flex flex-col items-center justify-center p-4">
      
      {/* Theme Cycler - Single Button */}
      <button
        onClick={cycleTheme}
        className="fixed top-6 right-6 z-50 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm font-medium text-[var(--text-color)] hover:scale-105"
        title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)} - Click to cycle`}
      >
        <Palette size={16} />
        <span className="hidden sm:inline">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      </button>

      {/* Fixed Size Presentation Container - 16:9 aspect ratio */}
      <div className="relative" style={{ width: '1200px', height: '675px' }}>
          {/* Main Container - Fixed Size */}
          <div className="presentation-container absolute inset-0 flex flex-col transition-colors duration-300 rounded-xl shadow-2xl overflow-hidden border-2 border-[var(--border-color)] bg-[var(--bg-color)]">
            
            {/* Browser Top Bar / Tabs */}
            <div className="bg-[#f0f0f0] dark:bg-[#202124] px-4 pt-3 flex items-end gap-2 border-b-2 border-[var(--border-color)] overflow-x-auto no-scrollbar">
               {/* Tabs */}
               {NAV_ITEMS.map((item) => {
                 const isActive = location.pathname === item.path;
                 return (
                   <Link 
                     key={item.path} 
                     to={item.path}
                     className={`
                       no-underline relative px-6 py-2.5 text-xs font-bold uppercase tracking-wide transition-all rounded-t-lg
                       ${isActive 
                         ? 'bg-[var(--bg-color)] text-[var(--text-color)] border-2 border-b-0 border-[var(--border-color)] -mb-[2px] z-10' 
                         : 'bg-[#e0e0e0] dark:bg-[#303134] text-[var(--text-secondary)] border-2 border-transparent mb-0 hover:bg-[#d0d0d0] dark:hover:bg-[#404144]'
                       }
                     `}
                     style={{ textDecoration: 'none', color: 'inherit' }}
                   >
                     {item.label}
                   </Link>
                 );
               })}
            </div>

            {/* Content Area */}
            <main className="flex-1 w-full overflow-y-auto px-10 py-8 scrollbar-thin bg-[var(--bg-color)] relative">
              {children}
            </main>

            {/* Logo - Bottom Left */}
            <div className="absolute bottom-4 left-4 select-none opacity-80">
              <img 
                src="/wewalk_logo.svg" 
                alt="WeWALK" 
                className="h-5 w-auto"
                style={{ filter: 'var(--logo-filter)' }} 
              />
            </div>

            {/* Page Number - Bottom Right (Absolute) */}
            <div className="absolute bottom-4 right-4 text-[10px] font-mono font-bold text-[var(--text-secondary)] opacity-50 select-none">
                {currentIndex + 1} / {NAV_ITEMS.length}
            </div>
          </div>

          {/* Arrows - On Left/Right Borders of Container */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20">
             <Link 
              to={NAV_ITEMS[currentIndex - 1]?.path || '#'}
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-xl text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:scale-110 transition-all ${currentIndex <= 0 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20">
             <Link 
              to={NAV_ITEMS[currentIndex + 1]?.path || '#'}
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-xl text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:scale-110 transition-all ${currentIndex >= NAV_ITEMS.length - 1 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </Link>
          </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-[10px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold opacity-60">
         WeWALK - Product 2025 Q4 Presentation - Confidential
      </footer>
    </div>
  );
};
