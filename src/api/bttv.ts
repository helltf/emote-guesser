import { EmoteInfo, EmoteType, ResultError } from "./types";
import { request } from "./util";

export async function fetchBttvEmotes(channelId: number): Promise<EmoteInfo[]> {
  const result = await request<BttvEmoteResponse>(
    "https://api.betterttv.net/3/cached/users/twitch/" + channelId
  );

  if (result instanceof ResultError) {
    return [];
  }
  return mapBttvEmotes(result.data);
}

function mapBttvEmotes(bttvResponse: BttvEmoteResponse): EmoteInfo[] {
  const { sharedEmotes, channelEmotes } = bttvResponse;
  return [...sharedEmotes, ...channelEmotes].map((emote) => {
    return {
      id: emote.id,
      name: emote.code,
      src: `https://cdn.betterttv.net/emote/${emote.id}/2x.${emote.imageType}`,
      width: 56,
      height: 56,
    };
  });
}

interface BttvEmoteResponse {
  id: string;
  bots: string[];
  avatar: string;
  channelEmotes: BttvChannelEmotesInfo[];
  sharedEmotes: BttvChannelEmotesInfo[];
}

interface BttvChannelEmotesInfo {
  id: string;
  code: string;
  imageType: string;
  userid: string;
}
