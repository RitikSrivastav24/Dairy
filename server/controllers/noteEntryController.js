import db from '../config/db.js';

export const createNote=(req, res)=>{
    try {
        const {title, content, mood}= req.body;
        const userId = req.user.id;
        if(!title || !content || !mood){
            return res.status(400).json({
                message:"ALll fields are Required"
            })
        }

        const query= "INSERT INTO db_dairy_entries(user_id, title, content, mood) VALUES(?,?,?,?)";
        db.query(
            query,
            [userId, title,content,mood],
            (err,result)=>{
                if(err){
                    return res.status(500).json({
                        message:"Submiision Failed"
                    })
                }
                return res.status(200).json({
                    message:"Note Submiited Successfully"
                })
            }
        )
    } catch (error) {
        return res.status(500).json({
            message:"Server error"
        })
    }
}