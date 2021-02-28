import {CustomError} from './custom-error'
import {ValidationError} from 'express-validator'

// interface CustomError{
//   statusCode: number
//   serializeErrors():{
//     message:string,
//     field?:string
//   }[]
// }

export class RequestValidationError extends CustomError{
  statusCode=400
  constructor(public errors:ValidationError[]){
    super('Invalid requests parameters')

    //only because we are extending built class
    Object.setPrototypeOf(this,RequestValidationError.prototype)
  }

  serializeErrors(){
    return this.errors.map(err=>{
      return {message:err.msg, field: err.param}
    })
  }
}
