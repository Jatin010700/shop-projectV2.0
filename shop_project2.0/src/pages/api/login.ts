// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/app/libs/mongoDB';
import { MongooseLoginModel, MongooseSaveUserLoginModel } from '@/app/libs/loginMongoose';

ConnectMongoDB(); // Connect to MongoDB

interface ErrorResponse {
  error: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username, password }: LoginRequest = req.body;
      // console.log('Request Body:', req.body);
      // console.log(username, password)
      // Check if the user exists in MongoDB
      const user = await MongooseLoginModel.findOne({ username });

      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' } as ErrorResponse);
      }

      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid username or password' } as ErrorResponse);
      }

      await MongooseSaveUserLoginModel.create({username, password: user.password})

      return res.status(200).json({message: "Login Successfull"});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' } as ErrorResponse);
    }
  }
  return res.status(405).end(); // Method Not Allowed
}
