import express, {Request,Response} from 'express'
import {body,validationResult} from 'express-validator'

const router=express.Router()

router.get('/api/users/signup',(req:Request,res:Response)=>{
  // const errors=validationResult(req)
  
  // if(!errors.isEmpty()){
  //   return res.status(400).send(errors.array())
  // }

  const {email,password}=req.body
  console.log('Creating a user...')

  res.send({})

  //New User Email and password
})
export {router as signupRouter}
