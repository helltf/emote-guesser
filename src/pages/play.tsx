import { useEffect, useState } from "react";

export default function Play() {
  const [emotes, setEmotes] = useState<EmoteData | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/user/helltf")
      .then((res) => res.json())
      .then((data) => {
        setEmotes(data);
        setLoading(false);
      });
  }, []);

  if (!emotes) {
    return <div>nothing</div>;
  }

  return <div>play</div>;
}

type EmoteData = {
  ffz: EmoteInfo[];
  bttv: EmoteInfo[];
  sevenTv: EmoteInfo[];
};

export type EmoteInfo = {
  id: string;
  name: string;
  displayName?: string;
  animated: boolean;
};
