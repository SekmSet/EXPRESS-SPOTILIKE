const { db, hashPassword } = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const create_user = async ({ username, password, email }) => {
  try {
    const hashedPassword = await hashPassword(password);

    const result = await db.query(
      "INSERT INTO user (username, password, email) VALUES (?, ?, ?)",
      [username, hashedPassword, email]
    );

    return {
      success: true,
      message: "User successfully created",
      userId: result.id,
    };
  } catch (error) {
    console.error("Error during user creation:", error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};

const user_login = async ({ username, password }) => {
  try {
    return new Promise((resolve, reject) =>  db.query("SELECT * FROM user WHERE username = ?", [
      username,
    ], (error, result) => {
      if (error) {
        console.log("User not found for:", username);
        return reject({
          success: false,
          message: "User not found",
        });
      }

      if (result) {
        const match =  bcrypt.compare(password, result[0].password);
        console.log(password, 'db', result[0].password)

        if (match) {
          // Passwords match, generate JWT      
          return resolve({  
            success: true,
            message: "Authentication successful",
            token: generate_token(result[0].id),
          });
        } else {
          // Password mismatch
          console.log("Incorrect password for:", username);
          return reject({
            success: false,
            message: "Incorrect password",
          });
        }
      }
    }));
  } catch (error) {
    console.error("Error during user authentication:", error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};

const generate_token = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{ expiresIn: '1h' });
}

module.exports = {
  create_user,
  user_login,
};
