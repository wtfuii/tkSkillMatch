
import mongoose from 'mongoose'

const SkillSchema = new mongoose.Schema({
  skill: {type: String, required: true},
  level: {type: Number}
})

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  isManager: {type: Boolean, required: true},
  skills: [SkillSchema]
})

export default mongoose.model('User', UserSchema)
