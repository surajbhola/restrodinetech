import React from 'react'
import './MenuItems.scss';
import ItemList from './ItemList';
const MenuItems = () => {
  return (
    <div className='menuItemsDiv'>
        <h2>Menu Dashboard</h2>
        <div className='breifForm'>
          <div><h3>Category</h3><input type="text" placeholder='Enter Category'/></div>
          <div><h3>Item Name</h3><input type="text" placeholder='Enter Item Name' /></div>
          <div><h3>ETA</h3><input type="text" placeholder='Enter ETA'/></div>
        </div>
        <ItemList></ItemList>
    </div>
  )
}

export default MenuItems
