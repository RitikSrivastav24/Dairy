import db from "../config/db.js";

export const getNotesByMood = (req, res) => {
  const userId = req.user.id;
  const mood = req.params.mood;

  const query = `
    SELECT * FROM db_dairy_entries 
    WHERE user_id = ? AND mood = ?
    ORDER BY created_at DESC
  `;

  db.query(query, [userId, mood], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database Error" });
    }

    return res.status(200).json(results);
  });
};