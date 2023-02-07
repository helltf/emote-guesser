import { useEffect, useState } from "react";
import { useGameSettings } from "./game-settings-context";

export default function Timer({ onFinish }: { onFinish: () => void }) {
  const settings = useGameSettings();
  const [seconds, setSeconds] = useState(settings.sec);
  const [minutes, setMinutes] = useState(settings.min);

  const updateTimer = () => {
    setSeconds(seconds - 1);

    if (seconds === 0) {
      if (minutes === 0) {
        return onFinish();
      }
      setMinutes(minutes - 1);
      setSeconds(59);
      return;
    }
  };

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <p>
        {String(minutes).length === 1 ? "0" + String(minutes) : minutes}:
        {String(seconds).length === 1 ? "0" + String(seconds) : seconds}
      </p>
    </div>
  );
}
