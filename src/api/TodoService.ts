import { useState } from "react";
import { Item } from "../todo/interfaces/Item";
import Swal from "sweetalert2";


export const TodoService = () => {


    const [allItems, setAllItems] = useState<Item>();
    const [loading, setLoading] = useState(true);
    const [audio] = useState(new Audio('/assets/audio/LetitgoDeleteSound.mp3'));
    const apiUrl: string = 'https://alvaropuentedev-todobackend-springboot.onrender.com/api/todoitems'
  


    const handleGetItems = async () => {
        try {
            const res = await fetch(apiUrl, { method: 'GET' })
            const jsonData: Item = await res.json();
            setAllItems(jsonData)
            setLoading(false)

        } catch (error) {
            console.error('Error fetching items:', error);
            setLoading(false)
        }
    }

    const handleDeleteItems = async (id_item: number) => {
        try {
          const res = await fetch(apiUrl + '/' + id_item, { method: 'DELETE' })
          if (res.ok) {
              handleGetItems()
              audio.play()
          Swal.fire({
            icon: 'success',
            width: '50%',
            timer: 1000,
            showConfirmButton: false
          })
          }
        } catch (error) {
          console.error('Error deleting item:', error);
        }
        
      }
    return {
        allItems,
        loading,
        handleGetItems,
        handleDeleteItems
    }
}