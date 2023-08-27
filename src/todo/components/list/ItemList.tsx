import React, { useEffect, useState } from 'react'
import { Item } from '../../interfaces/Item';
import { ButtonDelete } from '../utils';

export const ItemList = () => {
  const [items, SetItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl: string = 'https://todo-backend-springboot-production.up.railway.app/api/todoitems'

  const getItems = async () => {
    try {

      const res = await fetch(apiUrl, { method: 'GET' })
      const jsonData: Item[] = await res.json();
      SetItems(jsonData)
      setLoading(false);

    } catch (error) {

      console.error('Error fetching items:', error);
      setLoading(false);

    }
  }


  const deleteItems = async (id_item: number) => {
    try {
      const res = await fetch(apiUrl + '/' + id_item, { method: 'DELETE' })
      if (res.ok) await getItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
    
  }
  useEffect(() => {
    getItems();
  }, []);

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
                    <ButtonDelete onClick={ () => deleteItems(item.id_item) }/>
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
