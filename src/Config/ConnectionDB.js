import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://bdelgadomunoz:brayan2321@restaurant.tejv2ny.mongodb.net/contactCompany?retryWrites=true&w=majority&appName=restaurant');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar con MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;