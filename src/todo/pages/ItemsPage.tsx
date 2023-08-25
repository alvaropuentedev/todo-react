import React from 'react'
import { ItemList } from '../components/ItemList'

export const ShowItems = () => {
  return (
    <>   
    <div className='flex justify-center mt-2'>    
        <img src="/assets/img/shopping-cart.png" alt="logo" className='w-20 h-20'/>
    </div> 
      <ItemList />
    </>
  )
}
