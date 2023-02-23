import { useEffect, useState } from "react";

export default function Timer({
  onFinish,
  sec,
  min,
  finished,
}: {
  onFinish: () => void;
  sec: number;
  min: number;
  finished: boolean;
}) {
  const [seconds, setSeconds] = useState(sec + min * 60);

  const updateTimer = () => {
    if (seconds === 0) return;
    setSeconds(seconds - 1);

    if (seconds === 1) {
      return onFinish();
    }
  };

  useEffect(() => {
    if (finished) return;
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  });

  const getMinutes = (seconds: number) => {
    return Math.floor(seconds / 60);
  };

  return (
    <p className="text-white">
      {String(getMinutes(seconds)).length === 1
        ? "0" + String(getMinutes(seconds))
        : seconds % 60}
      :
      {String(seconds % 60).length === 1
        ? "0" + String(seconds % 60)
        : seconds % 60}
    </p>
  );
}
