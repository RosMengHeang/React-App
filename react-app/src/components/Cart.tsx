import React from 'react'
import ListGroup from './ListGroup'

interface Props {
    cartItems: string[]
}

const Cart = ({cartItems} : Props) => {
  return (
    <>
    <div>Cart</div>
    <ul>
       {cartItems.map(items => <li key={items}>{items}</li>)} 
    </ul>
    </>
  )
}

export default Cart
