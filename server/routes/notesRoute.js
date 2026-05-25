import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getNotes } from "../controllers/getNotesController.js";

const notesRouter = express.Router();

notesRouter.get("/getnotes", verifyToken, getNotes);

export default notesRouter;