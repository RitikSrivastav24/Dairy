import db from "../config/db.js";
export const getNotes = (req, res) => {
  try {
    const userId = req.user.id;

    const query =
      "SELECT * FROM db_dairy_entries WHERE user_id = ? ORDER BY created_at DESC";

    db.query(query, [userId], (err, results) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      return res.status(200).json(results);
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};
