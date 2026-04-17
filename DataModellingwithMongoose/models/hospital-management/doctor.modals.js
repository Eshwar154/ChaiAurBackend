import mongoose from "mongoose";

const hospitalhrsSchema = new mongoose.Schema({
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",
    hrs:{
        type:Date,
    },
    day:{
        type:String
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',    
    }],
    presentsIn:{
        type:[hospitalhrsSchema]
    }
    
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)