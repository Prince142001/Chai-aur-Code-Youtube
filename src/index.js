import dontevn from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dontevn.config({
    path: "./env",
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is running on the port: ${process.env.PORT}`);
        });
        app.on("error", (error) => {
            console.error("Error:", error);
            throw error;
        });
    })
    .catch((error) => {
        console.error(`MongoDB connection failed!!${error}`);
    });

// ++++++++++++++++++++++++ test +++++++++++++++++++++
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// })();
