const mongoose=require("mongoose");


const mongoURI="mongodb://localhost:27017/npk?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI="mongodb+srv://sksachin7z2:ramdulari123@npk.nalxjlh.mongodb.net/test?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;