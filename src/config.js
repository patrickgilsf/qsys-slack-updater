import dotenv from 'dotenv';
dotenv.config();

const Creds = {
  PW: process.env.PW,
  Headers: {
    Authorization: `Bearer ${process.env.PW}`
  },
  Slack: process.env.SlackKey
}

export {
  Creds
}