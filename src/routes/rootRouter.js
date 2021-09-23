import express from "express"

import animalsRouter from "./animalsRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req,res) => {


  res.render("index", {})
})

export default rootRouter