import { ResultError } from "@/api/types";
import { request } from "@/api/util";
import { NextApiRequest, NextApiResponse } from "next";

export default function emoteHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ forsen: "forsen" });
}

async function getUserId(username: string): Promise<Result<number>> {
  const url = "https://api.ivr.fi/v2/twitch/user?login=" + username;
  const result = await request<UserInfo>(url);

  if (result instanceof ResultError) {
    return new ResultError("User does not exist");
  }
}
export interface UserInfo {
  id: string;
}
