import { useGameSettings } from "./game-settings-context";

export default function EmoteGuesser() {
  const settings = useGameSettings();
  return <div>{JSON.stringify(settings)}</div>;
}
