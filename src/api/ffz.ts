import { EmoteInfo, EmoteType, ResultError } from "./types";
import { request } from "./util";

export async function fetchFfzEmotes(channelId: number): Promise<EmoteInfo[]> {
  const result = await request<FfzEmoteResponse>(
    "https://api.frankerfacez.com/v1/room/id/" + channelId
  );

  if (result instanceof ResultError) {
    return [];
  }

  return getEmoteNamesFromSets(result.data.sets);
}

function getEmoteNamesFromSets(sets: FfzEmoteSets): EmoteInfo[] {
  return Object.values(sets)[0].emoticons.map((emote) => {
    return {
      id: String(emote.id),
      name: emote.name,
      src: `https://cdn.frankerfacez.com/emote/${emote.id}/4`,
      width: emote.width * 2,
      height: emote.height * 2,
      guessed: false,
    };
  });
}

interface FfzEmoteResponse {
  room: FfzRoomInfo;
  sets: FfzEmoteSets;
}

interface FfzRoomInfo {
  _id: number;
  twitch_id: number;
  youtube_id: number;
  id: string;
  is_group: boolean;
  display_name: string;
  set: number;
  moderator_badge: string;
  vip_badge: {
    1: string;
    2: string;
    4: string;
  };
  mod_urls: {
    1: string;
    2: string;
    4: string;
  };
  user_badges?: any;
  user_badges_ids?: any;
  css?: any;
}

interface FfzEmoteSets {
  [set: string]: {
    id: number;
    _type: number;
    icon: any;
    title: string;
    css: any;
    emoticons: FfzEmoteInfo[];
  };
}

interface FfzEmoteInfo {
  id: number;
  name: string;
  height: number;
  width: number;
  public: true;
  hidden: false;
  modifier: false;
  offset: any;
  margins: any;
  css: any;
  owner: {
    _id: number;
    name: string;
    display_name: string;
  };
  urls: {
    "1": string;
  };
  status: number;
  usage_count: number;
  created_at: string;
  last_updated: string;
}
