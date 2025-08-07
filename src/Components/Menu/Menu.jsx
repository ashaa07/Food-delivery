import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category,setCategory}) => {

  return (
    <div className='menu' id='menu'>
        <h1>Explore Menu</h1>
        <p className='menu-text'>Discover delicious meals from top restaurants near you. Whether you're craving spicy street food or gourmet dishes, find it all in one place—fresh, fast, and at your fingertips!</p>
        <div className="menu-list">
            {
                menu_list.map((ele,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===ele.menu_name?"All":ele.menu_name)}  className="menu-listItem" key={index}>
                          <img className={category===ele.menu_name ? "active":""} src={ele.menu_image} alt="" />
                          <p>{ele.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default Menu