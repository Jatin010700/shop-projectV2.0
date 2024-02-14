import mongoose, { Document, Schema } from "mongoose";

interface LoginModel extends Document {
    username: string;
    password: string;
  }
  
  const LoginSchema = new Schema<LoginModel>({
    username: {type:String, required: true},
    password: {type:String, required: true},
  })
  
  const MongooseLoginModel = mongoose.models.demoRegisterDB || 
  mongoose.model<LoginModel>("demoRegisterDB",  LoginSchema, "demoRegisterDB")
  // console.log(MongooseLoginModel)
  const MongooseSaveUserLoginModel = mongoose.models.userLogin ||
  mongoose.model<LoginModel>("userLogin", LoginSchema, "userLogin")

  export {MongooseLoginModel, MongooseSaveUserLoginModel}