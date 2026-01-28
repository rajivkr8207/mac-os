'use client';

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react';

type WindowMap = Record<string, boolean>;
type ZMap = Record<string, number>;

interface WindowManagerContextType {
    windowsOpen: WindowMap;
    windowZ: ZMap;
    openWindow: (name: string) => void;
    closeWindow: (name: string) => void;
    bringToFront: (name: string) => void;
}

export const WindowManagerContext = createContext<
    WindowManagerContextType | undefined
>(undefined);

export function WindowManagerProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [windowsOpen, setWindowsOpen] = useState<Record<string, boolean>>({
        github: false,
        note: false,
        pdf: false,
        calender: false,
        terminal: false,
        settings: false,
    });


    const [topZ, setTopZ] = useState(10);

    const [windowZ, setWindowZ] = useState<ZMap>({
        github: 10,
        note: 11,
        pdf: 12,
        calender: 13,
        terminal: 14,
        settings: 15,
    });

    const bringToFront = (name: string) => {
        setTopZ((prev) => {
            const next = prev + 1;
            setWindowZ((z) => ({
                ...z,
                [name]: next,
            }));
            return next;
        });
    };

    const openWindow = (name: string) => {
        setWindowsOpen((w) => ({ ...w, [name]: true }));
        bringToFront(name);
    };

    const closeWindow = (name: string) => {
        setWindowsOpen((w) => ({ ...w, [name]: false }));
    };

    return (
        <WindowManagerContext.Provider
            value={{
                windowsOpen,
                windowZ,
                openWindow,
                closeWindow,
                bringToFront,
            }}
        >
            {children}
        </WindowManagerContext.Provider>
    );
}

export function useWindowManager() {
    const ctx = useContext(WindowManagerContext);
    if (!ctx) {
        throw new Error(
            'useWindowManager must be used inside WindowManagerProvider'
        );
    }
    return ctx;
}
