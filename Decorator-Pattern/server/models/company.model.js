import mongoose from 'mongoose'
import modelFunction from '../helpers/enhancedModel'
import crypto from 'crypto'
import {UserSchema} from '../models/user.model'

const extendedProperties = {
  companyLogo: { type: String },// image url
  companyDescription: { type: String, trim: true },
}
const CompanySchema = modelFunction.enhancedModel(UserSchema, extendedProperties)
console.log('companyschema',CompanySchema)
export default mongoose.model('Company', CompanySchema)