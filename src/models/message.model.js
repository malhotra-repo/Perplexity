import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        chat:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'chat',
        required:true,}
    },
    {temestamps:true}
);
const messageModel = mongoose.model("Message",messageSchema);

export default messageModel;