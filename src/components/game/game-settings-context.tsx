import { createContext, useContext, useState } from "react";

const defaultSettings = {
  channelName: "",
  ffz: false,
  bttv: false,
  seventv: false,
  min: 0,
  sec: 0,
} satisfies Settings;

const GameSettingsContext = createContext<Settings>(defaultSettings);
const GameUpdateSettingsContext = createContext<
  (settingsType: keyof Settings, value: number | string | boolean) => void
>({} as any);

export function useGameSettings() {
  return useContext(GameSettingsContext);
}

export function useGameSettingUpdate() {
  return useContext(GameUpdateSettingsContext);
}

export function GameSettingsProvider({ children }: { children: any }) {
  const [settings, setSettings] = useState(defaultSettings);

  const updateSettings = (
    settingsType: keyof Settings,
    value: number | string | boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [settingsType]: value,
    }));
  };

  return (
    <GameSettingsContext.Provider value={settings}>
      <GameUpdateSettingsContext.Provider value={updateSettings}>
        {children}
      </GameUpdateSettingsContext.Provider>
    </GameSettingsContext.Provider>
  );
}

export type EmoteSet = "ffz" | "bttv" | "seventv";

type Settings = {
  channelName: string;
  ffz: boolean;
  seventv: boolean;
  bttv: boolean;
  min: number;
  sec: number;
};
