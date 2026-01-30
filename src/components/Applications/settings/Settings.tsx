'use client';

import Image from 'next/image';
import './settings.scss';
import MacWindow from '@/components/MacWindow/MacWindow';
import { useState, useEffect } from 'react';
import {
  FiMonitor,
  FiMoon,
  FiSun,
  FiImage,
  FiUser,
  FiGlobe,
  FiHelpCircle,
  FiCheck,
  FiRefreshCw
} from 'react-icons/fi';
import {
  BsDisplay,
} from 'react-icons/bs';
import { useTheme } from '@/app/context/ThemeContext';

type TabType = 'general' | 'wallpaper';

const Settings = ({ windowName }: { windowName: string }) => {
  const [activeTab, setActiveTab] = useState<TabType>('general');
  const [selectedWallpaper, setSelectedWallpaper] = useState<string>('mac1');
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' || 'auto';
    const savedWallpaper = localStorage.getItem('wallpaper') || 'mac1';

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedWallpaper(savedWallpaper);
  }, []);

  const setWallpaper = (src: string, id: string) => {
    document.body.style.setProperty('--wallpaper', `url(${src})`);
    localStorage.setItem('wallpaper', src);
    setSelectedWallpaper(id);
  };

  const wallpapers = [
    { id: 'mac1', src: '/wallpaper/mac1.jpg', name: 'Monterey', category: 'Dynamic' },
    { id: 'mac2', src: '/wallpaper/mac2.jpg', name: 'Ventura', category: 'Landscape' },
    { id: 'mac3', src: '/wallpaper/mac3.jpg', name: 'Sonoma', category: 'Aerial' },
    { id: 'mac4', src: '/wallpaper/mac4.jpg', name: 'Big Sur', category: 'Landscape' },
    { id: 'mac5', src: '/wallpaper/mac5.jpg', name: 'Sequoia', category: 'Dynamic' },
  ];

  const sidebarItems = [
    { id: 'general', icon: <FiMonitor />, label: 'General' },
    { id: 'wallpaper', icon: <FiImage />, label: 'Desktop & Screen Saver' },
  ];

  return (
    <MacWindow windowName={windowName}>
      <div className="settings-container">
        {/* macOS Settings Sidebar */}
        <div className="settings-sidebar">
          <div className="sidebar-header">
            <FiUser className="user-icon" />
            <div className="user-info">
              <span className="user-name">System Preferences</span>
              <span className="user-email">macOS</span>
            </div>
          </div>

          <div className="sidebar-nav">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id as TabType)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Main Content Area */}
        <div className="settings-content">
          <div className="content-header">
            <h1>{sidebarItems.find(item => item.id === activeTab)?.label}</h1>
            <div className="header-actions">
              <button className="action-btn">
                <FiGlobe />
              </button>
              <button className="action-btn">
                <FiHelpCircle />
              </button>
            </div>
          </div>

          <div className="content-scroll">
            {activeTab === 'general' && (
              <div className="tab-content">
                <div className="preferences-section">
                  <h2><BsDisplay /> Appearance</h2>
                  <div className="preference-grid">
                    <div className="preference-item">
                      <label>Theme</label>
                      <div className="theme-selector">
                        <button
                          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                          onClick={() => setTheme('light')}
                        >
                          <FiSun />
                          <span>Light</span>
                        </button>
                        <button
                          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                          onClick={() => setTheme('dark')}
                        >
                          <FiMoon />
                          <span>Dark</span>
                        </button>
                        <button
                          className={`theme-option ${theme === 'auto' ? 'active' : ''}`}
                          onClick={() => setTheme('auto')}
                        >
                          <FiRefreshCw />
                          <span>Auto</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wallpaper' && (
              <div className="tab-content">
                <div className="wallpaper-section">
                  <div className="wallpaper-grid">
                    {wallpapers.map((wp) => (
                      <div
                        key={wp.id}
                        className={`wallpaper-item ${selectedWallpaper === wp.id ? 'selected' : ''}`}
                        onClick={() => setWallpaper(wp.src, wp.id)}
                      >
                        <div className="wallpaper-image">
                          <Image
                            src={wp.src}
                            alt={wp.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                          />
                          {selectedWallpaper === wp.id && (
                            <div className="selected-indicator">
                              <FiCheck />
                            </div>
                          )}
                        </div>
                        <div className="wallpaper-info">
                          <span className="wallpaper-name">{wp.name}</span>
                          <span className="wallpaper-category">{wp.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Settings;