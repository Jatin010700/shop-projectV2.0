// mongoDB.ts
import mongoose from 'mongoose';

let isConnected = false;

const ConnectMongoDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB connected already");
    return;
  }

  try {
    const mongoEnv: string = process.env.MONGO_DB_URL || '';
    // console.log('MongoDB Connection String:', mongoEnv);

    // await mongoose.connect(mongoEnv, {
    //     dbName: "shopProjectV2",
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   } as mongoose.ConnectOptions);
      await mongoose.connect(mongoEnv, {
        dbName: "shopProjectV2",
      });
      isConnected = true
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

export default ConnectMongoDB;
