import express from "express"
import path from "path"

const rootRouter = new express.Router()

rootRouter.get("/", (req,res) => {

  res.sendFile(path.join(path.resolve("") + '/views/index.html'));
})

export default rootRouter