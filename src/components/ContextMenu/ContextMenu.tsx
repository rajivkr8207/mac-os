'use client';

import { ReactNode, useEffect, useRef } from 'react';
import './contextMenu.scss';

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  style: { transform: string };
  onClose: () => void;
  children: ReactNode;
}

const ContextMenu = ({ x, y, visible, onClose, children, style }: ContextMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (visible) {
      window.addEventListener('mousedown', handleClick);
    }

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="context-menu"
      style={{ top: y, left: x, transform: style.transform }}
    >
      {children}
    </div>
  );
};

export default ContextMenu;
