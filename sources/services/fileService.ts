import { File, FileInputDTO } from "../interfaces/File";
import FileModel from "../models/File";

export default class FileService {
  public static async createFile(fileInput: FileInputDTO): Promise<File> {
    const createdFile = new FileModel({ name: fileInput.name });
    return createdFile.save();
  }

  public static async findFileFromId(id: string): Promise<File | null> {
    return FileModel.findById(id);
  }
}
