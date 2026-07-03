import mongoose from "mongoose";
import bcrypt  from "bcrypt";
//schema for the user
const userSchema= new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{

        type:String,
        required:true
    }
})
// mongoose middleware
// executes every thime an operation is done on the model here(save)
userSchema.pre('save', async  function(){

    if(!this.isModified(this.password))
    {
        return ;
    }
    //salt basically adds uniqueness to the hashing
    const salt= await bcrypt.genSalt(10);
    //hashing the password
    this.password=await bcrypt.hash(password,salt);
    // since its amiddleware need next
    
})
// model generated using userschema
const User=mongoose.model('User',userSchema);
export default User;