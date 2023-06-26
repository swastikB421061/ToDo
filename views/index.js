const Activity=require("../src/connect");

const insert=async()=>{
    const db=await Activity();
    console.log(db);

}

insert();