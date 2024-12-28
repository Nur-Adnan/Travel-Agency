import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(
      "mongodb+srv://nuradnanchowdhury015:oFJx0xd2xHprbvvL@travel-agency.ckkif.mongodb.net/",
      {
        dbName: "travel-agency",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connections[0].host}`); // Correct way to log host
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
