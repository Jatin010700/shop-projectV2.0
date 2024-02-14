// mongoose.ts
import mongoose, { Document, Schema } from 'mongoose';

interface MongooseModel extends Document {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductSchema = new Schema<MongooseModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const MongooseProductModel =
  mongoose.models.shopContent ||
  mongoose.model<MongooseModel>('shopContent', ProductSchema, 'shopContent');
// console.log("mongoose TS =",MongooseProductModel)
export default MongooseProductModel ;
