const express = require("express")
const router = express.Router()
const axios = require("axios")

//home route
router.get("/", (req,res)=>{
      res.json({msg:"Welcome Home Isingiro Server"})
})
//view_settings
router.get("/settings", async (req,res)=>{
      const response = await axios.get("https://muzboxafrica.com/api2/isingiro_fm/settings/")
      const result = response.data
      res.json(result) 
})

//programs
router.get("/programs", (req,res)=>{
      res.json({
            data:[
                  {program_title:"Morning Show", presenter:"Unknown"}
            ]
      })
})


module.exports=router