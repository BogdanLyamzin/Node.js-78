import mongoose from "mongoose";

import app from "./app.js";

const DB_HOST = "mongodb+srv://Bogdan:LbWOC1K5oZjst6mD@cluster0.xcf3sm8.mongodb.net/my-movies?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })


