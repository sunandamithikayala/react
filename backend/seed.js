const mongoose = require("mongoose");
const User = require("./models/user"); // Adjust the path if necessary
const bcrypt = require("bcryptjs");


mongoose.connect("mongodb://127.0.0.1:27017/yourDatabaseName", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing users (optional)

    const users = [
      {
        email: "test@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        email: "user@example.com",
        password: await bcrypt.hash("securepassword", 10),
      },
    ];

    await User.insertMany(users);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedUsers();
