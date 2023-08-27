import React from 'react'
import { ItemList } from '../components/list'

export const ShowItems = () => {
  return (
    <>   
    <div className='flex justify-center mt-2'>    
        <img src="/assets/img/shopping-cart.png" alt="logo" 
        className='h-32 w-32 m-auto mt-4'/>
    </div> 
      <ItemList />
    </>
  )
}
