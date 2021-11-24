import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userID: String,
    userName: String,
    level: Number,
    inventory: Object,
    isAdmin: Boolean,
    requiredField: {
        required: true,
        type: String
    }
})

export default mongoose.model('user', userSchema)