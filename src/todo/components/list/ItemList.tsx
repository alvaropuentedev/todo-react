import { useEffect, useState } from 'react'
import { Item } from '../../interfaces/Item';
import { ButtonDelete } from '../utils';
import { handleGetItems } from '../../../api/todo.api';
import Swal from 'sweetalert2';

export const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [audio] = useState(new Audio('/public/assets/audio/deleteSound.mp3'));
  const apiUrl: string = 'https://todo-backend-springboot-production.up.railway.app/api/todoitems'

  const handleDeleteItems = async (id_item: number) => {
    try {
      const res = await fetch(apiUrl + '/' + id_item, { method: 'DELETE' })
      if (res.ok) {
      audio.play()
      const updateItemsList = await handleGetItems()
      setItems(updateItemsList)
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
  
  useEffect( () => {
    const fetchItems = async () => {
      setTimeout(() => {
        location.reload();
      }, 60000);
      try {
        const itemsData = await handleGetItems();
        setItems(itemsData);
        setLoading(false);
      } catch (error) {
        setLoading(false)
      }
    }
    fetchItems()
  },[])

  return (
    <>
      <div className='mt-10 flex m-auto justify-center w-screen'>
        <ul className='block mb-16 w-80'>
          {
            loading ? (
              <p className='text-center'>cargando...</p>
            ) : (
              items.map(item => (
                <li key={item.id_item} className='p-2 rounded-lg'>
                  <div className="flex align-middle flex-row justify-between">
                    <div className='text-lg text-black mr-24'>
                      <p>{item.description}</p>
                    </div>
                    <ButtonDelete onClick={ () => handleDeleteItems(item.id_item) }/>
                  </div>
                <hr className="mt-2"/>
                </li>
              )))
          }
        </ul>
      </div>
    </>
  )
}
