const Message = require("../models/messageModel");
const User = require("../models/userModel");
const Chat = require("../models/chatModel");

const allMessages = async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat");
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
};

const sendMessage = async (req, res) => {
    const { content, chatId } = req.body;
    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }
    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };
    try {
        var messagee = await Message.create(newMessage);
        messagee = await messagee.populate("sender", "name pic")
        messagee = await messagee.populate("chat")
        messagee = await User.populate(messagee, {
            path: "chat.users",
            select: "name pic email",
        });
        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: messagee });
        res.json(messagee);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
};

module.exports = { allMessages, sendMessage };