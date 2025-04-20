import React from 'react'
import menuSweet from './menuSweet.json';

function Sweet() {
  return (
    <div>
    <h1 className='breakfast-heading'>Sweet</h1>
    <div className="breakfast-items">
      {
        menuSweet.map(item=>(
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

export default Sweet
