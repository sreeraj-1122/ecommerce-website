import React from 'react'
import {shopData} from './shopdata'
import '../../styles/ShopHead.css'
function ShopHead() {
  return (
    <>
     <div className="shop-head">
       {shopData.map((val)=>
        (
          <div className='shop-head-body'>  
            <img src={val.image} alt="" />
            <p>{val.text}</p>
            </div>
        )
           
       )}
        </div>   
    </>
  )
}

export default ShopHead