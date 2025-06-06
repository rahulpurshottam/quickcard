import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: Number,
  progress: Number,
  status: String,
  category: String,
},
  {
    timestamps: true,
  }
);

export default mongoose.models.Card || mongoose.model("Card", CardSchema);
