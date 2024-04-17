import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sailesh Panda",
    email: "sailesh@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Roramvijtav",
    email: "roramvijtav@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
