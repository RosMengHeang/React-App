import React from 'react'
// import { categories } from '../../App'
import { optional } from 'zod'
import categories from '../categories'
interface Props {
    onSelectCategory : (category : string) => void
}

export const ExpenseFilter = ({onSelectCategory} : Props) => {
  return (
    <select  className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
        {/* <option value="Groceries">Groceries</option>
        <option value="Ultilities">Ultilities</option>
        <option value="Entertainment">Entertainment</option> */}
    </select>
  )
}
