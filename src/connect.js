const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ToDo",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})

const Eschema = new mongoose.Schema({
    title:String,
    desc:String,
    
})

const Activity=new mongoose.model("Activity",Eschema);
module.exports=Activity;