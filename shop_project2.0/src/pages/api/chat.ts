// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';

const responseDictionary: Record<string, string> = {
  'hello': 'Hello there!, How can I help?',
  'hi': 'Hi!, How can I help?',
  'how are you': 'I am just a bot, but thanks for asking!',
  'what do you have in store': 'Sure, check out what we have in store : <a href="http://localhost:3000/store_page/game">Store link</a>',
  'i would like to see what you have in store': 'Sure, check out what we have in store : <a href="http://localhost:3000/store_page/game">Store link</a>',
  "i want to report this website": "Thank you for bringing this to our attention. Could you please share a brief overview of the issue? Your feedback helps us ensure a safer online experience."
};

const getBotResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();

  // Check if the lowercased message is a key in the dictionary
  const response = responseDictionary[lowerCaseMessage];

  return response || 'I am not sure how to respond to that. Please provide a valid question./sentence!';
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const botResponse = getBotResponse(message);

    res.status(200).send(botResponse);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
