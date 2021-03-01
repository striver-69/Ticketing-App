import express from 'express'
import 'express-async-errors'
import {json} from 'body-parser'
import mongoose from 'mongoose'


import {currentUserRouter} from './routes/current-user'
import {signInRouter} from './routes/signin'
import {signOutRouter} from './routes/signout'
import {signupRouter} from './routes/signup'
import {errorHandler} from './middlewares/error-handler'
import {NotFoundError} from './errors/not-found-error'


const app=express()
app.use(json())

app.use(signupRouter)
app.use(currentUserRouter)
app.use(signInRouter)
app.use(signOutRouter)

app.get('*',async()=>{
  throw new NotFoundError()
})

app.use(errorHandler)

const start=async()=>{
  try{
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth',{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true
  })
  }catch(err){
    console.error(err)
  }

  app.listen(3000,()=>{
    console.log('listening on port 3000!!')
  })
}

start()

