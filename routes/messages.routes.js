import express from 'express';
import { getMessages, postMessages } from "../controllers/messages.controllers.js";

export const messagesRouter = express.Router();

messagesRouter.get('/', getMessages);
messagesRouter.post('/', postMessages);