import { Request, Response } from 'express';
import { WebClient } from '@slack/web-api';

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

export async function requestSetAnswer(req: Request, res: Response) {}

export async function setAnswer(req: Request, res: Response) {
  if (!req.body.answer || !req.body.hint) {
    return await res.status(400);
  }
  if (req.body.userid !== Data.getWinner()) {
    return await res.status(401);
  }
  Data.setAnswer(req.body.answer);
  await web.channels.setTopic({
    channel: process.env.STINKYPINKY_CHANNEL_NAME as string,
    topic: req.body.hint as string
  });
  return await res.status(200);
}
