import { Ok, Result, ResultError } from "@/api/types";
import { request } from "@/api/util";
import { NextApiRequest, NextApiResponse } from "next";

export default async function emoteHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  const channelId = await getUserId(name as string);

  if (channelId instanceof ResultError) {
    return res.status(404).send("Not found");
  }

  res.status(200).json({ id: channelId.data });
}

async function getUserId(username: string): Promise<Result<number>> {
  const url = "https://api.ivr.fi/v2/twitch/user?login=" + username;
  const result = await request<UserInfo[]>(url);

  if (result instanceof ResultError) {
    return new ResultError("User does not exist");
  }

  return new Ok(Number(result.data[0].id));
}

export interface UserInfo {
  id: string;
}
