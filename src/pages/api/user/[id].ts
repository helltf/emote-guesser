import { NextApiRequest, NextApiResponse } from "next";

export default function emoteHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ forsen: "forsen" });
}
