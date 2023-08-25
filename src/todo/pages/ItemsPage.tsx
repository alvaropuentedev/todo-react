import React from 'react'
import logo from '../../assets/img/shopping-cart.png';
import { ItemList } from '../components/ItemList'

export const ShowItems = () => {
  return (
    <>   
    <div>    
        <img src="{logo}" alt="logo" className='w-20 h-20'/>
    </div> 
      <ItemList />
    </>
  )
}
