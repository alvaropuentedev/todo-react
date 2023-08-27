import React, { useState } from 'react'
import { Item } from '../../interfaces/Item';
import { TodoService } from '../../../api';

export const FormAddItem = () => {
  const { handleGetItems } = TodoService();
  const [itemDescription, setItemDescription] = useState('');
  const apiUrl: string = 'https://todo-backend-springboot-production.up.railway.app/api/todoitems'

  const addItem = async (event: React.FormEvent) => {
    event.preventDefault();

    const newItem: Item = {
      id_item: 0,
      description: itemDescription,
    };
    try {
      const res = await fetch(apiUrl,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem)
        })

      if (res.ok) {
        console.log('Item added successfully.');
        setItemDescription('');
        handleGetItems()
      } else {
        console.error('Failed to add item.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  return (
    <div className="max-sm:w-screen max-sm:h-16 max-sm:fixed max-sm:bottom-0  max-sm:bg-gray-50">
      <form onSubmit={ addItem } className="flex mt-4 max-sm:mt-2 justify-center">
        <input autoFocus type="text"
          name="itemDescription"
          value={ itemDescription }
          onChange={(e) => setItemDescription(e.target.value)}
          className="w-50 max-sm:w-72 max-sm:h-12 max-sm:rounded-md max-sm:bg-gray-200
          max-sm:p-4 lg:border-b-2
         border-gray-500 text-black focus:outline-none"
          placeholder="Añadir Item" />
        <button type='submit'></button>
      </form>
    </div>
  )
}
