import { NextApiRequest, NextApiResponse } from "next";

export default function emoteHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ forsen: "forsen" });
}

async function getUserId(username: string): Promise<number> {
  const data = (await (
    await fetch("https://api.ivr.fi/v2/twitch/user?login=" + username)
  ).json()) as UserInfo;
}

export interface UserInfo {
  id: string;
}
