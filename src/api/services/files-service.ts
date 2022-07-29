import routes from "@/api/routes/routes";
import { FilesResponse } from "../models/file";

export default class FilesService {
  static async getFiles(): Promise<FilesResponse | undefined> {
    try {
      const response = await fetch(`http://localhost:8888/${routes.GET_FILES}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
