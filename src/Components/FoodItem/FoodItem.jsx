import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {


const {cartItem, addToCart,removeFromCart} =useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="FoodItem-img-container">
            <img className='food-item-img' src={image} alt="" />
            {
              !cartItem[id]?
              <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> 
              : <div className="foodItemCounter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItem[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>

        <div className="foodItem-info">
            <div className="foodItem-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="foodItemDesc">{description}</p>
            <p className="foodItemPrice">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem