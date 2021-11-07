import mongoose from 'mongoose'

const enhancedModel = (schema,properties)=>{
    let cloneSchema = schema.clone()
    let newObj = cloneSchema.obj 
    let schemaObj = {...newObj,...properties}
    console.log('schemaObj',schemaObj)
    // let enchancedSchema = new mongoose.Schema(
    //     Object.assign({},cloneSchema))
    //console.log('schema obj',cloneSchema)
    cloneSchema.obj = schemaObj
    cloneSchema.add(schemaObj)

    console.log('enhanchedSchema',cloneSchema)
    return cloneSchema
}

export default {
    enhancedModel
}