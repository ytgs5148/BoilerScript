/* INFO:
    You need to import dotenv module and setup env, then you can use process.env.MY_VARIABLE. A test .env file 
    is already shipped with this boilerplate, check out mongo.env file for more info.

models/*.js folder
    A test schema has been created for you, you can use it to test your models.

database/*.js folder
    This folder has functions which will make your life very easy with in built caching system. This has been made in
    regards with the userSchema.js file.

IMPORTANT:
    Assuming you have cloned our express branch or have setup a express project, you need to install these dependencies,
    1. mongoose
    2. dotenv
    
    RUN: npm install mongoose dotenv
*/

import mongoose from 'mongoose'

export default async () => {
    await mongoose.connect(process.env.mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}