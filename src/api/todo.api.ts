import { Item } from "../todo/interfaces/Item";

const apiUrl: string = 'https://todo-backend-springboot-production.up.railway.app/api/todoitems'


export const handleGetItems = async () => {
    try {
        const res = await fetch(apiUrl, { method: 'GET' })
        const jsonData: Item[] = await res.json();
        return jsonData;

    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
}