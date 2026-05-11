import db from "../config/db.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All Fields are Required!!",
      });
    }

    const checkEmail = "SELECT * FROM db_login WHERE email = ?";

    db.query(checkEmail, [email], async (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "Email Already Exists",
        });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const insertQuery =
        "INSERT INTO db_login (username, email, password) VALUES (?, ?, ?)";

      db.query(insertQuery, [username, email, hashPassword], (err, result) => {
        if (err) {
          return res.status(500).json({
            message: "Error while creating the user!!",
          });
        }

        return res.status(201).json({
          message: "User Created Successfully!!",
        });
      });
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};
