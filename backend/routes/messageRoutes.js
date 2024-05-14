import express from "express";
import {sendMessage,getMessages} from "../controllers/messageController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router=express.Router();

router.post("/send/:id",authMiddleware,sendMessage);
router.get("/:id",authMiddleware,getMessages);





export default router;