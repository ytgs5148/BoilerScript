import mongo from '../mongo.js'
import UserSchema from '../models/UserSchema.js'

const dataCache = {}

export const findUser = async userID => {
    if (dataCache[userID]) return dataCache[userID]

    return await mongo().then(async mongoose => {
        try {
            let result = await UserSchema.findOne({ userID })

            if (!result) {
                console.log(`New user! Inserting document`)

                result = await new userSchema({
                    userID,
                    level: 0,
                    requiredField: 'This is a required field, so passing the value'
                }).save()
            }

            dataCache[userID] = result
            return dataCache[userID]
        } finally {
            mongoose.connection.close()
        }
    })
}

export const updateUser = async (userId, level) => {
    return await mongo().then(async mongoose => {
        try {
            const result = await UserSchema.findOneAndUpdate({ userId }, { level }, { upsert: true, new: true })

            dataCache[userId] = result
            return dataCache[userId]
        } finally {
            mongoose.connection.close()
        }
    })
}