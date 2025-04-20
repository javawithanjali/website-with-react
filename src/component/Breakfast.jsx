import React from 'react'
import menu from './menu.json';
import { Link } from 'react-router-dom';
function Breakfast() {
  return (
    <div>
    <Link to="/menu"> </Link>
    <h1 className='breakfast-heading'>Breakfast</h1>
    <div className="breakfast-items">
      {
        menu.map(item=>(
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

export default Breakfast
