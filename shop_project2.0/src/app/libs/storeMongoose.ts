import mongoose, { Document, Schema } from 'mongoose';

interface StoreModel extends Document {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const StoreSchema = new Schema<StoreModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const MongooseStoreModel =
  mongoose.models.storeAllContent ||
  mongoose.model<StoreModel>('storeAllContent', StoreSchema, 'storeAllContent');
// console.log("mongoose TS =",MongooseProductModel)
export default MongooseStoreModel ;
