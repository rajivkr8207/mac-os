declare module 'react-console-emulator' {
  import * as React from 'react';

  interface CommandDefinition {
    description?: string;
    usage?: string;
    fn: (...args: string[]) => string | void;
  }

  export interface TerminalProps {
    commands?: Record<string, CommandDefinition>;
    welcomeMessage?: string;
    promptLabel?: string;
    promptLabelStyle?: React.CSSProperties;
    [key: string]: any;
  }

  export default class Terminal extends React.Component<TerminalProps> {}
}
