import { Schema, model } from 'mongoose'

const Response = new Schema(
  {
    code: { type: String, required: true },
    score: { type: Number, required: true },
    message: { type: String, required: false },
  },
  { timestamps: true },
)

export default model('responses', Response)
