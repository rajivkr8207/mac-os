'use client';

import { useEffect, useRef, useState } from 'react';
import './spotlight.scss';
import { useSpotlight } from '@/app/context/SpotlightContext';
import { useWindowManager } from '@/app/context/WindowManagerContext';



export default function Spotlight() {
  const { isOpen, close } = useSpotlight();
  const [query, setQuery] = useState<string>('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { openWindow } = useWindowManager();
  const DATA = [
    {
      title: 'note', action: () =>
        openWindow('note')
    },
    {
      title: 'help', action: () =>
        openWindow('help')
    },
    {
      title: 'github', action: () =>
        openWindow('github')
    },
    {
      title: 'calender', action: () =>
        openWindow('calender')
    },
    {
      title: 'settings', action: () =>
        openWindow('settings')
    },
    {
      title: 'terminal', action: () =>
        openWindow('terminal')
    },

  ];
  const results = DATA.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery('');
      setIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="spotlight-overlay" onClick={close}>
      <div className="spotlight-box" onClick={e => e.stopPropagation()}>
        <input
          ref={inputRef}
          placeholder="Search apps..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'ArrowDown')
              setIndex(i => Math.min(i + 1, results.length - 1));
            if (e.key === 'ArrowUp')
              setIndex(i => Math.max(i - 1, 0));
            if (e.key === 'Enter') {
              results[index]?.action();
              close();
            }
          }}
        />

        <ul>
          {results.map((r, i) => (
            <li key={r.title} onClick={() => {
              openWindow(r.title);
              close()
            }} className={i === index ? 'active' : ''}>
              {r.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
