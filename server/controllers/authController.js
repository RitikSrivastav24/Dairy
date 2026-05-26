import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // CHECK FIELDS
    if (!username || !password) {
      return res.status(400).json({
        message: "All Fields are Required!!",
      });
    }

    const query = "SELECT * FROM db_login WHERE username=?";

    db.query(query, [username], async (err, result) => {

      // DATABASE ERROR
      if (err) {
        return res.status(500).json({
          message: "Database Error!!",
        });
      }

      // USER NOT FOUND
      if (result.length === 0) {
        return res.status(400).json({
          message: "User not Found",
        });
      }

      const user = result[0];

      // PASSWORD CHECK
      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }

      // JWT TOKEN
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      // COOKIE
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: "Login Successful",
      });

    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};


export const logoutUser= (req, res)=>{
  res.clearCookie("token",
    {
      httpOnly:true,
      secure:false,
      sameSite:"lax"
    }
  )
  res.status(200).json({
    message:"Logout Successfull"
  })
}
