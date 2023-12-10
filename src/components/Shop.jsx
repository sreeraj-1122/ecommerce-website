import React from 'react'
import '../styles/ShopHead.css'
import ShopHead from './shop/ShopHead'
import Banner from './shop/Banner'
import Mens from './shop/Mens'
import Newcollections from './shop/Newcollections'
import Ads from './shop/Ads'
function Shop() {
  return (
    <div className='shop'>
    <ShopHead/>
    <Banner/>
    <Mens/>
    <Ads/>
    <Newcollections/>
        
    </div>
  )
}

export default Shop