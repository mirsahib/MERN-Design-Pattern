import mongoose from 'mongoose'

const enhancedModel = (schema,properties)=>{
    let cloneSchema = schema.clone()
    let schemaObj = {...cloneSchema.obj,...properties}
    cloneSchema.obj = schemaObj    
    console.log('enhanchedSchema',cloneSchema)

    return cloneSchema
}

export default {
    enhancedModel
}