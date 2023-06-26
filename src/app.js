const express = require("express");
const app = express();
const path=require("path");
const Activity = require("./connect");
require("./connect");

const port=5000;

app.use(express.json());
 
const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get("/",async(req,res)=>{
   const act=await Activity.find({});
   res.render("index",{todo:act});
})

app.post("/",async(req,res)=>{
    var a=req.body.title;
    var b=req.body.desc;
    const user={title:a,desc:b};
    await Activity.create(user);
    res.redirect("/");
});

app.post("/delete",function(req,res)
{
  const check=req.body.taskId;
  
  Activity.deleteOne({_id:check}).then(()=>{
    res.redirect("/");
  }).catch((err)=>{
      console.log(err);
  });
});




app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})