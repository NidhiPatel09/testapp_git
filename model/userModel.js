import mongoose from "mongoose";

// const uri = "mongodb+srv://patelnidhi0509:TGlnWl4Y4KVxT8qT@cluster0.ed5kpuw.mongodb.net/CostCoUser?retryWrites=true&w=majority"

const uri = process.env.MONGO_URI

mongoose.connect(uri).then(()=>console.log("connected to mongodb**************************"))
.catch((err)=>{console.log(`failed due to the error below.\n${err}`)})

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    pwd: {type:String, required:true}
})

const userModel = mongoose.model('GeneralUser',userSchema)
 export default userModel