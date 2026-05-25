import express from "express";

import { verifyToken } from "../middleware/authMiddleware.js";
import { createNote } from "../controllers/noteEntryController.js";

const notesRouter = express.Router();

notesRouter.post("/", verifyToken, createNote);

export default notesRouter;