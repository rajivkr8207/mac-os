'use client';

import './settings.scss';
import MacWindow from '@/components/MacWindow/MacWindow';

const Settings = ({ windowName }: { windowName: string }) => {
  const setWallpaper = (src: string) => {
    document.body.style.setProperty('--wallpaper', `url(${src})`);
    localStorage.setItem('wallpaper', src);
  };

  const setTheme = (theme: 'light' | 'dark') => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  };
  const wallpapers = [
    { id: 'mac1', src: '/wallpaper/mac1.jpg', name: 'Monterey' },
    { id: 'mac2', src: '/wallpaper/mac2.jpg', name: 'Ventura' },
    { id: 'mac3', src: '/wallpaper/mac3.jpg', name: 'Sonoma' },
    { id: 'mac4', src: '/wallpaper/mac4.jpg', name: 'Big Sur' },
    { id: 'mac4', src: '/wallpaper/mac5.jpg', name: 'Big Sur' },

  ];
  
  return (
    <MacWindow windowName={windowName}>
      <div className="settings">
        <h1>Settings</h1>

        {/* Theme */}
        <section>
          <h2>Appearance</h2>
          <div className="theme-toggle">
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
          </div>
        </section>

        {/* Wallpaper */}
        <section>
          <h2>Wallpaper</h2>
          <div className="wallpaper-grid">
            {wallpapers.map((wp) => (
              <div
                key={wp.id}
                className="wallpaper"
                onClick={() => setWallpaper(wp.src)}
              >
                <img src={wp.src} alt={wp.name} />
                <span>{wp.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MacWindow>
  );
};

export default Settings;
