import mongoose from "mongoose";
import { mongodbConfig } from "./app-env";

(async () => {
  try {
    await mongoose.connect(mongodbConfig.url as string, {
      dbName: mongodbConfig.dbName,
      autoCreate: true,
      autoIndex: true,
    });
    console.log("*** MongoDB connected successfully ***");
  } catch (exception) {
    console.error("*** Error connecting mongodb ****", exception);
    process.exit(1);
  }
})();
