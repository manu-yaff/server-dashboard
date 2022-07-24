import routes from "@/api/routes/routes";
import { Client } from "../models/client";

export default class ClientService {
  static apiUrl: "http://localhost:8888/";
  static async getClients(): Promise<Client[] | undefined> {
    try {
      const response = await fetch(
        `http://localhost:8888/${routes.GET_CLIENTS}`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
