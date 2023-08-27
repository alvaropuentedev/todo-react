import { ItemList } from '../components/list'
import { FormAddItem } from '../components/addItem'

export const ShowItems = () => {
  return (
    <>   
    <div className='flex justify-center mt-2'>    
        <img src="/assets/img/shopping-cart.png" alt="logo" 
        className='h-32 w-32 m-auto mt-4'/>
    </div> 
      <FormAddItem />
      <ItemList />
    </>
  )
}
