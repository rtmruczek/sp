import { Request, Response } from 'express';
import { WebClient } from '@slack/web-api';

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

export async function eventChallenge(req: Request, res: Response) {
  return await res.status(200).send('');
}

export async function attemptAnswer(event: any) {
  const userMessage: string = event.message;
  const isStinkyPinkyAnswer = userMessage.split(/\s+/).length === 2;
  if (!isStinkyPinkyAnswer) {
    return;
  }
  const answer = Data.getAnswer();
  if (userMessage.split(/\s+/).join(' ') === answer) {
    Data.setWinner(event.user_id);
    await web.chat.postMessage({
      channel: process.env.STINKYPINKY_CHANNEL_NAME as string,
      text: `${event.user} has won with ${userMessage}! They will receive a DM to set the next answer and clue.`
    });
  } else {
    await web.chat.postMessage({
      channel: process.env.STINKYPINKY_CHANNEL_NAME as string,
      text: `Sorry, ${userMessage} is not correct.`
    });
  }
}
