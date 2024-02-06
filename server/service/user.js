const { db, hashPassword } = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {set_token} = require("./spotify");

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

      if (result.length > 0) {
        const match =  bcrypt.compare(password, result[0].password);

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

const user_delete = async (id) => {
  try {
    await db.query("DELETE FROM user WHERE id = ?", [id]);
    set_token("")

    return {
      success: true,
      message: "User successfully deleted",
    };
  } catch (error) {
    console.error("Error during user delete:", error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};

const user_update = async ({id,  username, password, email }) => {
  return new Promise((resolve, reject) => {
    return db.query("SELECT * FROM user WHERE id = ?", [id], async (error, results) => {
      if (error) {
        console.error("Error during user update:", error);
        return reject({
          success: false,
          message: "Internal Server Error",
        });
      }

      if (results.length === 0) {
        return reject({
          success: false,
          message: "User not found",
        });
      }

      let hashedPassword = results[0].password;
      if (password) {
        hashedPassword = await hashPassword(password);
      }

      await db.query(
          "UPDATE user SET username = ?, password = ?, email = ? WHERE id = ?",
          [username || results[0].username, hashedPassword, email || results[0].email, id]
      );

      return resolve({
        success: true,
        message: "User successfully updated",
      });
    });
  })
};

const get_info = async (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM user WHERE id = ?", [id], async (error, results) => {
      if (error) {
        console.error("Error during user update:", error);
        return reject({
          success: false,
          message: "Internal Server Error",
        });
      }
      if (results.length === 0) {
        return reject({
          success: false,
          message: "User not found",
        });
      }

      return resolve({
        success: true,
        results,
      });
    });
  })
}

module.exports = {
  create_user,
  user_login,
  user_delete,
  user_update,
  get_info
};
