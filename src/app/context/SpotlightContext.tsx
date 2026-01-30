'use client';

import { createContext, useContext, useState } from 'react';

type SpotlightContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const SpotlightContext = createContext<SpotlightContextType | null>(null);

export function SpotlightProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SpotlightContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);
  if (!ctx) {
    throw new Error('useSpotlight must be used inside SpotlightProvider');
  }
  return ctx;
}
