import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getNotes } from "../controllers/getNotesController.js";
import { getNotesByMood } from "../controllers/categoriesController.js";

const notesRouter = express.Router();

notesRouter.get("/getnotes", verifyToken, getNotes);
notesRouter.get("/category/:mood", verifyToken, getNotesByMood)
export default notesRouter;