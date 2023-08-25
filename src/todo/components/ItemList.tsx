import React, { useEffect, useState } from 'react'
import { Item } from '../interfaces/Item';

export const ItemList = () => {
  const [items, SetItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl: string = 'https://todo-backend-springboot-production.up.railway.app/api/todoitems'

  const getItems = async () => {
    const res = await fetch(apiUrl, { method: 'GET' })
    const jsonData: Item[] = await res.json();
    SetItems(jsonData)
    setLoading(false);
  }
  useEffect(() => {
    getItems();
  },[]);
  console.log(items)

  return (
    <>
    <div className='mt-10 flex m-auto justify-center w-screen'>
      <ul className='block mb-16 w-80'>
        {
          items.map( item  => {
            return <li className='' key={item.id_item}>{item.description}
            <div className="flex align-middle flex-row justify-between">
            <button>
            <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"
                    stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
            </button>
            </div>
            </li>
          })
        }
      </ul>
    </div>
    </>
  )
}
