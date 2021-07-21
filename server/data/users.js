import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Prajwal Sharma",
    email: "prajwal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sharma Prajwal",
    email: "sharma@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
