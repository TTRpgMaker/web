import {Fetch, METHOD} from "@/global/Fetch";

export class UserRepository {
    static async getUser(token: string) {
        const url = `${import.meta.env.VITE_TTRPG_API_URL}/users/`;
        const response = await Fetch.getData(url, METHOD.get, token);
        return response?.json();
    }
}