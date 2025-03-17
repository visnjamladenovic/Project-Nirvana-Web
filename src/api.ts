import axios from "axios";
import Song from "./models/song";

export const connection= async () => {
    const response = await axios.get<Song>("http://localhost:8080/visnja?name=Visnja")
    return response.data
}