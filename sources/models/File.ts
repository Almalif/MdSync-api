import mongoose from "mongoose";

import { File } from "../interfaces/File";

const FileModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  content: {
    type: String,
    required: false,
    index: false,
  },
});

export default mongoose.model<File & mongoose.Document>("File", FileModel);
