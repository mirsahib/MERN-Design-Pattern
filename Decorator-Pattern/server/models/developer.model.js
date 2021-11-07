import mongoose from 'mongoose'
import User from '../models/user.model'
import enhancedModel from '../helpers/enhancedModel'


const DeveloperSchema = enhancedModel(User,{otherinfo:{}})

// const DeveloperSchema = new mongoose.Schema({
//   /***
//   Uncomment this section to define your own schema
  
//   name: {
//     type: String,
//     trim: true,
//     required: 'Name is required'
//   },
//   email: {
//     type: String,
//     trim: true,
//     unique: 'Email already exists',
//     match: [/.+@.+..+/, 'Please fill a valid email address'],
//     required: 'Email is required'
//   },
//   hashed_password: {
//     type: String,
//     required: "Password is required"

//   ***/

//   updated: Date,
//   created: {
//     type: Date,
//     default: Date.now
//   }
// })

export default mongoose.model('Developer', DeveloperSchema)