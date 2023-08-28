import { useEffect } from 'react'
import { ButtonDelete } from '../utils';
import { TodoService } from '../../../api';
import { ItemElement } from '../../interfaces/ItemElement';

export const ItemList = () => {
  const { allItems, loading, handleGetItems, handleDeleteItems } = TodoService()


  
  useEffect( () => {
      handleGetItems()
  },[handleGetItems])

  return (
    <>
      <div className='mt-10 flex m-auto justify-center w-screen'>
        <ul className='block mb-16 w-80'>
          {
            loading ? (
              <p className='text-center'>cargando...</p>
            ) : (
              allItems?.items.map((item: ItemElement) => (
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
