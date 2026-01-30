'use client';

import { useEffect } from 'react';
import { useSpotlight } from './SpotlightContext';

export function useSpotlightShortcut() {
  const { open, close } = useSpotlight();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');

      if (
        (isMac && e.metaKey && e.code === 'Space') ||
        (!isMac && e.ctrlKey && e.code === 'Space')
      ) {
        e.preventDefault();
        open();
      }

      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, close]);
}
