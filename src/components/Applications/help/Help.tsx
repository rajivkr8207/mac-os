'use client';

import { useState } from 'react';
import {
  FiMonitor,
  FiImage,
  FiSettings,
  FiLayers,
  FiCheckCircle,
  FiClock
} from 'react-icons/fi';
import './help.scss'
import MacWindow from '@/components/MacWindow/MacWindow';
type Status = 'done' | 'planned';

const features = [
  {
    category: 'Desktop',
    icon: <FiMonitor />,
    items: [
      { name: 'Mac', status: 'done' },
      { name: 'Dock', status: 'done' },
      { name: 'Controls', status: 'done' },
    ],
  },
  {
    category: 'Personalization',
    icon: <FiImage />,
    items: [
      { name: 'Theme (Light/Dark)', status: 'done' },
      { name: 'Wallpaper Change', status: 'done' },
    ],
  },
  {
    category: 'System',
    icon: <FiSettings />,
    items: [
      { name: 'Settings App', status: 'done' },
      { name: 'Keyboard Shortcuts', status: 'planned' },
    ],
  },
  {
    category: 'Advanced',
    icon: <FiLayers />,
    items: [
      { name: 'Spotlight Search', status: 'done' },
      { name: 'Custom Context Menu', status: 'done' },
    ],
  },
];

export default function HelpCenter({ windowName }: { windowName: string }) {
  const [active, setActive] = useState(0);

  return (
    <MacWindow windowName={windowName}>

    <div className="help-container">
      <aside className="help-sidebar">
        {features.map((cat, i) => (
          <button
            key={cat.category}
            className={active === i ? 'active' : ''}
            onClick={() => setActive(i)}
          >
            {cat.icon}
            <span>{cat.category}</span>
          </button>
        ))}
      </aside>

      <main className="help-content">
        <h1>{features[active].category}</h1>

        <div className="feature-list">
          {features[active].items.map(item => (
            <div key={item.name} className="feature-card">
              {item.status === 'done' ? (
                <FiCheckCircle className="done" />
              ) : (
                <FiClock className="planned" />
              )}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
    </MacWindow>

  );
}
