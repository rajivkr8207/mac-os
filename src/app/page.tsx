'use client';

import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Dock from "@/components/dock/Dock";
import ContextMenu from "@/components/ContextMenu/ContextMenu";
import WeatherCard from "@/components/weather/weatherCard";

import Github from "@/components/Applications/github/Github";
import Note from "@/components/Applications/note/Note";
import Pdf from "@/components/Applications/pdf/Pdf";
import Cli from "@/components/Applications/cli/Cli";
import CalenderCom from "@/components/Applications/Calender/calender";
import Settings from "@/components/Applications/settings/Settings";

import { useWindowManager } from "./context/WindowManagerContext";
import HelpCenter from '@/components/Applications/help/Help';
import { useSpotlightShortcut } from './context/useSpotlightShortcut';

interface MenuState {
  visible: boolean;
  x: number;
  y: number;
  transform: string;
}

const Home = () => {
  const { windowsOpen, openWindow } = useWindowManager();
  useSpotlightShortcut();
  const [menu, setMenu] = useState<MenuState>({
    visible: false,
    x: 0,
    y: 0,
    transform: 'translate(0, 0)',
  });
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      const menuWidth = 200;
      const menuHeight = 180;

      const x: number = e.clientX;
      const y: number = e.clientY;
      let transform = 'translate(0, 0)';

      // Right overflow
      if (window.innerWidth - x < menuWidth) {
        transform = 'translate(-100%, 0)';
      }

      // Bottom overflow
      if (window.innerHeight - y < menuHeight) {
        transform = 'translate(0, -100%)';
      }

      // Bottom-right corner
      if (
        window.innerWidth - x < menuWidth &&
        window.innerHeight - y < menuHeight
      ) {
        transform = 'translate(-100%, -100%)';
      }

      setMenu({
        visible: true,
        x,
        y,
        transform,
      });
    };

    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);





  useEffect(() => {
    const wallpaper =
      localStorage.getItem('wallpaper') || '/wallpaper/mac1.jpg';

    document.body.style.setProperty(
      '--wallpaper',
      `url(${wallpaper})`
    );
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      <Dock />
      <WeatherCard />

      {/* Windows */}
      {windowsOpen.github && <Github windowName="github" />}
      {windowsOpen.note && <Note windowName="note" />}
      {windowsOpen.pdf && <Pdf windowName="pdf" />}
      {windowsOpen.calender && <CalenderCom windowName="calender" />}
      {windowsOpen.terminal && <Cli windowName="terminal" />}
      {windowsOpen.settings && <Settings windowName="settings" />}
      {windowsOpen.help && <HelpCenter windowName="help" />}

      {/* Context Menu */}
      <ContextMenu
        x={menu.x}
        y={menu.y}
        visible={menu.visible}
        onClose={() => setMenu({ ...menu, visible: false })}
        style={{ transform: menu.transform }}
      >
        <div className="context-item" onClick={() => {
          openWindow("github");
          setMenu({ ...menu, visible: false });
        }}>github</div>
        <div className="context-item" onClick={() => {
          openWindow("note");
          setMenu({ ...menu, visible: false });
        }}> Note</div>
        <div className="context-item" onClick={() => {
          openWindow("pdf");
          setMenu({ ...menu, visible: false });
        }}>pdf</div>
        <div className="context-item" onClick={() => {
          openWindow("terminal");
          setMenu({ ...menu, visible: false });
        }}>cli</div>
        <div className="context-item" onClick={() => {
          openWindow("calender");
          setMenu({ ...menu, visible: false });
        }}>calender</div>
        <div className="context-divider" />
        <div className="context-item" onClick={() => {
          openWindow("settings");
          setMenu({ ...menu, visible: false });
        }}>Change Wallpaper</div>
      </ContextMenu>
    </div>
  );
};

export default Home;
