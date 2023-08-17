import { User } from '@contexts-mooc-users/domain/User'
import { Schema } from 'mongoose'

const UserSchema = new Schema<User>(
  {
    id: { type: String },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    birthdate: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export { UserSchema }
