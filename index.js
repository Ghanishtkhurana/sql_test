const express = require("express");
const {PrismaClient} = require("@prisma/client")
const app = express();
const prisma = new PrismaClient()

app.get("/", async (req, res) => {
  res.send("Homepage");
});

app.get("/get_user",async(req,res)=>{
    try {
        const allAdmin = await prisma.admin.findMany()
        res.send(allAdmin)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(8080, async() => {
  try {
    console.log("running on 8080");
  } catch (error) {
    console.log(error.message);
  }
});
