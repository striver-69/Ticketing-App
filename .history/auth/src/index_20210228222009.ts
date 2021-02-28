import express from 'express'
import {json} from 'body-parser'
import {currentUserRouter} from './routes/current-user'
import {signInRouter} from './routes/signin'
import {signOutRouter} from './routes/signout'
import {signupRouter} from './routes/signup'


const app=express()
app.use(json())

app.use(signupRouter)
app.use(currentUserRouter)
app.use(signInRouter)
app.use(signOutRouter)


app.listen(3000,()=>{
  console.log('listening on port 3000!!')
})