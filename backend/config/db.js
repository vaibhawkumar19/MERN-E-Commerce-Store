import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vaibhaw:vaibhaw@cluster0.q4txadr.mongodb.net/vaibhaw?retryWrites=true&w=majority');
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    console.log("connectdberror");
    process.exit(1);
  }
};

export default connectDB;
