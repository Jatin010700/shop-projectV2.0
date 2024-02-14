// getMongoDBContent.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/app/libs/mongoDB';
import MongooseStoreModel from '@/app/libs/storeMongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await ConnectMongoDB(); // Ensure MongoDB connection is established

    if (req.method === 'GET') {
      console.log('Processing GET request');
      // Disable caching
      res.setHeader('Cache-Control', 'no-store');
      
      // Fetch products from the database using your Mongoose model
      const products = await MongooseStoreModel.find();
      // console.log("server product", products)
      // console.log(MongooseProductModel)
      res.status(200).json(products);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
