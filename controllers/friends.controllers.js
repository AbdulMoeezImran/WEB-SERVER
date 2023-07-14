import { friends } from "../models/friends.model.js";


export const getfriends = (req, res) => {
    res.json(friends);
}

export const getfriend = (req, res) => {
    const friendId = Number(req.params.id);
    const friend = friends[friendId];
    if(friend){
        res.json(friend)
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
}

export const postfriends = (req, res) => {
    if(!req.body.name){
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFriend);
    res.json(newFriend);
}