import express from 'express';
import { getfriends, getfriend, postfriends } from "../controllers/friends.controllers.js";

export const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log("IP Address:", req.ip);
    next();
})

friendsRouter.post('/', postfriends);
friendsRouter.get('/', getfriends);
friendsRouter.get('/:id', getfriend);