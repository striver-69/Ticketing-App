import express from 'express'
import {body} from 'express-validator'

const router=express.Router()

router.post('api/users/signup',[
  body('email').isEmail().withMessage('Emailmust be valid'),
  body('password')
  .trim()
  .isLength({min:4,max:20})
  .withMessage('password must be between 4 to 20 characters')
],(req,res)=>{
  const {email,password}=req.body
})

export {router as signupRouter}
