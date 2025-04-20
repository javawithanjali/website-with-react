import React from 'react'
import menuLunch from './menuLunch.json';

function Lunch() {
  return (
    <div>
    <h1 className='breakfast-heading'>Lunch</h1>
    <div className="breakfast-items">
      {
        menuLunch.map(item=>(
          <div key={item.id} className='menu-item'>
            <img className="food-img" src={item.photo} />
            <h3 className="food-name">{item.name}</h3>
            <p className="food-price">Rs {item.cost}</p>
            <button class="cart-button">Add to Cart</button>
            </div>
        ))
      }

    </div>
    </div>
  )
}

export default Lunch
