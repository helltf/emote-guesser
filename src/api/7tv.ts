import { EmoteInfo, EmoteType, ResultError } from "./types";
import { request } from "./util";

export async function fetchSevenTvEmotes(
  channelId: number
): Promise<EmoteInfo[]> {
  const result = await request<SevenTvUserInfo>(
    "https://7tv.io/v3/users/twitch/" + channelId
  );

  if (result instanceof ResultError) {
    return [];
  }

  return mapSeventvEmotes(result.data);
}

function mapSeventvEmotes(info: SevenTvUserInfo): EmoteInfo[] {
  return info.emote_set.emotes.map((emote) => {
    const fileData = emote.data.host.files[emote.data.host.files.length - 5];
    return {
      id: emote.id,
      name: emote.name,
      displayName: emote.data.name,
      src: `https://cdn.7tv.app/emote/${emote.id}/4x.webp`,
      width: fileData.width,
      height: fileData.height,
    };
  });
}

export interface Style {
  color: number;
}

export interface Owner {
  id: string;
  username: string;
  display_name: string;
  avatar_url: string;
  style: Style;
  roles: string[];
}

export interface File {
  name: string;
  static_name: string;
  width: number;
  height: number;
  frame_count: number;
  size: number;
  format: string;
}

export interface Host {
  url: string;
  files: File[];
}

export interface Data {
  id: string;
  name: string;
  flags: number;
  lifecycle: number;
  state: string[];
  listed: boolean;
  animated: boolean;
  owner: Owner;
  host: Host;
  tags: string[];
}

export interface Emote {
  id: string;
  name: string;
  flags: number;
  timestamp: any;
  actor_id: string;
  data: Data;
}

export interface EmoteSetOwner {
  id: string;
  username: string;
  display_name: string;
  avatar_url: string;
  roles: string[];
}

export interface EmoteSet {
  id: string;
  name: string;
  flags: number;
  tags: any[];
  immutable: boolean;
  privileged: boolean;
  emotes: Emote[];
  emote_count: number;
  capacity: number;
  owner: EmoteSetOwner;
}

export interface Editor {
  id: string;
  permissions: number;
  visible: boolean;
  added_at: any;
}

export interface EmoteSet2 {
  id: string;
  name: string;
  flags: number;
  tags: any[];
  immutable: boolean;
  privileged: boolean;
  capacity: number;
  owner?: any;
}

export interface Connection {
  id: string;
  platform: string;
  username: string;
  display_name: string;
  linked_at: number;
  emote_capacity: number;
  emote_set_id?: any;
  emote_set: EmoteSet2;
}

export interface User {
  id: string;
  username: string;
  display_name: string;
  created_at: number;
  avatar_url: string;
  biography: string;
  editors: Editor[];
  roles: string[];
  connections: Connection[];
}

export interface SevenTvUserInfo {
  id: string;
  platform: string;
  username: string;
  display_name: string;
  linked_at: number;
  emote_capacity: number;
  emote_set_id?: any;
  emote_set: EmoteSet;
  user: User;
}
