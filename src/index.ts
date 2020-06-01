require('dotenv').config();

import express from 'express';
import { createEventAdapter } from '@slack/events-api';
import { eventChallenge, attemptAnswer } from './events';
import { requestSetAnswer, setAnswer } from './answers';

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET as string;
const slackEvents = createEventAdapter(slackSigningSecret);

const slackEventsPort = 81;
console.info(`slack events listening on ${slackEventsPort}`);

slackEvents.start(slackEventsPort);
slackEvents.on('message', () => attemptAnswer);

const app = express();

app.post('/event-challenge', eventChallenge);
app.post('/request-set-answer', requestSetAnswer);
app.post('/set-answer', setAnswer);

console.info(`app listening on ${process.env.PORT}`);
app.listen(process.env.PORT);
