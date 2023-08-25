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
      <ul>
        <li>{}</li>
      </ul>
    </>
  )
}
